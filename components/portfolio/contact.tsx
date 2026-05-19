"use client"

import React from "react"

import { useState } from "react"
import { Motion } from "@/components/motion"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Mail, Send, CheckCircle, Phone, Linkedin, MapPin } from "lucide-react"

export function Contact() {
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [errorMessage, setErrorMessage] = useState("")

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsLoading(true)
    setErrorMessage("")
    setIsSubmitted(false)

    const form = e.currentTarget
    const formData = new FormData(form)

    try {
      const response = await fetch("https://formsubmit.co/ajax/prasad.adhau02@gmail.com", {
        method: "POST",
        headers: {
          Accept: "application/json",
        },
        body: formData,
      })

      const result = await response.json().catch(() => null)

      if (!response.ok || (result && result.success === "false")) {
        throw new Error(result?.message || "Failed to send message")
      }

      setIsSubmitted(true)
      form.reset()
      setTimeout(() => setIsSubmitted(false), 3000)
    } catch (error) {
      console.error("Contact form submission failed:", error)
      setErrorMessage("Message could not be sent. Please try again or email me directly at prasad.adhau02@gmail.com.")
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <section id="contact" className="py-20 md:py-32">
      <div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-7xl">
        <Motion animation="fadeInUp">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
            Contact Me
          </h2>
          <p className="text-muted-foreground text-center max-w-2xl mx-auto mb-16">
            {"I'd love to hear from you! Feel free to reach out for new opportunities or just saying hello."}
          </p>
        </Motion>

        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-start max-w-6xl mx-auto">
          {/* Contact Info */}
          <Motion animation="fadeInLeft" delay={0.1}>
            <div className="space-y-6 max-w-xl mx-auto lg:mx-0">
              <h3 className="text-2xl font-semibold mb-8">{"Let's connect"}</h3>
              <div className="space-y-4">
                <a
                  href="tel:+17818744029"
                  className="flex items-start gap-3 text-muted-foreground hover:text-brand-accent transition-colors"
                >
                  <span className="w-10 h-10 rounded-full border border-border bg-background flex items-center justify-center">
                    <Phone className="w-5 h-5" />
                  </span>
                  <div>
                    <p className="text-sm font-medium text-foreground">Call</p>
                    <p className="text-sm">+1 (781)-874-4029</p>
                  </div>
                </a>

                <a
                  href="https://linkedin.com/in/adhauprasad"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-3 text-muted-foreground hover:text-brand-accent transition-colors"
                >
                  <span className="w-10 h-10 rounded-full border border-border bg-background flex items-center justify-center">
                    <Linkedin className="w-5 h-5" />
                  </span>
                  <div>
                    <p className="text-sm font-medium text-foreground">LinkedIn</p>
                    <p className="text-sm">linkedin.com/in/adhauprasad</p>
                  </div>
                </a>

                <a
                  href="mailto:prasad.adhau02@gmail.com"
                  className="flex items-start gap-3 text-muted-foreground hover:text-brand-accent transition-colors"
                >
                  <span className="w-10 h-10 rounded-full border border-border bg-background flex items-center justify-center">
                    <Mail className="w-5 h-5" />
                  </span>
                  <div>
                    <p className="text-sm font-medium text-foreground">Email</p>
                    <p className="text-sm">prasad.adhau02@gmail.com</p>
                  </div>
                </a>

                <div className="flex items-start gap-3 text-muted-foreground">
                  <span className="w-10 h-10 rounded-full border border-border bg-background flex items-center justify-center">
                    <MapPin className="w-5 h-5" />
                  </span>
                  <div>
                    <p className="text-sm font-medium text-foreground">Location</p>
                    <p className="text-sm">Open to relocation anywhere within the US</p>
                  </div>
                </div>
              </div>
            </div>
          </Motion>

          {/* Contact Form */}
          <Motion animation="fadeInRight" delay={0.2}>
            <form
              onSubmit={handleSubmit}
              className="bg-card rounded-2xl p-6 md:p-8 border border-border space-y-6 w-full max-w-xl mx-auto lg:mx-0"
            >
              <input type="hidden" name="_subject" value="New portfolio contact message" />
              <input type="hidden" name="_template" value="table" />
              <input type="hidden" name="_captcha" value="false" />

              <div className="space-y-2">
                <label htmlFor="name" className="text-sm font-medium text-foreground">
                  Name
                </label>
                <Input
                  id="name"
                  name="name"
                  placeholder="Your Full Name"
                  required
                  className="bg-background hover:border-brand-accent focus-visible:border-brand-accent focus-visible:ring-brand-accent/50"
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="email" className="text-sm font-medium text-foreground">
                  Email
                </label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="Your Email Address"
                  required
                  className="bg-background hover:border-brand-accent focus-visible:border-brand-accent focus-visible:ring-brand-accent/50"
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-medium text-foreground">
                  Message
                </label>
                <Textarea
                  id="message"
                  name="message"
                  placeholder="Your Message"
                  rows={5}
                  required
                  className="bg-background resize-none hover:border-brand-accent focus-visible:border-brand-accent focus-visible:ring-brand-accent/50"
                />
              </div>

              <Button
                type="submit"
                className="w-full group bg-brand-accent hover:bg-brand-accent/90"
                disabled={isLoading || isSubmitted}
              >
                {isSubmitted ? (
                  <>
                    <CheckCircle className="w-4 h-4 mr-2" />
                    Message Sent!
                  </>
                ) : isLoading ? (
                  <>
                    <div className="w-4 h-4 mr-2 border-2 border-primary-foreground/30 border-t-primary-foreground rounded-full animate-spin" />
                    Sending...
                  </>
                ) : (
                  <>
                    <Send className="w-4 h-4 mr-2 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                    Send Message
                  </>
                )}
              </Button>
              {errorMessage ? <p className="text-sm text-red-500">{errorMessage}</p> : null}
            </form>
          </Motion>
        </div>
      </div>
    </section>
  )
}
