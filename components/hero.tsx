"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import { MagneticButton } from "@/components/magnetic-button"
import { RevealText } from "@/components/reveal-text"
import { SplitText } from "@/components/split-text"
import { ArrowRight, Play } from "lucide-react"

export default function Hero() {
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    setIsLoaded(true)
  }, [])

  return (
    <section id="hero" className="relative min-h-screen flex items-end md:items-center overflow-hidden">
      {/* Hero background image */}
      <div
        className={`absolute inset-0 w-full h-full transition-opacity duration-1000 ${
          isLoaded ? "opacity-100" : "opacity-0"
        }`}
        style={{
          backgroundImage: `url(https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Hero2.jpg-TLH1kduV3QdZplyx3g2QGN5GF3uFA3.jpeg)`,
          backgroundSize: "cover",
          backgroundPosition: "center right",
        }}
      />

      {/* Netflix-style gradient overlays */}
      {/* Bottom-to-top dark fade (content area) */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#141414] via-[#141414]/60 to-transparent" />
      {/* Left-to-right dark fade */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#141414]/80 via-[#141414]/30 to-transparent" />

      {/* Content — pinned to bottom-left like Netflix */}
      <div className="container relative z-20 px-4 md:px-6 pb-20 md:pb-0">
        <div
          className={`max-w-2xl transition-all duration-1000 ${
            isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          {/* Category label */}
          <div className="mb-4 flex items-center gap-2">
            <span className="text-[#E50914] font-bold text-xs uppercase tracking-[0.2em]">
              Creative Director
            </span>
            <span className="text-[#b3b3b3] text-xs">•</span>
            <span className="text-[#b3b3b3] text-xs uppercase tracking-wider">Alexandria, Egypt</span>
          </div>

          {/* Main heading */}
          <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black tracking-tight text-white mb-4 leading-[1.0]">
            <RevealText
              text="I'm a creative mind,"
              className="inline-block whitespace-nowrap"
              as="span"
              delay={0.5}
            />
            <span className="block mt-1 text-[#E50914]">
              <SplitText animation="slide">tell, visualize,</SplitText>
            </span>
            <span className="block text-white/90">
              <SplitText animation="slide">execute stories</SplitText>
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-base sm:text-lg text-[#b3b3b3] mb-8 sm:mb-10 max-w-lg">
            Find inspiration & share your vision — 4+ years, 30+ projects, 15+ happy clients
          </p>

          {/* CTA Buttons — Netflix style */}
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
            <MagneticButton
              asChild
              size="lg"
              className="w-full sm:w-auto bg-[#E50914] hover:bg-[#f40612] text-white font-bold text-base px-8 group transition-all duration-200"
              strength={40}
            >
              <Link href="/#portfolio" className="flex items-center justify-center gap-2">
                <Play className="w-5 h-5 fill-white" />
                View My Work
              </Link>
            </MagneticButton>

            <MagneticButton
              asChild
              size="lg"
              className="w-full sm:w-auto bg-white/20 hover:bg-white/30 backdrop-blur-sm text-white font-semibold text-base px-8 border-0 transition-all duration-200"
              strength={40}
            >
              <Link href="/#contact" className="flex items-center justify-center gap-2">
                Let's Connect
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </MagneticButton>
          </div>
        </div>
      </div>

      {/* Bottom fade into page */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#141414] to-transparent pointer-events-none" />
    </section>
  )
}
