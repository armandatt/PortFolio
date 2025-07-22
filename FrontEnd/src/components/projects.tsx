"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ExternalLink, Github, Leaf } from "lucide-react"

export default function Projects() {
  type Project = {
    title: string
    description: string
    techStack: string[]
    github: string | null
    demo: string | null
    blog: string | null
    image: string
  }

  const projects: Project[] = [
    {
      title: "SecureSight -Smarter Checks Safer Decisions",
      description:
        "SecureSight is an AI-powered verification platform that detectsfake documents, scam websites, and AI-generated content usingGoogle Vision, Gemini, and Safe Browsing APIs. Built to promotetrust in digital ecosystems across education, recruitment, andpublic sectors.",
      techStack: ["Mern", "GSB", "PostgreSQL", "Gemini", "GitHub Api"],
      github: "https://github.com/armandatt/Secure-Sight",
      demo: "https://secure-sight-armandatts-projects.vercel.app/",
      blog: null,
      image: "/images/image.png",
    },
    {
      title: "BlogSphere - Smart Blogging Site",
      description:
        "A full-stack publishing platform, enabling users to create, edit,and explore rich-text blogs with tags, likes, and personalizedfeeds. Built with secure authentication, Markdown support, and responsive UI for seamless reading and writing experiences..",
      techStack: ["MERN", "Prisma", "PostgreSQL"],
      github: "https://github.com/armandatt/Medium",
      demo: "https://mediumakshar.vercel.app/",
      blog: null,
      image: "/images/blog.jpg",
    },
    {
      title: "SwiftPay - Transaction App",
      description:
        "A secure and intuitive web application for tracking and managing financial transactions, featuring user authentication, dynamic balanceupdates, and transaction history logs. Designed with a cleanUI and real-time feedback to streamline personal or business expense monitoring..",
      techStack: ["MERN", "GitHub Actions", "Prisma", "PostgreSql"],
      github: "https://github.com/armandatt/Transaction_App",
      demo: null,
      blog: null,
      image: "/images/pay.jpg",
    },
    {
      title: "Eventify - Event Management App",
      description:
        "API backend for a collaborative workspace with real-time updates, document sharing, and team management.",
      techStack: ["Django", "RealTimeAuthentication", "SQL"],
      github: "https://github.com/armandatt/EventManagementSystem",
      demo: null,
      blog: null,
      image: "/images/eventify.jpg",
    },
    {
      title: "TextUtils",
      description:
        "A Django-powered text enhancement tool that offers grammar correction, smart formatting, and utilities like case conversion, spacing cleanup, and punctuation fixes — all in a lightweight web interface..",
      techStack: ["Django", "RealTimeAutentication"],
      github: "https://github.com/armandatt/TEXTUTILS",
      demo: null,
      blog: null,
      image: "/images/text.jpg",
    },
  ]

  return (
    <section id="projects" className="py-20" style={{ backgroundColor: "#0e1515" }}>
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 flex items-center justify-center gap-2">
            <Leaf className="h-6 w-6 text-[#b5c67b]" />
            Projects
            <Leaf className="h-6 w-6 text-[#b5c67b]" />
          </h2>
          <p className="text-lg text-slate-300 max-w-2xl mx-auto">
           “"A showcase of my backend development work, featuring LLM APIs, Prisma, and serverless deployments.”
          </p>
          <div className="h-1 w-20 bg-jungle-500 mx-auto mt-4"></div>
          <div className="flex justify-center ">
            <div className="h-[5px] w-[100px] bg-[#7e9e3e] rounded-sm"></div>
          </div>

        </motion.div>

        <div className="px-2 sm:px-8 md:px-12 lg:px-20 xl:px-25">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="h-full"
              >
                <Card className="flex flex-col h-full rounded-xl overflow-hidden bg-[#1c2417] border-2 border-[#7e9e3e] shadow-md hover:border-[#8fbc5a] hover:shadow-xl hover:scale-105 hover:-translate-y-2 transition-all duration-300 cursor-pointer group">
                  <div className="aspect-video bg-[#d7dcd6] flex items-center justify-center border-b-2 border-[#7e9e3e]">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-120 h-60 object-cover"
                      onError={(e) => (e.currentTarget.src = "/fallback-icon.svg")}
                    />
                  </div>

                  <div className="flex-1 flex flex-col justify-between p-5">
                    <div>
                      <CardHeader className="p-0 mb-3">
                        <CardTitle className="text-white text-lg font-semibold mb-3">
                          {project.title}
                        </CardTitle>
                        <div className="flex flex-wrap gap-2">
                          {project.techStack.map((tech, i) => (
                            <Badge
                              key={i}
                              className="bg-[#374630] text-[#e5f3df] rounded-full px-3 py-1 text-xs font-medium border border-[#7e9e3e] hover:border-[#8fbc5a] transition-colors duration-300"
                            >
                              {tech}
                            </Badge>
                          ))}
                        </div>
                      </CardHeader>

                      <CardContent className="text-slate-300 text-sm mt-4 p-0">
                        {project.description}
                      </CardContent>
                    </div>

                    <CardFooter className="mt-6 p-0 pt-4 flex gap-2 flex-wrap border-t border-[#7e9e3e]">
                      {project.github && (
                        <Button
                          variant="outline"
                          size="sm"
                          asChild
                          className="bg-[#0f1710] text-white hover:bg-[#1c2b1a] border-2 border-[#7e9e3e] hover:border-[#8fbc5a] px-3 py-1.5 text-sm rounded-md transition-colors duration-300"
                        >
                          <a href={project.github} target="_blank" rel="noopener noreferrer">
                            <Github className="h-4 w-4 mr-1" /> GitHub
                          </a>
                        </Button>
                      )}
                      {project.demo && (
                        <Button
                          variant="outline"
                          size="sm"
                          asChild
                          className="bg-[#0f1710] text-white hover:bg-[#1c2b1a] border-2 border-[#7e9e3e] hover:border-[#8fbc5a] px-3 py-1.5 text-sm rounded-md transition-colors duration-300"
                        >
                          <a href={project.demo} target="_blank" rel="noopener noreferrer">
                            <ExternalLink className="h-4 w-4 mr-1" /> Demo
                          </a>
                        </Button>
                      )}
                      {project.blog && (
                        <Button
                          variant="outline"
                          size="sm"
                          asChild
                          className="bg-[#0f1710] text-white hover:bg-[#1c2b1a] border-2 border-[#7e9e3e] hover:border-[#8fbc5a] px-3 py-1.5 text-sm rounded-md transition-colors duration-300"
                        >
                          <a href={project.blog} target="_blank" rel="noopener noreferrer">
                            Blog
                          </a>
                        </Button>
                      )}
                    </CardFooter>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}










