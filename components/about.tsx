"use client"

import { useEffect, useRef } from "react"
import Image from "next/image"
import { SplitText } from "@/components/split-text"

export default function About() {
  const statsRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const counters = entry.target.querySelectorAll(".counter-value")

            counters.forEach((counter: Element) => {
              const target = Number.parseInt(counter.getAttribute("data-target") || "0", 10)
              let count = 0
              const updateCounter = () => {
                const increment = target / 50
                if (count < target) {
                  count += increment
                  ;(counter as HTMLElement).innerText = Math.ceil(count).toString()
                  setTimeout(updateCounter, 20)
                } else {
                  ;(counter as HTMLElement).innerText = target.toString()
                }
              }
              updateCounter()
            })

            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.5 },
    )

    if (statsRef.current) {
      observer.observe(statsRef.current)
    }

    return () => {
      if (statsRef.current) {
        observer.unobserve(statsRef.current)
      }
    }
  }, [])

  return (
    <section id="about" className="py-24 bg-[#141414]">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col md:flex-row gap-12 items-center">
          {/* Image column */}
          <div className="md:w-1/2 relative px-6 sm:px-0 mb-8 md:mb-0">
            <div className="relative overflow-hidden rounded-sm shadow-2xl group">
              {/* Red border glow */}
              <div className="absolute inset-0 rounded-sm ring-1 ring-[#E50914]/30 z-10 pointer-events-none" />
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/website%202.jpg-qsw73q3cIyt6HqX22fzyRzZPWUo8Tw.jpeg"
                alt="Saeed"
                width={600}
                height={800}
                className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-105"
              />
              {/* Bottom gradient overlay on image */}
              <div className="absolute bottom-0 left-0 right-0 h-1/3 bg-gradient-to-t from-[#141414]/80 to-transparent" />
            </div>
          </div>

          {/* Text column */}
          <div className="md:w-1/2">
            <div className="mt-8 md:mt-0">
              {/* Section label */}
              <div className="mb-4 flex items-center gap-3">
                <div className="w-8 h-[3px] bg-[#E50914]" />
                <span className="text-[#E50914] text-sm font-bold uppercase tracking-[0.2em]">About Me</span>
              </div>

              <h2 className="text-3xl md:text-4xl lg:text-5xl font-black mb-8 text-white leading-tight">
                <SplitText type="words" animation="slide">
                  Storyteller & Creative Director
                </SplitText>
              </h2>

              <div className="space-y-6 text-[#b3b3b3]">
                <p className="text-base sm:text-lg leading-relaxed">
                  When it comes to the intersection of storytelling, creativity, and digital strategy, I bring a unique
                  perspective. With a background spanning creative copywriting, content direction, social media strategy,
                  and filmmaking, I bring ideas to life through compelling ad campaigns, impactful brand storytelling, and
                  engaging digital content.
                </p>

                <p className="text-lg md:text-xl font-semibold text-white">
                  I simply <span className="text-[#E50914]">Write</span>,{" "}
                  <span className="text-[#E50914]">Visualize</span> and bring thoughts to life.
                </p>
              </div>

              {/* Stats */}
              <div ref={statsRef} className="grid grid-cols-3 gap-4 mt-10">
                <div className="bg-[#1f1f1f] border border-[#2f2f2f] p-5 rounded-sm hover:border-[#E50914]/50 transition-colors duration-300">
                  <p className="text-[#E50914] text-3xl md:text-4xl font-black">
                    <span className="counter-value" data-target="4">4</span>
                    <span className="text-lg">+</span>
                  </p>
                  <p className="text-[#b3b3b3] text-sm mt-1 font-medium">Years Exp.</p>
                </div>

                <div className="bg-[#1f1f1f] border border-[#2f2f2f] p-5 rounded-sm hover:border-[#E50914]/50 transition-colors duration-300">
                  <p className="text-[#E50914] text-3xl md:text-4xl font-black">
                    <span className="counter-value" data-target="30">30</span>
                    <span className="text-lg">+</span>
                  </p>
                  <p className="text-[#b3b3b3] text-sm mt-1 font-medium">Projects</p>
                </div>

                <div className="bg-[#1f1f1f] border border-[#2f2f2f] p-5 rounded-sm hover:border-[#E50914]/50 transition-colors duration-300">
                  <p className="text-[#E50914] text-3xl md:text-4xl font-black">
                    <span className="counter-value" data-target="15">15</span>
                    <span className="text-lg">+</span>
                  </p>
                  <p className="text-[#b3b3b3] text-sm mt-1 font-medium">Clients</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
