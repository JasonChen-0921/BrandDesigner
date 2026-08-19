import profileToProjectVideo from '../assets/profile-to-project-120fps.mp4'

export function ScrollTransition() {
  return (
    <section className="scroll-transition" aria-label="作品集过渡视频">
      <div className="scroll-transition-sticky">
        <video muted playsInline preload="auto" autoPlay loop>
          <source src={profileToProjectVideo} type="video/mp4" />
        </video>
      </div>
    </section>
  )
}
