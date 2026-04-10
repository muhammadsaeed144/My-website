"use client"

import Image from "next/image"

interface Client {
  name: string
  logo: string
  width: number
  height: number
}

const clients: Client[] = [
  {
    name: "QOMRA",
    logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/1694011189521-YNUiNGRBhDJJCQ6Gyg3XmiaKvS9hdV.jpeg",
    width: 200,
    height: 100,
  },
  {
    name: "AUC",
    logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/AUC2-0HODdqazFQPrLXRaUsxHCxBBhjBNKd.png",
    width: 200,
    height: 100,
  },
  {
    name: "First LEGO League",
    logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/first-lego-league-logo-BA68949386-seeklogo.com-kHI6iEzZvF8lkFCZveHLWflXYWkRn6.png",
    width: 200,
    height: 100,
  },
  {
    name: "Same Fathy",
    logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Same%20fathy-poNNTi51J29amZuVdkCll2J5BwlntL.png",
    width: 200,
    height: 100,
  },
  {
    name: "LEGO",
    logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/hd-lego-logo-transparent-background-701751694773038ttazskfwrq-zhMsxxmJi9fR3WCgvf1s1C4w2B504G.png",
    width: 200,
    height: 100,
  },
  {
    name: "Madinet Masr",
    logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/high-c67opy-1-vcRjqwEkZLjctQRPyre3p5BJXcjBTB.png",
    width: 200,
    height: 100,
  },
  {
    name: "RUBEX",
    logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Rubex-International-logo-scaled-1-aDkQZLtGuLFJlc9QukTA14cqgZHGLm.png",
    width: 200,
    height: 100,
  },
  {
    name: "NEOM",
    logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Neom-1KO0f7fPhlUsYjvdcEGom2RsU9kIhs.png",
    width: 200,
    height: 100,
  },
]

export default function Clients() {
  return (
    <section id="clients" className="py-24 bg-[#0a0a0a]">
      <div className="container px-4 md:px-6 mx-auto">
        {/* Section header */}
        <div className="mb-12">
          <div className="flex items-center gap-3 mb-3">
            <div className="w-8 h-[3px] bg-[#E50914]" />
            <span className="text-[#E50914] text-sm font-bold uppercase tracking-[0.2em]">Collaborations</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-black text-white">
            Trusted <span className="text-[#E50914]">Partners</span>
          </h2>
          <p className="text-[#b3b3b3] mt-3 max-w-2xl">
            Proud to have collaborated with these amazing brands and organizations.
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 sm:gap-4">
          {clients.map((client, index) => (
            <div
              key={client.name}
              className="relative bg-[#1a1a1a] border border-[#2f2f2f] rounded-sm p-5 hover:border-[#E50914]/50 hover:bg-[#222] transition-all duration-300 group"
            >
              <div className="aspect-[2/1] relative flex items-center justify-center">
                <Image
                  src={client.logo}
                  alt={client.name}
                  fill
                  className="object-contain p-2 transition-all duration-300 group-hover:scale-110 brightness-75 group-hover:brightness-100 grayscale group-hover:grayscale-0"
                  sizes="(max-width: 640px) 150px, 200px"
                  priority={index < 4}
                />
              </div>
              <p className="text-center text-[#b3b3b3] text-xs mt-3 font-medium group-hover:text-white transition-colors duration-200">
                {client.name}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
