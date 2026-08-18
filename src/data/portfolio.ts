import portrait from '../assets/portrait-placeholder.svg'
import heroPoster from '../assets/hero-poster.svg'
import project01 from '../assets/project-01.svg'
import project02 from '../assets/project-02.svg'
import project03 from '../assets/project-03.svg'
import project04 from '../assets/project-04.svg'
import project05 from '../assets/project-05.svg'
import project06 from '../assets/project-06.svg'
import projectXiduoduo from '../assets/project-xiduoduo.jpg'
import projectJubaoJinhao from '../assets/project-jubao-jinhao.png'
import projectHoucheng from '../assets/project-houcheng.png'

export type Project = { slug: string; number: string; name: string; type: string; year: string; description: string; image: string; aspect: 'landscape' | 'portrait' | 'square' }

export const profile = {
  name: '陈见晟', monogram: 'CHEN / JS', role: '品牌设计师', location: '福建·莆田', phone: '19050324064', email: '582636681@qq.com', portrait,
  heroVideo: '/media/hero-loop.mp4', heroPoster,
  intro: '拥有超过 4 年设计经验、2 年品牌设计深耕经历，服务过酒水、食品、餐饮及快消品等行业。擅长把品牌策略转化为兼具辨识度与功能性的视觉语言，并将概念持续推向真实的消费场景。',
  services: ['Brand Strategy', 'Visual Identity', 'Packaging Systems', 'Typography & Layout'],
  facts: [{ value: '4+', label: 'YEARS IN DESIGN' }, { value: '02', label: 'YEARS IN BRAND' }, { value: 'FMCG', label: 'FOOD · BEVERAGE' }, { value: 'BFA', label: 'VISUAL COMMUNICATION' }]
}

export const projects: Project[] = [
  { slug: 'xiduoduo', number: '01', name: 'XIDUODUO', type: 'BRAND REFRESH', year: '2025', description: '围绕休闲零食品牌的视觉升级，以更清晰的产品层级与统一的触点语言，连接年轻消费场景。', image: project01, aspect: 'landscape' },
  { slug: 'jubao-jinhao', number: '02', name: 'JUBAO JINHAO', type: 'PACKAGING SYSTEM', year: '2025', description: '从 0 到 1 构建米制品的包装系统，并将 IP 与全域物料纳入一致的品牌体验。', image: project02, aspect: 'portrait' },
  { slug: 'houcheng', number: '03', name: 'HOUCHENG', type: 'VISUAL IDENTITY', year: '2024', description: '为品牌建立具有延展性的视觉识别秩序，使系统在不同传播尺度中保持清晰与辨识。', image: project03, aspect: 'landscape' },
  { slug: 'hongshunhe', number: '04', name: 'HONGSHUNHE', type: 'VISUAL DIRECTION', year: '2024', description: '一套以产品感知为中心的视觉方向探索，强调色彩、结构与消费者记忆之间的关系。', image: project04, aspect: 'square' },
  { slug: 'yuanheji', number: '05', name: 'YUANHEJI', type: 'TYPE & PACKAGING', year: '2023', description: '将命名气质、字体节奏与包装版式组合为可持续应用的品牌表达框架。', image: project05, aspect: 'landscape' },
  { slug: 'placeholder-project', number: '06', name: 'NEXT NARRATIVE', type: 'PLACEHOLDER PROJECT', year: '2023', description: '可替换的项目占位案例，用于承载后续品牌视觉、包装或跨媒介创作内容。', image: project06, aspect: 'portrait' }
]

projects[0] = {
  ...projects[0],
  name: '喜多多',
  year: '2026',
  description: '喜多多品牌面临增长瓶颈，根源在于三大困境——老品利润被压缩、新品推不动；消费场景被锁死在低频的婚宴/节庆市场，未能切入日常高频场景。与此同时，行业正面临健康化从趋势变准入门槛，使喜多多必须从“低频宴席糖水”向“高频日常消费”转型。',
  image: projectXiduoduo,
}

projects[1] = {
  ...projects[1],
  name: '聚宝金昊',
  description: '聚宝金昊是一家米制品全产业链企业，推出子品牌聚小鲜，核心产品是鲜湿米粉。\n市场竞争环境是：面条市场规模是米粉的近3倍，鲜米粉作为新兴品类尚无领导品牌，同时传统干米粉需泡发、口感偏硬，面条含麸质且不易消化。聚宝金昊拥有智能生产设备技术及全产业链优势，具备弯道超车的条件。',
  image: projectJubaoJinhao,
}

projects[2] = {
  ...projects[2],
  name: '厚承',
  image: projectHoucheng,
}

projects.splice(3)

export const expertise = [
  ['01', 'Brand Strategy', '从品牌洞察到视觉方向，建立清楚的表达基线。'], ['02', 'Visual Identity', '以系统化识别让品牌在每个触点保持一致。'], ['03', 'Packaging Systems', '让结构、材料与货架沟通共同服务产品价值。'], ['04', 'Digital Experience', '将视觉策略延伸至线上信息与体验细节。'], ['05', 'Art Direction', '在全局视野中控制画面、节奏与内容质感。']
]

export const socials = [{ label: 'SELECTED WORKS', href: '#' }, { label: 'OTHER WORKS', href: '#' }, { label: 'WORK EXPERIENCE', href: '#' }]
