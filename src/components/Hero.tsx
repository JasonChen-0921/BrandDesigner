import { type CSSProperties, useEffect, useState } from 'react'
import { createPortal } from 'react-dom'
import cardAvatarVideo from '../assets/card-avatar-video.mp4'
import cardHandleLeft from '../assets/card-handle-left.png'
import cardHandleRight from '../assets/card-handle-right.png'
import heroTitle from '../assets/hero-title-wide.png'

export function Hero() {
  const [cursor, setCursor] = useState({ x: 0, y: 0, visible: false, large: false })

  useEffect(() => {
    const updateCursor = (event: PointerEvent) => {
      const target = event.target instanceof Element ? event.target : null
      const contactChip = target?.closest('.contact-chip') as HTMLElement | null
      setCursor({
        x: event.clientX,
        y: event.clientY,
        visible: true,
        large: Boolean(contactChip || target?.closest('.hero-bottom a, .works-link')),
      })
    }
    const hideCursor = () => setCursor((current) => ({ ...current, visible: false, large: false }))

    window.addEventListener('pointermove', updateCursor)
    window.addEventListener('pointerleave', hideCursor)
    return () => {
      window.removeEventListener('pointermove', updateCursor)
      window.removeEventListener('pointerleave', hideCursor)
    }
  }, [])

  return (
    <>
      {createPortal(<span
        className={[
          'cursor-dot',
          cursor.visible ? 'is-visible' : '',
          cursor.large ? 'is-large' : '',
        ].filter(Boolean).join(' ')}
        style={{ '--cursor-x': `${cursor.x}px`, '--cursor-y': `${cursor.y}px` } as CSSProperties}
        aria-hidden="true"
      />, document.body)}
      <section id="top" className="hero hero-reference">
      <div className="hero-inner hero-reference-inner">
        <div className="hero-center">
          <div className="hero-title-frame">
            <img className="hero-title-image" src={heroTitle} alt="Jason Chen graphic brand designer" />
          </div>

          <div className="frost-card" aria-label="Designer status card">
            <span className="card-handle left">
              <img src={cardHandleLeft} alt="" />
            </span>
            <video className="avatar-block" aria-label="Designer avatar animation" autoPlay muted loop playsInline>
              <source src={cardAvatarVideo} type="video/mp4" />
            </video>
            <div className="card-copy">
              <p>AVAILABLE FOR WORK <i /></p>
              <strong>JASON CHEN</strong>
              <small>GRAPHIC BRAND DESIGNER</small>
            </div>
            <span className="card-handle right">
              <img src={cardHandleRight} alt="" />
            </span>
          </div>
        </div>

        <div className="hero-bottom">
          <nav aria-label="Social links">
            <a href="#">LINKED IN</a>
            <a href="#">DPROFILE</a>
            <a href="#">BEHANCE</a>
            <a href="#">DRIBBBLE</a>
            <a href="#">TELEGRAM</a>
          </nav>
          <a href="mailto:andreygorskikh2000@gmail.com">ANDREYGORSKIKH2000@GMAIL.COM <b>▶</b></a>
        </div>
      </div>
      </section>
    </>
  )
}
