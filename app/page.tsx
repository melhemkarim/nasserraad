// app/page.tsx
'use client'

import { useState, useRef, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'
import { Instagram } from 'lucide-react'
import { Playfair_Display } from 'next/font/google'


const display = Playfair_Display({ subsets: ['latin'], weight: ['400','600','700'] })
const images = [
  { id: 1, src: '/1.jpg' },
  { id: 2, src: '/2.jpg' },
  { id: 3, src: '/3.jpg' },
  { id: 4, src: '/4.jpg' },
  { id: 5, src: '/5.jpg' },
  { id: 6, src: '/6.jpg' },
  { id: 7, src: '/7.jpg' },
  { id: 8, src: '/8.jpg' },
  { id: 9, src: '/9.jpg' },
  { id: 10, src: '/10.jpg' },
  { id: 11, src: '/11.png' },
  { id: 12, src: '/12.jpg' },
]


const videos = [
  { id: 1, src: '/v1.mov' },
  { id: 2, src: '/v2.mov' },
]

export default function Page() {
  const [activeImage, setActiveImage] = useState<string | null>(null)
  const videoRefs = useRef<HTMLVideoElement[]>([])

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const video = entry.target as HTMLVideoElement
          if (entry.isIntersecting) {
            video.play()
          } else {
            video.pause()
          }
        })
      },
      { threshold: 0.5 }
    )

    videoRefs.current.forEach((video) => {
      if (video) observer.observe(video)
    })

    return () => observer.disconnect()
  }, [])

  return (
    <main className="min-h-screen bg-white text-black overflow-x-hidden">

      {/* HERO */}
      <section className="px-4 pt-10">
        <motion.h1
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-[12vw] font-extrabold tracking-tight text-center leading-none"
        >
          NASSER RAAD
        </motion.h1>
      </section>

      {/* MODEL INFO */}
      <section id="about" className="max-w-4xl mx-auto px-4 py-20">
<motion.div
initial={{ opacity: 0, y: 30 }}
whileInView={{ opacity: 1, y: 0 }}
viewport={{ once: true }}
transition={{ duration: 0.6 }}
className={`rounded-2xl border border-black/10 p-8 md:p-10 ${display.className}`}
>
<h2 className="text-3xl font-semibold tracking-tight mb-6">Model Information</h2>


<div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-4 text-[15px]">
<div className="flex justify-between border-b py-2"><span className="opacity-70">Height</span><strong>185 cms</strong></div>
<div className="flex justify-between border-b py-2"><span className="opacity-70">Weight</span><strong>80 kgs</strong></div>
<div className="flex justify-between border-b py-2"><span className="opacity-70">Chest</span><strong>108 cms</strong></div>
<div className="flex justify-between border-b py-2"><span className="opacity-70">Waist</span><strong>31 cms</strong></div>
<div className="flex justify-between border-b py-2"><span className="opacity-70">Shoe Size</span><strong>41</strong></div>
<div className="flex justify-between border-b py-2"><span className="opacity-70">Nationality</span><strong>Lebanese</strong></div>
</div>
</motion.div>
</section>

      {/* IMAGE GRID */}
<section className="px-4 pb-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {images.map((img, index) => {
const isLastRow = index >= images.length - 2
return (
<motion.div
key={img.id}
whileHover={{ scale: 1.03 }}
initial={{ opacity: 0, y: 40 }}
whileInView={{ opacity: 1, y: 0 }}
viewport={{ once: true }}
transition={{ duration: 0.4 }}
className={`relative aspect-[3/4] bg-neutral-200 cursor-pointer overflow-hidden `}
onClick={() => setActiveImage(img.src)}
>
<Image src={img.src} alt="Model" fill className="object-cover" />
</motion.div>
)
})}
</div>
</section>

      {/* VIDEOS */}
<section className="px-4 py-20">
<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
{videos.map((video, index) => (
<motion.div
key={video.id}
initial={{ opacity: 0, y: 40 }}
whileInView={{ opacity: 1, y: 0 }}
viewport={{ once: true }}
transition={{ duration: 0.5 }}
className="relative w-full max-w-sm mx-auto aspect-[9/16] bg-black overflow-hidden"
>
<video
ref={(el) => {
if (el) videoRefs.current[index] = el
}}
src={video.src}
muted
loop
playsInline
className="w-full h-full object-contain bg-black"
/>
</motion.div>
))}
</div>
</section>

      <footer className="border-t border-black/10 py-16 px-4">
<div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
<a href="#about" className="text-xl font-semibold tracking-wide hover:underline">About</a>
<div className="flex gap-8 text-lg font-medium">
  <a
    href="https://www.instagram.com/nasser_raad.x/"
    className="relative group flex items-center gap-2"
  >
    <Instagram className="w-5 h-5" /> {/* Icon */}
    Instagram
    <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-black transition-all group-hover:w-full" />
  </a>
</div>
</div>
</footer>

      {/* FULLSCREEN VIEWER */}
      <AnimatePresence>
        {activeImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center cursor-pointer"
            onClick={() => setActiveImage(null)}
          >
            <motion.img
              src={activeImage}
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.9 }}
              className="max-h-[90vh] max-w-[90vw] object-contain"
            />
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  )
}
