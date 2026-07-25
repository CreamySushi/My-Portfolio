import React from 'react'

const About = () => {
  const educations = [
    { id: 1, title: "Tertiary",         school: "University of Perpetual Help System", year: "2026" },
    { id: 2, title: "Senior High",      school: "Biñan City Senior High School",        year: "2022" },
    { id: 3, title: "Junior High",      school: "Jacobo National High School",           year: "2020" },
    { id: 4, title: "Primary",          school: "Malaban Elementary School",             year: "2016" },
  ]

  const experiences = [
    { id: 1, role: "Game Developer Intern", company: "Wally Wombats", location: "Las Vegas, Nevada, US", year: "May 2025 – Sept 2025", type: "OJT",
      descrition: ["Develop a 3D mobile game through Unity that cater children and design 3D model and animation in Blender",  "Manage builds with Git and led playtesting and bug fixes","Published in AppStore and Google Play Store"]},
  ]

  const certifications = [
    { id: 1, type: "CAD ESSENTIALS WITH AUTODESK FUSION", issuer: "Autodesk® Authorized Academic Partner®", year: "June 17, 2025"},
  ]
  const seminars = [
    { id: 1, type: "Unlock the Power of the Cloud: Introduction to AWS & Career Opportunities", issuer: "AWS Learning Club UPHS", year: "May 04, 2024"},
  ]

  return (
    <div id='About' className='min-h-screen pb-20 bg-(--bg-primary) dark:bg-(--dark-bg-primary)'>
      <div className='pt-16 text-center justify-center px-6 w-full md:px-16 lg:px-24 xl:px-40'>
        <h1 className='relative inline-block mx-auto text-(--text-primary) dark:text-(--dark-text-primary) text-3xl font-bold uppercase'>About My<span className='absolute left-0 -bottom-1 h-0.75 w-full rounded-full bg-(--accent-primary)'/></h1>
        <div className='relative  grid cols-1 items-start text-start justify-evenly mt-10 px-6 py-4 w-full gap-8 text-zinc-900 dark:text-slate-50  md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3'>
          

          <div className=' shadow-xl rounded-2xl px-6 py-6 dark:bg-zinc-900 border border-(--border) dark:border-(--dark-border)'>
            <h3 className='font-semibold text-(--text-primary) dark:text-(--dark-text-primary) mb-5 '>Education</h3>
            <div> 
              {educations.map((educ) => (
              <div className='flex items-start justify-between gap-4 rounded-2xl mb-6 px-6 py-4 bg-(--bg-tertiary) dark:bg-(--accent-primary)/10'>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wide text-(--accent-pressed) dark:text-(--accent-secondary) mb-0.5">{educ.title}</p>
                  <p className="text-sm font-medium text-(--text-primary) dark:text-(--dark-text-primary) leading-snug">{educ.school}</p>
                </div>
                <span className="text-xs text-(--text-tertiary) shrink-0 mt-0.5 font-mono">{educ.year}</span>
              </div>
            ))}
            </div>
          </div>
          
          
           <div className='flex flex-col gap-6'>
            <div className='shadow-xl rounded-2xl px-6 py-6 dark:bg-zinc-900 border border-(--border) dark:border-(--dark-border)'>
            <h3 className='font-semibold text-(--text-primary) dark:text-(--dark-text-primary) mb-5 '>Certificates</h3>
            <div> 
              {certifications.map((cert) => (
              <div  className='flex items-start justify-between gap-4 rounded-2xl mb-6 px-6 py-4 bg-(--bg-tertiary) dark:bg-(--accent-primary)/10'>
                <div>
                  <p className="text-sm font-medium uppercase  text-(--accent-pressed) dark:text-(--accent-secondary) leading-snug mb-0.5">{cert.type}</p>
                  <p className="text-xs font-semibold text-(--text-primary) dark:text-(--dark-text-primary) tracking-wide">{cert.issuer}</p>
                </div>
                <span className="text-xs text-(--text-tertiary) shrink-0 mt-0.5 font-mono">{cert.year}</span>
              </div>
            ))}
            </div>
          </div>

          
          <div className=' shadow-xl rounded-2xl px-6 py-6 dark:bg-zinc-900 border border-(--border) dark:border-(--dark-border)'>
            <h3 className='font-semibold text-(--text-primary) dark:text-(--dark-text-primary) mb-5 '>Seminars</h3>
            <div> 
              {seminars.map((sem) => (
              <div  className='flex items-start justify-between gap-4 rounded-2xl mb-6 px-6 py-4 bg-(--bg-tertiary) dark:bg-(--accent-primary)/10'>
                <div>
                  <p className="text-sm font-medium uppercase  text-(--accent-pressed) dark:text-(--accent-secondary) leading-snug mb-0.5">{sem.type}</p>
                  <p className="text-xs font-semibold text-(--text-primary) dark:text-(--dark-text-primary) tracking-wide">{sem.issuer}</p>
                </div>
                <span className="text-xs text-(--text-tertiary) shrink-0 mt-0.5 font-mono">{sem.year}</span>
              </div>
            ))}
            </div>
          </div>
          </div>
          

          <div className='shadow-xl rounded-2xl px-4 py-4 sm:px-6 sm:py-6 dark:bg-zinc-900 border border-(--border) dark:border-(--dark-border)'>
            <h3 className='font-semibold text-(--text-primary) dark:text-(--dark-text-primary) mb-5'>
              Experiences
            </h3>
            <div>
              {experiences.map((exp) => (
                <div className='flex flex-col rounded-2xl mb-6 px-4 py-4 sm:px-6 sm:py-4 bg-(--bg-tertiary) dark:bg-(--accent-primary)/10'>
                  <div className='flex flex-wrap justify-between items-start gap-y-1 mb-1'>
                    <div className='flex items-center gap-2 flex-wrap'>
                      <p className="text-xs sm:text-sm font-bold uppercase tracking-wide text-(--accent-pressed) dark:text-(--accent-secondary)">
                        {exp.role}
                      </p>
                      <span className="text-[10px] font-semibold px-1.5 py-0.5 rounded-full bg-(--accent-primary)/15 text-[#F97316">
                        {exp.type}
                      </span>
                    </div>
                    <span className="text-[10px] sm:text-xs text-(--text-tertiary) shrink-0 font-mono">
                      {exp.year}
                    </span>
                  </div>

                  <p className="text-xs font-semibold text-(--text-primary) dark:text-(--dark-text-primary) leading-snug">
                    {exp.company}
                  </p>
                  <p className="text-xs mb-4 text-(--text-tertiary) mt-0.5">
                    {exp.location}
                  </p>

                  <ul className='list-disc pl-5 sm:pl-8 text-xs text-(--text-primary) dark:text-(--dark-text-primary) leading-relaxed space-y-1'>
                    {exp.descrition.map((des, i) => (
                      <li key={i} className='wrap-break-word'>{des}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>


         


        </div>
      </div>
    </div>
  )
}

export default About