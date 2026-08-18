import { useEffect } from 'react'
import { Route, Routes, useLocation } from 'react-router-dom'
import HomePage from './pages/HomePage'
import OtherWorkDetailPage from './pages/OtherWorkDetailPage'
import ProjectPage from './pages/ProjectPage'

const detailPathsThatStartAtTop = new Set([
  '/projects/xiduoduo',
  '/projects/jubao-jinhao',
  '/projects/houcheng',
  '/other-works/dekang-dangjia',
  '/other-works/typeface-co-creation',
])

function ProjectDetailScrollReset() {
  const { pathname } = useLocation()

  useEffect(() => {
    if (detailPathsThatStartAtTop.has(pathname)) {
      window.scrollTo({ top: 0, left: 0, behavior: 'auto' })
    }
  }, [pathname])

  return null
}

export default function App() {
  return <><ProjectDetailScrollReset /><Routes><Route path="/" element={<HomePage/>}/><Route path="/other-works/dekang-dangjia" element={<OtherWorkDetailPage/>}/><Route path="/other-works/typeface-co-creation" element={<OtherWorkDetailPage/>}/><Route path="/projects/:slug" element={<ProjectPage/>}/><Route path="*" element={<ProjectPage/>}/></Routes></>
}
