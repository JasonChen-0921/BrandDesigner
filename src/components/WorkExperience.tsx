import workExperienceTitle from '../assets/work-experience-title.png'
import proofOfWorkTitle from '../assets/work-experience-proof-of-work.png'
import easyDigitalTitle from '../assets/work-experience-easy-digital.png'
import rattlesnakeTitle from '../assets/work-experience-rattlesnake.png'
import polydevTitle from '../assets/work-experience-polydev.png'
import AnimatedContent from './AnimatedContent'
import FoldText from './FoldText'

const experience = [
  {
    company: 'PROOF OF WORK',
    titleImage: proofOfWorkTitle,
    period: '2024/08 - 2026/05',
    description: [
      '全程参与新项目首季度设计提案，协助设计总监完成品牌LOGO及品牌核心视觉输出，并带领项目组完成VI系统、包装及线上线下全域视觉输出，确保从策略到落地的视觉一致性。',
      '与文案策略团队紧密配合，确保视觉表达与品牌话语高度统一；建立并规范项目设计流程，指导新人快速融入工作体系。',
    ],
    roles: ['主案设计师'],
  },
  {
    company: 'EASY DIGITAL AGENCY & UNDERSTAND AGENCY',
    titleImage: easyDigitalTitle,
    period: '2022/06 - 2024/05',
    description: [
      '多项目并行执行，独立完成每日高频率的线上线下海报、活动主视觉及各类营销物料的设计输出，确保节点按时交付。',
      '先后参与国贸上城、建发、万科、中骏、融创、龙湖、永鸿、厦门湾等地产项目的视觉执行，熟悉地产行业的设计规范与审美标准。',
    ],
    roles: ['平面广告设计师'],
  },
  {
    company: 'RATTLESNAKE AGENCY',
    titleImage: rattlesnakeTitle,
    period: '2022/02 - 2022/05',
    description: '负责日常各类基础视觉设计执行，包括海报、线上物料、活动素材等，根据项目需求灵活响应，按时保质交付。期间参与服务海底捞、爱奇艺、央视等知名品牌。',
    roles: ['平面设计师'],
  },
  {
    company: 'POLYDEV AGENCY',
    titleImage: polydevTitle,
    period: '2021/09-2021/12',
    description: '协助设计总监完成日常设计执行工作，以基础排版、素材整理及各类辅助性视觉任务为主。在指导下熟悉商业设计的基本工作流程与交付标准。',
    roles: ['设计总监助理'],
  },
]

export function WorkExperience() {
  return (
    <section id="work-experience" className="work-experience" aria-labelledby="work-experience-title">
      <h2 id="work-experience-title">
        <AnimatedContent direction="horizontal" reverse distance={50} duration={1.7} ease="power3.out" initialOpacity={0} animateOpacity scale={1} threshold={0.2} delay={0.3} asChild><img src={workExperienceTitle} alt="工作经历" /></AnimatedContent>
      </h2>
      <div className="work-experience-list">
        {experience.map((item) => (
          <article className="work-experience-item" key={item.company}>
            <header>
              <h3><AnimatedContent direction="vertical" distance={50} duration={1.7} ease="power3.out" initialOpacity={0} animateOpacity scale={1} threshold={0.2} delay={0.3} asChild><img src={item.titleImage} alt={item.company} /></AnimatedContent></h3>
              <time>{`(${item.period})`}</time>
            </header>
            {(Array.isArray(item.description) ? item.description : [item.description]).map((paragraph) => (
              <p key={paragraph}><FoldText className="work-experience-fold-text" text={paragraph} splitBy="char" hinge="top" trigger="scroll" duration={1.2} stagger={0.045} ease="power3.out" perspective={700} creaseShading={0.55} fontSize="inherit" fontWeight="inherit" color="inherit" /></p>
            ))}
            <AnimatedContent distance={0} duration={0.8} initialOpacity={0} animateOpacity scale={1} threshold={0.2} delay={0.3} asChild><div className="work-experience-tags" aria-label={`${item.company} roles`}>
              {item.roles.map((role) => <span key={role}>{role}</span>)}
            </div></AnimatedContent>
          </article>
        ))}
      </div>
    </section>
  )
}
