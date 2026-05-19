"use client"

import Image from "next/image"
import { Motion } from "@/components/motion"
import { Button } from "@/components/ui/button"
import { withBasePath } from "@/lib/paths"
import { Download } from "lucide-react"

const RESUME_URL = withBasePath("/Prasad_Adhau_Resume.pdf")

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-muted/50 border-t border-border">
      {/* Main Footer */}
      <div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-7xl py-4">
        <Motion animation="fadeInUp">
          <div className="flex items-center justify-between gap-4">
            {/* Profile */}
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full overflow-hidden relative">
                <Image
                  src={withBasePath("/images/PrasadAdhau.png")}
                  alt="Prasad"
                  fill
                  className="object-cover"
                />
              </div>
              <div>
                <h3 className="font-semibold text-foreground">Prasad Adhau</h3>
                <span className="px-2 py-0.5 bg-brand-accent/10 text-brand-accent rounded-full text-xs">
                  Data Engineer
                </span>
              </div>
            </div>

            <div className="flex justify-end">
              <Button className="group bg-brand-accent hover:bg-brand-accent/90" asChild>
                <a href={RESUME_URL} target="_blank" rel="noopener noreferrer">
                  <Download className="w-4 h-4 mr-2 group-hover:animate-bounce" />
                  Download Resume
                </a>
              </Button>
            </div>
          </div>
        </Motion>
      </div>

      {/* Copyright */}
      <div className="py-3">
        <div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-7xl">
          <p className="text-center text-sm text-muted-foreground">
            © {currentYear} Prasad Adhau. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
