"use client"

import { useState, useEffect } from "react"
import { useTheme } from "next-themes"
import { usePathname, useRouter } from "next/navigation"
import { Moon, Sun, Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { withBasePath } from "@/lib/paths"

const RESUME_URL = withBasePath("/Prasad_Adhau_Resume.pdf")

const navLinks = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "My Journey", href: "#experience" },
  { name: "Projects", href: "/projects" },
  { name: "Resume", href: RESUME_URL, external: true, cta: true },
]

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [activeHash, setActiveHash] = useState("#home")
  const { theme, setTheme } = useTheme()
  const pathname = usePathname()
  const router = useRouter()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)

    if (pathname !== "/") {
      setActiveHash("")
      return
    }

    if ("scrollRestoration" in window.history) {
      window.history.scrollRestoration = "manual"
    }

    const scrollToHash = (hash: string) => {
      const target = document.querySelector(hash)
      if (!target) return false

      target.scrollIntoView({ behavior: "instant" })
      setActiveHash(hash)
      return true
    }

    const currentHash = window.location.hash || "#home"
    if (currentHash === "#home") {
      window.scrollTo({ top: 0, left: 0, behavior: "instant" })
      setActiveHash("#home")
    } else if (!scrollToHash(currentHash)) {
      const timer = window.setTimeout(() => scrollToHash(currentHash), 100)
      return () => window.clearTimeout(timer)
    }
  }, [pathname])

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)

      if (pathname !== "/") return

      const sectionIds = ["home", "about", "experience", "contact"]
      const currentSection = sectionIds.find((id) => {
        const section = document.getElementById(id)
        if (!section) return false
        const rect = section.getBoundingClientRect()
        return rect.top <= 140 && rect.bottom >= 140
      })

      if (currentSection) {
        setActiveHash(`#${currentSection}`)
      }
    }

    window.addEventListener("scroll", handleScroll)
    handleScroll()
    return () => window.removeEventListener("scroll", handleScroll)
  }, [pathname])

  const scrollToSection = (href: string) => {
    if (href.startsWith("/")) {
      router.push(href)
      setIsMobileMenuOpen(false)
      return
    }

    if (href.startsWith("#") && pathname !== "/") {
      window.location.href = `/${href}`
      setIsMobileMenuOpen(false)
      return
    }

    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
      window.history.replaceState(null, "", href)
      setActiveHash(href)
    }
    setIsMobileMenuOpen(false)
  }

  const isActiveLink = (href: string) => {
    if (href === "/projects") return pathname === "/projects"
    if (href.startsWith("#")) return pathname === "/" && activeHash === href
    return false
  }

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled
          ? "bg-background/80 backdrop-blur-md shadow-sm"
          : "bg-transparent"
      )}
    >
      <nav className="container mx-auto px-4 md:px-6 lg:px-8 max-w-7xl py-5 flex items-center justify-between">
        <button
          onClick={() => scrollToSection("#home")}
          className="text-lg font-semibold text-brand-accent hover:text-brand-accent/80 transition-colors"
        >
          Prasad Adhau
        </button>

        <div className="flex items-center gap-4 ml-auto">
          {/* Desktop Navigation */}
          <ul className="hidden md:flex items-center gap-6">
            {navLinks.map((link) => (
              <li key={link.name}>
                {'cta' in link && link.cta ? (
                  <a
                    href={link.href}
                  target={'external' in link && link.external ? "_blank" : undefined}
                  rel={'external' in link && link.external ? "noopener noreferrer" : undefined}
                    className={cn(
                      "text-base font-medium text-primary-foreground bg-brand-accent hover:bg-brand-accent/90 px-5 py-2.5 rounded-md transition-colors",
                      isActiveLink(link.href) && "ring-2 ring-brand-accent/30"
                    )}
                  >
                    {link.name}
                  </a>
                ) : 'external' in link && link.external ? (
                  <a
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={cn(
                      "text-base text-muted-foreground hover:text-foreground transition-colors relative group",
                      isActiveLink(link.href) && "text-brand-accent"
                    )}
                  >
                    {link.name}
                    <span
                      className={cn(
                        "absolute -bottom-1 left-0 h-0.5 bg-brand-accent transition-all duration-300 group-hover:w-full",
                        isActiveLink(link.href) ? "w-full" : "w-0"
                      )}
                    />
                  </a>
                ) : (
                  <button
                    onClick={() => scrollToSection(link.href)}
                    className={cn(
                      "text-base text-muted-foreground hover:text-foreground transition-colors relative group",
                      isActiveLink(link.href) && "text-brand-accent"
                    )}
                  >
                    {link.name}
                    <span
                      className={cn(
                        "absolute -bottom-1 left-0 h-0.5 bg-brand-accent transition-all duration-300 group-hover:w-full",
                        isActiveLink(link.href) ? "w-full" : "w-0"
                      )}
                    />
                  </button>
                )}
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-2">
            {mounted && (
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                className="group/theme relative overflow-hidden hover:!text-brand-accent hover:!bg-brand-accent/10 dark:hover:!bg-brand-accent/10"
                aria-label="Toggle theme"
              >
                <Sun className={cn(
                  "h-5 w-5 absolute transition-all duration-300 group-hover/theme:text-brand-accent",
                  theme === "dark" ? "rotate-0 scale-100 opacity-100" : "-rotate-90 scale-0 opacity-0"
                )} />
                <Moon className={cn(
                  "h-5 w-5 transition-all duration-300 group-hover/theme:text-brand-accent",
                  theme === "dark" ? "rotate-90 scale-0 opacity-0" : "rotate-0 scale-100 opacity-100"
                )} />
                <span className="sr-only">Toggle theme</span>
              </Button>
            )}

            {/* Mobile Menu Button */}
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </div>
      </nav>

      {/* Mobile Navigation */}
      <div
        className={cn(
          "md:hidden overflow-hidden transition-all duration-300 bg-background/95 backdrop-blur-md",
          isMobileMenuOpen ? "max-h-80" : "max-h-0"
        )}
      >
        <ul className="container mx-auto px-4 py-4 flex flex-col gap-4">
          {navLinks.map((link) => (
            <li key={link.name}>
              {'cta' in link && link.cta ? (
                <a
                  href={link.href}
                  target={'external' in link && link.external ? "_blank" : undefined}
                  rel={'external' in link && link.external ? "noopener noreferrer" : undefined}
                  className="inline-flex items-center justify-center text-sm font-medium text-primary-foreground bg-brand-accent hover:bg-brand-accent/90 px-4 py-2 rounded-md transition-colors"
                >
                  {link.name}
                </a>
              ) : 'external' in link && link.external ? (
                <a
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-foreground transition-colors w-full text-left py-2 block"
                >
                  {link.name}
                </a>
              ) : (
                <button
                  onClick={() => scrollToSection(link.href)}
                  className="text-muted-foreground hover:text-foreground transition-colors w-full text-left py-2"
                >
                  {link.name}
                </button>
              )}
            </li>
          ))}
        </ul>
      </div>
    </header>
  )
}
