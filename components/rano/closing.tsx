"use client"

import { useState } from "react"
import { ArrowUp, ArrowUpRight, Asterisk, PanelsTopLeft } from "lucide-react"
import { useExperience } from "@/components/rano/experience"
import { socialLinks } from "@/lib/rano"

export function Random() {
  return (
    <section className="random-scene page-gutter" aria-labelledby="random-title">
      <div className="random-topline mono"><span>INTERLUDE / SAME OLD HABIT</span><PanelsTopLeft size={23} strokeWidth={1} aria-hidden="true" /></div>
      <div className="random-copy display"><h2 id="random-title" className="random-line">ONE MORE TAB<br />WON&apos;T HURT.</h2><p className="random-line random-regret">IT ALWAYS HURTS.</p><p className="random-line random-punchline">BUT I STILL<br /><span className="blue">OPENED IT.</span></p></div>
      <span className="random-footnote mono muted">STILL HERE. STILL OPENING TABS.</span>
    </section>
  )
}

export function FindMe() {
  const [selected, setSelected] = useState<string | null>(null)
  return (
    <section id="find-me" className="find-scene page-gutter" data-scene="find-me" tabIndex={-1} aria-labelledby="find-title">
      <div className="section-topline mono"><span className="chapter-label"><span className="tiny-square" />07 / FIND ME</span><span className="muted">THE INTERNET IS SMALL. SAY HI.</span></div>
      <div className="find-layout"><div className="find-heading"><h2 id="find-title" className="display">FIND<br />ME<span className="blue">↗</span></h2><p>Usually online.<br />Probably doing something.</p>{socialLinks.some((social) => !social.url) && <span className="mono muted">MORE PLACES SOON.</span>}</div>
        <div className="social-links">{socialLinks.map((social, index) => {
          const content = <><span className="social-index mono">0{index + 1}</span><span className="social-name">{social.name}</span><ArrowUpRight strokeWidth={1.1} aria-hidden="true" /></>
          return <div className="social-row" key={social.name}>{social.url ? <a className="social-link" href={social.url} target="_blank" rel="noopener noreferrer">{content}<span className="sr-only"> (opens in a new tab)</span></a> : <button className="social-link" onClick={() => setSelected(selected === social.name ? null : social.name)} aria-expanded={selected === social.name} aria-controls={`social-note-${index}`}>{content}</button>}{!social.url && <p className="social-note mono" id={`social-note-${index}`} hidden={selected !== social.name}>{social.name} hasn&apos;t been linked yet. Check back soon.</p>}</div>
        })}</div>
      </div>
    </section>
  )
}

export function Farewell() {
  const { navigate } = useExperience()
  return (
    <footer id="farewell" className="farewell-scene page-gutter" tabIndex={-1}>
      <div className="farewell-top"><span className="mono muted">THAT&apos;S PRETTY MUCH ME.</span><Asterisk size={55} strokeWidth={0.9} aria-hidden="true" /></div>
      <p className="farewell-title display">SEE YOU<br /><span className="farewell-last-line">AROUND<span className="blue">.</span><span className="farewell-thanks">Thanks for<br />sticking around.</span></span></p>
      <div className="farewell-bottom mono"><span>RANO / 2026</span><span className="footer-note muted">MADE LATE AT NIGHT. WITH TOO MANY TABS.</span><a href="#intro" onClick={(event) => { event.preventDefault(); navigate("#intro") }}>BACK TO TOP <ArrowUp size={16} strokeWidth={1.3} aria-hidden="true" /></a></div>
    </footer>
  )
}
