"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Mail, Phone, MapPin, Send, Loader2, Linkedin, Instagram } from "lucide-react"
import { toast } from "react-hot-toast"

interface FormData {
  name: string
  email: string
  subject: string
  message: string
}

const contactInfo = [
  {
    title: "Email",
    value: "muuhammad.saeed192@gmail.com",
    link: "mailto:muuhammad.saeed192@gmail.com",
    icon: <Mail className="w-5 h-5" />,
  },
  {
    title: "Phone",
    value: "+201094204021",
    link: "tel:+201094204021",
    icon: <Phone className="w-5 h-5" />,
  },
  {
    title: "Location",
    value: "Alexandria, Egypt",
    link: "https://maps.google.com/?q=Alexandria,Egypt",
    icon: <MapPin className="w-5 h-5" />,
  },
]

const socialLinks = [
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/muhammad-saeed-228100162/",
    icon: <Linkedin className="w-5 h-5" />,
  },
  {
    name: "Instagram",
    url: "https://www.instagram.com/saeedtalks1/",
    icon: <Instagram className="w-5 h-5" />,
  },
]

export default function Contact() {
  const [isLoading, setIsLoading] = useState(false)
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    subject: "",
    message: "",
  })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)

    try {
      const webhookData = {
        name: formData.name,
        email: formData.email,
        subject: formData.subject,
        message: formData.message,
        date: new Date().toISOString(),
      }

      const response = await fetch("https://hook.eu2.make.com/lb8euigp1ptufy7ruhxylpyzyb26d6t6", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(webhookData),
      })

      if (response.ok) {
        setFormData({ name: "", email: "", subject: "", message: "" })
        toast.success("Message sent successfully!")
      } else {
        const errorText = await response.text()
        console.error("Webhook error:", errorText)
        toast.error("Failed to send message. Please try again.")
      }
    } catch (error) {
      console.error("Submission error:", error)
      toast.error("Something went wrong. Please try again later.")
    } finally {
      setIsLoading(false)
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  return (
    <section id="contact" className="py-24 bg-[#0a0a0a]">
      <div className="container px-4 md:px-6">
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
            <span className="text-[#E50914] text-sm font-bold uppercase tracking-[0.2em]">Get In Touch</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-black text-white">
            Let's Create <span className="text-[#E50914]">Together</span>
          </h2>
          <p className="text-[#b3b3b3] mt-3 max-w-2xl">
            Ready to bring your vision to life? Share your ideas and let's create something amazing.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-6 sm:gap-8">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-2 space-y-4"
          >
            <div className="bg-[#1f1f1f] border border-[#2f2f2f] rounded-sm p-8">
              <h3 className="text-xl font-black text-white mb-6">Contact Information</h3>
              <div className="space-y-4">
                {contactInfo.map((info) => (
                  <a
                    key={info.title}
                    href={info.link}
                    className="flex items-center gap-4 p-4 rounded-sm bg-[#141414] hover:bg-[#252525] border border-[#2f2f2f] hover:border-[#E50914]/50 transition-all duration-200 group"
                  >
                    <div className="bg-[#E50914]/10 p-3 rounded-sm text-[#E50914] group-hover:bg-[#E50914] group-hover:text-white transition-all duration-200">
                      {info.icon}
                    </div>
                    <div>
                      <p className="text-[#b3b3b3] text-xs uppercase tracking-wider">{info.title}</p>
                      <p className="text-white font-medium text-sm">{info.value}</p>
                    </div>
                  </a>
                ))}
              </div>

              <div className="mt-8 pt-8 border-t border-[#2f2f2f]">
                <h4 className="text-white font-bold mb-4 text-sm uppercase tracking-wider">Follow Me</h4>
                <div className="flex gap-3">
                  {socialLinks.map((social) => (
                    <a
                      key={social.name}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-[#141414] border border-[#2f2f2f] p-3 rounded-sm text-[#b3b3b3] hover:text-white hover:border-[#E50914] hover:bg-[#E50914]/10 transition-all duration-200"
                      aria-label={social.name}
                    >
                      {social.icon}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-3 bg-[#1f1f1f] border border-[#2f2f2f] rounded-sm p-6 sm:p-8"
          >
            <h3 className="text-xl font-black text-white mb-6">Send a Message</h3>

            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div>
                  <label htmlFor="name" className="block text-xs font-bold text-[#b3b3b3] uppercase tracking-wider mb-2">
                    Your Name
                  </label>
                  <Input
                    id="name"
                    name="name"
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="bg-[#141414] border-[#2f2f2f] text-white placeholder:text-[#555] focus:border-[#E50914] focus:ring-[#E50914]/20 rounded-sm"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-xs font-bold text-[#b3b3b3] uppercase tracking-wider mb-2">
                    Your Email
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="Your Email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="bg-[#141414] border-[#2f2f2f] text-white placeholder:text-[#555] focus:border-[#E50914] focus:ring-[#E50914]/20 rounded-sm"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="subject" className="block text-xs font-bold text-[#b3b3b3] uppercase tracking-wider mb-2">
                  Subject
                </label>
                <Input
                  id="subject"
                  name="subject"
                  placeholder="Subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="bg-[#141414] border-[#2f2f2f] text-white placeholder:text-[#555] focus:border-[#E50914] focus:ring-[#E50914]/20 rounded-sm"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-xs font-bold text-[#b3b3b3] uppercase tracking-wider mb-2">
                  Your Message
                </label>
                <Textarea
                  id="message"
                  name="message"
                  placeholder="Your Message"
                  rows={5}
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className="bg-[#141414] border-[#2f2f2f] text-white placeholder:text-[#555] focus:border-[#E50914] focus:ring-[#E50914]/20 rounded-sm resize-none"
                />
              </div>

              <Button
                type="submit"
                className="w-full bg-[#E50914] hover:bg-[#f40612] text-white font-bold py-3 rounded-sm transition-all duration-200"
                disabled={isLoading}
              >
                {isLoading ? (
                  <span className="flex items-center gap-2">
                    <Loader2 className="animate-spin h-4 w-4" />
                    Sending...
                  </span>
                ) : (
                  <span className="flex items-center gap-2">
                    <Send className="h-4 w-4" />
                    Send Message
                  </span>
                )}
              </Button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
