import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import AnimatedContent from './AnimatedContent'
import BorderGlow from './BorderGlow'
import otherWorksTitle from '../assets/other-works-title.png'
import dekangTitle from '../assets/other-works-title-dekang.png'
import dekangCover from '../assets/other-works-dekang.jpg'
import typefaceCoCreationTitle from '../assets/typeface-co-creation-title.png'
import typefaceCoCreationCover from '../assets/typeface-co-creation-cover.png'
import typefaceWork01 from '../assets/other-work-typeface-1.png'
import typefaceWork02 from '../assets/other-work-typeface-2.png'
import typefaceWork03 from '../assets/other-work-typeface-3.png'
import typefaceWork04 from '../assets/other-work-typeface-4.png'
import typefaceWork05 from '../assets/other-work-typeface-5.png'
import typefaceWork06 from '../assets/other-work-typeface-6.png'
import typefaceWork07 from '../assets/other-work-typeface-7.png'
import typefaceWork08 from '../assets/other-work-typeface-8.png'
import typefaceWork09 from '../assets/other-work-typeface-9.png'
import typefaceWork10 from '../assets/other-work-typeface-10.png'
import typefaceWorkTitle01 from '../assets/other-work-typeface-title-1.png'
import typefaceWorkTitle02 from '../assets/other-work-typeface-title-2.png'
import typefaceWorkTitle03 from '../assets/other-work-typeface-title-3.png'
import typefaceWorkTitle04 from '../assets/other-work-typeface-title-4.png'
import typefaceWorkTitle05 from '../assets/other-work-typeface-title-5.png'
import typefaceWorkTitle06 from '../assets/other-work-typeface-title-6.png'
import typefaceWorkTitle07 from '../assets/other-work-typeface-title-7.png'
import typefaceWorkTitle08 from '../assets/other-work-typeface-title-8.png'
import typefaceWorkTitle09 from '../assets/other-work-typeface-title-9.png'
import typefaceWorkTitle10 from '../assets/other-work-typeface-title-10.png'

const placeholders = Array.from({ length: 12 })
const loopedPlaceholders = Array.from({ length: placeholders.length * 3 })
const cardDescription = '以良心铸德、以品质护康、以全链实力当家\n成为国民信赖的肉食标杆品牌'
const typefaceDescription = '源字来源于1951年由北新书局出版陈业恒编著\n《美术字的写法和练习》中的一款美术字'
const typefaceWorkDescription = '字体设计与版式设计练习'
const typefaceWorks = [typefaceWork01, typefaceWork02, typefaceWork03, typefaceWork04, typefaceWork05, typefaceWork06, typefaceWork07, typefaceWork08, typefaceWork09, typefaceWork10]
const typefaceWorkTitles = [typefaceWorkTitle01, typefaceWorkTitle02, typefaceWorkTitle03, typefaceWorkTitle04, typefaceWorkTitle05, typefaceWorkTitle06, typefaceWorkTitle07, typefaceWorkTitle08, typefaceWorkTitle09, typefaceWorkTitle10]

export function OtherWorks() {
  const trackRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const track = trackRef.current
    if (!track) return

    let animationFrame = 0
    let currentScroll = 0
    let targetScroll = 0
    let previousFrameTime = performance.now()
    let snapTimeout = 0

    const getCycleWidth = () => {
      const firstCard = track.children[0] as HTMLElement | undefined
      const nextCycleFirstCard = track.children[placeholders.length] as HTMLElement | undefined
      return firstCard && nextCycleFirstCard ? nextCycleFirstCard.offsetLeft - firstCard.offsetLeft : 0
    }

    const centerOnFirstCycle = () => {
      const cycleWidth = getCycleWidth()
      if (cycleWidth > 0) {
        currentScroll = cycleWidth
        targetScroll = cycleWidth
        track.scrollLeft = cycleWidth
      }
    }

    const snapToNearestCard = () => {
      const viewportCenter = targetScroll + track.clientWidth / 2
      const cards = [...track.children] as HTMLElement[]
      const nearestCard = cards.reduce((nearest, card) => (
        Math.abs(card.offsetLeft + card.offsetWidth / 2 - viewportCenter) < Math.abs(nearest.offsetLeft + nearest.offsetWidth / 2 - viewportCenter)
          ? card
          : nearest
      ), cards[0])
      if (nearestCard) targetScroll += nearestCard.offsetLeft + nearestCard.offsetWidth / 2 - viewportCenter
    }

    const scheduleSnap = () => {
      window.clearTimeout(snapTimeout)
      snapTimeout = window.setTimeout(snapToNearestCard, 200)
    }

    centerOnFirstCycle()

    const handleWheel = (event: WheelEvent) => {
      if (event.deltaY === 0) return

      const delta = event.deltaMode === WheelEvent.DOM_DELTA_LINE
        ? event.deltaY * 16
        : event.deltaMode === WheelEvent.DOM_DELTA_PAGE
          ? event.deltaY * window.innerHeight
          : event.deltaY
      const cycleWidth = getCycleWidth()

      if (cycleWidth <= 0) return

      event.preventDefault()
      targetScroll += delta * 0.7
      scheduleSnap()
    }

    const update = (time: number) => {
      const cycleWidth = getCycleWidth()
      const elapsed = Math.min((time - previousFrameTime) / 1000, 0.1)
      previousFrameTime = time
      targetScroll += elapsed * 50
      currentScroll += (targetScroll - currentScroll) * 0.05

      if (cycleWidth > 0) {
        while (currentScroll < 0) {
          currentScroll += cycleWidth
          targetScroll += cycleWidth
        }
        while (currentScroll >= cycleWidth * 2) {
          currentScroll -= cycleWidth
          targetScroll -= cycleWidth
        }
        track.scrollLeft = currentScroll

      }

      animationFrame = window.requestAnimationFrame(update)
    }

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'ArrowRight' || event.key === 'ArrowLeft') {
        event.preventDefault()
        targetScroll += event.key === 'ArrowRight' ? 240 : -240
        scheduleSnap()
      }
    }

    animationFrame = window.requestAnimationFrame(update)
    track.addEventListener('wheel', handleWheel, { passive: false })
    track.addEventListener('keydown', handleKeyDown)
    window.addEventListener('resize', centerOnFirstCycle)
    return () => {
      window.cancelAnimationFrame(animationFrame)
      window.clearTimeout(snapTimeout)
      track.removeEventListener('wheel', handleWheel)
      track.removeEventListener('keydown', handleKeyDown)
      window.removeEventListener('resize', centerOnFirstCycle)
    }
  }, [])

  return (
    <section id="other-works" className="other-works" aria-labelledby="other-works-title">
      <h2 id="other-works-title"><AnimatedContent direction="vertical" distance={50} duration={1.7} ease="power3.out" initialOpacity={0} animateOpacity scale={1} threshold={0.2} delay={0.3} asChild><img src={otherWorksTitle} alt="其他作品" /></AnimatedContent></h2>
      <div ref={trackRef} className="other-works-track" aria-label="其他作品列表" tabIndex={0}>
        {loopedPlaceholders.map((_, loopIndex) => {
          const index = loopIndex % placeholders.length
          const isDekang = index === 0
          const isTypefaceProject = index === 1
          const typefaceWork = typefaceWorks[index - 2]
          const typefaceWorkTitle = typefaceWorkTitles[index - 2]
          const card = <>
            <div className="other-works-card__meta">
              <span>{isDekang ? '品牌设计' : isTypefaceProject ? '字库共创计划' : '字体设计'}</span>
              <span>{isDekang ? '(2025)' : '(2024)'}</span>
            </div>
            {isDekang
              ? <img className="other-works-card__image-placeholder other-works-card__image" src={dekangCover} alt="德康当家品牌视觉" />
              : isTypefaceProject
                ? <img className="other-works-card__image-placeholder other-works-card__image other-works-card__typeface-cover" src={typefaceCoCreationCover} alt="璀璨青年·金字旁字库共创计划" />
                : typefaceWork
                  ? <img className="other-works-card__image-placeholder other-works-card__image other-works-card__typeface-work" src={typefaceWork} alt={`字体设计作品 ${index - 1}`} />
                  : <div className="other-works-card__image-placeholder" aria-hidden="true" />}
            <div className={`other-works-card__content${isDekang ? ' other-works-card__content--dekang' : ''}${isTypefaceProject ? ' other-works-card__content--typeface' : ''}`}>
              <h3><img className={isTypefaceProject ? 'other-works-card__typeface-title' : typefaceWorkTitle ? 'other-works-card__typeface-work-title' : undefined} src={isTypefaceProject ? typefaceCoCreationTitle : typefaceWorkTitle ?? dekangTitle} alt={isTypefaceProject ? '璀璨青年·金字旁' : typefaceWorkTitle ? `字体设计作品 ${index - 1}` : '德康当家'} /></h3>
              {isDekang || isTypefaceProject ? <div className="other-works-card__description-row"><p>{isTypefaceProject ? typefaceDescription : cardDescription}</p><span className="other-works-card__arrow" aria-hidden="true"><span>▶</span></span></div> : <p>{typefaceWorkDescription}</p>}
            </div>
          </>

          return <AnimatedContent key={loopIndex} className="other-works-card-animation" direction="vertical" distance={50} duration={1.7} ease="power3.out" initialOpacity={0} animateOpacity scale={1} threshold={0.2} delay={0.3}>
            <BorderGlow className={`other-works-card${isDekang || isTypefaceProject ? ' other-works-card--link' : ''}`} animated>
              {isDekang || isTypefaceProject ? <Link className="other-works-card__link" to={isTypefaceProject ? '/other-works/typeface-co-creation' : '/other-works/dekang-dangjia'} aria-label={isTypefaceProject ? '查看璀璨青年·金字旁项目' : '查看德康当家项目'}>{card}</Link> : <div className="other-works-card__static" aria-label={`其他作品占位 ${index + 1}`}>{card}</div>}
            </BorderGlow>
          </AnimatedContent>
        })}
      </div>
    </section>
  )
}
