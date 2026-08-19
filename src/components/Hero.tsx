import { useEffect, useRef, useState } from 'react'
import { createPortal } from 'react-dom'
import cardAvatarVideo from '../assets/card-avatar-video.mp4'
import cardHandleLeft from '../assets/card-handle-left.png'
import cardHandleRight from '../assets/card-handle-right.png'
import heroTitle from '../assets/hero-title-106.png'
import heroTitleCustom from '../assets/hero-title-custom.png'
import AnimatedContent from './AnimatedContent'

export function Hero() {
  const cursorRef = useRef<HTMLSpanElement>(null)
  const [cursor, setCursor] = useState({ visible: false, large: false, dark: false })

  useEffect(() => {
    let animationFrame = 0
    let cursorX = 0
    let cursorY = 0

    const updateCursorPosition = () => {
      cursorRef.current?.style.setProperty('--cursor-x', `${cursorX}px`)
      cursorRef.current?.style.setProperty('--cursor-y', `${cursorY}px`)
      animationFrame = 0
    }

    const updateCursor = (event: PointerEvent) => {
      const target = event.target instanceof Element ? event.target : null
      const contactChip = target?.closest('.contact-chip') as HTMLElement | null
      const contactReferenceAction = target?.closest('.contact-reference-action')
      cursorX = event.clientX
      cursorY = event.clientY
      if (!animationFrame) animationFrame = window.requestAnimationFrame(updateCursorPosition)
      const large = Boolean(contactChip || target?.closest('.hero-bottom a, .contact-reference-home-nav a, .contact-reference-action, .works-link, .project-view-link, .other-works-card--link'))
      const dark = Boolean(contactReferenceAction)
      setCursor((current) => {
        if (current.visible && current.large === large && current.dark === dark) return current
        return { visible: true, large, dark }
      })
    }
    const hideCursor = () => setCursor((current) => ({ ...current, visible: false, large: false, dark: false }))

    window.addEventListener('pointermove', updateCursor)
    window.addEventListener('pointerleave', hideCursor)
    return () => {
      window.cancelAnimationFrame(animationFrame)
      window.removeEventListener('pointermove', updateCursor)
      window.removeEventListener('pointerleave', hideCursor)
    }
  }, [])

  return (
    <>
      {createPortal(<span
        ref={cursorRef}
        className={[
          'cursor-dot',
          cursor.visible ? 'is-visible' : '',
          cursor.large ? 'is-large' : '',
          cursor.dark ? 'is-dark' : '',
        ].filter(Boolean).join(' ')}
        aria-hidden="true"
      />, document.body)}
      <section id="top" className="hero hero-reference">
      <div className="hero-inner hero-reference-inner">
        <div className="hero-center">
          <div className="hero-title-frame">
            <img className="hero-title-image" src={heroTitle} alt="" />
            <AnimatedContent
              className="hero-title-custom-animation"
              distance={50}
              direction="vertical"
              reverse
              duration={1.7}
              ease="power3.out"
              initialOpacity={0}
              animateOpacity
              scale={1}
              threshold={0.2}
              delay={0.3}
            >
              <img className="hero-title-custom-image" src={heroTitleCustom} alt="让每个视觉触点都成为品牌的有效沟通" />
            </AnimatedContent>
          </div>

          <AnimatedContent
            distance={50}
            direction="vertical"
            duration={1.7}
            ease="power3.out"
            initialOpacity={0}
            animateOpacity
            scale={1}
            threshold={0.2}
            delay={0.3}
            asChild
          >
            <div className="frost-card" aria-label="Designer status card">
              <AnimatedContent
                className="card-handle-animation card-handle-animation-left"
                distance={50}
                direction="horizontal"
                duration={1.7}
                ease="power3.out"
                animateOpacity
                scale={1}
                threshold={0.2}
                delay={0.3}
              >
                <span className="card-handle left">
                  <img src={cardHandleLeft} alt="" />
                </span>
              </AnimatedContent>
              <video className="avatar-block" aria-label="Designer avatar animation" autoPlay muted loop playsInline>
                <source src={cardAvatarVideo} type="video/mp4" />
              </video>
              <div className="card-copy">
                <p>AVAILABLE FOR WORK <i /></p>
                <strong>JASON CHEN</strong>
                <small>GRAPHIC BRAND DESIGNER</small>
              </div>
              <AnimatedContent
                className="card-handle-animation card-handle-animation-right"
                distance={50}
                direction="horizontal"
                reverse
                duration={1.7}
                ease="power3.out"
                animateOpacity
                scale={1}
                threshold={0.2}
                delay={0.3}
              >
                <span className="card-handle right">
                  <img src={cardHandleRight} alt="" />
                </span>
              </AnimatedContent>
            </div>
          </AnimatedContent>
        </div>

        <div className="hero-bottom">
          <nav aria-label="Social links">
            <AnimatedContent className="hero-bottom-animation" direction="vertical" distance={32} duration={0.8} delay={0.1}>
              <a href="#profile">ABOUT ME</a>
            </AnimatedContent>
            <AnimatedContent className="hero-bottom-animation" direction="vertical" distance={32} duration={0.8} delay={0.22}>
              <a href="#work">Selected Works</a>
            </AnimatedContent>
            <AnimatedContent className="hero-bottom-animation" direction="vertical" distance={32} duration={0.8} delay={0.34}>
              <a href="#other-works">Other Works</a>
            </AnimatedContent>
            <AnimatedContent className="hero-bottom-animation" direction="vertical" distance={32} duration={0.8} delay={0.46}>
              <a href="#work-experience">Work Experience</a>
            </AnimatedContent>
          </nav>
          <AnimatedContent className="hero-bottom-animation" direction="vertical" distance={32} duration={0.8} delay={0.58}>
            <span>Tel：19050324064</span>
          </AnimatedContent>
        </div>
      </div>
      </section>
    </>
  )
}
