"use client"

import { useEffect, useState } from "react"
import { motion } from "framer-motion"
import { Pen, Film, Video, Camera, Scissors, Megaphone } from "lucide-react"

interface Service {
  id: number
  title: string
  description: string
  icon: React.ReactNode
  tag: string
}

const services: Service[] = [
  {
    id: 1,
    title: "Creative Copywriting",
    description: "Compelling creative copywriting that engages your audience and drives action through storytelling.",
    icon: <Pen className="w-8 h-8" />,
    tag: "Copy",
  },
  {
    id: 2,
    title: "Content Creation",
    description: "End-to-end content creation for social media, websites, and marketing campaigns.",
    icon: <Camera className="w-8 h-8" />,
    tag: "Content",
  },
  {
    id: 3,
    title: "Directing",
    description: "Creative direction and visual storytelling that brings your vision to life.",
    icon: <Film className="w-8 h-8" />,
    tag: "Direction",
  },
  {
    id: 4,
    title: "Brand Storytelling",
    description: "Strategic storytelling that connects your brand with your target audience.",
    icon: <Megaphone className="w-8 h-8" />,
    tag: "Branding",
  },
  {
    id: 5,
    title: "Media Production",
    description: "Full-scale media production services from concept to final delivery, including commercials and branded content.",
    icon: <Video className="w-8 h-8" />,
    tag: "Production",
  },
  {
    id: 6,
    title: "Post-Production",
    description: "Advanced post-production including color grading and sound design.",
    icon: <Scissors className="w-8 h-8" />,
    tag: "Post",
  },
]

export default function Services() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true)
          }
        })
      },
      { threshold: 0.1 }
    )

    const section = document.getElementById("services")
    if (section) {
      observer.observe(section)
    }

    return () => {
      if (section) {
        observer.unobserve(section)
      }
    }
  }, [])

  return (
    <section id="services" className="py-24 bg-[#141414]">
      <div className="container px-4 md:px-6 mx-auto">
        {/* Section header */}
        <div className="mb-12">
          <div className="flex items-center gap-3 mb-3">
            <div className="w-8 h-[3px] bg-[#E50914]" />
            <span className="text-[#E50914] text-sm font-bold uppercase tracking-[0.2em]">Services</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-black text-white">
            What I <span className="text-[#E50914]">Offer</span>
          </h2>
          <p className="text-[#b3b3b3] mt-3 max-w-2xl">
            Professional creative services to help you tell your story and reach your audience.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {services.map((service) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 20 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: service.id * 0.08 }}
              className="group relative bg-[#1f1f1f] border border-[#2f2f2f] rounded-sm p-6 hover:border-[#E50914]/60 hover:bg-[#252525] transition-all duration-300 overflow-hidden cursor-default"
            >
              {/* Red accent line on hover */}
              <div className="absolute top-0 left-0 w-0 h-[3px] bg-[#E50914] group-hover:w-full transition-all duration-500" />

              {/* Tag */}
              <span className="inline-block text-xs font-bold text-[#E50914] uppercase tracking-widest mb-4 bg-[#E50914]/10 px-2 py-1 rounded-sm">
                {service.tag}
              </span>

              {/* Icon */}
              <div className="mb-4 text-[#E50914] transition-transform duration-300 group-hover:scale-110 w-fit">
                {service.icon}
              </div>

              <h3 className="text-lg font-bold text-white mb-2 group-hover:text-[#E50914] transition-colors duration-300">
                {service.title}
              </h3>
              <p className="text-[#b3b3b3] text-sm leading-relaxed">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
