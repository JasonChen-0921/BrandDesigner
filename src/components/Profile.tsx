import brandMark from '../assets/brand-mark.png'
import profileHeadingEndToEnd from '../assets/profile-heading-end-to-end.png'
import profileHeadingGrowth from '../assets/profile-heading-growth.png'
import profilePortrait from '../assets/profile-reference-portrait.png'
import profileTitle from '../assets/profile-title.png'
import profileGreetingLine1 from '../assets/profile-greeting-line-1.png'
import profileGreetingLine2 from '../assets/profile-greeting-line-2.png'
import AnimatedContent from './AnimatedContent'
import CountUp from './CountUp'
import FoldText from './FoldText'
import { useReveal } from '../hooks/useReveal'

export function Profile() {
  const ref = useReveal<HTMLElement>()

  return (
    <section id="profile" className="section profile profile-reference reveal" ref={ref}>
      <div className="profile-reference-grid">
        <div className="profile-reference-copy">
          <p className="profile-greeting">
            <AnimatedContent direction="horizontal" distance={50} duration={1.7} ease="power3.out" initialOpacity={0} animateOpacity scale={1} threshold={0.2} delay={0.3} asChild>
              <img src={profileGreetingLine1} alt="Hey 你好!" />
            </AnimatedContent>
            <AnimatedContent direction="horizontal" distance={50} duration={1.7} ease="power3.out" initialOpacity={0} animateOpacity scale={1} threshold={0.2} delay={0.3} asChild>
              <img src={profileGreetingLine2} alt="我是 陈见晟" />
            </AnimatedContent>
          </p>
          <h2><AnimatedContent direction="horizontal" distance={50} duration={1.7} ease="power3.out" initialOpacity={0} animateOpacity scale={1} threshold={0.2} delay={0.3} asChild><img src={profileTitle} alt="品牌设计师" /></AnimatedContent></h2>

          <article>
            <h3><AnimatedContent direction="horizontal" distance={50} duration={1.7} ease="power3.out" initialOpacity={0} animateOpacity scale={1} threshold={0.2} delay={0.3} asChild><img src={profileHeadingGrowth} alt="用设计驱动品牌增长" /></AnimatedContent></h3>
            <p><FoldText text="服务过食品、酒水、快消品领域，擅长将商业策略转化为可落地的视觉资产，让每个设计触点都服务于有效的品牌沟通。" splitBy="char" hinge="top" trigger="scroll" duration={1.2} stagger={0.045} ease="power3.out" perspective={700} creaseShading={0.55} fontSize="inherit" fontWeight="inherit" color="inherit" className="profile-fold-text" /></p>
          </article>

          <article>
            <h3><AnimatedContent direction="horizontal" distance={50} duration={1.7} ease="power3.out" initialOpacity={0} animateOpacity scale={1} threshold={0.2} delay={0.3} asChild><img src={profileHeadingEndToEnd} alt="品牌终端落地全链路" /></AnimatedContent></h3>
            <p><FoldText text="全链路构建品牌的视觉识别系统。精于 LOGO、包装、VI规范及全域物料延展，用系统化设计为品牌建立可持续生长的视觉资产。" splitBy="char" hinge="top" trigger="scroll" duration={1.2} stagger={0.045} ease="power3.out" perspective={700} creaseShading={0.55} fontSize="inherit" fontWeight="inherit" color="inherit" className="profile-fold-text" /></p>
          </article>
        </div>

        <figure className="profile-reference-visual">
          <div className="profile-reference-backdrop-frame" aria-hidden="true">
            <AnimatedContent className="profile-reference-backdrop-animation" direction="vertical" reverse distance={50} duration={1.7} ease="power3.out" initialOpacity={0} animateOpacity scale={1} threshold={0.2} delay={0.3}><span /></AnimatedContent>
          </div>
          <AnimatedContent className="profile-reference-portrait-animation" direction="horizontal" distance={50} duration={1.7} ease="power3.out" initialOpacity={0} animateOpacity scale={1} threshold={0.2} delay={0.3}>
            <img src={profilePortrait} alt="陈见晟的个人肖像" />
          </AnimatedContent>
        </figure>

        <aside className="profile-reference-metrics" aria-label="个人数据">
          <div>
            <AnimatedContent className="profile-metric-animation" direction="horizontal" distance={32} duration={0.8} delay={0.1}>
              <strong><CountUp from={0} to={4} direction="up" duration={1} className="profile-metric-number" />+</strong>
            </AnimatedContent>
            <AnimatedContent className="profile-metric-animation" direction="horizontal" distance={32} duration={0.8} delay={0.22}>
              <span>Years Experience</span>
            </AnimatedContent>
          </div>
          <div>
            <AnimatedContent className="profile-metric-animation" direction="horizontal" distance={32} duration={0.8} delay={0.34}>
              <strong><CountUp from={0} to={24} direction="up" duration={1} className="profile-metric-number" />+</strong>
            </AnimatedContent>
            <AnimatedContent className="profile-metric-animation" direction="horizontal" distance={32} duration={0.8} delay={0.46}>
              <span>In-depth Service</span>
            </AnimatedContent>
          </div>
          <div>
            <AnimatedContent className="profile-metric-animation" direction="horizontal" distance={32} duration={0.8} delay={0.58}>
              <strong>*<CountUp from={0} to={99} direction="up" duration={1} className="profile-metric-number" />%</strong>
            </AnimatedContent>
            <AnimatedContent className="profile-metric-animation" direction="horizontal" distance={32} duration={0.8} delay={0.7}>
              <span>Client Satisfaction</span>
            </AnimatedContent>
          </div>
          <AnimatedContent direction="horizontal" distance={50} duration={1.7} ease="power3.out" initialOpacity={0} animateOpacity scale={1} threshold={0.2} delay={0.3} asChild>
            <img src={brandMark} alt="Jason Chen 品牌标记" />
          </AnimatedContent>
        </aside>
      </div>
    </section>
  )
}
