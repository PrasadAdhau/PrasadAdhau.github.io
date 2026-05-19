"use client"

import React from "react"

import { useEffect, useRef, useState } from "react"
import { cn } from "@/lib/utils"

interface MotionProps {
  children: React.ReactNode
  className?: string
  delay?: number
  duration?: number
  animation?: "fadeIn" | "fadeInUp" | "fadeInDown" | "fadeInLeft" | "fadeInRight" | "scaleIn" | "slideUp"
}

export function Motion({
  children,
  className,
  delay = 0,
  duration = 0.6,
  animation = "fadeInUp",
}: MotionProps) {
  const [isVisible, setIsVisible] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          observer.unobserve(entry.target)
        }
      },
      { threshold: 0.1 }
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => observer.disconnect()
  }, [])

  const animations = {
    fadeIn: "opacity-0 transition-opacity",
    fadeInUp: "opacity-0 translate-y-8 transition-all",
    fadeInDown: "opacity-0 -translate-y-8 transition-all",
    fadeInLeft: "opacity-0 translate-x-8 transition-all",
    fadeInRight: "opacity-0 -translate-x-8 transition-all",
    scaleIn: "opacity-0 scale-95 transition-all",
    slideUp: "opacity-0 translate-y-12 transition-all",
  }

  const visibleState = "opacity-100 translate-y-0 translate-x-0 scale-100"

  return (
    <div
      ref={ref}
      className={cn(
        animations[animation],
        isVisible && visibleState,
        className
      )}
      style={{
        transitionDuration: `${duration}s`,
        transitionDelay: `${delay}s`,
        transitionTimingFunction: "cubic-bezier(0.25, 0.46, 0.45, 0.94)",
      }}
    >
      {children}
    </div>
  )
}

interface StaggerContainerProps {
  children: React.ReactNode
  className?: string
  staggerDelay?: number
}

export function StaggerContainer({
  children,
  className,
  staggerDelay = 0.1,
}: StaggerContainerProps) {
  const [isVisible, setIsVisible] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          observer.unobserve(entry.target)
        }
      },
      { threshold: 0.1 }
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <div ref={ref} className={className}>
      {Array.isArray(children)
        ? children.map((child, index) => (
            <div
              key={index}
              className={cn(
                "opacity-0 translate-y-4 transition-all duration-500",
                isVisible && "opacity-100 translate-y-0"
              )}
              style={{
                transitionDelay: `${index * staggerDelay}s`,
              }}
            >
              {child}
            </div>
          ))
        : children}
    </div>
  )
}
