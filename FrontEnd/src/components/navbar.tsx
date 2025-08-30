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
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled
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
        <div className="fixed inset-0 z-40 bg-[#1f2417] backdrop-blur-sm">
          <div className="flex flex-col h-full">
            {/* Menu Content */}
            <div className="flex-1 pt-20 px-6">
              <nav className="max-w-sm mx-auto">
                <div className="space-y-1">
                  {navItems.map((item, index) => (
                    <div
                      key={item.name}
                      className="transform transition-all duration-300"
                      style={{
                        animationDelay: `${index * 100}ms`,
                        animation: isMenuOpen ? 'slideInFromRight 0.4s ease-out forwards' : ''
                      }}
                    >
                      <button
                        onClick={() => {
                          scrollToSection(item.href);
                          setIsMenuOpen(false);
                        }}
                        className="w-full text-left py-4 px-6 rounded-xl
                           text-xl font-medium text-[#b5c67b] 
                           hover:text-green-400 hover:bg-slate-800/50 
                           transition-all duration-200 
                           border-l-4 border-transparent hover:border-green-400
                           active:scale-95"
                      >
                        {item.name}
                      </button>
                    </div>
                  ))}
                </div>
              </nav>
            </div>

            {/* Bottom Section */}
            <div className="p-6 border-t border-slate-700/50">
              <button
                onClick={() => setIsMenuOpen(false)}
                className="w-full py-3 px-6 rounded-lg
                   text-[#b5c67b] hover:text-white
                   border border-slate-600 hover:border-green-400
                   hover:bg-slate-800/50 transition-all duration-200
                   font-medium"
              >
                ✕ Close Menu
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  )
}