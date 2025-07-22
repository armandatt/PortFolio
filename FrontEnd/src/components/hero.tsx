"use client"

import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import { useState, useEffect } from "react"
import { Leaf } from "lucide-react"

export default function Hero() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [isMounted, setIsMounted] = useState(false)
  const [dimensions, setDimensions] = useState({ width: 1200, height: 800 })

  useEffect(() => {
    setIsMounted(true)
    setDimensions({
      width: window.innerWidth,
      height: window.innerHeight,
    })

    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: e.clientX / window.innerWidth,
        y: e.clientY / window.innerHeight,
      })
    }

    window.addEventListener("mousemove", handleMouseMove)
    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [])

  const scrollToProjects = () => {
    document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })
  }

  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden bg-jungle-gradient">
      {/* Jungle background */}
      <div
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat opacity-60"
        style={{
          backgroundImage: `url('/images/django-jungle.png')`,
          transform: isMounted
            ? `translateX(${mousePosition.x * -20}px) translateY(${mousePosition.y * -20}px)`
            : "none",
        }}
      />

      {/* Floating leaves */}
      {isMounted &&
        Array.from({ length: 15 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute text-jungle-300 opacity-30 z-10"
            initial={{
              x: Math.random() * dimensions.width,
              y: -20,
              rotate: Math.random() * 360,
              scale: 0.5 + Math.random() * 1.5,
            }}
            animate={{
              y: dimensions.height + 50,
              x: `calc(${Math.random() * 100}vw + ${Math.sin(i) * 100}px)`,
              rotate: Math.random() * 360 + 180,
            }}
            transition={{
              duration: 10 + Math.random() * 20,
              repeat: Number.POSITIVE_INFINITY,
              delay: Math.random() * 5,
              ease: "linear",
            }}
          >
            <Leaf size={20 + Math.random() * 15} />
          </motion.div>
        ))}

      <div className="container mx-auto px-4 z-10 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <div className="flex justify-center mb-6">
            <motion.div
              className="relative h-40 w-40 md:h-48 md:w-48 lg:h-56 lg:w-56 animate-float"
              whileHover={{ scale: 1.05 }}
            >
              <img
                src="/images/kihuni.png"
                alt="Stephen Kihuni - Backend Developer"
                className="w-full h-full object-contain drop-shadow-xl"
              />
            </motion.div>
          </div>

            <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.2, delay: 0 }} // Reduced duration for faster transition
            >
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-4 drop-shadow-lg">
              Backend Developer & Agentic AI Builder |
              <span className="text-[#b5c67b]"> MERN LLMs</span>
            </h1>

            <p className="text-xl md:text-2xl text-slate-200 max-w-3xl mx-auto mb-8 drop-shadow">
              I help teams create scalable APIs and AI-powered systems with MERN, and backend LLM integrations.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
              size="lg"
              onClick={scrollToContact}
              className="bg-[#8fbc5a] hover:bg-[#7ba548] text-white border-2 border-[#8fbc5a] hover:border-[#7ba548] px-8 py-3 text-lg rounded-xl shadow-md hover:shadow-lg transition-all duration-300 hover:scale-105 font-semibold"
              >
              Hire Me
              </Button>

              <Button
              size="lg"
              variant="outline"
              onClick={scrollToProjects}
              className="border-2 border-slate-300 text-white hover:text-slate-900 hover:bg-[#d3e3bf] px-8 py-3 text-lg bg-slate-900/80 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 hover:scale-105 font-semibold backdrop-blur-sm"
              >
              View Projects
              </Button>

            </div>
            </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
