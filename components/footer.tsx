import Link from "next/link"
import { Instagram, Linkedin } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-[#0a0a0a] border-t border-[#1f1f1f] py-12">
      <div className="container px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand column */}
          <div className="md:col-span-2">
            <Link href="/" className="text-3xl font-black text-[#E50914] uppercase mb-4 inline-block hover:opacity-80 transition-opacity">
              Saeed
            </Link>
            <p className="text-[#b3b3b3] mb-6 max-w-md text-sm leading-relaxed">
              Creative storyteller specializing in video production, copywriting, and media direction. Bringing ideas to
              life through compelling visual narratives.
            </p>
            <div className="flex space-x-3">
              <a
                href="https://www.linkedin.com/in/muhammad-saeed-228100162/"
                className="bg-[#1f1f1f] border border-[#2f2f2f] text-[#b3b3b3] hover:text-white hover:border-[#E50914] hover:bg-[#E50914]/10 p-2.5 rounded-sm transition-all duration-200"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a
                href="https://www.instagram.com/saeedtalks1/"
                className="bg-[#1f1f1f] border border-[#2f2f2f] text-[#b3b3b3] hover:text-white hover:border-[#E50914] hover:bg-[#E50914]/10 p-2.5 rounded-sm transition-all duration-200"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
              >
                <Instagram className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick links */}
          <div>
            <h3 className="text-white font-bold text-sm uppercase tracking-wider mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {["About", "Services", "Portfolio", "Contact"].map((item) => (
                <li key={item}>
                  <Link
                    href={`/#${item.toLowerCase()}`}
                    className="text-[#b3b3b3] hover:text-[#E50914] transition-colors duration-200 text-sm"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact info */}
          <div>
            <h3 className="text-white font-bold text-sm uppercase tracking-wider mb-4">Contact</h3>
            <ul className="space-y-2">
              <li className="text-[#b3b3b3] text-sm">Alexandria, Egypt</li>
              <li>
                <a
                  href="mailto:muuhammad.saeed192@gmail.com"
                  className="text-[#b3b3b3] hover:text-[#E50914] transition-colors duration-200 text-sm"
                >
                  muuhammad.saeed192@gmail.com
                </a>
              </li>
              <li>
                <a
                  href="tel:+201094204021"
                  className="text-[#b3b3b3] hover:text-[#E50914] transition-colors duration-200 text-sm"
                >
                  +201094204021
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-[#1f1f1f] mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-[#555] text-sm">
            &copy; {new Date().getFullYear()} Saeed. All rights reserved.
          </p>
          <p className="text-[#555] text-xs">
            Creative Storyteller · Director · Producer
          </p>
        </div>
      </div>
    </footer>
  )
}
