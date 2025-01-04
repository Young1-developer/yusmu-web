import React from 'react'
import './Home.css'
import FeaturesSection from '../../components/Sections/FeaturesSection'
import  HeroSection from '../../components/Sections/HeroSection'
import StatisticsSection from '../../components/Sections/StatisticsSection'
import Testimonial from'../../components/Sections/Testimonial'
import PopularCoursesSection from '../../components/Sections/PopularCoursesSection'



const Home = () => {
  return (
    <div>
    <HeroSection />
    <div className='container'>
    <FeaturesSection />
    <PopularCoursesSection />
    <StatisticsSection />
    <Testimonial />
    </div>
    
    </div>
  )
}

export default Home