import { Link } from 'react-router-dom'
import projectCornerMark from '../assets/project-corner-mark.png'
import { projects } from '../data/portfolio'
import { useReveal } from '../hooks/useReveal'

export function ProjectList() {
  const ref = useReveal<HTMLElement>()

  return (
    <section id="work" className="section projects reveal" ref={ref}>
      <header className="projects-heading">
        <h2>精选作品 <sup>(3)</sup></h2>
        <span>(2024—2026)</span>
      </header>

      <div className="project-list">
        {projects.map((project) => (
          <article className={`project project-${project.slug}`} key={project.slug}>
            <Link to={`/projects/${project.slug}`} className="project-media" aria-label={`查看 ${project.name} 项目`}>
              <img src={project.image} alt={`${project.name} 项目封面`} />
            </Link>

            <div className="project-copy">
              <div className="project-copy-heading">
                <h3>{project.name}</h3>
                <time dateTime={project.year}>({project.year})</time>
              </div>
              <div className="project-sticky-copy">
                <div className="project-copy-body">
                  {project.slug === 'xiduoduo' ? <>
                    <p className="project-description">喜多多品牌面临增长瓶颈，根源在于三大困境——老品利润被压缩、新品推不动；消费场景被锁死在低频的婚宴/节庆市场，未能切入日常高频场景。</p>
                    <p className="project-description">与此同时，行业正面临健康化从趋势变准入门槛，使喜多多必须从“低频宴席糖水”向“高频日常消费”转型。</p>
                  </> : project.slug === 'jubao-jinhao' ? <>
                    <p className="project-description">聚宝金昊是米制品全产业链企业，推出子品牌“聚小鲜”切入鲜米粉赛道。</p>
                    <p className="project-description">面条市场规模近米粉的3倍，传统干米粉需泡发且口感偏硬，面条含麸质不易消化，而鲜米粉具有不含麸质、易消化、30秒出餐的差异化优势。聚宝金昊依托智能装备技术和全产业链能力，意图在面条主导的主食市场中开辟鲜米粉新品类。</p>
                  </> : project.slug === 'houcheng' ? <>
                    <p className="project-description">厚承是一个新会陈皮品牌，陈皮行业长期处于“散乱假”状态——以果农散户为主，缺乏品牌正规军，假冒伪劣横行，消费者想买但不懂鉴别、不敢下手。</p>
                    <p className="project-description">厚承虽有全产业链基础和品质实力，但品牌认知薄弱，没能把“真”的优势讲清楚。借鉴酣客酱酒的社群裂变模式，通过建立陈皮鉴定知识体系+创始人IP+圈层经销体系，在混乱的陈皮市场中建立信任壁垒，抢占“真年份陈皮”的认知空位。</p>
                  </> : <p className="project-description">{project.description}</p>}
                  {project.slug === 'xiduoduo' ? (
                    <div className="project-tags" aria-label="项目服务内容">
                      <span>IP形象升级</span>
                      <span>包装设计</span>
                    </div>
                  ) : project.slug === 'jubao-jinhao' ? (
                    <div className="project-tags" aria-label="项目服务内容">
                      <span>logo设计</span>
                      <span>IP形象调整</span>
                      <span>包装设计</span>
                    </div>
                  ) : project.slug === 'houcheng' ? (
                    <div className="project-tags" aria-label="项目服务内容">
                      <span>包装设计</span>
                    </div>
                  ) : <p className="project-type">{project.type}</p>}
                </div>
              </div>
              <img className="project-corner-mark" src={projectCornerMark} alt="" />
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}
