import React, { useRef, useState } from 'react'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/all'

const CheckIcon = ({ className = '' }) => (
	<svg
		viewBox="0 0 24 24"
		fill="none"
		xmlns="http://www.w3.org/2000/svg"
		className={className}
	>
		<path d="M20 6L9 17l-5-5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
	</svg>
)

const Secation2 = () => {


  
  const sectionRef = useRef(null)
	const [hoveredIndex, setHoveredIndex] = useState(null)

	const advantages = [
		{ id: 1, title: 'Social Media Marketing', row: 1 },
		{ id: 2, title: 'Google Ads , Meta Ads', row: 1 },
		{ id: 3, title: 'Creative Web Design', row: 1 },
		{ id: 4, title: 'Mobile Optimization', row: 2 },
		{ id: 5, title: 'Google Ads , Meta Ads', row: 2 },
		{ id: 6, title: 'Content Strategy', row: 2 },
		{ id: 7, title: 'Email Marketing', row: 3 },
		{ id: 8, title: 'Analytics Tracking', row: 3 }
	]

	const Card = (advantage) => (
		<div
			key={advantage.id}
			onMouseEnter={() => setHoveredIndex(advantage.id)}
			onMouseLeave={() => setHoveredIndex(null)}
			className={`
				relative border-2 rounded-lg px-8 py-6
				transition-all duration-300 cursor-pointer
				${hoveredIndex === advantage.id
					? 'border-blue-500 text-white shadow-lg shadow-blue-500/20 scale-105'
					: 'border-gray-600 bg-transparent hover:border-gray-500 '}
			`}
		>
			<div className="flex items-center gap-4">
				<div
					className={`flex-shrink-0 w-6 h-6 rounded-full flex items-center justify-center transition-colors duration-900 ${hoveredIndex === advantage.id ? 'bg-blue-500' : 'bg-gray-700'}`}
				>
					<CheckIcon className="w-4 h-4 text-white" />
				</div>
				<h3 className="text-black text-lg font-semibold">{advantage.title}</h3>
			</div>
		</div>
	)

  gsap.registerPlugin(ScrollTrigger)
  useGSAP(() => {
    const ctx = gsap.context(() => {
      gsap.from('.reveal-up', {
        y: -40,
        opacity: 0,
        duration: 0.8,
        ease: 'power2.out',
        stagger: 0.12,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 80%'
        }
      })
    }, sectionRef)
    return () => ctx.revert()
  }, [])

  return (
    <div ref={sectionRef} className="h-full p-10 bg-[#FEFEFD] text-black flex items-center justify-center ">

      <div className="max-w-6xl w-full">
        <div className="text-center mb-5">
          <h1 className="reveal-up text-5xl font-bold text-BLACK mb-6 font-[font1]">Key Digital Advantages</h1>
          <p className="reveal-up text-black text-lg max-w-3xl mx-auto leading-relaxed font-[font2]">
						Experience unparalleled growth with our tailored digital marketing and website solutions, designed to elevate your brand above competitors.
					</p>
				</div>

				<div className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 reveal-up">
            {advantages.filter((item) => item.row === 1).map(Card)}
					</div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 reveal-up">
            {advantages.filter((item) => item.row === 2).map(Card)}
					</div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl mx-auto reveal-up">
            {advantages.filter((item) => item.row === 3).map(Card)}
					</div>
				</div>
      </div>
    </div>
  )
}

export default Secation2