"use client"

import React, { useState } from "react"
import { Mail, Phone, Linkedin, MapPin } from "lucide-react"

export function MessagePanel() {
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
    const accessKey = process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY

    if (!accessKey) {
      setErrorMessage("Form is not configured. Please email me at prasad.adhau02@gmail.com.")
      setIsLoading(false)
      return
    }

    formData.append("access_key", accessKey)
    formData.append("subject", "New portfolio contact message")

    try {
      const response = await fetch("https://api.web3forms.com/submit", { method: "POST", body: formData })
      const result = await response.json()
      if (!response.ok || !result.success) throw new Error(result.message || "Failed to send")
      setIsSubmitted(true)
      form.reset()
    } catch (error) {
      console.error("Send failed:", error)
      setErrorMessage("Message could not be sent. Please try again.")
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <section id="contact" className="py-20">
      <div className="container mx-auto max-w-6xl px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Contact Me</h2>
        <p className="text-muted-foreground text-center max-w-2xl mx-auto mb-12">
          {"I'd love to hear from you! Feel free to reach out for new opportunities or just saying hello."}
        </p>
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-start">
          <div>
            <h3 className="text-2xl font-semibold mb-8">{"Let's connect"}</h3>
            <div className="space-y-4">
              <a href="tel:+17818744029" className="flex items-start gap-3 text-muted-foreground hover:text-brand-accent transition-colors">
                <span className="w-10 h-10 rounded-full border border-border bg-background flex items-center justify-center">
                  <Phone className="w-5 h-5" />
                </span>
                <div>
                  <p className="text-sm font-medium text-foreground">Call</p>
                  <p className="text-sm">+1 (781)-874-4029</p>
                </div>
              </a>

              <a href="https://linkedin.com/in/adhauprasad" target="_blank" rel="noopener noreferrer" className="flex items-start gap-3 text-muted-foreground hover:text-brand-accent transition-colors">
                <span className="w-10 h-10 rounded-full border border-border bg-background flex items-center justify-center">
                  <Linkedin className="w-5 h-5" />
                </span>
                <div>
                  <p className="text-sm font-medium text-foreground">LinkedIn</p>
                  <p className="text-sm">linkedin.com/in/adhauprasad</p>
                </div>
              </a>

              <a href="mailto:prasad.adhau02@gmail.com" className="flex items-start gap-3 text-muted-foreground hover:text-brand-accent transition-colors">
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

          <form onSubmit={handleSubmit} className="space-y-4 bg-card rounded-2xl p-6 md:p-8 border border-border">
            <input name="name" required placeholder="Your Name" className="w-full rounded-md border p-3 bg-background" />
            <input name="email" type="email" required placeholder="Your Email" className="w-full rounded-md border p-3 bg-background" />
            <textarea name="message" required rows={5} placeholder="Your Message" className="w-full rounded-md border p-3 bg-background" />
            <button type="submit" disabled={isLoading} className="w-full rounded-md bg-brand-accent text-white p-3">
              {isSubmitted ? "Message Sent!" : isLoading ? "Sending..." : "Send Message"}
            </button>
            {errorMessage ? <p className="text-sm text-red-500">{errorMessage}</p> : null}
          </form>
        </div>
      </div>
    </section>
  )
}
