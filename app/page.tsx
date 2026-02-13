'use client'

import { useState, useRef, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'
import { Instagram } from 'lucide-react'
import { Playfair_Display } from 'next/font/google'

const display = Playfair_Display({ subsets: ['latin'], weight: ['400', '600', '700'] })

const images = [
  { id: 1, src: '/11.jpeg' },
  { id: 2, src: '/22.jpeg' },
  { id: 3, src: '/33.jpeg' },
  { id: 4, src: '/44.jpeg' },
  { id: 5, src: '/55.jpeg' },
  { id: 6, src: '/66.jpeg' },
  { id: 7, src: '/77.jpeg' },
  { id: 8, src: '/88.jpeg' },
  { id: 9, src: '/99.jpeg' },
  { id: 10, src: '/100.jpeg' },
  { id: 11, src: '/a.jpeg' },
  { id: 12, src: '/b.jpeg' },
  { id: 13, src: '/c.jpeg' },
  { id: 14, src: '/d.jpeg' },
  { id: 15, src: '/e.jpeg' },
  { id: 16, src: '/f.jpeg' },
  { id: 17, src: '/g.jpeg' },
  { id: 18, src: '/h.jpeg' },
  { id: 19, src: '/i.jpeg' },
  { id: 20, src: '/101.jpg' },
  { id: 21, src: '/102.jpg' },
  { id: 22, src: '/103.jpg' },

]

const videos = [
  { id: 1, src: '/v1.mov' },
  { id: 2, src: '/v2.mov' },
]

const experiences = [
  {
    year: '2024',
    title: 'Editorial & Fashion Campaigns',
    description: 'Worked with regional designers and fashion houses on editorial shoots and digital campaigns.'
  },
  {
    year: '2023',
    title: 'Runway & Lookbooks',
    description: 'Participated in runway presentations, showroom fittings, and seasonal lookbook productions.'
  },
  {
    year: '2022',
    title: 'Commercial & Lifestyle Shoots',
    description: 'Modeled for commercial brands, lifestyle content, and promotional media.'
  }
]

export default function Page() {
  const [activeImage, setActiveImage] = useState<string | null>(null)
  const videoRefs = useRef<HTMLVideoElement[]>([])

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const video = entry.target as HTMLVideoElement
          if (entry.isIntersecting) video.play()
          else video.pause()
        })
      },
      { threshold: 0.5 }
    )

    videoRefs.current.forEach((video) => video && observer.observe(video))
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
            <div className="flex justify-between border-b py-2"><span className="opacity-70">Height</span><strong>190 cms</strong></div>
            <div className="flex justify-between border-b py-2"><span className="opacity-70">Weight</span><strong>80 kgs</strong></div>
            <div className="flex justify-between border-b py-2"><span className="opacity-70">Chest</span><strong>108 cms</strong></div>
            <div className="flex justify-between border-b py-2"><span className="opacity-70">Waist</span><strong>31 cms</strong></div>
            <div className="flex justify-between border-b py-2"><span className="opacity-70">Shoe Size</span><strong>41</strong></div>
            <div className="flex justify-between border-b py-2"><span className="opacity-70">Birth Date</span><strong>1/1/1999</strong></div>
            <div className="flex justify-between border-b py-2"><span className="opacity-70">Hair Color</span><strong>Black</strong></div>
            <div className="flex justify-between border-b py-2"><span className="opacity-70">Eye Color</span><strong>Brown</strong></div>
            <div className="flex justify-between border-b py-2"><span className="opacity-70">City</span><strong>Dubai</strong></div>
            <div className="flex justify-between border-b py-2"><span className="opacity-70">Activities</span><strong>Horse Riding , Sports , Swimming</strong></div>
            <div className="flex justify-between border-b py-2"><span className="opacity-70">Nationality</span><strong>Lebanese</strong></div>
          </div>
        </motion.div>
      </section>

      {/* IMAGE GRID */}
      <section className="px-4 pb-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {images.map((img) => (
            <motion.div
              key={img.id}
              whileHover={{ scale: 1.03 }}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4 }}
              className="relative aspect-[3/4] bg-neutral-200 cursor-pointer overflow-hidden"
              onClick={() => setActiveImage(img.src)}
            >
              <Image src={img.src} alt="Model" fill className="object-cover" />
            </motion.div>
          ))}
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
    if (el) {
      videoRefs.current[index] = el
    }
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

      {/* ABOUT ME */}
<section className="px-4 py-20 border-t border-black/10">
<div className={`max-w-4xl mx-auto ${display.className}`}>
<motion.h2
initial={{ opacity: 0, y: 30 }}
whileInView={{ opacity: 1, y: 0 }}
viewport={{ once: true }}
transition={{ duration: 0.6 }}
className="text-3xl font-semibold tracking-tight mb-6"
>
About Me
</motion.h2>


<motion.p
initial={{ opacity: 0, y: 20 }}
whileInView={{ opacity: 1, y: 0 }}
viewport={{ once: true }}
transition={{ duration: 0.6, delay: 0.1 }}
className="text-[16px] leading-relaxed opacity-80 max-w-3xl"
>
I am a professional male model based in Dubai with experience in fashion, editorial, and commercial modeling. I am confident in front of the camera, take direction well, and adapt easily to different creative concepts. I am open to test shoots, campaigns, and collaborations with photographers, designers, and brands.
</motion.p>
</div>
</section>

      {/* FOOTER */}
      <footer className="border-t border-black/10 py-16 px-4">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
          <a href="#about" className="text-xl font-semibold tracking-wide hover:underline">About</a>
          <div className="flex gap-8 text-lg font-medium">
            <a
              href="https://www.instagram.com/nasser_raad.x/"
              className="relative group flex items-center gap-2"
            >
              <Instagram className="w-5 h-5" />
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
