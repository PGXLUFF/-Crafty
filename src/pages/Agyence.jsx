import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/all'
import React, { useRef } from 'react'
import SEO from '../assets/image/SEO.jpg'
import WEB from '../assets/image/WEB.jpg'
import DESIGN from '../assets/image/WEB_DESGIN.jpg'
import SOCIAL from '../assets/image/social-media.jpg'
import Marketing from '../assets/image/Marketing.jpg'
import DomeGallery from '../Components/Agyence/Domgallary';
import Liness from '../Components/Agyence/Liness';
import DigitalExcellence from '../Components/Agyence/Secation3';
import FAQSection from '../Components/Agyence/Secation4';
import Footer from '../Components/HOME/Footer';



const Agyence = () => {


  const imageDivRef = useRef(null)
  const imageRef = useRef(null)

  const imageArray = [SEO , WEB , DESIGN , SOCIAL , Marketing ];




  gsap.registerPlugin(ScrollTrigger)

  useGSAP(function () {
    gsap.to(imageDivRef.current, {
      scrollTrigger: {
        trigger: imageDivRef.current,
        start: 'top 25%',
        end: 'top -80%',
        pin: true,
        pinSpacing:true, 
        pinReparent:true,
        pinType:'transform',
        scrub:1,
        anticipatePin:1,
        onUpdate: (elem) => {
          const clampedProgress = Math.max(0, Math.min(0.9999, elem.progress))
          const imageIndex = Math.min(imageArray.length - 1, Math.floor(clampedProgress * imageArray.length))
          if (imageRef.current && imageArray[imageIndex]) {
            imageRef.current.src = imageArray[imageIndex]
          }
        }
      }
    })
  })

  return (
    <div>
      <div className='h-full section1 relative py-1 bg-black'>
        <div ref={imageDivRef} className='w-60 h-[15vw] rounded-2xl absolute top-86 left-[40vw] overflow-hidden'>
          <img ref={imageRef} className='h-full w-full object-cover' src="https://k72.ca/images/teamMembers/Carl_480x640.jpg?w=480&h=640&fit=crop&s=f0a84706bc91a6f505e8ad35f520f0b7" alt="" />
        </div>
        <div className=' relative font-[font2]'>
          <div className='mt-[50vh]'>
            <h1 className='text-[15vw] uppercase leading-[15vw] text-center'>FIFTY 
              <br /> TWO </h1>
          </div>
          <div className='pl-[40%] mt-20'>
            <p className='text-[2.5vw]'>&nbsp; The most impactful digital marketing doesn't chase trends—it builds authentic connections. It recognizes that behind every click, share, and conversion is a real person seeking solutions, inspiration, or community. By prioritizing genuine engagement over vanity metrics, brands create lasting relationships that transcend individual campaigns.</p>
          </div>
        </div>
      </div>
      <div className="section2 h-full p-12 w-full bg-black">
        <div className=' mt-30'> <p className='text-[2.5vw]'>&nbsp; The most impactful digital marketing doesn't chase trends—it builds authentic connections. It recognizes that behind every click, share, and conversion is a real person seeking solutions, inspiration, or community. By prioritizing genuine engagement over vanity metrics, brands create lasting relationships that transcend individual campaigns.</p></div>
      
      </div>
      <div className="w-full  h-[100vh] bg-black">
      <DomeGallery />
    </div>
     <div className='w-full h-[100vh]'>
    <Liness />
     </div>
     <div className='w-full h-full bg-black'>
    <DigitalExcellence />
    <FAQSection />
     </div>
     <Footer />
    </div>
  )
}

export default Agyence
