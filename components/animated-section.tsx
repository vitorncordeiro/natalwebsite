"use client"

import { useScrollAnimation } from "@/hooks/use-scroll-animation"
import { cn } from "@/lib/utils"

interface AnimatedSectionProps {
  children: React.ReactNode
  className?: string
  animation?: "fade-up" | "fade-down" | "fade-left" | "fade-right" | "fade" | "scale"
  delay?: number
  duration?: number
  threshold?: number
}

export function AnimatedSection({
  children,
  className,
  animation = "fade-up",
  delay = 0,
  duration = 600,
  threshold = 0.1,
}: AnimatedSectionProps) {
  const { ref, isVisible } = useScrollAnimation<HTMLDivElement>({ threshold })

  const animations = {
    "fade-up": {
      initial: "translate-y-8 opacity-0",
      visible: "translate-y-0 opacity-100",
    },
    "fade-down": {
      initial: "translate-y-[-2rem] opacity-0",
      visible: "translate-y-0 opacity-100",
    },
    "fade-left": {
      initial: "translate-x-8 opacity-0",
      visible: "translate-x-0 opacity-100",
    },
    "fade-right": {
      initial: "translate-x-[-2rem] opacity-0",
      visible: "translate-x-0 opacity-100",
    },
    fade: {
      initial: "opacity-0",
      visible: "opacity-100",
    },
    scale: {
      initial: "scale-95 opacity-0",
      visible: "scale-100 opacity-100",
    },
  }

  const { initial, visible } = animations[animation]

  return (
    <div
      ref={ref}
      className={cn(
        "transition-all ease-out",
        isVisible ? visible : initial,
        className
      )}
      style={{
        transitionDuration: `${duration}ms`,
        transitionDelay: `${delay}ms`,
      }}
    >
      {children}
    </div>
  )
}

interface AnimatedItemProps {
  children: React.ReactNode
  className?: string
  index: number
  isVisible: boolean
  animation?: "fade-up" | "fade-down" | "fade-left" | "fade-right" | "fade" | "scale"
  staggerDelay?: number
  duration?: number
}

export function AnimatedItem({
  children,
  className,
  index,
  isVisible,
  animation = "fade-up",
  staggerDelay = 100,
  duration = 500,
}: AnimatedItemProps) {
  const animations = {
    "fade-up": {
      initial: "translate-y-6 opacity-0",
      visible: "translate-y-0 opacity-100",
    },
    "fade-down": {
      initial: "translate-y-[-1.5rem] opacity-0",
      visible: "translate-y-0 opacity-100",
    },
    "fade-left": {
      initial: "translate-x-6 opacity-0",
      visible: "translate-x-0 opacity-100",
    },
    "fade-right": {
      initial: "translate-x-[-1.5rem] opacity-0",
      visible: "translate-x-0 opacity-100",
    },
    fade: {
      initial: "opacity-0",
      visible: "opacity-100",
    },
    scale: {
      initial: "scale-95 opacity-0",
      visible: "scale-100 opacity-100",
    },
  }

  const { initial, visible } = animations[animation]

  return (
    <div
      className={cn(
        "transition-all ease-out",
        isVisible ? visible : initial,
        className
      )}
      style={{
        transitionDuration: `${duration}ms`,
        transitionDelay: `${index * staggerDelay}ms`,
      }}
    >
      {children}
    </div>
  )
}
