"use client"

import { createContext, useCallback, useContext, useEffect, useRef, useState, type ReactNode } from "react"
import { useGSAP } from "@gsap/react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import Lenis from "lenis"

 gsap.registerPlugin(useGSAP, ScrollTrigger)

type ExperienceContextValue = {
  navigate: (target: string | number) => void
  setMenuOpen: (open: boolean) => void
  activeSection: string
}

const ExperienceContext = createContext<ExperienceContextValue>({
  navigate: () => {},
  setMenuOpen: () => {},
  activeSection: "intro",
})

export const useExperience = () => useContext(ExperienceContext)

export function Experience({ children }: { children: ReactNode }) {
  const root = useRef<HTMLDivElement>(null)
  const lenis = useRef<Lenis | null>(null)
  const [menuOpen, setMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState("intro")
  const [ready, setReady] = useState(false)

  const navigate = useCallback((target: string | number) => {
    const element = typeof target === "string" ? document.querySelector<HTMLElement>(target) : null
    const pinnedScene = target === "#world" ? ScrollTrigger.getById("world-scroll") : null
    const destination = pinnedScene ? pinnedScene.start : typeof target === "number" ? target : element
    if (destination === null) return
    const finish = () => element?.focus({ preventScroll: true })
    if (lenis.current) {
      lenis.current.start()
      lenis.current.scrollTo(destination, { duration: 1.35, onComplete: finish })
    } else {
      if (typeof destination === "number") window.scrollTo({ top: destination, behavior: "instant" })
      else destination.scrollIntoView({ behavior: "instant" })
      finish()
    }
    if (typeof target === "string") window.history.replaceState(null, "", target)
  }, [])

  useEffect(() => {
    const media = window.matchMedia("(prefers-reduced-motion: reduce)")
    let removeTicker: (() => void) | undefined
    const setup = () => {
      removeTicker?.()
      lenis.current?.destroy()
      lenis.current = null
      if (!media.matches) {
        const instance = new Lenis({ duration: 1.15, smoothWheel: true, syncTouch: false, anchors: true })
        lenis.current = instance
        instance.on("scroll", ScrollTrigger.update)
        const tick = (time: number) => instance.raf(time * 1000)
        gsap.ticker.add(tick)
        removeTicker = () => gsap.ticker.remove(tick)
      }
    }
    setup()
    media.addEventListener("change", setup)
    setReady(true)
    return () => {
      removeTicker?.()
      lenis.current?.destroy()
      media.removeEventListener("change", setup)
    }
  }, [])

  useEffect(() => {
    if (menuOpen) lenis.current?.stop()
    else lenis.current?.start()
  }, [menuOpen])

  useGSAP(() => {
    const media = gsap.matchMedia()
    const sections = gsap.utils.toArray<HTMLElement>("[data-scene]")
    sections.forEach((section) => {
      ScrollTrigger.create({
        trigger: section,
        start: "top 45%",
        end: "bottom 45%",
        onEnter: () => setActiveSection(section.dataset.scene ?? "intro"),
        onEnterBack: () => setActiveSection(section.dataset.scene ?? "intro"),
      })
    })
    gsap.to(".reading-progress", {
      scaleX: 1,
      ease: "none",
      scrollTrigger: { trigger: document.documentElement, start: 0, end: "max", scrub: true },
    })

    media.add({ desktop: "(min-width: 900px)", motion: "(prefers-reduced-motion: no-preference)" }, (context) => {
      if (!context.conditions?.motion) return
      const desktop = context.conditions.desktop
      const entrance = gsap.timeline({ defaults: { ease: "power3.out" } })
      entrance.from(".hero-title-letter", { yPercent: 110, rotate: 5, duration: 1.25, stagger: 0.07 }, 0)
        .from(".hero-topline, .hero-details, .hero-bottom", { opacity: 0, y: 12, duration: 0.8, stagger: 0.1 }, 0.35)
        .from(".hero-art", { opacity: 0, scale: 1.07, duration: 1.8 }, 0)

      gsap.timeline({ scrollTrigger: { trigger: "#intro", start: "top top", end: "bottom top", scrub: 0.8 } })
        .to(".hero-wordmark", { yPercent: desktop ? 32 : 16, scale: desktop ? 1.12 : 1.04, opacity: 0.15, ease: "none" }, 0)
        .to(".hero-art", { yPercent: 20, scale: 1.1, ease: "none" }, 0)
        .to(".hero-details, .hero-topline", { y: -50, opacity: 0, ease: "none" }, 0)

      gsap.from(".about-headline .line-inner", {
        yPercent: 110, rotate: 2, stagger: 0.13, duration: 1.15, ease: "power3.out",
        scrollTrigger: { trigger: ".about-headline", start: "top 90%", toggleActions: "play none none reverse" },
      })
      gsap.utils.toArray<HTMLElement>(".making-word").forEach((word, index) => {
        gsap.fromTo(word, { x: (index % 2 ? 1 : -1) * (desktop ? 95 : 22) }, {
          x: (index % 2 ? -1 : 1) * (desktop ? 60 : 10), ease: "none",
          scrollTrigger: { trigger: ".making-playground", start: "top bottom", end: "bottom top", scrub: 1 + index * 0.15 },
        })
      })
      gsap.from(".because-line", {
        opacity: 0.15, stagger: 0.25, ease: "none",
        scrollTrigger: { trigger: ".because", start: "top 85%", end: "bottom 55%", scrub: 0.8 },
      })
      gsap.from(".now-title", {
        clipPath: "inset(0 100% 0 0)", duration: 1.4, ease: "power3.inOut",
        scrollTrigger: { trigger: "#currently", start: "top 70%", toggleActions: "play none none reverse" },
      })
      gsap.utils.toArray<HTMLElement>(".current-row").forEach((row, index) => {
        gsap.from(row, { x: 28, opacity: 0, duration: 0.7, delay: index * 0.12, scrollTrigger: { trigger: row, start: "top 90%" } })
      })
      gsap.fromTo(".setup-image", { yPercent: desktop ? -6 : -2, scale: 1.08 }, {
        yPercent: desktop ? 6 : 2, scale: 1.02, ease: "none",
        scrollTrigger: { trigger: ".setup-stage", start: "top bottom", end: "bottom top", scrub: 1 },
      })
      gsap.utils.toArray<HTMLElement>(".collage-item").forEach((item, index) => {
        gsap.fromTo(item, { y: desktop ? [65, -35, 90, 35][index] : 12 }, {
          y: desktop ? [-65, 35, -55, -30][index] : -12, ease: "none",
          scrollTrigger: { trigger: ".collage", start: "top bottom", end: "bottom top", scrub: 0.8 + index * 0.15 },
        })
      })
      gsap.utils.toArray<HTMLElement>(".random-line").forEach((line, index) => {
        gsap.from(line, {
          opacity: 0.14, x: index === 1 ? -25 : 25, ease: "none",
          scrollTrigger: { trigger: line, start: "top 85%", end: "top 55%", scrub: 0.5 },
        })
      })
      gsap.fromTo(".farewell-title", { y: 60, opacity: 0.4 }, {
        y: 0, opacity: 1, ease: "none",
        scrollTrigger: { trigger: "#farewell", start: "top 90%", end: "center 65%", scrub: 1.2 },
      })
    })
    document.fonts.ready.then(() => ScrollTrigger.refresh())
    return () => media.revert()
  }, { scope: root })

  return (
    <ExperienceContext.Provider value={{ navigate, setMenuOpen, activeSection }}>
      <div ref={root} className="experience" data-ready={ready}>
        <div className="reading-progress" aria-hidden="true" />
        {children}
      </div>
    </ExperienceContext.Provider>
  )
}
