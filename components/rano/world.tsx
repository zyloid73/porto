"use client"

import Image from "next/image"
import { useRef, useState } from "react"
import { ArrowRight, ArrowUpRight } from "lucide-react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { useGSAP } from "@gsap/react"
import { useExperience } from "@/components/rano/experience"
import { cn } from "@/lib/utils"

 gsap.registerPlugin(ScrollTrigger, useGSAP)

const worlds = [
  {
    title: "CODE",
    label: "WHERE I USUALLY START",
    description: "Building websites, trying things, and seeing what works.",
    detail: "SOMEHOW IT ALWAYS GETS MORE COMPLICATED.",
    image: "/images/blue-folds.webp",
  },
  {
    title: "GAME",
    label: "ONE MORE ROUND",
    description: "Valorant · Roblox · GTA V",
    detail: "I SAID ONE MORE. I LIED.",
    image: "/images/game.webp",
  },
  {
    title: "STREAM",
    label: "TRYING TO MAKE IT LOOK GOOD",
    description: "OBS · visuals · audio",
    detail: "STILL TWEAKING SOMETHING.",
    image: "/images/setup.webp",
  },
  {
    title: "MUSIC",
    label: "ALMOST ALWAYS PLAYING",
    description: "Whatever fits the mood.",
    detail: "THERE'S USUALLY SOMETHING ON.",
    image: "/images/music.webp",
  },
  {
    title: "CREATE",
    label: "JUST MAKING STUFF",
    description: "Designing, editing, and messing around with ideas.",
    detail: "SOME OF THEM ACTUALLY WORK.",
    image: "/images/cinema.webp",
  },
]

export function World() {
  const root = useRef<HTMLElement>(null)
  const track = useRef<HTMLDivElement>(null)
  const trigger = useRef<ScrollTrigger | null>(null)
  const [active, setActive] = useState(0)
  const { navigate } = useExperience()

  useGSAP(() => {
    const media = gsap.matchMedia()
    media.add("(min-width: 900px) and (prefers-reduced-motion: no-preference)", () => {
      if (!track.current || !root.current) return
      const tween = gsap.to(track.current, {
        x: () => -(track.current!.scrollWidth - root.current!.clientWidth),
        ease: "none",
        scrollTrigger: {
          id: "world-scroll",
          trigger: root.current,
          start: "top top",
          end: () => `+=${window.innerWidth * 2.6}`,
          pin: true,
          scrub: 0.75,
          invalidateOnRefresh: true,
          onUpdate: (self) => setActive(Math.min(4, Math.round(self.progress * 4))),
        },
      })
      trigger.current = tween.scrollTrigger ?? null
      return () => { trigger.current = null }
    })
    return () => media.revert()
  }, { scope: root })

  function selectWorld(index: number) {
    setActive(index)
    if (trigger.current) navigate(trigger.current.start + (index / 4) * (trigger.current.end - trigger.current.start))
  }

  return (
    <section id="world" ref={root} className="world-scene" data-scene="world" tabIndex={-1} aria-labelledby="world-title">
      <div className="section-topline mono page-gutter"><h2 id="world-title" className="chapter-label"><span className="tiny-square" />03 / MY WORLD</h2><span className="muted world-scroll-hint">DIFFERENT SIDES. SAME ME. <ArrowRight size={14} aria-hidden="true" /></span></div>
      <div className="world-viewport">
        <div className="world-track" ref={track}>
          {worlds.map((world, index) => (
            <article className={cn("world-item", active === index && "is-active")} key={world.title}>
              <span className="world-kicker mono"><span className="blue">0{index + 1}</span> / {world.label}</span>
              <button className="world-word display" aria-pressed={active === index} aria-describedby={`world-description-${index}`} onClick={() => selectWorld(index)} onFocus={() => selectWorld(index)}>{world.title}<ArrowUpRight aria-hidden="true" /></button>
              <div className="world-item-bottom"><p id={`world-description-${index}`}>{world.description}</p><span className="mono muted">{world.detail}</span></div>
              <div className="world-image" aria-hidden="true"><Image src={world.image} alt="" fill sizes="(max-width: 899px) 180px, 28vw" /></div>
            </article>
          ))}
        </div>
      </div>
      <div className="world-bottom page-gutter mono"><span>A FEW THINGS I COME BACK TO.</span><div className="world-pagination" aria-label="Choose a world">{worlds.map((world, index) => <button key={world.title} aria-label={`Explore ${world.title.toLowerCase()}`} aria-pressed={active === index} className={cn(active === index && "is-active")} onClick={() => selectWorld(index)}><span /></button>)}<span className="world-count">0{active + 1} <span className="muted">/ 05</span></span></div></div>
    </section>
  )
}
