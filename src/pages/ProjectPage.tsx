import { Link, useParams } from 'react-router-dom'
import AnimatedContent from '../components/AnimatedContent'
import HlsVideo from '../components/HlsVideo'
import { projects } from '../data/portfolio'
import projectMark from '../assets/project-jc-mark.png'
import xiduoduoIntro from '../assets/xiduoduo-intro.png'
import xiduoduoGallery19 from '../assets/xiduoduo-gallery-19.png'
import xiduoduoGallery20 from '../assets/xiduoduo-gallery-20.png'
import xiduoduoGallery21 from '../assets/xiduoduo-gallery-21.jpeg'
import xiduoduoGallery22 from '../assets/xiduoduo-gallery-22.jpeg'
import xiduoduoGallery23 from '../assets/xiduoduo-gallery-23.jpeg'
import xiduoduoGallery24 from '../assets/xiduoduo-gallery-24.jpeg'
import xiduoduoGallery25 from '../assets/xiduoduo-gallery-25.jpeg'
import xiduoduoGallery26 from '../assets/xiduoduo-gallery-26.png'
import xiduoduoGallery27 from '../assets/xiduoduo-gallery-27.jpeg'
import xiduoduoGallery28 from '../assets/xiduoduo-gallery-28.jpeg'
import xiduoduoGallery29 from '../assets/xiduoduo-gallery-29.png'
import xiduoduoGallery31 from '../assets/xiduoduo-gallery-31.jpeg'
import xiduoduoExtraVideo from '../assets/xiduoduo-extra-video-web.mp4'
import houchengGallery01 from '../assets/houcheng-gallery-01.jpg'
import houchengGallery02 from '../assets/houcheng-gallery-02.jpg'
import houchengGallery03 from '../assets/houcheng-gallery-03.jpg'
import houchengGallery04 from '../assets/houcheng-gallery-04.jpg'
import houchengGallery05 from '../assets/houcheng-gallery-05.jpg'
import houchengGallery06 from '../assets/houcheng-gallery-06.jpg'
import houchengGallery07 from '../assets/houcheng-gallery-07.jpg'
import houchengGallery08 from '../assets/houcheng-gallery-08.jpg'
import houchengGallery09 from '../assets/houcheng-gallery-09.jpg'
import houchengGallery10 from '../assets/houcheng-gallery-10.jpg'
import houchengGallery11 from '../assets/houcheng-gallery-11.jpg'
import houchengGallery12 from '../assets/houcheng-gallery-12.jpg'
import houchengGallery13 from '../assets/houcheng-gallery-13.jpg'
import houchengGallery14 from '../assets/houcheng-gallery-14.jpg'
import houchengGallery15 from '../assets/houcheng-gallery-15.jpg'
import houchengGallery16 from '../assets/houcheng-gallery-16.jpg'
import houchengGallery17 from '../assets/houcheng-gallery-17.jpg'
import houchengGallery18 from '../assets/houcheng-gallery-18.png'
import houchengGallery19 from '../assets/houcheng-gallery-19.png'
import houchengGallery20 from '../assets/houcheng-gallery-20.png'
import houchengGallery21 from '../assets/houcheng-gallery-21.jpg'
import houchengGallery22 from '../assets/houcheng-gallery-22.jpg'
import houchengGallery23 from '../assets/houcheng-gallery-23.jpg'
import houchengGallery24 from '../assets/houcheng-gallery-24.jpg'
import houchengGallery25 from '../assets/houcheng-gallery-25.jpg'
import houchengGallery26 from '../assets/houcheng-gallery-26.jpg'
import houchengGallery27 from '../assets/houcheng-gallery-27.jpg'
import houchengGallery29 from '../assets/houcheng-gallery-29.jpg'
import houchengGallery30 from '../assets/houcheng-gallery-30.jpg'
import houchengGallery31 from '../assets/houcheng-gallery-31.jpg'
import houchengGallery32 from '../assets/houcheng-gallery-32.jpg'
import houchengGallery33 from '../assets/houcheng-gallery-33.jpg'
import houchengGallery34 from '../assets/houcheng-gallery-34.jpg'
import houchengGallery35 from '../assets/houcheng-gallery-35.jpg'
import houchengGallery36 from '../assets/houcheng-gallery-36.jpg'
import houchengGallery37 from '../assets/houcheng-gallery-37.jpg'
import houchengGallery38 from '../assets/houcheng-gallery-38.jpg'
import houchengGallery39 from '../assets/houcheng-gallery-39.jpg'
import houchengGallery40 from '../assets/houcheng-gallery-40.jpg'
import jubaoGallery01 from '../assets/jubao-gallery-01.png'
import jubaoGallery02 from '../assets/jubao-gallery-02.png'
import jubaoGallery03 from '../assets/jubao-gallery-03.png'
import jubaoGallery04 from '../assets/jubao-gallery-04.png'
import jubaoGallery05 from '../assets/jubao-gallery-05.png'
import jubaoGallery06 from '../assets/jubao-gallery-06.png'
import jubaoGallery07 from '../assets/jubao-gallery-07.png'
import jubaoGallery08 from '../assets/jubao-gallery-08.png'
import jubaoGallery09 from '../assets/jubao-gallery-09.png'
import jubaoGallery10 from '../assets/jubao-gallery-10.png'
import jubaoGallery11 from '../assets/jubao-gallery-11.png'
import jubaoGallery12 from '../assets/jubao-gallery-12.png'
import jubaoGallery13 from '../assets/jubao-gallery-13.png'
import jubaoGallery14 from '../assets/jubao-gallery-14.png'
import jubaoGallery15 from '../assets/jubao-gallery-15.png'
import jubaoGallery16 from '../assets/jubao-gallery-16.png'
import jubaoGallery17 from '../assets/jubao-gallery-17.png'
import jubaoGallery18 from '../assets/jubao-gallery-18.png'
import jubaoExtra01 from '../assets/jubao-extra-01.jpg'
import jubaoExtra02 from '../assets/jubao-extra-02.jpg'
import jubaoExtra03 from '../assets/jubao-extra-03.jpg'
import jubaoExtra04 from '../assets/jubao-extra-04.jpg'
import jubaoExtra05 from '../assets/jubao-extra-05.jpg'
import juxiaoxianGallery01 from '../assets/juxiaoxian-gallery-01.png'
import juxiaoxianGallery02 from '../assets/juxiaoxian-gallery-02.jpg'
import juxiaoxianGallery03 from '../assets/juxiaoxian-gallery-03.png'
import juxiaoxianGallery04 from '../assets/juxiaoxian-gallery-04.png'
import juxiaoxianGallery05 from '../assets/juxiaoxian-gallery-05.png'
import juxiaoxianGallery06 from '../assets/juxiaoxian-gallery-06.png'
import juxiaoxianGallery07 from '../assets/juxiaoxian-gallery-07.png'
import juxiaoxianGallery09 from '../assets/juxiaoxian-gallery-09.png'
import juxiaoxianGallery10 from '../assets/juxiaoxian-gallery-10.png'
import juxiaoxianGallery15 from '../assets/juxiaoxian-gallery-15.png'
import juxiaoxianGallery16 from '../assets/juxiaoxian-gallery-16.png'
import juxiaoxianGallery17 from '../assets/juxiaoxian-gallery-17.png'

const xiduoduoFeaturedImagesBeforePair = [
  xiduoduoGallery19,
  xiduoduoGallery20,
]

const xiduoduoFeaturedImagesAfterPair = [
  xiduoduoGallery22,
  xiduoduoGallery23,
  xiduoduoGallery24,
  xiduoduoGallery25,
  xiduoduoGallery26,
  xiduoduoGallery27,
  xiduoduoGallery28,
  xiduoduoGallery29,
]

const houchengGalleryImages = [
  houchengGallery01,
  houchengGallery02,
  houchengGallery03,
  houchengGallery04,
  houchengGallery05,
  houchengGallery08,
  houchengGallery09,
  houchengGallery10,
  houchengGallery11,
  houchengGallery06,
  houchengGallery07,
  houchengGallery12,
  houchengGallery13,
  houchengGallery14,
  houchengGallery15,
  houchengGallery16,
  houchengGallery17,
  houchengGallery18,
  houchengGallery19,
  houchengGallery20,
  houchengGallery21,
  houchengGallery22,
  houchengGallery23,
  houchengGallery24,
  houchengGallery25,
  houchengGallery26,
  houchengGallery27,
  houchengGallery29,
  houchengGallery30,
  houchengGallery31,
  houchengGallery32,
  houchengGallery33,
  houchengGallery34,
  houchengGallery35,
  houchengGallery36,
  houchengGallery37,
  houchengGallery38,
  houchengGallery39,
  houchengGallery40,
]

const jubaoGalleryImages = [
  jubaoGallery01,
  jubaoGallery02,
  jubaoGallery03,
  jubaoGallery04,
  jubaoGallery05,
  jubaoGallery06,
  jubaoGallery07,
  jubaoGallery08,
  jubaoGallery09,
  jubaoGallery10,
  jubaoGallery11,
  jubaoGallery12,
  jubaoGallery13,
  jubaoGallery14,
  jubaoGallery15,
  jubaoGallery16,
  jubaoGallery17,
  jubaoGallery18,
]

const jubaoExtraImages = [
  jubaoExtra01,
  jubaoExtra02,
  jubaoExtra03,
  jubaoExtra04,
  jubaoExtra05,
]

const juxiaoxianGalleryImages = [
  juxiaoxianGallery01,
  juxiaoxianGallery02,
  juxiaoxianGallery03,
  juxiaoxianGallery04,
  juxiaoxianGallery05,
  juxiaoxianGallery06,
  juxiaoxianGallery07,
  juxiaoxianGallery09,
  juxiaoxianGallery10,
  juxiaoxianGallery15,
  juxiaoxianGallery16,
  juxiaoxianGallery17,
]

const xiduoduoOverview = `喜多多增长见顶，陷入三大困境——老品利润薄、新品推不动，渠道传统且老化，场景局限在婚宴节庆拜拜，消费者买得少。同时，健康化、场景化、特渠（特殊渠道）是行业大趋势，因此喜多多需要转变。
从“低频宴席糖水”转型为“高频日常消费品”，把小品类装进高频大消费。
具体做四件事：
1、品牌升维：定位“中式轻养有料食品”，主打健康+喜悦。
2、场景寄生：绑定火锅（解辣）、办公室（下午茶）等高频刚需场景。
3、IP与产品升级：改造“喜神”IP增强延展性，并开发“喜礼”礼盒及盲盒等新产品。
4、最终目的：抢占“喜文化”心智，打开日常和送礼市场，实现品牌年轻化与业绩新增长。`

const xiduoduoEnglishOverview = `Xiduoduo's growth has peaked—old products have thin margins, new ones fail, channels are outdated, and usage is limited to weddings, festivals, and worship. To shift from low‑frequency banquets to high‑frequency daily use, it should:
1.Reposition as “Chinese light‑nourishing snack” (health + joy);
2.Target hotpot (for spice relief) and office afternoon tea;
3. Refresh the “Xishen” IP and launch gift boxes + blind boxes;
4.Own the “Joy Culture” mindshare for daily consumption and gifting, rejuvenating the brand and driving new growth.`

const jubaoJinhaoOverview = `聚宝金昊是一家米制品全产业链企业，推出子品牌聚小鲜，核心产品是鲜湿米粉。市场竞争环境是：面条市场规模是米粉的近3倍，鲜米粉作为新兴品类尚无领导品牌，同时传统干米粉需泡发、口感偏硬，面条含麸质且不易消化。聚宝金昊拥有智能生产设备技术及全产业链优势，具备弯道超车的条件。
聚小鲜的品牌定位“健康鲜米粉第一品牌”，品牌口号是“不吃面，就嗦小鲜粉”。核心打法是：
1、品类切割：用“不含麸质、易消化、30秒出餐”对比面条的“胀肚、含麸质、煮制久”，差异化进入面条市场；
2、大单品突围：聚焦早餐粉、儿童粉、火锅粉三个场景化大单品，先打透高频刚需场景；
3、品牌建设：统一集团“聚”字家族视觉体系，打造聚小宝IP，通过事件营销（如“聚小鲜粉大师赛”）和品牌营销喇叭模型建立认知；
4、最终目的：在千亿级主食市场中开辟鲜米粉新赛道，成为品类代名词。`

const houchengOverview = `陈皮行业长期处于“散乱假”状态——以果农散户为主，缺乏品牌正规军，假冒伪劣横行，消费者想买但不懂鉴别、不敢下手。厚承虽有23年全产业链基础和品质实力，但品牌认知薄弱，没能把“真”的优势讲清楚。

借鉴酣客酱酒模式，以“只做新会真年份陈皮”为战略定位，通过建立陈皮鉴定知识体系、打造创始人“承哥”IP、构建圈层裂变经销体系，在混乱的陈皮市场中建立信任壁垒，抢占“真陈皮”的认知高地，实现文化输出与圈层裂变。`

const jubaoJinhaoEnglishOverview = `Jubao Jinhao, a rice-product chain, launches sub‑brand Juxiaoxian (fresh rice noodles). Noodles market is 3x bigger, but fresh rice noodles have no leader; dry ones need soaking and are tough, while wheat noodles contain gluten and cause bloating. Jubao has tech and supply‑chain advantages. Positioning: "No.1 healthy fresh rice noodle." Slogan: "Skip noodles, slurp Juxiaoxian." Strategy:
1.Cut into noodle market with gluten‑free, easy‑digest, 30‑second prep;
2.Focus on breakfast, kids, and hotpot hero SKUs;
3.Build brand with unified visuals, IP Juxiaobao, and events;
4.Aim to own the fresh‑rice‑noodle category in the billion‑dollar staple food market.`

const houchengEnglishOverview = `The chenpi industry is fragmented, filled with small growers, fakes, and wary consumers. Houcheng has 23 years of supply‑chain strength and quality, but weak branding fails to convey "authenticity." Following Hanke's model, it positions as "only authentic Xinhui aged chenpi." Strategy: build a chenpi authentication knowledge system, create founder "Brother Cheng" IP, and deploy a circle‑based distribution network. Goal: establish trust, own "real chenpi" mindshare, and drive cultural influence plus viral growth within target circles.`

const xiduoduoLayoutTitles: Record<string, string> = {
  xiduoduo: '喜多多 XiDuoDuo',
  'jubao-jinhao': '聚宝金昊 JUBAO JINHAO',
  houcheng: '厚承 HOUCHENG',
}

export default function ProjectPage() {
  const { slug } = useParams()
  const project = projects.find((item) => item.slug === slug)
  const usesXiduoduoLayout = project ? project.slug in xiduoduoLayoutTitles : false

  if (!project) {
    return (
      <main className="project-page project-detail project-detail--missing">
        <Link to="/#work">BACK TO SELECTED WORK</Link>
        <h1>Project not found.</h1>
      </main>
    )
  }

  if (usesXiduoduoLayout) {
    return (
      <main className="project-page project-detail project-detail--xiduoduo">
        <section className="xiduoduo-intro">
          <header className="xiduoduo-header">
            <AnimatedContent direction="vertical" reverse distance={32} duration={0.8} delay={0.1} asChild>
              <Link to="/#work" aria-label="Back to selected work">
                <img src={projectMark} alt="Jason Chen" />
              </Link>
            </AnimatedContent>
            <AnimatedContent direction="vertical" reverse distance={32} duration={0.8} delay={0.22} asChild>
              <span>INFO</span>
            </AnimatedContent>
          </header>

          <div className="xiduoduo-info-grid">
            <aside className="xiduoduo-identity">
              <h1 className="xiduoduo-title">{xiduoduoLayoutTitles[project.slug]}</h1>
              <dl>
                <div><dt>ART DIRECTOR:</dt><dd>XingWeiYanJiu</dd></div>
                <div><dt>DESIGNER:</dt><dd>Jason Chen &amp; {project.slug === 'jubao-jinhao' ? 'Jubaojinhao' : project.slug === 'houcheng' ? 'Houcheng' : 'Xiduoduo'} Project Team</dd></div>
                <div><dt>YEAR:</dt><dd>{project.year}</dd></div>
                <div className="xiduoduo-client"><dt>CLIENT:</dt><dd>{project.name}</dd></div>
              </dl>
            </aside>

            <div className="xiduoduo-copy xiduoduo-copy--english">
              <p className="xiduoduo-english-overview">{project.slug === 'jubao-jinhao' ? jubaoJinhaoEnglishOverview : project.slug === 'houcheng' ? houchengEnglishOverview : xiduoduoEnglishOverview}</p>
            </div>

            <div className="xiduoduo-copy">
              <p className="xiduoduo-overview">{project.slug === 'jubao-jinhao' ? jubaoJinhaoOverview : project.slug === 'houcheng' ? houchengOverview : xiduoduoOverview}</p>
            </div>
          </div>

          {project.slug === 'xiduoduo' && (
            <AnimatedContent direction="vertical" distance={50} duration={1.7} ease="power3.out" initialOpacity={0} animateOpacity scale={1} threshold={0.2} delay={0.3} asChild>
              <figure className="xiduoduo-image-placeholder xiduoduo-image-placeholder--image">
                <img src={xiduoduoIntro} alt="喜多多品牌图案" />
              </figure>
            </AnimatedContent>
          )}

          {project.slug === 'jubao-jinhao' && (
            <>
              <section className="xiduoduo-gallery xiduoduo-gallery--featured" aria-label="聚宝金昊项目图片">
                {jubaoGalleryImages.map((image, index) => (
                  <AnimatedContent key={image} direction="vertical" distance={50} duration={1.7} ease="power3.out" initialOpacity={0} animateOpacity scale={1} threshold={0.2} delay={0.3} asChild>
                    <figure>
                      <img src={image} loading="lazy" decoding="async" alt={`聚宝金昊项目图片 ${index + 1}`} />
                    </figure>
                  </AnimatedContent>
                ))}
              </section>
              <section className="xiduoduo-gallery xiduoduo-gallery--natural" aria-label="聚小鲜项目图片">
                {juxiaoxianGalleryImages.map((image, index) => (
                  <AnimatedContent key={image} direction="vertical" distance={50} duration={1.7} ease="power3.out" initialOpacity={0} animateOpacity scale={1} threshold={0.2} delay={0.3} asChild>
                    <figure>
                      <img src={image} loading="lazy" decoding="async" alt={`聚小鲜项目图片 ${index + 1}`} />
                    </figure>
                  </AnimatedContent>
                ))}
              </section>
              <section className="xiduoduo-gallery xiduoduo-gallery--natural" aria-label="聚宝金昊追加项目图片">
                {jubaoExtraImages.map((image, index) => (
                  <AnimatedContent key={image} direction="vertical" distance={50} duration={1.7} ease="power3.out" initialOpacity={0} animateOpacity scale={1} threshold={0.2} delay={0.3} asChild>
                    <figure>
                      <img src={image} loading="lazy" decoding="async" alt={`聚宝金昊追加项目图片 ${index + 1}`} />
                    </figure>
                  </AnimatedContent>
                ))}
                <figure className="xiduoduo-gallery-video">
                  <HlsVideo src="/media/jubao-hls-v2/index.m3u8" />
                </figure>
              </section>
            </>
          )}

          {project.slug === 'xiduoduo' && (
            <>
              <section className="xiduoduo-gallery xiduoduo-gallery--featured" aria-label="喜多多精选图片">
                {xiduoduoFeaturedImagesBeforePair.map((image, index) => (
                  <AnimatedContent key={image} direction="vertical" distance={50} duration={1.7} ease="power3.out" initialOpacity={0} animateOpacity scale={1} threshold={0.2} delay={0.3} asChild>
                    <figure>
                      <img src={image} loading="lazy" decoding="async" alt={`喜多多精选图片 ${index + 1}`} />
                    </figure>
                  </AnimatedContent>
                ))}
              </section>
              <section className="xiduoduo-gallery xiduoduo-gallery--paired" aria-label="喜多多礼盒图片">
                <AnimatedContent direction="vertical" distance={50} duration={1.7} ease="power3.out" initialOpacity={0} animateOpacity scale={1} threshold={0.2} delay={0.3} asChild>
                  <figure>
                    <img src={xiduoduoGallery21} loading="lazy" decoding="async" alt="喜多多礼盒图片 1" />
                  </figure>
                </AnimatedContent>
                <AnimatedContent direction="vertical" distance={50} duration={1.7} ease="power3.out" initialOpacity={0} animateOpacity scale={1} threshold={0.2} delay={0.3} asChild>
                  <figure>
                    <img src={xiduoduoGallery31} loading="lazy" decoding="async" alt="喜多多礼盒图片 2" />
                  </figure>
                </AnimatedContent>
              </section>
              <section className="xiduoduo-gallery xiduoduo-gallery--featured" aria-label="喜多多精选图片续">
                {xiduoduoFeaturedImagesAfterPair.map((image, index) => (
                  <AnimatedContent key={image} direction="vertical" distance={50} duration={1.7} ease="power3.out" initialOpacity={0} animateOpacity scale={1} threshold={0.2} delay={0.3} asChild>
                    <figure>
                      <img src={image} loading="lazy" decoding="async" alt={`喜多多精选图片 ${index + 4}`} />
                    </figure>
                  </AnimatedContent>
                ))}
              </section>
              <section className="xiduoduo-gallery xiduoduo-gallery--natural" aria-label="喜多多项目视频">
                <AnimatedContent direction="vertical" distance={50} duration={1.7} ease="power3.out" initialOpacity={0} animateOpacity scale={1} threshold={0.2} delay={0.3} asChild>
                  <figure className="xiduoduo-gallery-video">
                    <HlsVideo src="/media/xiduoduo-hls/index.m3u8" />
                  </figure>
                </AnimatedContent>
                <AnimatedContent direction="vertical" distance={50} duration={1.7} ease="power3.out" initialOpacity={0} animateOpacity scale={1} threshold={0.2} delay={0.3} asChild>
                  <figure className="xiduoduo-gallery-video">
                    <video controls playsInline preload="metadata">
                      <source src={xiduoduoExtraVideo} type="video/mp4" />
                      您的浏览器不支持视频播放。
                    </video>
                  </figure>
                </AnimatedContent>
              </section>
            </>
          )}

          {project.slug === 'houcheng' && (
            <section className="xiduoduo-gallery xiduoduo-gallery--natural" aria-label="厚承项目图片">
              {houchengGalleryImages.map((image, index) => (
                <AnimatedContent key={image} direction="vertical" distance={50} duration={1.7} ease="power3.out" initialOpacity={0} animateOpacity scale={1} threshold={0.2} delay={0.3} asChild>
                  <figure>
                    <img src={image} loading="lazy" decoding="async" alt={`厚承项目图片 ${index + 1}`} />
                  </figure>
                </AnimatedContent>
              ))}
            </section>
          )}
        </section>
      </main>
    )
  }

  return (
    <main className="project-page project-detail">
      <section className="project-detail-intro">
        <div className="project-detail-grid">
          <aside className="project-detail-meta">
            <h1>{project.name}</h1>
          </aside>

          <div className="project-detail-copy">
            <p>{project.description}</p>
          </div>
        </div>
      </section>

      <section className="project-detail-gallery" aria-label={`${project.name} project gallery`}>
        <figure>
          <img src={project.image} alt={`${project.name} project presentation`} />
        </figure>
      </section>
    </main>
  )
}
