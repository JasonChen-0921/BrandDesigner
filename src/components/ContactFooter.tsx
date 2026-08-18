import { useState } from 'react'
import cardAvatarVideo from '../assets/card-avatar-video.mp4'
import contactMessage from '../assets/contact-message-replacement.png'
import contactMessageOverlay from '../assets/contact-message-overlay.png'
import contactModalCard from '../assets/contact-modal-card.png'
import AnimatedContent from './AnimatedContent'
import { profile } from '../data/portfolio'

export function ContactFooter() {
  const [isContactModalOpen, setIsContactModalOpen] = useState(false)

  return (
    <footer id="contact" className="contact contact-reference">
      <div className="contact-inner">
        <div className="contact-reference-center">
          <p className="contact-reference-kicker">TIME TO CONNECT <i aria-hidden="true" /></p>
          <AnimatedContent direction="vertical" distance={50} duration={1.7} ease="power3.out" initialOpacity={0} animateOpacity scale={1} threshold={0.2} delay={0.3} asChild>
            <div className="contact-message-stack">
              <img className="contact-message" src={contactMessage} alt="无论是新的品牌项目，还是想打个招呼，都欢迎联系我。" />
              <img className="contact-message contact-message-overlay" src={contactMessageOverlay} alt="" />
            </div>
          </AnimatedContent>
          <AnimatedContent direction="vertical" distance={50} duration={1.7} ease="power3.out" initialOpacity={0} animateOpacity scale={1} threshold={0.2} delay={0.3} asChild>
            <div className="contact-reference-card">
              <video autoPlay muted loop playsInline aria-hidden="true">
                <source src={cardAvatarVideo} type="video/mp4" />
              </video>
              <button className="contact-reference-action" type="button" onClick={() => setIsContactModalOpen(true)} aria-haspopup="dialog">
                <span className="contact-reference-label">Contact Me</span>
                <b aria-hidden="true" />
              </button>
            </div>
          </AnimatedContent>
        </div>
        <div className="contact-reference-footer">
          <AnimatedContent direction="vertical" distance={50} duration={1.7} ease="power3.out" initialOpacity={0} animateOpacity scale={1} threshold={-0.2} intersectionMargin="0px 0px 160px 0px" delay={0} asChild>
            <span>© 2026 JASON CHEN</span>
          </AnimatedContent>
          <nav className="contact-reference-home-nav" aria-label="页面导航">
            <AnimatedContent direction="vertical" distance={50} duration={1.7} ease="power3.out" initialOpacity={0} animateOpacity scale={1} threshold={-0.2} intersectionMargin="0px 0px 160px 0px" delay={0} asChild>
              <a href="#profile">ABOUT ME</a>
            </AnimatedContent>
            <AnimatedContent direction="vertical" distance={50} duration={1.7} ease="power3.out" initialOpacity={0} animateOpacity scale={1} threshold={-0.2} intersectionMargin="0px 0px 160px 0px" delay={0} asChild>
              <a href="#work">SELECTED WORKS</a>
            </AnimatedContent>
            <AnimatedContent direction="vertical" distance={50} duration={1.7} ease="power3.out" initialOpacity={0} animateOpacity scale={1} threshold={-0.2} intersectionMargin="0px 0px 160px 0px" delay={0} asChild>
              <a href="#other-works">OTHER WORKS</a>
            </AnimatedContent>
          </nav>
          <AnimatedContent direction="vertical" distance={50} duration={1.7} ease="power3.out" initialOpacity={0} animateOpacity scale={1} threshold={-0.2} intersectionMargin="0px 0px 160px 0px" delay={0} asChild>
            <span className="contact-reference-email">{profile.email}</span>
          </AnimatedContent>
        </div>
      </div>
      {isContactModalOpen && (
        <div className="contact-modal" role="presentation">
          <button className="contact-modal__backdrop" type="button" aria-label="关闭联系方式弹窗" onClick={() => setIsContactModalOpen(false)} />
          <section className="contact-modal__panel" role="dialog" aria-modal="true" aria-label="联系方式">
            <AnimatedContent direction="vertical" reverse distance={50} duration={1.7} ease="power3.out" initialOpacity={0} animateOpacity scale={1} threshold={0.2} delay={0.3} asChild>
              <img className="contact-modal-card-image" src={contactModalCard} alt="联系方式" />
            </AnimatedContent>
          </section>
        </div>
      )}
    </footer>
  )
}
