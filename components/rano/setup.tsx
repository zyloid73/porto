"use client"

import { useState } from "react"
import Image from "next/image"
import { Plus } from "lucide-react"
import { cn } from "@/lib/utils"

const components = [
  { id: "monitor", name: "MONITOR", specification: "LG · 240HZ", x: 43, y: 38, side: "left" },
  { id: "processor", name: "PROCESSOR", specification: "Ryzen 7 7700X", x: 77, y: 48, side: "right" },
  { id: "graphics", name: "GRAPHICS", specification: "RTX 4070 Ti SUPER", x: 80, y: 65, side: "right" },
  { id: "memory", name: "MEMORY", specification: "32GB DDR5", x: 86, y: 53, side: "left" },
  { id: "audio", name: "HEADPHONES", specification: "LOGITECH G735", x: 12, y: 66, side: "right" },
  { id: "keyboard", name: "KEYBOARD", specification: "NOIR TIMELESS 82 V2", x: 49, y: 83, side: "right" },
]

export function Setup() {
  const [active, setActive] = useState<string | null>("monitor")
  return (
    <section id="setup" className="setup-scene page-gutter" data-scene="setup" tabIndex={-1} aria-labelledby="setup-title">
      <div className="section-topline mono"><span className="chapter-label"><span className="tiny-square" />05 / THE SETUP</span><span className="muted">MY LITTLE COMMAND CENTER.</span></div>
      <div className="setup-heading"><h2 id="setup-title" className="display">BEHIND THE<br /><span className="outline-text">SCREEN.</span></h2><p>Nothing over the top.<br />Everything I need.</p></div>
      <div className="setup-stage">
        <div className="setup-image"><Image src="/images/setup.webp" alt="An illustrated dark desk setup with a blue-lit monitor, black PC, mechanical keyboard, mouse, and headphones." fill sizes="(max-width: 899px) 100vw, 90vw" /></div>
        <div className="setup-vignette" aria-hidden="true" />
        {components.map((component) => (
          <div className={cn("setup-hotspot", `annotation-${component.side}`, active === component.id && "is-active")} style={{ left: `${component.x}%`, top: `${component.y}%` }} key={component.id}>
            <button type="button" className="hotspot-button" aria-label={`${component.name}: ${component.specification}`} aria-expanded={active === component.id} aria-controls={`annotation-${component.id}`} onMouseEnter={() => setActive(component.id)} onFocus={() => setActive(component.id)} onClick={() => setActive(component.id)} onKeyDown={(event) => { if (event.key === "Escape") setActive(null) }}><Plus size={14} strokeWidth={1.2} aria-hidden="true" /></button>
            <div id={`annotation-${component.id}`} className="hotspot-annotation" hidden={active !== component.id}><span className="mono muted">{component.name}</span><span>{component.specification}</span></div>
          </div>
        ))}
        <span className="setup-image-caption mono">AFTER HOURS / BEFORE ANOTHER IDEA</span>
      </div>
      <div className="setup-caption mono"><span><span className="tiny-square" />HOVER OR TAP TO EXPLORE</span><span className="muted">ARTIST&apos;S IMPRESSION · PERSONAL PHOTO GOES HERE</span></div>
    </section>
  )
}
