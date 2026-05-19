"use client"

import { useState, useEffect, useRef } from "react"

export function useTypewriter(
  text: string | string[],
  speed: number = 100, 
  delay: number = 0,
  loop: boolean = false,
  pauseDuration: number = 2000
) {
  const textList = Array.isArray(text) ? text : [text]
  const [displayedText, setDisplayedText] = useState("")
  const [phase, setPhase] = useState<"typing" | "pausing" | "deleting" | "waiting">("waiting")
  const indexRef = useRef(0)
  const textIndexRef = useRef(0)
  const initialDelayDone = useRef(false)

  useEffect(() => {
    let timeoutId: NodeJS.Timeout

    // Initial delay
    if (!initialDelayDone.current) {
      timeoutId = setTimeout(() => {
        initialDelayDone.current = true
        setPhase("typing")
      }, delay)
      return () => clearTimeout(timeoutId)
    }

    const currentText = textList[textIndexRef.current] ?? ""

    if (phase === "typing") {
      if (indexRef.current < currentText.length) {
        timeoutId = setTimeout(() => {
          indexRef.current++
          setDisplayedText(currentText.slice(0, indexRef.current))
        }, speed)
      } else {
        // Finished typing
        if (loop) {
          setPhase("pausing")
        }
      }
    } else if (phase === "pausing") {
      timeoutId = setTimeout(() => {
        setPhase("deleting")
      }, pauseDuration)
    } else if (phase === "deleting") {
      if (indexRef.current > 0) {
        timeoutId = setTimeout(() => {
          indexRef.current--
          setDisplayedText(currentText.slice(0, indexRef.current))
        }, speed / 2)
      } else {
        if (loop && textList.length > 1) {
          textIndexRef.current = (textIndexRef.current + 1) % textList.length
        }
        setPhase("waiting")
      }
    } else if (phase === "waiting") {
      timeoutId = setTimeout(() => {
        setPhase("typing")
      }, 500)
    }

    return () => clearTimeout(timeoutId)
  }, [text, textList, speed, delay, loop, pauseDuration, phase, displayedText])

  return { displayedText, isDeleting: phase === "deleting" }
}
