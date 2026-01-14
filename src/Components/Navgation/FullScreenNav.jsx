import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import React, { useContext, useEffect, useRef, useState } from 'react'
import { NavbarContext } from '../Context/NavContext'
import CraftySa from '../../assets/image4/Craftysocials .png'
import { Link } from 'react-router-dom'

const FullScreenNav = () => {
    const fullNavLinksRef = useRef(null)
    const fullScreenRef = useRef(null)

    const [navOpen, setNavOpen] = useContext(NavbarContext)

    function gsapAnimation() {
        const tl = gsap.timeline()
        tl.set('.fullscreennav', { pointerEvents: 'auto' })
        tl.to('.fullscreennav', {
            display: 'block'
        })
        tl.to('.stairing', {
            delay: 0.2,
            height: '100%',
            stagger: {
                amount: -0.3
            }
        })
        tl.to('.link', {
            opacity: 1,
            rotateX: 0,
            stagger: {
                amount: 0.3
            }
        })
        tl.to('.navlink', {
            opacity: 1
        })
    }

    function gsapAnimationReverse() {
        const tl = gsap.timeline()
        tl.to('.link', {
            opacity: 0,
            rotateX: 90,
            stagger: {
                amount: 0.1
            }
        })
        tl.to('.stairing', {
            height: 0,
            stagger: {
                amount: 0.1
            }
        })
        tl.to('.navlink', {
            opacity: 0
        })
        tl.to('.fullscreennav', {
            display: 'none',
        })
        tl.set('.fullscreennav', { pointerEvents: 'none' })
    }

    const handleNavClick = () => {
        setNavOpen(false)
    }

    useGSAP(function () {
        if (navOpen) {
            document.body.style.overflow = 'hidden'
            gsapAnimation()
        } else {
            document.body.style.overflow = 'auto'
            gsapAnimationReverse()
        }
    }, [navOpen])

    return (
        <div ref={fullScreenRef} id='fullscreennav' className='fullscreennav hidden text-white bg-black overflow-hidden h-screen w-full z-51 fixed top-0 left-0'>
            <div className='h-screen w-full fixed'>
                <div className='h-full w-full flex'>
                    <div className='stairing h-full w-1/5 bg-black'></div>
                    <div className='stairing h-full w-1/5 bg-black'></div>
                    <div className='stairing h-full w-1/5 bg-black'></div>
                    <div className='stairing h-full w-1/5 bg-black'></div>
                    <div className='stairing h-full w-1/5 bg-black'></div>
                </div>
            </div>
            <div ref={fullNavLinksRef} className='relative'>
                <div className="navlink flex w-full justify-between lg:p-5 p-2 items-start">
                    <div className=''>
                        <div className='lg:w-36 w-24'>
                            <Link to='/' onClick={handleNavClick}>
                                <img
                                    src="/crafty-social-logo.png"
                                    alt="Crafty Socials logo"
                                    className="w-full h-full"
                                />
                            </Link>
                        </div>
                    </div>
                    <div onClick={handleNavClick} className='lg:h-32 h-16 w-16 lg:w-32 relative cursor-pointer'>
                        <div className='lg:h-44 h-28 lg:w-1 w-0.5 -rotate-45 origin-top absolute bg-[#D3FD50]'></div>
                        <div className='lg:h-44 h-28 lg:w-1 w-0.5 right-0 rotate-45 origin-top absolute bg-[#D3FD50]'></div>
                    </div>
                </div>
                <div className='py-[clamp(2rem,2vh,2vw)]'>
                    

                    <div className='link origin-top relative border-t border-white overflow-hidden group'>
                        <Link to='/Agyence' onClick={handleNavClick}>
                            <h1 className='font-[font2] text-5xl lg:text-[clamp(3rem,8vw,12vh)] text-center lg:leading-[0.8] lg:pt-10 pt-3 uppercase transition-opacity duration-300 group-hover:opacity-0'>Service</h1>
                        </Link>
                        <div className='moveLink absolute inset-0 text-black flex bg-[#D3FD50] overflow-hidden opacity-0 transition-opacity duration-300 group-hover:opacity-100'>
                        <Link to='/Agyence' onClick={handleNavClick} className='flex'>
                            <div className='moveX flex items-center animate-marquee'>
                                <h2 className='whitespace-nowrap font-[font2] lg:text-[clamp(3rem,8vw,12vh)] text-5xl text-center lg:leading-[0.8] lg:pt-10 pt-4 uppercase'>Crafty Socials</h2>
                                <img className='lg:h-36 h-10 rounded-full shrink-0 lg:w-96 w-34 object-contain' src={CraftySa} alt="" />
                                <h2 className='whitespace-nowrap  font-[font2] lg:text-[clamp(3rem,8vw,12vh)] text-5xl text-center lg:leading-[0.8] lg:pt-10 pt-4 uppercase'>Crafty Socials</h2>
                                <img className='lg:h-36 h-14 rounded-full shrink-0 lg:w-96 w-32 object-contain' src={CraftySa} alt="" />
                            </div>
                            </Link>
                            <Link to='/Agyence' onClick={handleNavClick} className='flex'>
                            <div className='moveX flex items-center animate-marquee'>
                                <h2 className='whitespace-nowrap font-[font2] lg:text-[clamp(3rem,8vw,12vh)] text-5xl text-center lg:leading-[0.8] lg:pt-10 pt-4 uppercase'>Crafty Socials</h2>
                                <img className='lg:h-36 h-14 rounded-full shrink-0 lg:w-96 w-32 object-contain'src={CraftySa} alt="" />
                                <h2 className='whitespace-nowrap font-[font2] lg:text-[clamp(3rem,8vw,12vh)] text-5xl text-center lg:leading-[0.8] lg:pt-10 pt-4 uppercase'>Crafty Socials</h2>
                                <img className='lg:h-36 h-14 rounded-full shrink-0 lg:w-96 w-32 object-contain' src={CraftySa} alt="" />
                            </div>
                            </Link>
                        </div>
                    </div>

                    <div className='link origin-top relative border-t border-white overflow-hidden group'>
                        <Link to='/Contact' onClick={handleNavClick}>
                            <h1 className='font-[font2] text-5xl lg:text-[clamp(3rem,8vw,12vh)] text-center lg:leading-[0.8] lg:pt-10 pt-3 uppercase transition-opacity duration-300 group-hover:opacity-0'>Contact</h1>
                        </Link>
                        <div className='moveLink absolute inset-0 text-black flex bg-[#D3FD50] overflow-hidden opacity-0 transition-opacity duration-300 group-hover:opacity-100'>
                        <Link to='/Contact' onClick={handleNavClick} className='flex'>
                            <div className='moveX flex items-center animate-marquee'>
                                <h2 className='whitespace-nowrap font-[font2] lg:text-[clamp(3rem,8vw,12vh)] text-5xl text-center lg:leading-[0.8] lg:pt-10 pt-4 uppercase'>Crafty Socials</h2>
                                <img className='lg:h-36 h-14 rounded-full shrink-0 lg:w-96 w-32 object-contain' src={CraftySa} alt="" />
                                <h2 className='whitespace-nowrap font-[font2] lg:text-[clamp(3rem,8vw,12vh)] text-5xl text-center lg:leading-[0.8] lg:pt-10 pt-4 uppercase'>Crafty Socials</h2>
                                <img className='lg:h-36 h-14 rounded-full shrink-0 lg:w-96 w-32 object-contain' src={CraftySa} alt="" />
                            </div>
                            </Link>
                            <Link to='/Contact' onClick={handleNavClick} className='flex'>
                            <div className='moveX flex items-center animate-marquee'>
                                <h2 className='whitespace-nowrap font-[font2] lg:text-[clamp(3rem,8vw,12vh)] text-5xl text-center lg:leading-[0.8] lg:pt-10 pt-4 uppercase'>Crafty Socials</h2>
                                <img className='lg:h-36 h-14 rounded-full shrink-0 lg:w-96 w-32 object-contain' src={CraftySa} alt="" />
                                <h2 className='whitespace-nowrap font-[font2] lg:text-[clamp(3rem,8vw,12vh)] text-5xl text-center lg:leading-[0.8] lg:pt-10 pt-4 uppercase'>Crafty Socials</h2>
                                <img className='lg:h-36 h-14 rounded-full shrink-0 lg:w-96 w-32 object-contain' src={CraftySa} alt="" />
                            </div>
                            </Link>
                        </div>
                    </div>

                    <div className='link origin-top relative border-y border-white overflow-hidden group'>
                        <h1 className='font-[font2] text-5xl lg:text-[clamp(3rem,8vw,12vh)] text-center lg:leading-[0.8] lg:pt-10 pt-3 uppercase transition-opacity duration-300 group-hover:opacity-0'>Blogs</h1>
                        <div className='moveLink absolute inset-0 text-black flex bg-[#D3FD50] overflow-hidden opacity-0 transition-opacity duration-300 group-hover:opacity-100'>
                            <div className='moveX flex items-center animate-marquee'>
                                <h2 className='whitespace-nowrap font-[font2] lg:text-[clamp(3rem,8vw,12vh)] text-5xl text-center lg:leading-[0.8] lg:pt-10 pt-4 uppercase'>Crafty Socials</h2>
                                <img className='lg:h-36 h-14 rounded-full shrink-0 lg:w-96 w-32 object-contain' src={CraftySa} alt="" />
                                <h2 className='whitespace-nowrap font-[font2] lg:text-[clamp(3rem,8vw,12vh)] text-5xl text-center lg:leading-[0.8] lg:pt-10 pt-4 uppercase'>Crafty Socials</h2>
                                <img className='lg:h-36 h-14 rounded-full shrink-0 lg:w-96 w-32 object-contain' src={CraftySa} alt="" />
                            </div>
                            <div className='moveX flex items-center animate-marquee'>
                                <h2 className='whitespace-nowrap font-[font2] lg:text-[clamp(3rem,8vw,12vh)] text-5xl text-center lg:leading-[0.8] lg:pt-10 pt-4 uppercase'>Crafty Socials</h2>
                                <img className='lg:h-36 h-14 rounded-full shrink-0 lg:w-96 w-32 object-contain' src={CraftySa} alt="" />
                                <h2 className='whitespace-nowrap font-[font2] lg:text-[clamp(3rem,8vw,12vh)] text-5xl text-center lg:leading-[0.8] lg:pt-10 pt-4 uppercase'>Crafty Socials</h2>
                                <img className='lg:h-36 h-14 rounded-full shrink-0 lg:w-96 w-32 object-contain' src={CraftySa} alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FullScreenNav