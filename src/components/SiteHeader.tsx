import { useEffect, useState } from 'react'
import AnimatedContent from './AnimatedContent'
import brandMark from '../assets/brand-mark.png'
import headerPortrait from '../assets/header-portrait.jpg'

function getBeijingTime() {
  return new Intl.DateTimeFormat('en-US', {
    timeZone: 'Asia/Shanghai',
    hour: '2-digit',
    minute: '2-digit',
    hour12: true,
  }).format(new Date())
}

export function SiteHeader() {
  const [open, setOpen] = useState(false)
  const [isOnLightBackground, setIsOnLightBackground] = useState(false)
  const [time, setTime] = useState(getBeijingTime)

  useEffect(() => {
    const updateHeaderTone = () => {
      const hero = document.querySelector<HTMLElement>('.hero-reference')
      setIsOnLightBackground(Boolean(hero && window.scrollY >= hero.offsetHeight - 104))
    }

    updateHeaderTone()
    window.addEventListener('scroll', updateHeaderTone, { passive: true })
    window.addEventListener('resize', updateHeaderTone)
    return () => {
      window.removeEventListener('scroll', updateHeaderTone)
      window.removeEventListener('resize', updateHeaderTone)
    }
  }, [])

  useEffect(() => {
    const timer = window.setInterval(() => setTime(getBeijingTime()), 1000 * 30)
    return () => window.clearInterval(timer)
  }, [])

  return (
    <header className={isOnLightBackground ? 'site-header is-on-light' : 'site-header'}>
      <div className="header-slot header-slot--brand">
      <AnimatedContent className="header-animation" direction="vertical" reverse distance={32} duration={0.8} delay={0.1}>
      <div className="brand-row">
        <a className="monogram" href="#top" aria-label="Back to top">
          <img src={brandMark} alt="Jason Chen brand mark" />
        </a>
        <a className="works-link" href="#top">JASON CHEN</a>
      </div>
      </AnimatedContent>
      </div>
      <div className="header-slot header-slot--time">
      <AnimatedContent className="header-animation" direction="vertical" reverse distance={32} duration={0.8} delay={0.22}>
      <div className="time-cluster" aria-label="Current Beijing time">
        <span>BEIJING</span>
        <span>CHINA</span>
        <strong>{time}</strong>
        <small>(GMT+8)</small>
      </div>
      </AnimatedContent>
      </div>
      <div className="header-slot header-slot--contact">
      <AnimatedContent className="header-animation" direction="vertical" reverse distance={32} duration={0.8} delay={0.34}>
      <nav id="site-navigation" className={open ? 'nav open' : 'nav'} aria-label="Primary navigation">
        <a className="contact-chip" href="#contact" onClick={() => setOpen(false)}>
          <span className="nav-contact">CONTACT ME</span>
          <span className="portrait-tile" aria-hidden="true">
            <img src={headerPortrait} alt="" />
          </span>
        </a>
      </nav>
      </AnimatedContent>
      </div>
      <button className="menu-button" onClick={() => setOpen(!open)} aria-expanded={open} aria-controls="site-navigation">
        <span />
        <span />
        <b className="sr-only">Open menu</b>
      </button>
    </header>
  )
}
