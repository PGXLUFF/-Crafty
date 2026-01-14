import React from 'react'
import Video from '../Components/HOME/Video'
import Homebottomtex from '../Components/HOME/Homebottomtex'
import Homeherotext from '../Components/HOME/Homeherotext'
import ImageCli from '../Components/HOME/imagecli'
import BluerText from '../Components/HOME/BluerText'
import Secation2 from '../Components/HOME/Secation2'
import Product from '../Components/HOME/product'
import ServicesGrid from './grid'
import CreativeAgency from '../Components/pagesss/grid3'
import InfiniteCarousel from '../Components/HOME/agyencypro'
import ScrollStack from '../Components/pagesss/ScrollStack'
import WhyChooseUs from '../Components/HOME/Chosse'
import Footer from '../Components/HOME/Footer'



const HOME = () => {
  return (
    <div className=''>
      <div className='h-[100vh] w-screen fixed -z-10 inset-0'>
        < Video />
      </div>
    <div className='h-[100vh] w-screen relative z-10 flex flex-col justify-between overflow-hidden pb-5 text-white'>
        <Homeherotext />
        <Homebottomtex />
      </div>
     <div className='w-full h-full'>
     <CreativeAgency />

     <Secation2 />
     </div>
     <ServicesGrid /> 
      <ScrollStack />
      <Product />
      <InfiniteCarousel />

      <div className='w-full bg-[#FEFEFD]'>
        <BluerText />
    
      </div>
      <div className='w-full bg-white '>
      <WhyChooseUs />
      </div>
    <div className='w-screen bg-black relative z-10'>
        <ImageCli />
       
      </div>
      <div className='text-black'  >
       <Footer />
      </div>
    </div>
  )
}  

export default HOME
