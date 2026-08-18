import { SiteHeader } from '../components/SiteHeader'
import { Hero } from '../components/Hero'
import { Profile } from '../components/Profile'
import { ScrollTransition } from '../components/ScrollTransition'
import { ProjectList } from '../components/ProjectList'
import { OtherWorks } from '../components/OtherWorks'
import { WorkExperience } from '../components/WorkExperience'
import { ContactFooter } from '../components/ContactFooter'
export default function HomePage() { return <><SiteHeader/><main><Hero/><Profile/><ScrollTransition/><ProjectList/><OtherWorks/><WorkExperience/></main><ContactFooter/></> }
