"use client"

import { useEffect, useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Image from "next/image"
import { ChevronLeft, ChevronRight } from "lucide-react"

const testimonials = [
  {
    id: 1,
    name: "Abdurrahman Al Gammal",
    position: "CEO of Gammal Tech",
    content:
      "Saeed was the creative mastermind behind our brand in the MENA region. He led the media production team and managed ad campaigns that truly told the world who we are. His ability to create sustainable content for our main page was invaluable, and he even pioneered Egypt's first programming podcast at a time when it was just an idea. His vision and execution made a lasting impact on our brand.",
    image: "https://media.licdn.com/dms/image/v2/D4D03AQEMsGqLqAr-tA/profile-displayphoto-shrink_800_800/B4DZbKgA.TGUAg-/0/1747154115259?e=1764201600&v=beta&t=ZHTEQVREl4-5kfUdJprGD0YALCq7b-b8PnAhD0V8JiY",
  },
  {
    id: 2,
    name: "Ehab Darwish",
    position: "CEO of Iskala",
    content:
      "What I appreciate most about Saeed is that he handles all the technical aspects so I don't have to. He delivers creative content and visuals while giving me the space to share my input when needed. This not only saves me a lot of time but also ensures I get high-quality videos that I can truly rely on for my business.",
    image: "https://media.licdn.com/dms/image/v2/D4D03AQHnjUIMKO-VrA/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1710979691069?e=1764201600&v=beta&t=ukiaxbJ5iOQpSxzgNmljZd1_NLKnRnZAHAP3mnfs7iY",
  },
  {
    id: 3,
    name: "Neom",
    position: "Upskill filmmaking camp",
    content:
      "We had a very tight timeframe and a lot to get done for our camp's content. Saeed not only met the deadline sooner than expected but also delivered professional content directions that exceeded our expectations. He's a creative mind with a hard working mentality—someone you can truly rely on to get the job done right.",
    image: "https://images.seeklogo.com/logo-png/35/1/neom-logo-png_seeklogo-358578.png",
  },
  {
    id: 4,
    name: "Rasha",
    position: "Client Manager",
    content:
      "I truly appreciated how Saeed brought the story to life even before we started shooting. His ability to translate our vision into a storyboard that closely matched the final video was remarkable. It made the entire process seamless, and I felt completely at ease knowing the project was in his hands. The end result was exactly what I had hoped for.",
    image: "https://media.licdn.com/dms/image/v2/D4D03AQGHwVMpeg6Igw/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1700673907430?e=1764201600&v=beta&t=EhPrT6UQ6YilY1oP8DEt2FkLVAvMkOP6K-PiARxMDKU",
  },
]

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isVisible, setIsVisible] = useState(false)
  const [direction, setDirection] = useState(1)

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

    const section = document.getElementById("testimonials")
    if (section) {
      observer.observe(section)
    }

    return () => {
      if (section) {
        observer.unobserve(section)
      }
    }
  }, [])

  const nextTestimonial = () => {
    setDirection(1)
    setCurrentIndex((prev) => (prev + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setDirection(-1)
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  return (
    <section id="testimonials" className="py-24 bg-[#141414]">
      <div className="container px-4 md:px-6 mx-auto">
        {/* Section header */}
        <div className="mb-12">
          <div className="flex items-center gap-3 mb-3">
            <div className="w-8 h-[3px] bg-[#E50914]" />
            <span className="text-[#E50914] text-sm font-bold uppercase tracking-[0.2em]">Testimonials</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-black text-white">
            Client <span className="text-[#E50914]">Reviews</span>
          </h2>
          <p className="text-[#b3b3b3] mt-3 max-w-2xl">
            What clients say about working with me.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="relative min-h-[280px]">
            <AnimatePresence mode="wait" initial={false}>
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, x: direction * 60 }}
                animate={isVisible ? { opacity: 1, x: 0 } : { opacity: 0, x: direction * 60 }}
                exit={{ opacity: 0, x: -direction * 60 }}
                transition={{ duration: 0.4, ease: "easeInOut" }}
                className="bg-[#1f1f1f] border border-[#2f2f2f] rounded-sm p-8 relative overflow-hidden"
              >
                {/* Red accent top bar */}
                <div className="absolute top-0 left-0 w-24 h-[3px] bg-[#E50914]" />

                {/* Large quote mark */}
                <div className="absolute top-4 right-8 text-[120px] leading-none text-[#E50914]/10 font-black select-none">
                  "
                </div>

                <div className="flex flex-col md:flex-row gap-6 md:gap-8 items-start">
                  {/* Avatar */}
                  <div className="w-16 h-16 md:w-20 md:h-20 relative rounded-full overflow-hidden shrink-0 ring-2 ring-[#E50914]/40">
                    <Image
                      src={testimonials[currentIndex].image}
                      alt={testimonials[currentIndex].name}
                      fill
                      className="object-cover"
                    />
                  </div>

                  <div className="flex-1">
                    {/* Quote */}
                    <p className="text-[#e5e5e5] text-base md:text-lg leading-relaxed mb-6 italic">
                      "{testimonials[currentIndex].content}"
                    </p>

                    {/* Attribution */}
                    <div>
                      <h4 className="font-black text-white text-lg">
                        {testimonials[currentIndex].name}
                      </h4>
                      <p className="text-[#E50914] text-sm font-semibold">
                        {testimonials[currentIndex].position}
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Navigation */}
          <div className="flex items-center justify-between mt-6">
            {/* Dots */}
            <div className="flex gap-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => {
                    setDirection(i > currentIndex ? 1 : -1)
                    setCurrentIndex(i)
                  }}
                  className={`h-[3px] rounded-full transition-all duration-300 ${
                    i === currentIndex
                      ? "bg-[#E50914] w-8"
                      : "bg-[#2f2f2f] w-4 hover:bg-[#555]"
                  }`}
                  aria-label={`Go to testimonial ${i + 1}`}
                />
              ))}
            </div>

            {/* Arrows */}
            <div className="flex gap-2">
              <button
                onClick={prevTestimonial}
                className="p-2 rounded-full bg-[#2f2f2f] hover:bg-[#E50914] text-white transition-colors duration-200"
                aria-label="Previous testimonial"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                onClick={nextTestimonial}
                className="p-2 rounded-full bg-[#2f2f2f] hover:bg-[#E50914] text-white transition-colors duration-200"
                aria-label="Next testimonial"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
