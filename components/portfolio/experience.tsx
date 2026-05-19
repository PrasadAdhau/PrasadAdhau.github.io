"use client"

import Image from "next/image"
import { useState } from "react"
import { Motion } from "@/components/motion"
import { withBasePath } from "@/lib/paths"
import { Briefcase, GraduationCap, Calendar } from "lucide-react"

const workExperience = [
  {
    title: "Teaching Assistant",
    company: "Rochester Institute of Technology",
    period: "Aug 2024 - Dec 2025",
    logoSrc: "/images/Rochester_Institute_of_Technology_seal.png",
  },
  {
    title: "Senior Engineer",
    company: "Nagarro",
    period: "Mar 2024 - Jun 2024",
    logoSrc: "/images/nagarro.png",
  },
  {
    title: "Data Engineer",
    company: "Accenture",
    period: "Dec 2020 - Mar 2024",
    logoSrc: "/images/accenture-logo-0.png",
  },
  {
    title: "Software Engineer Intern",
    company: "Techwalnut Innovations LLP",
    period: "Jul 2019 - Dec 2019",
    logoSrc: "/images/techwalnut.jpeg",
  },
]

const education = [
  {
    degree: "Master of Science in Information Technology and Analytics",
    school: "Rochester Institute of Technology",
    period: "Aug 2024 - May 2026",
    status: "Completed",
    award: "Debbie Cahn Memorial Scholarship Awardee",
    logoSrc: "/images/Rochester_Institute_of_Technology_seal.png",
  },
  {
    degree: "Bachelor of Engineering in Information Technology",
    school: "Nagpur University",
    period: "Aug 2016 - May 2020",
    status: "Completed",
    logoSrc: "/images/nagpur_university.png",
  },
]

function JourneyEntry({
  title,
  organization,
  period,
  logoSrc,
  status,
  award,
  side,
}: {
  title: string
  organization: string
  period: string
  logoSrc?: string
  status?: string
  award?: string
  side?: "left" | "right"
}) {
  const useContainLogo =
    !!logoSrc &&
    (logoSrc.includes("nagarro") ||
      logoSrc.includes("techwalnut") ||
      logoSrc.includes("accenture") ||
      logoSrc.includes("nagpur"))

  return (
    <div className="bg-card rounded-xl p-6 border border-border hover:border-brand-accent/50 hover:shadow-lg transition-all duration-300">
      <div
        className={`flex w-full items-start gap-3 ${
          side === "left" ? "flex-row-reverse text-right" : "text-left"
        }`}
      >
        <span className="w-24 h-24 rounded-full overflow-hidden border border-brand-accent/30 bg-background flex items-center justify-center shrink-0">
          {logoSrc ? (
            <Image
              src={withBasePath(logoSrc)}
              alt={`${organization} logo`}
              width={96}
              height={96}
              className={`w-full h-full ${useContainLogo ? "object-contain p-1.5" : "object-cover"}`}
            />
          ) : (
            <Briefcase className="w-6 h-6 text-brand-accent/70" />
          )}
        </span>

        <div>
          <h4 className="font-semibold text-foreground text-2xl mb-1">{title}</h4>
          <p className="text-muted-foreground text-xl mb-2">{organization}</p>
          <div className={`flex flex-wrap items-center gap-2 ${side === "left" ? "justify-end" : ""}`}>
            <span className="text-muted-foreground text-xl inline-flex items-center gap-2">
              <Calendar className="w-5 h-5" />
              {period}
            </span>
            {status && (
              <span className="text-xs text-brand-accent bg-brand-accent/10 border border-brand-accent/20 px-3 py-1 rounded-full font-medium">
                {status}
              </span>
            )}
          </div>
          {award && (
            <p className="text-sm text-muted-foreground mt-2">
              <span className="font-medium text-foreground">Award:</span> {award}
            </p>
          )}
        </div>
      </div>
    </div>
  )
}

export function Experience() {
  const [activeTab, setActiveTab] = useState<"education" | "work">("education")

  return (
    <section id="experience" className="py-20 md:py-32">
      <div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-7xl">
        <Motion animation="fadeInUp">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">My Journey</h2>
        </Motion>

        <Motion animation="fadeInUp" delay={0.05}>
          <div className="flex items-center justify-center gap-10 mb-12">
            <button
              type="button"
              onClick={() => setActiveTab("education")}
              className={`flex items-center gap-3 transition-colors hover:text-brand-accent ${
                activeTab === "education" ? "text-brand-accent" : "text-muted-foreground"
              }`}
            >
              <GraduationCap className="w-8 h-8" />
              <h3 className="text-3xl font-semibold">Education</h3>
            </button>
            <span className="text-3xl font-semibold text-brand-accent">|</span>
            <button
              type="button"
              onClick={() => setActiveTab("work")}
              className={`flex items-center gap-3 transition-colors hover:text-brand-accent ${
                activeTab === "work" ? "text-brand-accent" : "text-muted-foreground"
              }`}
            >
              <Briefcase className="w-8 h-8" />
              <h3 className="text-3xl font-semibold">Work Experience</h3>
            </button>
          </div>
        </Motion>

        <div className="max-w-4xl mx-auto">
          <div className="relative pl-10">
            <div className="absolute left-3 top-0 bottom-0 w-0.5 bg-brand-accent/70" />
            <div className="space-y-8">
              {(activeTab === "education" ? education : workExperience).map((item, index) => (
                <Motion
                  key={activeTab === "education" ? (item as (typeof education)[number]).degree : (item as (typeof workExperience)[number]).title}
                  animation="fadeInUp"
                >
                  <div className="relative">
                    <span className="absolute -left-10 top-6 w-6 h-6 rounded-full bg-brand-accent border-4 border-background shadow-md" />
                    {"degree" in item ? (
                      <JourneyEntry
                        title={item.degree}
                        organization={item.school}
                        period={item.period}
                        logoSrc={item.logoSrc}
                        status={item.status}
                        award={item.award}
                      />
                    ) : (
                      <JourneyEntry
                        title={item.title}
                        organization={item.company}
                        period={item.period}
                        logoSrc={item.logoSrc}
                      />
                    )}
                  </div>
                </Motion>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
