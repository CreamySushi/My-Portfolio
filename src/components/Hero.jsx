import React from 'react'
import transparentImage from '../Images/TransparentImage.png'
import { FiSun } from "react-icons/fi";
import { FaRegMoon } from "react-icons/fa6";
import {
  SiPython, SiJavascript, SiReact, SiTailwindcss,
  SiFlask, SiGit, SiStreamlit, SiHtml5, 
  SiCss, SiFigma
} from 'react-icons/si'

const techStack = [
    { icon: SiPython, label: 'Python'},
    { icon: SiJavascript,  label: 'JavaScript' },
    { icon: SiReact,       label: 'React' },
    { icon: SiTailwindcss, label: 'Tailwind' },
    { icon: SiFlask,       label: 'Flask' },
    { icon: SiGit,         label: 'Git' },
    { icon: SiStreamlit,   label: 'Streamlit' },
    { icon: SiHtml5,       label: 'HTML5' },
    { icon: SiCss,         label: 'CSS3' }
]

const scrollingItems = [...techStack, ...techStack]

const Hero = ({ theme, setTheme }) => {
  const scrollTo = (e, id) => {
  e.preventDefault()
  const el = document.getElementById(id)
  if (el) el.scrollIntoView({ behavior: 'smooth' })
}
  return (
    <div id='/' className='min-h-screen relative overflow-hidden flex flex-col'>

        <div className='pointer-events-none absolute -left-24 top-24 h-80 w-80 rounded-full bg-cyan-400/15 blur-3xl'></div>
        <div className='pointer-events-none absolute right-0 top-40 h-96 w-96 rounded-full bg-amber-400/15 blur-3xl'></div>
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-size-[28px_28px] mask-[radial-gradient(ellipse_60%_50%_at_50%_25%,#000_70%,transparent_100%)] pointer-events-none select-none"></div>
        
        <nav className='relative z-50 flex items-center justify-between px-6 py-4 w-full md:px-16 lg:px-24 xl:px-40 text-sm  text-(--text-primary) dark:text-(--dark-text-primary)'>
            <div className=''>
                
                <a href='/' className='font-bold text-xl tracking-tight'>JAFQ</a>
            </div>
            
            
            <div className='hidden md:flex items-center gap-8 text-(--accent-secondary) dark:text-(--text-tertiary)'>
                 <a onClick={(e) => scrollTo(e, 'About')} className='hover:text-(--accent-primary) transition-colors duration-200'>About</a>
                 <a onClick={(e) => scrollTo(e, 'Projects')} className='hover:text-(--accent-primary) transition-colors duration-200'>Projects</a>
                 <a onClick={(e) => scrollTo(e, 'Contact')} className='hover:text-(--accent-primary) transition-colors duration-200'>Contact</a>
            </div>

            <div className='flex items-center gap-2'>
                <button onClick={() => setTheme(prev => !prev)} className='p-2 rounded-lg text-(--text-tertiary) hover:text-(--accent-primary) hover:bg-(--accent-primary)/10 transition-all duration-200' aria-label='Toggle theme'>{theme ? <FaRegMoon size={16} /> : <FiSun size={16} />}</button>
                <a href='' className='hidden md:block px-6 py-2 bg-(--accent-primary) hover:bg-(--accent-pressed) active:scale-95 transition-all rounded-full text-(--dark-text-primary) font-semibold text-sm duration-200'>
                   Resume
                </a>
            </div>
        </nav>

        <div className='relative flex flex-col-reverse md:flex-row items-center justify-center mt-10 px-6 py-4 w-full gap-8 md:gap-16 md:px-16 lg:px-24 xl:px-40 flex-1'>

            <div className='flex-1 max-w-md text-center md:text-left '>
                <span className='inline-block text-xs font-semibold tracking-widest uppercase text-(--text-tertiary) mb-4 '>Web Developer · Philippines</span>
                <h1 className='relative inline-flex gap-4 text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-(--text-primary) dark:text-(--dark-text-primary) mb-2' >Aaron <br /> 
                    <span className='text-(--accent-primary)'> Quirante</span>
                    <span className='absolute left-0 -bottom-1 h-1 w-full rounded-full bg-(--accent-primary)'/>
                </h1>
                

                <p className='max-w-sm mt-6 text-base text-(--text-secondary) dark:text-(--text-tertiary) leading-relaxed md:max-w-md'>
                    I am a Computer Engineering graduate who builds fast, clean web experiences. 
                    I am actively seeking opportunities to ship high-quality products. 
                </p>
                <div className='mt-8 flex flex-col sm:flex-row items-center md:items-start justify-center md:justify-start  gap-4'>
                    <a onClick={(e) => scrollTo(e, 'Projects')} className='px-6 py-4 rounded-full bg-(--accent-primary) hover:bg-(--accent-pressed) text-(--dark-text-primary) font-semibold text-sm active:scale-95 transition-all duration-200'>
                        See my work
                    </a>
                    <a onClick={(e) => scrollTo(e, 'Contact')} className='px-6 py-4 rounded-full border boder-(--border) dark:border-(--dark-border) text-(--text-secondary) dark:text-(--text-tertiary) hover:border-(--accent-primary) hover:text-(--accent-primary) font-semibold text-sm active:scale-95 transition-all duration-200'>
                        Get in touch
                    </a>
                </div>
            </div>
            <div className='rounded-[50%] p-1 items-center justify-center h-80 w-80 overflow-hidden bg-linear-to-b from-(--accent-secondary) via-(--accent-primary) to-(--accent-pressed) shadow-[0_0_60px_rgba(249,115,22,0.2)] sm:h-80 sm:w-80 md:h-100 md:w-100 lg:h-120 lg:w-120 xl:h-140 xl:w-140'>
                <img className='w-full h-full object-cover rounded-[50%]' src={transparentImage} alt='Aaron Quirante'/>
            </div>
        </div>
        <div className="relative mt-16 w-full">
        <div className="pointer-events-none absolute left-0 top-0 h-full w-24 z-10 bg-linear-to-r from-[#FAFAF9] to-transparent dark:from-[#111110]" />
        <div className="pointer-events-none absolute right-0 top-0 h-full w-24 z-10 bg-linear-to-l from-[#FAFAF9] to-transparent dark:from-[#111110]" />

        <div className="border-t border-[#E8E6DF] dark:border-[#3A3A38]" />

        <div className="overflow-hidden py-5">
          <div className="flex gap-10 w-max animate-marquee">
            {scrollingItems.map((tech, i) => {
              const Icon = tech.icon
              return (
                <div
                  key={i}
                  className="group flex items-center gap-2.5 px-3 py-1.5 rounded-lg group-hover:bg-(--accent-primary)/10 transition-colors duration-200 cursor-default"
                >
                  <Icon size={18} className="text-(--text-tertiary) group-hover:text-(--accent-primary) transition-colors duration-200" />
                  <span className="text-xs font-medium text-(--text-tertiary) group-hover:text-(--accent-primary) whitespace-nowrap transition-colors duration-200">
                    {tech.label}
                  </span>
                </div>
              )
            })}
          </div>
        </div>
        <div className="border-b border-(--border) dark:border-(--dark-border)" />
      </div>      
    </div>
  )
}


export default Hero