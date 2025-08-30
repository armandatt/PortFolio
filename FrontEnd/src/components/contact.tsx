"use client"

import { useState } from "react"
import { Mail, Github, Linkedin, FileText, Send, MapPin, Leaf } from "lucide-react"

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e: { target: { name: any; value: any } }) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: { preventDefault: () => void }) => {
  e.preventDefault()

  if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
    return
  }

  setIsSubmitting(true)

  try {
    const res = await fetch('https://backend.dattarman63.workers.dev/api/contact', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData),
    })

    if (!res.ok) throw new Error('Failed to send')

    setSubmitted(true)
    setFormData({ name: "", email: "", message: "" })
    setTimeout(() => setSubmitted(false), 5000)
  } catch (err) {
    console.error('Submission failed:', err)
    alert('Something went wrong. Please try again.')
  }

  setIsSubmitting(false)
}

  return (
    <section id="contact" className="py-20 bg-[#0e1515] relative">
      {/* Jungle-themed background elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-10 left-10 w-32 h-32 border border-emerald-400 rounded-full"></div>
        <div className="absolute bottom-20 right-16 w-24 h-24 border border-emerald-400 rounded-full"></div>
        <div className="absolute top-1/3 right-1/4 w-20 h-20 border border-emerald-400 rounded-full"></div>
        <div className="absolute bottom-1/3 left-1/5 w-16 h-16 bg-emerald-400 rounded-full blur-lg"></div>
        <div className="absolute top-2/3 right-1/6 w-12 h-12 bg-emerald-400 rounded-full blur-lg"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <Leaf className="h-6 w-6 text-[#b5c67b]" />
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Get In Touch
          </h2>
          <Leaf className="h-6 w-6 text-[#b5c67b]" />
          <p className="text-lg text-emerald-100 max-w-2xl mx-auto leading-relaxed">
            Have a project in mind or want to discuss how I can help your business grow?
            Let's explore the possibilities together!
          </p>
          <div className="h-1 w-20 bg-emerald-400 mx-auto mt-6"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {/* Contact Information Card */}
          <div className="bg-[#1c2417] rounded-lg border border-emerald-800/30 overflow-hidden shadow-2xl hover:shadow-emerald-900/20 transition-shadow duration-300">
            {/* Header Section */}
            <div className="h-48 bg-gradient-to-br from-emerald-900/40 to-emerald-800/20 flex items-center justify-center relative overflow-hidden">
              {/* Decorative elements */}
              <div className="absolute top-4 left-4 w-8 h-8 border border-emerald-400/30 rounded-full"></div>
              <div className="absolute bottom-4 right-4 w-6 h-6 bg-emerald-400/20 rounded-full"></div>

              <div className="text-center relative z-10">
                <Mail className="h-16 w-16 text-emerald-400 mx-auto mb-4" />
                <p className="text-emerald-100 text-lg font-medium">Contact Information</p>
              </div>
            </div>

            {/* Content */}
            <div className="p-6">
              <h3 className="text-xl font-bold text-white mb-6">Let's Connect</h3>

              <div className="space-y-4">
                {/* Email */}
                <div className="flex items-center gap-3 p-3 rounded-lg bg-emerald-900/10 hover:bg-emerald-900/20 transition-colors">
                  <div className="bg-emerald-400/20 p-2 rounded-lg">
                    <Mail className="h-5 w-5 text-emerald-400" />
                  </div>
                  <div>
                    <p className="text-sm text-emerald-300/80">Email</p>
                    <p className="text-white font-medium">dattarman63@gmail.com</p>
                  </div>
                </div>



                {/* Location */}
                <div className="flex items-center gap-3 p-3 rounded-lg bg-emerald-900/10 hover:bg-emerald-900/20 transition-colors">
                  <div className="bg-emerald-400/20 p-2 rounded-lg">
                    <MapPin className="h-5 w-5 text-emerald-400" />
                  </div>
                  <div>
                    <p className="text-sm text-emerald-300/80">Location</p>
                    <p className="text-white font-medium">Greater Noida, Uttar Pradesh</p>
                  </div>
                </div>
              </div>

              {/* Social Links */}
              <div className="mt-6 pt-6 border-t border-emerald-800/30">
                <h4 className="text-white font-medium mb-4">Connect With Me</h4>
                <div className="flex gap-3">
                  <a
                    href="https://www.linkedin.com/in/akshar-6ba12523a/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-emerald-900/20 hover:bg-emerald-400 hover:text-slate-900 text-emerald-100 px-3 py-2 rounded-lg text-sm font-medium transition-all duration-300 cursor-pointer flex items-center gap-2 hover:scale-105"
                  >
                    <Linkedin className="h-4 w-4" />
                    LinkedIn
                  </a>

                  <a
                    href="https://github.com/armandatt"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-emerald-900/20 hover:bg-emerald-400 hover:text-slate-900 text-emerald-100 px-3 py-2 rounded-lg text-sm font-medium transition-all duration-300 cursor-pointer flex items-center gap-2 hover:scale-105"
                  >
                    <Github className="h-4 w-4" />
                    GitHub
                  </a>

                  <a
                    href="/images/AksharResume.pdf" // replace with your actual file path or hosted link
                    download
                    className="bg-emerald-900/20 hover:bg-emerald-400 hover:text-slate-900 text-emerald-100 px-3 py-2 rounded-lg text-sm font-medium transition-all duration-300 cursor-pointer flex items-center gap-2 hover:scale-105"
                  >
                    <FileText className="h-4 w-4" />
                    Resume
                  </a>

                </div>
              </div>
            </div>
          </div>

          {/* Contact Form Card */}
          <div className="bg-[#1c2417] rounded-lg border border-emerald-800/30 overflow-hidden shadow-2xl hover:shadow-emerald-900/20 transition-shadow duration-300">
            {/* Header Section */}
            <div className="h-48 bg-gradient-to-br from-emerald-900/40 to-emerald-800/20 flex items-center justify-center relative overflow-hidden">
              {/* Decorative elements */}
              <div className="absolute top-4 right-4 w-8 h-8 border border-emerald-400/30 rounded-full"></div>
              <div className="absolute bottom-4 left-4 w-6 h-6 bg-emerald-400/20 rounded-full"></div>

              <div className="text-center relative z-10">
                <Send className="h-16 w-16 text-emerald-400 mx-auto mb-4" />
                <p className="text-emerald-100 text-lg font-medium">Send a Message</p>
              </div>
            </div>

            {/* Form Content */}
            <div className="p-6">
              <h3 className="text-xl font-bold text-white mb-6">Start a Conversation</h3>

              {submitted ? (
                <div className="bg-emerald-400/10 border border-emerald-400/30 rounded-lg p-6 text-center">
                  <div className="w-12 h-12 bg-emerald-400 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Mail className="h-6 w-6 text-slate-900" />
                  </div>
                  <h4 className="text-emerald-400 font-bold text-lg mb-2">Message Sent!</h4>
                  <p className="text-emerald-100">
                    Thank you for reaching out. I'll get back to you as soon as possible.
                  </p>
                </div>
              ) : (
                <div className="space-y-4">
                  <div>
                    <label htmlFor="name" className="block text-emerald-200 font-medium mb-2">
                      Name *
                    </label>
                    <input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Your name"
                      required
                      className="w-full bg-[#0e1515] border border-emerald-800/40 rounded-lg px-4 py-3 text-white placeholder-emerald-300/50 focus:outline-none focus:border-emerald-400 focus:ring-2 focus:ring-emerald-400/20 transition-all"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-emerald-200 font-medium mb-2">
                      Email *
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="your.email@example.com"
                      required
                      className="w-full bg-[#0e1515] border border-emerald-800/40 rounded-lg px-4 py-3 text-white placeholder-emerald-300/50 focus:outline-none focus:border-emerald-400 focus:ring-2 focus:ring-emerald-400/20 transition-all"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-emerald-200 font-medium mb-2">
                      Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Tell me about your project, ideas, or how we can work together..."
                      required
                      rows={5}
                      className="w-full bg-[#0e1515] border border-emerald-800/40 rounded-lg px-4 py-3 text-white placeholder-emerald-300/50 focus:outline-none focus:border-emerald-400 focus:ring-2 focus:ring-emerald-400/20 transition-all resize-none"
                    />
                  </div>

                  <button
                    onClick={handleSubmit}
                    className="w-full bg-emerald-600 hover:bg-emerald-500 text-white font-bold py-3 px-6 rounded-lg transition-all duration-300 flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed hover:scale-[1.02] hover:shadow-lg hover:shadow-emerald-500/25"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <>
                        <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send className="h-5 w-5" />
                        Send Message
                      </>
                    )}
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Tech Stack Tags - Jungle themed */}
        <div className="text-center mt-16">
          <p className="text-emerald-200/80 mb-4">Ready to grow your digital presence with:</p>
          <div className="flex flex-wrap justify-center gap-3">
            <span className="bg-emerald-900/20 border border-emerald-700/30 text-emerald-200 px-4 py-2 rounded-lg text-sm font-medium hover:bg-emerald-800/20 transition-colors">LLMs</span>
            <span className="bg-emerald-900/20 border border-emerald-700/30 text-emerald-200 px-4 py-2 rounded-lg text-sm font-medium hover:bg-emerald-800/20 transition-colors">React</span>
            <span className="bg-emerald-900/20 border border-emerald-700/30 text-emerald-200 px-4 py-2 rounded-lg text-sm font-medium hover:bg-emerald-800/20 transition-colors">Node.js</span>
            <span className="bg-emerald-900/20 border border-emerald-700/30 text-emerald-200 px-4 py-2 rounded-lg text-sm font-medium hover:bg-emerald-800/20 transition-colors">PostgreSQL</span>
            <span className="bg-emerald-900/20 border border-emerald-700/30 text-emerald-200 px-4 py-2 rounded-lg text-sm font-medium hover:bg-emerald-800/20 transition-colors">ServerLess Backend</span>
            <span className="bg-emerald-900/20 border border-emerald-700/30 text-emerald-200 px-4 py-2 rounded-lg text-sm font-medium hover:bg-emerald-800/20 transition-colors">CloudFlare</span>
          </div>
        </div>
      </div>
    </section>
  )
}

