import { cloneElement, isValidElement, type CSSProperties, type ReactElement, type ReactNode, type RefObject, useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

type AnimatedContentProps = {
  children: ReactNode
  container?: string | HTMLElement | null
  distance?: number
  direction?: 'vertical' | 'horizontal'
  reverse?: boolean
  duration?: number
  ease?: string
  initialOpacity?: number
  animateOpacity?: boolean
  scale?: number
  threshold?: number
  intersectionMargin?: string
  delay?: number
  disappearAfter?: number
  disappearDuration?: number
  disappearEase?: string
  onComplete?: () => void
  onDisappearanceComplete?: () => void
  className?: string
  asChild?: boolean
}

export default function AnimatedContent({
  children,
  container,
  distance = 100,
  direction = 'vertical',
  reverse = false,
  duration = .8,
  ease = 'power3.out',
  initialOpacity = 0,
  animateOpacity = true,
  scale = 1,
  threshold = .1,
  intersectionMargin = '0px',
  delay = 0,
  disappearAfter = 0,
  disappearDuration = .5,
  disappearEase = 'power3.in',
  onComplete,
  onDisappearanceComplete,
  className = '',
  asChild = false,
}: AnimatedContentProps) {
  const ref = useRef<HTMLElement>(null)

  useEffect(() => {
    const element = ref.current
    if (!element) return

    let scrollerTarget = container || document.getElementById('snap-main-container') || null
    if (typeof scrollerTarget === 'string') scrollerTarget = document.querySelector(scrollerTarget)

    const axis = direction === 'horizontal' ? 'x' : 'y'
    const offset = reverse ? -distance : distance
    const startPct = (1 - threshold) * 100

    gsap.set(element, {
      [axis]: offset,
      scale,
      opacity: animateOpacity ? initialOpacity : 1,
      visibility: 'visible',
    })

    const timeline = gsap.timeline({
      paused: true,
      delay,
      onComplete: () => {
        onComplete?.()
        if (disappearAfter > 0) {
          gsap.to(element, {
            [axis]: reverse ? distance : -distance,
            scale: .8,
            opacity: animateOpacity ? initialOpacity : 0,
            delay: disappearAfter,
            duration: disappearDuration,
            ease: disappearEase,
            onComplete: () => onDisappearanceComplete?.(),
          })
        }
      },
    })

    timeline.to(element, { [axis]: 0, scale: 1, opacity: 1, duration, ease })

    const scrollTrigger = ScrollTrigger.create({
      trigger: element,
      scroller: scrollerTarget,
      start: `top ${startPct}%`,
      once: true,
      onEnter: () => timeline.play(),
    })

    const intersectionObserver = new IntersectionObserver((entries) => {
      if (entries.some((entry) => entry.isIntersecting)) {
        timeline.play()
        intersectionObserver.disconnect()
      }
    }, { rootMargin: intersectionMargin })
    intersectionObserver.observe(element)

    return () => {
      intersectionObserver?.disconnect()
      scrollTrigger.kill()
      timeline.kill()
    }
  }, [container, distance, direction, reverse, duration, ease, initialOpacity, animateOpacity, scale, threshold, intersectionMargin, delay, disappearAfter, disappearDuration, disappearEase, onComplete, onDisappearanceComplete])

  if (asChild && isValidElement(children)) {
    const child = children as ReactElement<{ className?: string, style?: CSSProperties }>
    return cloneElement(child, {
      ref,
      className: [child.props.className, className].filter(Boolean).join(' '),
      style: { ...child.props.style, visibility: 'hidden' },
    } as never)
  }

  return <div ref={ref as RefObject<HTMLDivElement>} className={className} style={{ visibility: 'hidden' }}>{children}</div>
}
