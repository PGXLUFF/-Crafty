import React, { useMemo, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useGSAP } from '@gsap/react'

gsap.registerPlugin(ScrollTrigger, useGSAP)

const ImageCli = () => {
    const containerRef = useRef(null)
    const imagePaths = ['/image7.png', '/image3.png', '/image6.png', '/image22.png']

    const gridSize = 3
    const numMasks = gridSize * gridSize

    const hiddenClipPaths = useMemo(() => {
        // collapsed triangles to avoid painting
        return Array.from({ length: numMasks }, () => 'polygon(50% 50%, 50% 50%, 50% 50%, 50% 50%)')
    }, [numMasks])

    const visibleClipPaths = useMemo(() => {
        const step = 100 / gridSize
        const paths = []
        for (let row = 0; row < gridSize; row++) {
            for (let col = 0; col < gridSize; col++) {
                const x1 = col * step
                const y1 = row * step
                const x2 = (col + 1) * step
                const y2 = (row + 1) * step
                paths.push(`polygon(${x1}% ${y1}%, ${x2}% ${y1}%, ${x2}% ${y2}%, ${x1}% ${y2}%)`)
            }
        }
        return paths
    }, [gridSize, numMasks])

    useGSAP(
        () => {
            if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return

            const images = containerRef.current?.querySelectorAll('.image') || []
            images.forEach((imageEl) => {
                const masks = imageEl.querySelectorAll('.mask')

                masks.forEach((mask, index) => {
                    gsap.set(mask, { clipPath: hiddenClipPaths[index] })
                })

                const tl = gsap.timeline({
                    scrollTrigger: {
                        trigger: imageEl,
                        start: 'top 85%',
                        once: true
                    }
                })

                tl.to(masks, {
                    clipPath: (i) => visibleClipPaths[i],
                    duration: 0.45,
                    ease: 'power2.out',
                    stagger: 0.04
                })
            })
        },
        { scope: containerRef }
    )

    return (
        <div ref={containerRef} className=' bg-white min-h-screen relative z-10'>
            <div className='w-full h-full grid grid-cols-1 lg:grid-cols-2 gap-4 p-4 sm:gap-6 sm:p-6'>
                {imagePaths.map((imagePath, i) => {
                    return (
                        <div
                            key={i}
                            className='image h-[80vh] sm:h-[80vh] w-full overflow-hidden relative rounded-md shadow-md'>
                            {Array.from({ length: numMasks }, (_, j) => (
                                <div
                                    key={j}
                                    className={`h-full w-full bg-center bg-cover mask mask${j} absolute left-0 top-0`}
                                    style={{ backgroundImage: `url(${imagePath})`, willChange: 'clip-path' }}
                                />
                            ))}
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default ImageCli
