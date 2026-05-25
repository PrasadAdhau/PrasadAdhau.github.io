"use client"

import Image from "next/image"
import { Motion } from "@/components/motion"
import { Button } from "@/components/ui/button"
import { withBasePath } from "@/lib/paths"
import { Github, Database, Cloud, BarChart3, Workflow, Calendar } from "lucide-react"

const projects = [
  {
    title: "NeuroExplain: Explainable Brain Tumor Analysis",
    description:
      "Built an end-to-end AI-powered medical imaging system for brain tumor segmentation and explainable diagnosis using 3D U-Net, Grad-CAM, and RAG-based LLM reporting. Designed scalable deep learning pipelines for MRI analysis, automated report generation, and clinically interpretable visual explanations aligned with tumor regions.",
    category: "AI + Medical Imaging",
    icon: Workflow,
    tags: [
      "Deep Learning",
      "3D U-Net",
      "LLMs",
      "RAG",
      "PyTorch",
      "Explainable AI (XAI)",
      "Medical Imaging",
      "Computer Vision",
      "Python",
    ],
    githubUrl: "#",
    image: "/images/NeuroExplain.png",
  },
  {
    title: "Amazon Review Sentiment Analyzer",
    description:
      "Developed an NLP-based sentiment analysis platform to process large-scale customer reviews using BERT and aspect-based analysis. Built real-time inference workflows and interactive Python GUIs to identify customer sentiment patterns, recurring feedback themes, and product insights from 50K+ reviews.",
    category: "NLP",
    icon: Cloud,
    tags: ["Python", "BERT", "Hugging Face", "NLP", "TF-IDF", "scikit-learn", "Pandas", "Matplotlib", "Tkinter"],
    githubUrl: "https://github.com/PrasadAdhau/scamazon-sentiment",
    image: "/images/scamazon.png",
  },
  {
    title: "Walmart Sales Forecasting with PySpark and XAI",
    description:
      "Developed an end-to-end retail sales forecasting pipeline using PySpark and machine learning to predict Walmart weekly sales across stores and departments using historical sales, store metadata, and external economic indicators. Engineered scalable data preprocessing and feature engineering workflows, implemented ensemble regression models, and integrated SHAP and LIME-based Explainable AI to uncover key business drivers, improve model transparency, and enable data-driven retail decision-making.",
    category: "Retail Forecasting",
    icon: Database,
    tags: [
      "Python",
      "PySpark",
      "Machine Learning",
      "XAI",
      "SHAP",
      "LIME",
      "Scikit-learn",
      "Random Forest",
      "Gradient Boosted Trees",
      "Pandas",
      "NumPy",
      "Feature Engineering",
      "Regression Modeling",
      "Retail Analytics",
      "Data Visualization",
      "EDA",
    ],
    githubUrl: "https://github.com/PrasadAdhau/Walmart-Sales-Forecasting/tree/main",
    image: "/images/walmart.png",
  },
  {
    title: "Flight Network Dashboard",
    description:
      "Developed an interactive graph analytics dashboard to visualize large-scale airport connectivity and flight route networks using Neo4j, Cypher, D3.js, JavaScript, and Node.js. Built dynamic graph querying and real-time filtering workflows to analyze 46K+ flight routes and complex airport relationships, enabling efficient network exploration and route pattern analysis through advanced graph interactions including zoom, pan, tooltips, and node-level relationship visualization. Optimized frontend rendering and graph interaction performance by 40%, improving usability and responsiveness for large-scale graph datasets and real-time user-driven analytics.",
    category: "Graph Analytics",
    icon: BarChart3,
    tags: ["Neo4j", "Cypher", "JavaScript", "D3.js", "Node.js", "Graph Databases", "HTML/CSS"],
    githubUrl: "https://github.com/PrasadAdhau/neo4j-flightDashboard-PrasadAdhau",
    image: "/images/Neo4j.png",
  },
  {
    title: "Prediction of Early Readmission of Diabetes Patients",
    description:
      "Built a machine learning pipeline to predict early hospital readmissions using ensemble learning techniques on healthcare datasets containing 15K+ patient records. Implemented preprocessing, SMOTE balancing, feature engineering, hyperparameter tuning, and comparative evaluation across multiple ML models.",
    category: "Machine Learning",
    icon: Database,
    tags: ["Python", "Random Forest", "XGBoost", "scikit-learn", "SMOTE", "Pandas", "NumPy", "Machine Learning", "Data Analysis"],
    githubUrl: "https://github.com/PrasadAdhau/Diabetic-Readmission-Prediction",
    image: "/images/prediction.jpeg",
  },
  {
    title: "Supermarket Sales Analysis",
    period: "Nov 2024 – Dec 2024",
    description:
      "Analyzed supermarket sales data across multiple retail branches to identify key business drivers, customer purchasing trends, and branch-level performance patterns using statistical analysis techniques. Applied ANOVA, regression analysis, and Chi-square testing in Minitab to evaluate relationships between sales, customer behavior, product categories, and operational variables, enabling data-driven recommendations to improve sales strategy and branch performance.",
    category: "Retail Analytics",
    icon: BarChart3,
    tags: [
      "Data Analysis",
      "Statistical Modeling",
      "Regression Analysis",
      "ANOVA",
      "Chi-Square Testing",
      "Minitab",
      "Retail Analytics",
      "Business Intelligence",
      "Data Visualization",
      "Sales Analytics",
    ],
    image: "/images/sales_analytics.webp",
  },
]

export function Projects() {
  return (
    <section id="projects" className="py-20 md:py-32 bg-muted/30">
      <div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-7xl">
        <Motion animation="fadeInUp">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
            My Projects
          </h2>
          <p className="text-muted-foreground text-center max-w-2xl mx-auto mb-16">
            A collection of projects I've built and contributed to.
          </p>
        </Motion>

        <div className="grid md:grid-cols-2 gap-6 lg:gap-8 items-stretch">
          {projects.map((project, index) => (
            <Motion
              key={project.title}
              animation="fadeInUp"
              delay={0.1 + index * 0.1}
              className="h-full"
            >
              <div className="group h-full bg-card rounded-2xl border border-border overflow-hidden hover:border-brand-accent/50 hover:shadow-xl transition-all duration-500 flex flex-col">
                {/* Project Header with Image */}
                <div className="h-48 bg-gradient-to-br from-brand-accent/10 to-brand-accent/5 relative overflow-hidden">
                  {project.image ? (
                    <Image
                      src={withBasePath(project.image || "/placeholder.svg")}
                      alt={project.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center">
                      <project.icon className="w-16 h-16 text-brand-accent/30 group-hover:scale-110 transition-transform duration-500" />
                    </div>
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute top-4 left-4">
                    <span className="text-xs font-medium text-brand-accent bg-background/90 backdrop-blur-sm px-3 py-1 rounded-full">
                      {project.category}
                    </span>
                  </div>
                </div>

                {/* Project Content */}
                <div className="p-6 flex-1 flex flex-col">
                  <h3 className="text-xl font-semibold text-foreground mb-2 group-hover:text-brand-accent transition-colors">
                    {project.title}
                  </h3>
                  {"period" in project && project.period && (
                    <p className="text-muted-foreground text-sm mb-2 inline-flex items-center gap-1.5">
                      <Calendar className="w-4 h-4" />
                      {project.period}
                    </p>
                  )}
                  <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                    {project.description}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-xs px-2 py-1 bg-muted rounded-md text-muted-foreground"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Actions */}
                  {"githubUrl" in project && project.githubUrl && (
                    <div className="flex gap-3 mt-auto">
                      <Button
                        variant="outline"
                        size="sm"
                        className="w-full group/btn bg-transparent text-brand-accent border-brand-accent/40 hover:border-brand-accent hover:text-brand-accent hover:bg-brand-accent/10"
                        asChild
                      >
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <Github className="w-4 h-4 mr-2 group-hover/btn:rotate-12 transition-transform" />
                          View on GitHub
                        </a>
                      </Button>
                    </div>
                  )}
                </div>
              </div>
            </Motion>
          ))}
        </div>

      </div>
    </section>
  )
}
