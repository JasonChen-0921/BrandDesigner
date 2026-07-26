import brandMark from '../assets/brand-mark.png'
import profileHeadingEndToEnd from '../assets/profile-heading-end-to-end.png'
import profileHeadingGrowth from '../assets/profile-heading-growth.png'
import profilePortrait from '../assets/profile-reference-portrait.png'
import profileTitle from '../assets/profile-title.png'
import { useReveal } from '../hooks/useReveal'

export function Profile() {
  const ref = useReveal<HTMLElement>()

  return (
    <section id="profile" className="section profile profile-reference reveal" ref={ref}>
      <div className="profile-reference-grid">
        <div className="profile-reference-copy">
          <p className="profile-greeting">Hey 你好!<br />我是 陈见晟</p>
          <h2><img src={profileTitle} alt="品牌设计师" /></h2>

          <article>
            <h3><img src={profileHeadingGrowth} alt="用设计驱动品牌增长" /></h3>
            <p>服务过食品、酒水、快消品领域，擅长将商业策略转化为可落地的视觉资产，让每个设计触点都服务于有效的品牌沟通。</p>
          </article>

          <article>
            <h3><img src={profileHeadingEndToEnd} alt="品牌终端落地全链路" /></h3>
            <p>全链路构建品牌的视觉识别系统。精于 LOGO、包装、VI规范及全域物料延展，用系统化设计为品牌建立可持续生长的视觉资产。</p>
          </article>
        </div>

        <figure className="profile-reference-visual">
          <img src={profilePortrait} alt="陈见晟的个人肖像" />
        </figure>

        <aside className="profile-reference-metrics" aria-label="个人数据">
          <div><strong>4+</strong><span>Years Experience</span></div>
          <div><strong>24+</strong><span>In-depth Service</span></div>
          <div><strong>*99%</strong><span>Client Satisfaction</span></div>
          <img src={brandMark} alt="Jason Chen 品牌标记" />
        </aside>
      </div>
    </section>
  )
}
