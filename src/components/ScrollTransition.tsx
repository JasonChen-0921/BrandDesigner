import { useEffect, useRef } from 'react'
import profileToProjectVideo from '../assets/profile-to-project.mp4'

export function ScrollTransition() {
  const sectionRef = useRef<HTMLElement>(null)
  const videoRef = useRef<HTMLVideoElement>(null)

  useEffect(() => {
    const section = sectionRef.current
    const video = videoRef.current
    if (!section || !video) return

    const frameDuration = 1 / 60
    let targetTime = 0
    let frame = 0
    let isSeeking = false

    const syncVideo = () => {
      frame = 0
      if (!Number.isFinite(video.duration) || isSeeking) return
      if (Math.abs(targetTime - video.currentTime) < frameDuration) return

      isSeeking = true
      video.currentTime = targetTime
    }

    const scheduleSync = () => {
      if (!frame) frame = window.requestAnimationFrame(syncVideo)
    }

    const updateTarget = () => {
      if (!Number.isFinite(video.duration)) return

      const bounds = section.getBoundingClientRect()
      const range = Math.max(1, bounds.height - window.innerHeight)
      const progress = Math.min(1, Math.max(0, -bounds.top / range))
      targetTime = progress * video.duration
      scheduleSync()
    }

    const handleSeeked = () => {
      isSeeking = false
      scheduleSync()
    }

    const handleWheel = (event: WheelEvent) => {
      event.preventDefault()
      window.scrollBy(0, event.deltaY * 0.35)
    }

    video.addEventListener('loadedmetadata', updateTarget)
    video.addEventListener('seeked', handleSeeked)
    section.addEventListener('wheel', handleWheel, { passive: false })
    window.addEventListener('scroll', updateTarget, { passive: true })
    window.addEventListener('resize', updateTarget)
    updateTarget()

    return () => {
      video.removeEventListener('loadedmetadata', updateTarget)
      video.removeEventListener('seeked', handleSeeked)
      section.removeEventListener('wheel', handleWheel)
      window.removeEventListener('scroll', updateTarget)
      window.removeEventListener('resize', updateTarget)
      if (frame) window.cancelAnimationFrame(frame)
    }
  }, [])

  return (
    <section ref={sectionRef} className="scroll-transition" aria-label="作品集过渡视频">
      <div className="scroll-transition-sticky">
        <video ref={videoRef} muted playsInline preload="auto">
          <source src={profileToProjectVideo} type="video/mp4" />
        </video>
      </div>
    </section>
  )
}
