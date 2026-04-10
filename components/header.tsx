"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { MagneticButton } from "@/components/magnetic-button"
import { cn } from "@/lib/utils"

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }

    window.addEventListener("scroll", handleScroll)
    handleScroll()

    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  return (
    <header
      className={cn(
        "fixed top-0 z-50 w-full transition-all duration-300",
        scrolled
          ? "bg-[#141414]/95 backdrop-blur-sm py-2 shadow-[0_2px_20px_rgba(0,0,0,0.8)]"
          : "bg-gradient-to-b from-black/80 to-transparent py-4",
      )}
    >
      <div className="container flex items-center justify-between">
        {/* Netflix-style logo */}
        <Link href="/" className="flex items-center gap-1 group">
          <span className="text-3xl font-black tracking-tight text-[#E50914] uppercase transition-opacity duration-200 group-hover:opacity-80">
            Saeed
          </span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex gap-8">
          {["About", "Services", "Portfolio", "Clients", "Contact"].map((item) => (
            <Link
              key={item}
              href={`/#${item.toLowerCase()}`}
              className={cn(
                "relative text-sm font-medium tracking-wide transition-colors duration-200",
                scrolled
                  ? "text-[#e5e5e5] hover:text-white"
                  : "text-[#e5e5e5] hover:text-white",
                "after:content-[''] after:absolute after:w-0 after:h-[2px] after:bg-[#E50914] after:left-0 after:-bottom-1 after:transition-all after:duration-300 hover:after:w-full",
              )}
            >
              {item}
            </Link>
          ))}
        </nav>

        {/* CTA button */}
        <div className="hidden md:block">
          <MagneticButton
            asChild
            variant="default"
            className="bg-[#E50914] hover:bg-[#f40612] text-white border-0 px-5 py-2 font-semibold transition-all duration-200"
          >
            <Link href="/#contact">Let's Talk</Link>
          </MagneticButton>
        </div>

        {/* Mobile hamburger */}
        <Button
          variant="ghost"
          size="icon"
          className="md:hidden text-white hover:bg-white/10 transition-colors"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? (
            <X className="h-6 w-6" />
          ) : (
            <Menu className="h-6 w-6" />
          )}
        </Button>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="fixed inset-0 top-16 z-40 bg-[#141414]/98 backdrop-blur-md md:hidden">
          <nav className="flex flex-col items-center justify-center h-full gap-8">
            {["About", "Services", "Portfolio", "Clients", "Contact"].map((item, i) => (
              <Link
                key={item}
                href={`/#${item.toLowerCase()}`}
                className="text-3xl font-bold text-white hover:text-[#E50914] transition-colors duration-200"
                onClick={() => setIsMenuOpen(false)}
                style={{ animationDelay: `${i * 0.1}s` }}
              >
                {item}
              </Link>
            ))}
            <Button
              className="mt-4 bg-[#E50914] hover:bg-[#f40612] text-white font-bold px-8 py-3 text-lg"
              onClick={() => setIsMenuOpen(false)}
              asChild
            >
              <Link href="/#contact">Let's Talk</Link>
            </Button>
          </nav>
        </div>
      )}
    </header>
  )
}
