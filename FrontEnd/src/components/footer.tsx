import { Github, Linkedin, Mail, Leaf } from "lucide-react"

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="py-8 bg-jungle-900 text-slate-300 relative overflow-hidden">
      <div className="absolute bottom-0 left-0 right-0 h-16 opacity-20">
        <div
          className="w-full h-full bg-bottom bg-repeat-x"
          style={{
            backgroundImage: `url('/images/django-jungle.png')`,
            backgroundSize: "auto 100%",
          }}
        />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0 flex items-center gap-3">
            <img src="/images/kihuni.png" alt="Stephen Kihuni" className="h-10 w-10 rounded-md" />
            <div>
              <p className="text-lg font-semibold flex items-center">
                Arman Datt <Leaf className="h-4 w-4 ml-1 text-jungle-400" />
              </p>
              <p className="text-sm text-[#b5c67b]">Mern Jungle Explorer</p>
            </div>
          </div>

          <div className="flex gap-4 mb-4 md:mb-0">
            <a
              href="https://www.linkedin.com/in/akshar_31/"
              className="p-2 rounded-full hover:bg-jungle-800 transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin className="h-5 w-5" />
            </a>
            <a
              href="https://github.com/armandatt"
              className="p-2 rounded-full hover:bg-jungle-800 transition-colors"
              aria-label="GitHub"
            >
              <Github className="h-5 w-5" />
            </a>
            <a
              href="mailto:dattarman63@gmail.com"
              className="p-2 rounded-full hover:bg-jungle-800 transition-colors"
              aria-label="Email"
            >
              <Mail className="h-5 w-5" />
            </a>
          </div>

          <div className="text-sm text-[#b5c67b]">© {currentYear} Arman Datt. All rights reserved.</div>
        </div>
      </div>
    </footer>
  )
}
