import React from 'react'
import ProfileDropDown from './ProfileDropDown'
import ProfileSection from './ProfileSection'
import ProjectsSection from './ProjectsSection'
import Footer from './Footer'


export default function App() {
  return (
    <>
    <ProfileDropDown/>
   


<section id="about">
  <ProfileSection/>
</section>

<section id="projects">
  <ProjectsSection/>
</section>

<section id="contact">
  <Footer/>
</section>

   


     
    
    
    </>
  )
}
