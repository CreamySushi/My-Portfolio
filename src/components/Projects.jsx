import React from 'react'

const Projects = () => {
  const myProjects = [
    { id: 1, srcImg: '/src/assets/Images/RACQ-Project.png', title: "RACQ Hotel Reservation",  tools: ['Python', 'Flask', 'Render', 'PostgreSQL', 'HTML', 'CSS', 'JavaScript'],
      description: "A full-stack hotel booking system with real-time availability, room management, and guest checkout flow.", link: "https://racq-hotel-management.onrender.com/"},
    { id: 2, srcImg: 'src/assets/Images/CalorieBurnPredictor.png', title: "Calorie Burn Predictor", tools: ['Python', 'Flask', 'Scikit-learn', 'Streamlit', 'Pandas', 'HTML', 'CSS', 'JavaScript'],
      description: "Machine learning model that predicts calorie expenditure from biometric and activity inputs.", link: "https://calorieburnpred2ctor.streamlit.app/"},
  ]

  return (
    <div id='Projects' className='bg-gray-100 min-h-screen pb-20 dark:bg-(--dark-bg-secondary) text-(--text-primary) dark:text-(--dark-text-primary)'>
        <div className=' pt-16 text-center justify-center px-6 py-4 w-full md:px-16 lg:px-24 xl:px-40 text-sm '>
            <h1 className='relative inline-block mx-auto text-3xl mt-2 uppercase font-bold'>Projects<span className='absolute left-0 -bottom-1 h-0.75 w-full rounded-full bg-(--accent-primary)'/></h1>
            <div className='relative  grid cols-1 items-start text-start justify-evenly mt-10 px-6 py-4 w-full gap-8 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3'>
              {myProjects.map((proj) => (

              <div className='shadow-xl rounded-2xl px-6 py-6 gap-8 border border-(--border) dark:border-(--dark-border) '>
                    <img src={proj.srcImg} alt={proj.title} className='rounded-md max-h-40 w-full object-cover' />
                    <p className='text-md font-semibold uppercase tracking-wide text-(--accent-pressed) dark:text-(--accent-secondary) py-4'>{proj.title}</p>
                    <p className='text-md leading-relaxed space-y-1 mb-5'>{proj.description}</p>
                    <div className=' flex flex-wrap gap-2'>
                      {proj.tools?.map((tool, index) => (
                        <span key={index} className='mb-0.5 text-xs px-2 py-0.5 rounded-lg font-medium border border-(--accent-primary) dark:border-(--accent-primary) dark:border-'>{tool}</span>
                      ))}
                    </div>

                    <a href={proj.link} className='inline-block mt-5 font-medium hover:underline hover:text-(--accent-primary) rounded  '>Live Project</a>
                  </div>
              ))}

            </div>
        </div>
    </div>
  )
}

export default Projects
