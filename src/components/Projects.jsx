import React from 'react'
import ProjectItem from './ProjectItem'
import king from '../assets/King.jpg'
import lion from '../assets/lion.jpeg'
import cctv from '../assets/cctv.jpg'

function Projects() {
  return (
    <div className='max-w-[1040px] m-auto md:pl-20 p-4 py-16'>
      <h1 className='text-4xl font-bold text-center text-[#00749b]'>Projects</h1>
      <p className='text-center py-8'>
        Welcome to my Projects! Here, I showcase a collection of projects that represent my 
        passion for creativity and innovation. Each project embodies my dedication to crafting 
        meaningful solutions and pushing the boundaries of possibility. From web applications to 
        design concepts, every endeavor reflects my commitment to excellence and my relentless 
        pursuit of mastery in my craft. Explore these creations and witness the intersection of 
        technology, artistry, and ingenuity.
      </p>
      <div className="grid sm:grid-cols-2 gap-12">
        <ProjectItem img={king} title={'King Coming soon'}/>
        <ProjectItem img={lion} title={'Find Coming soon'}/>
        <ProjectItem img={cctv} title={'CCTV Coming soon'}/>
        <ProjectItem img={king} title={'Coming soon'}/>
      </div>
    </div>
  )
}

export default Projects
