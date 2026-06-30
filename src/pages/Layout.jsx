import { useEffect, useRef, useState } from 'react'

import Hero from '../components/Hero'
import About from '../components/About'
import Projects from '../components/Projects'
import Footer from '../components/Footer'
import Contact from '../components/Contact'
import Scrolltohero from '../components/Scrolltohero'



const Layout = () => {

  const scrollTo = (e, id) => {
  e.preventDefault()
  const el = document.getElementById(id)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  };

  const [theme, setTheme] = useState(() => {
    const savedTheme = localStorage.getItem('curTheme');
    return savedTheme || 'light';
  });

  useEffect(() => {
    localStorage.setItem('curTheme', theme)
  }, [theme]);
  
  
  return (
    <div className={`${theme === 'dark' ? 'dark' : ''} bg-(--bg-primary) dark:bg-(--dark-bg-primary)`} >
        <Hero theme={theme} setTheme={setTheme} />
        <About/>
        <Projects/>
        <Contact/>
        <Footer/>
        <Scrolltohero/>
    </div>
  )
}

export default Layout