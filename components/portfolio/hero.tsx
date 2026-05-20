"use client"

import Image from "next/image"
import Link from "next/link"
import { useTypewriter } from "@/hooks/use-typewriter"
import { Motion } from "@/components/motion"
import { Button } from "@/components/ui/button"
import { withBasePath } from "@/lib/paths"
import { Github, Linkedin, Mail, MessageCircle } from "lucide-react"

const socialLinks = [
  { icon: Linkedin, href: "https://linkedin.com/in/prasadadhau", label: "LinkedIn" },
  { icon: Github, href: "https://github.com/prasadadhau", label: "GitHub" },
  { icon: Mail, href: "mailto:prasad.adhau02@gmail.com", label: "Email" },
]

export function Hero() {
  const { displayedText } = useTypewriter(
    ["Data Engineer", "I turn data into insights"],
    120,
    800,
    true,
    2000
  )

  return (
    <section
      id="home"
      className="min-h-[100svh] flex items-center relative overflow-hidden pt-24 pb-16 md:pt-28 md:pb-20"
    >
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-primary/5" />
      <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 left-1/4 w-64 h-64 bg-primary/5 rounded-full blur-2xl" />

      <div className="container mx-auto w-full px-4 md:px-6 lg:px-8 max-w-7xl relative z-10">
        <div className="grid items-center gap-12 lg:grid-cols-[minmax(0,1fr)_minmax(320px,440px)] lg:gap-16 xl:gap-20">
          {/* Profile Photo - First on mobile, second on desktop */}
          <Motion animation="scaleIn" delay={0.3} className="order-1 lg:order-2">
            <div className="relative flex justify-center lg:justify-end">
              <div className="w-72 h-72 sm:w-80 sm:h-80 md:w-88 md:h-88 lg:w-[24rem] lg:h-[24rem] xl:w-[28rem] xl:h-[28rem] relative">
                {/* Decorative rings */}
                <div className="absolute inset-0 rounded-full border-2 border-brand-accent/20 border-t-brand-accent/60 border-r-brand-accent/50 animate-spin [animation-duration:20s]" />
                <div className="absolute inset-4 rounded-full border-2 border-brand-accent/30 border-b-brand-accent/70 border-l-brand-accent/50 animate-[spin_15s_linear_infinite_reverse]" />
                
                {/* Profile Photo */}
                <div className="absolute inset-8 rounded-full bg-gradient-to-br from-primary/20 to-primary/5 overflow-hidden">
                  <Image
                    src={withBasePath("/images/Profile.png")}
                    alt="Prasad - Data Engineer"
                    fill
                    className="object-cover object-[center_16%] scale-110"
                    priority
                  />
                </div>
              </div>
            </div>
          </Motion>

          {/* Text Content */}
          <div className="order-2 lg:order-1 text-center lg:text-left max-w-2xl mx-auto lg:mx-0">
            <Motion animation="fadeInUp" delay={0}>
              <p className="text-xl md:text-2xl text-muted-foreground mb-2">Hello,</p>
            </Motion>

            <Motion animation="fadeInUp" delay={0.1}>
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-foreground mb-4 text-balance">
                {"I'm Prasad"}
              </h1>
            </Motion>

            <Motion animation="fadeInUp" delay={0.2}>
              <div className="h-12 md:h-14 mb-6">
                <span className="text-2xl md:text-3xl lg:text-4xl font-semibold text-brand-accent">
                  {displayedText}
                  <span
                    className="inline-block w-0.5 h-8 md:h-10 ml-1 bg-brand-accent animate-[blink_0.7s_infinite]"
                  />
                </span>
              </div>
            </Motion>

            <Motion animation="fadeInUp" delay={0.3}>
              <p className="text-muted-foreground max-w-xl mx-auto lg:mx-0 mb-8 leading-relaxed">
                {"I'm on the hunt for roles where data is more than just metrics, it\u2019s a story waiting to be uncovered and transformed into impact. Experienced in building scalable data systems and AI-driven solutions that convert raw data into actionable insights, intelligent automation, and meaningful business outcomes."}
              </p>
            </Motion>

            <Motion animation="fadeInUp" delay={0.4}>
              <div className="flex items-center justify-center lg:justify-start gap-4 mb-8">
                {socialLinks.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-lg border border-border flex items-center justify-center text-muted-foreground hover:text-brand-accent hover:border-brand-accent hover:scale-110 transition-all duration-300"
                    aria-label={link.label}
                  >
                    <link.icon className="w-5 h-5" />
                  </a>
                ))}
              </div>
            </Motion>

            <Motion animation="fadeInUp" delay={0.5}>
              <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3">
                <Button
                  size="lg"
                  className="group relative overflow-hidden bg-brand-accent hover:bg-brand-accent/90"
                  asChild
                >
                  <Link href="#contact">
                    <MessageCircle className="w-4 h-4 mr-2" />
                    Contact Me
                    <span className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
                  </Link>
                </Button>
              </div>
            </Motion>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <Motion animation="fadeIn" delay={1} className="absolute bottom-8 left-1/2 -translate-x-1/2">
        <div className="flex flex-col items-center gap-2 text-muted-foreground">
          <span className="text-xs">Scroll</span>
          <div className="w-5 h-8 rounded-full border-2 border-muted-foreground/50 flex items-start justify-center p-1">
            <div className="w-1 h-2 bg-muted-foreground/50 rounded-full animate-bounce" />
          </div>
        </div>
      </Motion>
    </section>
  )
}
