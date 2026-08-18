import { useCallback, useEffect, useRef } from 'react'
import './BorderGlow.css'

type BorderGlowProps = {
  children: React.ReactNode
  className?: string
  edgeSensitivity?: number
  glowColor?: string
  backgroundColor?: string
  borderRadius?: number
  glowRadius?: number
  glowIntensity?: number
  coneSpread?: number
  animated?: boolean
  colors?: string[]
  fillOpacity?: number
}

const gradientPositions = ['80% 55%', '69% 34%', '8% 6%', '41% 38%', '86% 85%', '82% 18%', '51% 4%']
const gradientKeys = ['--gradient-one', '--gradient-two', '--gradient-three', '--gradient-four', '--gradient-five', '--gradient-six', '--gradient-seven']
const colorMap = [0, 1, 2, 0, 1, 2, 1]

const easeOutCubic = (value: number) => 1 - (1 - value) ** 3
const easeInCubic = (value: number) => value ** 3

function animateValue({ start = 0, end = 100, duration = 1000, delay = 0, ease = easeOutCubic, onUpdate, onEnd }: { start?: number; end?: number; duration?: number; delay?: number; ease?: (value: number) => number; onUpdate: (value: number) => void; onEnd?: () => void }) {
  const startTime = performance.now() + delay
  const tick = () => {
    const progress = Math.min((performance.now() - startTime) / duration, 1)
    onUpdate(start + (end - start) * ease(progress))
    if (progress < 1) window.requestAnimationFrame(tick)
    else onEnd?.()
  }
  window.setTimeout(() => window.requestAnimationFrame(tick), delay)
}

function buildGlowVars(glowColor: string, intensity: number) {
  const values = glowColor.match(/([\d.]+)\s*([\d.]+)%?\s*([\d.]+)%?/)
  const [h, s, l] = values ? values.slice(1).map(Number) : [40, 80, 80]
  return [100, 60, 50, 40, 30, 20, 10].reduce<Record<string, string>>((vars, opacity, index) => {
    const suffix = ['', '-60', '-50', '-40', '-30', '-20', '-10'][index]
    vars[`--glow-color${suffix}`] = `hsl(${h}deg ${s}% ${l}% / ${Math.min(opacity * intensity, 100)}%)`
    return vars
  }, {})
}

function buildGradientVars(colors: string[]) {
  const vars: Record<string, string> = { '--gradient-base': `linear-gradient(${colors[0]} 0 100%)` }
  gradientKeys.forEach((key, index) => {
    vars[key] = `radial-gradient(at ${gradientPositions[index]}, ${colors[Math.min(colorMap[index], colors.length - 1)]} 0px, transparent 50%)`
  })
  return vars
}

export default function BorderGlow({ children, className = '', edgeSensitivity = 30, glowColor = '16 100 61', backgroundColor = '#fff', borderRadius = 16, glowRadius = 40, glowIntensity = 1, coneSpread = 25, animated = false, colors = ['#ff6538', '#ffb199', '#ffd8ce'], fillOpacity = 0.5 }: BorderGlowProps) {
  const cardRef = useRef<HTMLDivElement>(null)

  const handlePointerMove = useCallback((event: React.PointerEvent<HTMLDivElement>) => {
    const card = cardRef.current
    if (!card) return
    const rect = card.getBoundingClientRect()
    const x = event.clientX - rect.left
    const y = event.clientY - rect.top
    const dx = x - rect.width / 2
    const dy = y - rect.height / 2
    const edge = Math.min(Math.max(Math.max(Math.abs(dx) / (rect.width / 2), Math.abs(dy) / (rect.height / 2)), 0), 1)
    let angle = Math.atan2(dy, dx) * (180 / Math.PI) + 90
    if (angle < 0) angle += 360
    card.style.setProperty('--edge-proximity', `${(edge * 100).toFixed(3)}`)
    card.style.setProperty('--cursor-angle', `${angle.toFixed(3)}deg`)
  }, [])

  useEffect(() => {
    if (!animated || !cardRef.current) return
    const card = cardRef.current
    card.classList.add('sweep-active')
    card.style.setProperty('--cursor-angle', '110deg')
    animateValue({ duration: 500, onUpdate: value => card.style.setProperty('--edge-proximity', `${value}`) })
    animateValue({ ease: easeInCubic, duration: 1500, end: 50, onUpdate: value => card.style.setProperty('--cursor-angle', `${110 + 355 * (value / 100)}deg`) })
    animateValue({ ease: easeOutCubic, delay: 1500, duration: 2250, start: 50, end: 100, onUpdate: value => card.style.setProperty('--cursor-angle', `${110 + 355 * (value / 100)}deg`) })
    animateValue({ ease: easeInCubic, delay: 2500, duration: 1500, start: 100, end: 0, onUpdate: value => card.style.setProperty('--edge-proximity', `${value}`), onEnd: () => card.classList.remove('sweep-active') })
  }, [animated])

  return <div ref={cardRef} onPointerMove={handlePointerMove} className={`border-glow-card ${className}`} style={{ '--card-bg': backgroundColor, '--edge-sensitivity': edgeSensitivity, '--border-radius': `${borderRadius}px`, '--glow-padding': `${glowRadius}px`, '--cone-spread': coneSpread, '--fill-opacity': fillOpacity, ...buildGlowVars(glowColor, glowIntensity), ...buildGradientVars(colors) } as React.CSSProperties}>{<span className="edge-light" />}<div className="border-glow-inner">{children}</div></div>
}
