"use client"
import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import ThemeToggle from "@/components/theme-toggle"
import { Menu, X, Leaf } from "lucide-react"
import { useMobile } from "@/hooks/use-mobile"

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const isMobile = useMobile()

  const navItems = [
    { name: "Home", href: "#" },
    { name: "About", href: "#about" },
    { name: "Projects", href: "#projects" },
    { name: "Services", href: "#services" },
    { name: "Contact", href: "#contact" },
  ]

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToSection = (href: string) => {
    setIsMenuOpen(false)
    if (href === "#") {
      window.scrollTo({ top: 0, behavior: "smooth" })
    } else {
      document.querySelector(href)?.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled 
            ? "bg-[#283110]/70 dark:bg-jungle-900/70 backdrop-blur-lg shadow-sm" 
            : "bg-transparent"
        }`}
      >
        <div className="max-w-8xl mx-auto px-16 my-1">
          <div className="flex items-center justify-between h-16 md:h-20">
            <div className="flex items-center gap-2">
              <img src="/images/kihuni.png" alt="Stephen Kihuni" className="h-10 w-10 rounded-md" />
              <div className="font-bold text-xl text-slate-800 dark:text-white flex items-center">
                Arman<span className="text-[#b5c67b]"> Datt</span>
                <Leaf className="h-4 w-4 ml-1 text-[#b5c67b]" />
              </div>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-1">
              {navItems.map((item) => (
                <Button
                  key={item.name}
                  variant="ghost"
                  onClick={() => scrollToSection(item.href)}
                  className="text-slate-600 hover:text-slate-900 dark:text-slate-300 dark:hover:text-white hover:bg-white/10 dark:hover:bg-white/10 rounded-lg transition-all duration-300 hover:scale-105"
                >
                  {item.name}
                </Button>
              ))}
            </nav>

            {/* Mobile Navigation Toggle */}
            <div className="flex items-center md:hidden gap-2">
              <ThemeToggle />
              <Button variant="ghost" size="icon" onClick={() => setIsMenuOpen(!isMenuOpen)} aria-label="Toggle menu">
                {isMenuOpen ? (
                  <X className="h-6 w-6 text-slate-800 dark:text-white" />
                ) : (
                  <Menu className="h-6 w-6 text-slate-800 dark:text-white" />
                )}
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Menu */}
      {isMenuOpen && isMobile && (
        <div className="fixed inset-0 z-40 bg-white dark:bg-jungle-900/95 pt-16">
          <nav className="container mx-auto px-4 py-8 flex flex-col gap-4">
            {navItems.map((item) => (
              <Button
                key={item.name}
                variant="ghost"
                onClick={() => scrollToSection(item.href)}
                className="w-full justify-start text-lg py-4 text-slate-800 dark:text-white"
              >
                {item.name}
              </Button>
            ))}
          </nav>
        </div>
      )}
    </>
  )
}