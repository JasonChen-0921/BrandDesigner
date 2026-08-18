import { Link, useLocation } from 'react-router-dom'
import AnimatedContent from '../components/AnimatedContent'
import projectMark from '../assets/project-jc-mark.png'
import dekangDetailHero from '../assets/dekang-detail-hero.png'
import dekangGallery07 from '../assets/dekang-gallery-07.png'
import dekangGallery08 from '../assets/dekang-gallery-08.png'
import dekangGallery09 from '../assets/dekang-gallery-09.png'
import dekangGallery01 from '../assets/dekang-gallery-01.png'
import dekangGallery02 from '../assets/dekang-gallery-02.png'
import dekangGallery05 from '../assets/dekang-gallery-05.png'
import dekangGallery06 from '../assets/dekang-gallery-06.png'
import dekangGallery11 from '../assets/dekang-gallery-11.png'
import dekangGallery12 from '../assets/dekang-gallery-12.png'
import dekangGallery13 from '../assets/dekang-gallery-13.png'
import dekangGallery15 from '../assets/dekang-gallery-15.png'
import dekangGallery16 from '../assets/dekang-gallery-16.png'
import dekangGallery18 from '../assets/dekang-gallery-18.png'
import dekangGallery20 from '../assets/dekang-gallery-20.png'
import dekangGallery21 from '../assets/dekang-gallery-21.png'
import dekangGallery22 from '../assets/dekang-gallery-22.png'
import dekangGallery26 from '../assets/dekang-gallery-26.png'
import dekangGallery37 from '../assets/dekang-gallery-37.png'
import dekangGallery38 from '../assets/dekang-gallery-38.png'
import dekangGallery39 from '../assets/dekang-gallery-39.png'
import dekangGallery40 from '../assets/dekang-gallery-40.png'
import dekangGallery42 from '../assets/dekang-gallery-42.png'
import dekangGallery43 from '../assets/dekang-gallery-43.png'
import dekangGallery44 from '../assets/dekang-gallery-44.png'
import dekangVideo01 from '../assets/dekang-video-01.mp4'
import dekangVideo02 from '../assets/dekang-video-02.mp4'
import dekangVideo03 from '../assets/dekang-video-03.mp4'
import dekangVideo04 from '../assets/dekang-video-04.mp4'
import dekangVideo05 from '../assets/dekang-video-05.mp4'
import dekangVideo06 from '../assets/dekang-video-06.mp4'
import dekangVideo07 from '../assets/dekang-video-07.mp4'
import dekangVideo08 from '../assets/dekang-video-08.mp4'
import typefaceGallery01 from '../assets/typeface-gallery-1.jpg'
import typefaceGallery02 from '../assets/typeface-gallery-2.jpg'
import typefaceGallery03 from '../assets/typeface-gallery-3.jpg'
import typefaceGallery04 from '../assets/typeface-gallery-4.jpg'
import typefaceGallery05 from '../assets/typeface-gallery-5.jpg'
import typefaceGallery06 from '../assets/typeface-gallery-6.jpg'
import typefaceGallery07 from '../assets/typeface-gallery-7.jpg'
import typefaceGallery08 from '../assets/typeface-gallery-8.jpg'

const dekangGalleryImages = [
  dekangGallery07,
  dekangGallery08,
  dekangGallery09,
  dekangGallery01,
  dekangGallery02,
]

const dekangAdditionalGalleryImages = [
  dekangGallery05,
  dekangGallery06,
  dekangGallery11,
  dekangGallery12,
  dekangGallery13,
  dekangGallery15,
  dekangGallery16,
  dekangGallery18,
  dekangGallery20,
  dekangGallery21,
  dekangGallery22,
  dekangGallery26,
  dekangGallery37,
  dekangGallery38,
  dekangGallery39,
  dekangGallery40,
  dekangGallery42,
  dekangGallery43,
  dekangGallery44,
]

const dekangVideos = [
  dekangVideo01,
  dekangVideo02,
  dekangVideo03,
  dekangVideo04,
  dekangVideo05,
  dekangVideo06,
  dekangVideo07,
  dekangVideo08,
]

const typefaceGalleryImages = [
  typefaceGallery01,
  typefaceGallery02,
  typefaceGallery03,
  typefaceGallery04,
  typefaceGallery05,
  typefaceGallery06,
  typefaceGallery07,
  typefaceGallery08,
]

const overview = `德康虽是拥有全产业链的港股上市农牧企业，在种源、品质和成本上优势扎实，但肉制品自有品牌长期缺失。行业层面，肉制品存在“碎肉+添加剂”的信任危机，消费者对源头和品质日益重视，而低温肉制品和预制菜赛道正快速增长。
以“源头主义”为核心，将产业链底气转化为品牌信任，打造“德康当家”肉制品品牌。
品牌定位：中华美食当家菜——站位高、场景明确，直指主菜核心认知。
品牌口号：健康美味 德康当家——工整顺口，强绑品牌名，直击安全与美味两大诉求。
核心策略：以“有根有源”对抗行业乱象，通过超级IP实现品牌人格化，持续积累品牌资产。
最终实现以良心铸德、以品质护康、以全链实力当家，成为国民信赖的肉食标杆品牌。`

const englishOverview = `Dekang, a HK‑listed full‑chain agri‑food firm, has strong strengths in breeding, quality, and cost, but lacks its own meat brand. The industry suffers from trust issues ("scraps + additives"), while consumers demand traceability and low‑temp/prepared foods are booming.
With a "Source‑First" approach, it launches Dekang Dangjia.Positioning: "The Signature Dish of Chinese Cuisine" – targeting the main‑dish mindshare.Slogan: "Healthy & Delicious, Dekang Dangjia."Strategy: Fight chaos with traceability, humanize via a super IP, and build brand equity.Goal: Become the nation's trusted meat brand through integrity and quality.`

const typefaceOverview = '源字来源于1951年由北新书局出版陈业恒编著的《美术字的写法和练习》中第23到28页的一款美术字，这款字体兼具黑体和宋体的笔画特征，整体偏向于黑体，但撇画与点画更近于宋体，是一款又黑又宋的创意字体。'
const typefaceEnglishOverview = 'The character comes from an artistic typeface in the 1951 book The Writing and Practice of Artistic Lettering (Beixin Press, pp.23–28). It blends Hei and Song styles—mostly Hei, but with Song‑like strokes for pie and dian, making it a creative hybrid.'

export default function OtherWorkDetailPage() {
  const { pathname } = useLocation()
  const isTypefaceCoCreation = pathname === '/other-works/typeface-co-creation'
  const title = isTypefaceCoCreation ? '摇醒青年黑' : '德康当家 DEKANGDANGJIA'
  const artDirector = isTypefaceCoCreation ? 'Shake up lab' : 'XingWeiYanJiu'
  const designer = isTypefaceCoCreation ? 'Jason Chen & Other designers' : 'Jason Chen & Dekangdangjia Project Team'
  const year = isTypefaceCoCreation ? '2024' : '2025'

  return (
    <main className="project-page project-detail project-detail--xiduoduo">
      <section className="xiduoduo-intro">
        <header className="xiduoduo-header">
          <AnimatedContent direction="vertical" reverse distance={32} duration={0.8} delay={0.1} asChild>
            <Link to="/#other-works" aria-label="返回其他作品"><img src={projectMark} alt="Jason Chen" /></Link>
          </AnimatedContent>
          <AnimatedContent direction="vertical" reverse distance={32} duration={0.8} delay={0.22} asChild>
            <span>INFO</span>
          </AnimatedContent>
        </header>

        <div className="xiduoduo-info-grid">
          <aside className="xiduoduo-identity">
            <h1 className="xiduoduo-title">{title}</h1>
            <dl>
              <div><dt>ART DIRECTOR:</dt><dd>{artDirector}</dd></div>
              <div><dt>DESIGNER:</dt><dd>{designer}</dd></div>
              <div><dt>YEAR:</dt><dd>{year}</dd></div>
              {!isTypefaceCoCreation && <div className="xiduoduo-client"><dt>CLIENT:</dt><dd>德康集团</dd></div>}
            </dl>
          </aside>
          <div className="xiduoduo-copy xiduoduo-copy--english"><p className="xiduoduo-english-overview">{isTypefaceCoCreation ? typefaceEnglishOverview : englishOverview}</p></div>
          <div className="xiduoduo-copy"><p className="xiduoduo-overview">{isTypefaceCoCreation ? typefaceOverview : overview}</p></div>
        </div>

        {isTypefaceCoCreation ? (
          <section className="xiduoduo-gallery xiduoduo-gallery--two-column" aria-label="摇醒青年黑项目图片">
            {typefaceGalleryImages.map((image, index) => (
              <AnimatedContent key={image} direction="vertical" distance={50} duration={1.7} ease="power3.out" initialOpacity={0} animateOpacity scale={1} threshold={0.2} delay={0.3} asChild>
                <figure>
                  <img src={image} loading="lazy" decoding="async" alt={`摇醒青年黑项目图片 ${index + 1}`} />
                </figure>
              </AnimatedContent>
            ))}
          </section>
        ) : <>
          <section className="xiduoduo-gallery xiduoduo-gallery--natural" aria-label="德康当家项目图片">
            <AnimatedContent direction="vertical" distance={50} duration={1.7} ease="power3.out" initialOpacity={0} animateOpacity scale={1} threshold={0.2} delay={0.3} asChild>
              <figure><img src={dekangDetailHero} alt="德康当家项目展示" /></figure>
            </AnimatedContent>
            {dekangGalleryImages.map((image, index) => (
              <AnimatedContent key={image} direction="vertical" distance={50} duration={1.7} ease="power3.out" initialOpacity={0} animateOpacity scale={1} threshold={0.2} delay={0.3} asChild>
                <figure>
                  <img src={image} loading="lazy" decoding="async" alt={`德康当家项目图片 ${index + 2}`} />
                </figure>
              </AnimatedContent>
            ))}
          </section>
          <section className="xiduoduo-gallery xiduoduo-gallery--four-column" aria-label="德康当家项目视频">
          {dekangVideos.map((video, index) => (
            <figure className="xiduoduo-gallery-video" key={video}>
              <video muted autoPlay loop playsInline>
                <source src={video} type="video/mp4" />
                您的浏览器不支持视频播放。
              </video>
            </figure>
          ))}
          </section>
          <section className="xiduoduo-gallery xiduoduo-gallery--natural" aria-label="德康当家追加项目图片">
          {dekangAdditionalGalleryImages.map((image, index) => (
              <AnimatedContent key={image} direction="vertical" distance={50} duration={1.7} ease="power3.out" initialOpacity={0} animateOpacity scale={1} threshold={0.2} delay={0.3} asChild>
                <figure>
                  <img src={image} loading="lazy" decoding="async" alt={`德康当家追加项目图片 ${index + 1}`} />
                </figure>
              </AnimatedContent>
          ))}
          </section>
        </>}
      </section>
    </main>
  )
}
