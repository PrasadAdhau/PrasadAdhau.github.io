"use client"

import { Motion } from "@/components/motion"
import { Cloud, Code, Briefcase } from "lucide-react"

const skillCategories = [
  {
    title: "Programming Languages & Frameworks",
    items: [
      "Python",
      "C++",
      "SQL",
      "JavaScript",
      "Node.js",
      "React",
      "Shell Scripting",
      "Linux",
    ],
  },
  {
    title: "Data Engineering & Big Data",
    items: [
      "Apache PySpark",
      "ETL/ELT Pipelines",
      "Airflow",
      "Databricks",
      "dbt",
      "Data Warehousing",
      "Big Data",
      "Data Modeling",
    ],
  },
  {
    title: "Databases & Storage",
    items: [
      "PostgreSQL",
      "MySQL",
      "MongoDB",
      "Neo4j",
      "NoSQL",
    ],
  },
  {
    title: "Machine Learning, AI & Analytics",
    items: [
      "PyTorch",
      "scikit-learn",
      "Explainable AI (XAI)",
      "RAG Pipelines",
      "Pandas",
      "NumPy",
      "Matplotlib",
      "Seaborn",
      "Tableau",
      "Power BI",
      "Feature Engineering",
      "Data Analysis",
    ],
  },
  {
    title: "Cloud, DevOps & Infrastructure",
    items: [
      "GCP",
      "AWS",
      "Docker",
      "Kubernetes",
      "GitHub",
      "CI/CD Pipelines",
      "Monitoring",
      "Process Automation",
    ],
  },
  {
    title: "Software Engineering & AI Tools",
    items: ["System Design", "Agile", "SDLC", "Claude", "ChatGPT", "Cursor"],
  },
]

const highlights = [
  { value: "4+", label: "Years of Industry Experience", icon: Code },
  {
    value: "Open to",
    label: "Data Engineering and Analytics, Software Engineer, AI/ML roles",
    icon: Briefcase,
  },
]

export function About() {
  return (
    <section id="about" className="py-20 md:py-32 bg-muted/30">
      <div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-7xl">
        <Motion animation="fadeInUp">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">About Me</h2>
        </Motion>

        <div className="grid gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(320px,520px)] lg:gap-16 xl:gap-20 items-start">
          {/* About Text */}
          <Motion animation="fadeInLeft" delay={0.1}>
            <div className="space-y-6 text-center lg:text-left max-w-2xl mx-auto lg:mx-0">
              <h3 className="text-xl font-semibold text-foreground">WHO AM I?</h3>
              <p className="text-muted-foreground leading-relaxed">
                Hey, I’m Prasad Adhau, a Data guy passionate about building scalable data
                systems, clean architectures, and AI-driven solutions that turn messy raw
                data into meaningful impact. I genuinely enjoy designing reliable pipelines,
                optimizing workflows, and creating dashboards that help people make smarter
                decisions. If there’s a performance bottleneck somewhere in the system,
                there’s a good chance I’ll keep tweaking it long after I was supposed to
                stop.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                My approach to engineering is simple: build systems that are scalable,
                automated, easy to monitor, and actually understandable by the people using
                them. I enjoy simplifying complex technical problems and translating them
                into clear insights for stakeholders without turning every discussion into a
                maze of diagrams and jargon.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Outside of work, I’m usually overanalyzing badminton games like they’re
                production pipelines, exploring new cafés and places on impulse, or
                experimenting with new AI tools and technologies just out of curiosity. I
                believe the best engineers never stop learning, stay endlessly curious, and
                always look for better ways to build things. If you appreciate scalable
                systems, clean documentation, and the occasional AI joke, we’ll probably get
                along well.
              </p>

              {/* Highlights */}
              <div className="grid items-stretch gap-4 pt-6 md:grid-cols-2 max-w-2xl mx-auto lg:mx-0">
                {highlights.map((item, index) => (
                  <Motion key={item.label} animation="scaleIn" delay={0.2 + index * 0.1} className="h-full">
                    <div className="h-full text-center p-5 rounded-xl bg-background border border-border hover:border-brand-accent/50 transition-colors group flex flex-col items-center justify-center">
                      <item.icon className="w-6 h-6 mx-auto mb-2 text-brand-accent group-hover:scale-110 transition-transform" />
                      <div className={`font-bold text-foreground ${item.value === "Open to" ? "text-xl md:text-2xl" : "text-2xl md:text-3xl"}`}>
                        {item.value}
                      </div>
                      <div className="text-sm text-muted-foreground">{item.label}</div>
                    </div>
                  </Motion>
                ))}
              </div>
            </div>
          </Motion>

          {/* Skills */}
          <Motion animation="fadeInRight" delay={0.2}>
            <div className="bg-background rounded-2xl p-6 md:p-8 border border-border w-full max-w-xl mx-auto lg:mx-0">
              <div className="flex items-center justify-center lg:justify-start gap-2 mb-6">
                <Cloud className="w-5 h-5 text-brand-accent" />
                <h3 className="text-xl font-semibold">Skills & Tools</h3>
              </div>
              <div className="space-y-4">
                {skillCategories.map((group) => (
                  <div key={group.title}>
                    <h4 className="text-sm font-semibold text-foreground mb-1">
                      {group.title}:
                    </h4>
                    <div className="flex flex-wrap gap-2 pt-1">
                      {group.items.map((skill) => (
                        <span
                          key={skill}
                          className="px-3 py-1 rounded-full text-sm font-medium bg-brand-accent/10 text-brand-accent border border-brand-accent/20 hover:bg-brand-accent/15 hover:border-brand-accent/50 transition-colors"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </Motion>
        </div>
      </div>
    </section>
  )
}
