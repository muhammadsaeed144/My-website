"use client"

import { useRef } from "react"
import { motion } from "framer-motion"
import { ChevronLeft, ChevronRight } from "lucide-react"

interface Project {
  id: number
  title: string
  category: string
  vimeoId?: string
  vimeoHash?: string
  youtubeId?: string
  description: string
}

const projects: Project[] = [
  {
    id: 1,
    title: "L,b3eed Song",
    category: "Commercial",
    vimeoId: "896506468",
    vimeoHash: "ee959d2c0b",
    description: "First Ad and camera operator in a commercial song",
  },
  {
    id: 2,
    title: "Rubex",
    category: "Commercial",
    vimeoId: "896503877",
    vimeoHash: "515f52cd43",
    description: "Factory commercial Ad",
  },
  {
    id: 3,
    title: "Owl Coffee Ad",
    category: "Documentary",
    vimeoId: "733672862",
    vimeoHash: "c31bfb918c",
    description: "Cafe Commercial Ad",
  },
  {
    id: 4,
    title: "NEOM-Upscale Film Making Camp",
    category: "Commercial",
    vimeoId: "1062044941",
    vimeoHash: "b4048c75ca",
    description: "A full filmmaking camp content",
  },
  {
    id: 5,
    title: "Our Only World",
    category: "Commercial",
    vimeoId: "1062051132",
    vimeoHash: "77247f5a99",
    description: "Created and directed the storyline for this environmental awareness song.",
  },
  {
    id: 6,
    title: "Gammal Tech Short Documentary",
    category: "Documentary",
    vimeoId: "1062055541",
    vimeoHash: "3910731b5f",
    description: "A deep dive into one of the most important tech educational companies in MENA.",
  },
  {
    id: 7,
    title: "Saeed Talks",
    category: "Series",
    vimeoId: "1062079476",
    vimeoHash: "cb033e182b",
    description: "Educational series delivering insights for aspiring creatives.",
  },
  {
    id: 8,
    title: "G-Cast",
    category: "Series",
    vimeoId: "1062430579",
    vimeoHash: "dedaa0f348",
    description: "The first programming education podcast in the MENA region",
  },
  {
    id: 9,
    title: "Sudair Saudi National Day",
    category: "Commercial",
    youtubeId: "iXLor_CbJqk",
    description: "Professional video production and editing showcase.",
  },
  {
    id: 10,
    title: "Abbott X Kuwait Blood Bank",
    category: "Commercial",
    vimeoId: "1096243125",
    vimeoHash: "58379d674f",
    description: "Blood awareness campaign",
  },
  {
    id: 11,
    title: "Tesla Manager X Gammal Tech",
    category: "Interview",
    youtubeId: "iCTEYPwvhCQ",
    description: "Educational interview for awareness",
  },
  {
    id: 12,
    title: "Monlycke X Soliman Alhabib",
    category: "Commercial",
    vimeoId: "1128620587",
    vimeoHash: "a8c511dbf8",
    description: "Patient awareness teaser video",
  },
  {
    id: 13,
    title: "Whites Hygiene Campaign",
    category: "Commercial",
    vimeoId: "1096217860",
    vimeoHash: "33d0d9d8af",
    description: "Whites hygiene campaign through Saudi Arabia",
  },
]

const CATEGORY_ORDER = ["Commercial", "Documentary", "Series", "Interview"]

function VideoCard({ project }: { project: Project }) {
  // YouTube and Vimeo need different allow policies
  const embedSrc = project.youtubeId
    ? `https://www.youtube.com/embed/${project.youtubeId}?rel=0`
    : `https://player.vimeo.com/video/${project.vimeoId}?h=${project.vimeoHash}&title=0&byline=0`

  const allowPolicy = project.youtubeId
    ? "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
    : "autoplay; fullscreen; picture-in-picture"

  return (
    // Use whileHover directly on motion.div — avoids CSS transform conflict
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "0px 0px -40px 0px" }}
      whileHover={{ scale: 1.04, zIndex: 10 }}
      transition={{ duration: 0.35, ease: "easeOut" }}
      className="flex-shrink-0 w-[280px] sm:w-[320px] rounded-sm overflow-hidden bg-[#1f1f1f] border border-[#2f2f2f] hover:border-[#E50914]/60 cursor-pointer relative"
      style={{ transformOrigin: "center center" }}
    >
      {/* Video embed */}
      <div className="relative aspect-video bg-[#0a0a0a]">
        <iframe
          src={embedSrc}
          className="absolute inset-0 w-full h-full"
          allow={allowPolicy}
          allowFullScreen
          loading="lazy"
          title={project.title}
        />
      </div>

      {/* Info bar */}
      <div className="p-4">
        <h3 className="text-sm font-bold text-white truncate">
          {project.title}
        </h3>
        <p className="text-[#b3b3b3] text-xs mt-1 line-clamp-2 leading-relaxed">
          {project.description}
        </p>
      </div>
    </motion.div>
  )
}

function NetflixRow({ category, items }: { category: string; items: Project[] }) {
  const rowRef = useRef<HTMLDivElement>(null)

  const scroll = (direction: "left" | "right") => {
    if (!rowRef.current) return
    rowRef.current.scrollBy({
      left: direction === "right" ? 660 : -660,
      behavior: "smooth",
    })
  }

  return (
    <div className="mb-14">
      {/* Row header */}
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-3">
          <div className="w-1 h-6 bg-[#E50914] rounded-full flex-shrink-0" />
          <h3 className="text-lg md:text-xl font-bold text-white uppercase tracking-wide">
            {category}
          </h3>
          <span className="text-[#b3b3b3] text-sm">({items.length})</span>
        </div>

        <div className="flex gap-2">
          <button
            onClick={() => scroll("left")}
            className="p-1.5 rounded-full bg-[#2f2f2f] hover:bg-[#E50914] text-white transition-colors duration-200"
            aria-label={`Scroll ${category} left`}
          >
            <ChevronLeft className="w-4 h-4" />
          </button>
          <button
            onClick={() => scroll("right")}
            className="p-1.5 rounded-full bg-[#2f2f2f] hover:bg-[#E50914] text-white transition-colors duration-200"
            aria-label={`Scroll ${category} right`}
          >
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Scrollable row — hide scrollbar cross-browser */}
      <div
        ref={rowRef}
        className="flex gap-3 overflow-x-auto pb-3"
        style={{
          scrollBehavior: "smooth",
          msOverflowStyle: "none",
          scrollbarWidth: "none",
        }}
      >
        {items.map((project) => (
          <VideoCard key={project.id} project={project} />
        ))}
      </div>
    </div>
  )
}

export default function Portfolio() {
  // Group projects by category in defined order
  const grouped = CATEGORY_ORDER.reduce<Record<string, Project[]>>((acc, cat) => {
    const items = projects.filter((p) => p.category === cat)
    if (items.length > 0) acc[cat] = items
    return acc
  }, {})

  return (
    <section id="portfolio" className="py-24 bg-[#141414]">
      <div className="container px-4 md:px-6 mx-auto">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-12"
        >
          <div className="flex items-center gap-3 mb-3">
            <div className="w-8 h-[3px] bg-[#E50914]" />
            <span className="text-[#E50914] text-sm font-bold uppercase tracking-[0.2em]">Portfolio</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-black text-white">
            Featured <span className="text-[#E50914]">Work</span>
          </h2>
          <p className="text-[#b3b3b3] mt-3 max-w-2xl">
            A curated collection of video production, direction, and storytelling projects.
          </p>
        </motion.div>

        {/* Netflix rows per category */}
        {Object.entries(grouped).map(([category, items]) => (
          <NetflixRow key={category} category={category} items={items} />
        ))}
      </div>
    </section>
  )
}
