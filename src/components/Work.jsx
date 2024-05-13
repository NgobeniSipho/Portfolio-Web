import React from 'react'
import WorkItem from './WorkItem'

const data = [
    {
        year: 2024,
        title: 'Full-Stack Developer',
        duration: '1 year',
        details: 
        'Presently, I am immersed in a comprehensive full-stack training program at Capaciti, where I am honing my skills across various dimensions of software development.'
    },
    {
        year: 2023,
        title: 'Junior Software Developer',
        duration: '6 Months',
        details: 
        'I undertook a six-month contract as a Junior Developer in Modern Centric Holdings to develop web applications for the company. My responsibilities encompassed various facets of the project, including assisting in website design, backend development utilizing C#, PHP, Java, and DMS technologies, frontend development with HTML, CSS, and JavaScript, thorough code testing, software documentation, updating existing websites, researching innovative technologies to enhance website effectiveness, and handling website hosting.'
    },
    {
        year: 2022,
        title: 'Software Developer Intern',
        duration: '1 year',
        details: 
        ' After completing my studies, I embarked on a 12-month internship as a software developer at GNS Enterprise. During this time, my responsibilities included debugging and troubleshooting code, meticulously documenting and testing software products, testing software applications and patches, experimenting with program design elements, researching and evaluating new technologies and tools to enhance development processes. Additionally, I had the opportunity to demonstrate my programming skills by writing programs in C++ and Java, which were evaluated by senior developers. '
    },
];

function Work() {
  return (
    <div className='max-w-[1040px] m-auto md:pl-20 p-4 py-16'>
      <h1 className='text-4xl font-bold text-center text-[#00749b]'>Work</h1>
      {data.map((item, idx) => (
        <WorkItem 
          key={idx} 
          year={item.year} 
          title={item.title} 
          duration={item.duration} 
          details={item.details}
        />
      ))}
    </div>
  )
}

export default Work
