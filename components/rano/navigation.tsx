"use client"

import { useState } from "react"
import { ArrowUpRight, Asterisk, Plus, X } from "lucide-react"
import { Dialog, DialogContent, DialogDescription, DialogTitle, DialogTrigger, DialogClose } from "@/components/ui/dialog"
import { useExperience } from "@/components/rano/experience"
import { cn } from "@/lib/utils"

const chapters = [
  { id: "intro", name: "Intro" },
  { id: "about", name: "About" },
  { id: "world", name: "World" },
  { id: "currently", name: "Currently" },
  { id: "setup", name: "Setup" },
  { id: "likes", name: "Likes" },
  { id: "find-me", name: "Find me" },
]

export function Navigation() {
  const [open, setOpen] = useState(false)
  const { navigate, setMenuOpen, activeSection } = useExperience()

  function changeOpen(value: boolean) {
    setOpen(value)
    setMenuOpen(value)
  }

  return (
    <>
      <a className="skip-link" href="#about">Skip introduction</a>
      <header className="site-header page-gutter">
        <a className="wordmark" href="#intro" aria-label="Rano, back to introduction" onClick={(event) => { event.preventDefault(); navigate("#intro") }}>
          RANO<Asterisk className="wordmark-star" strokeWidth={2.2} aria-hidden="true" />
        </a>
        <p className="header-note mono">A SMALL CORNER OF THE INTERNET</p>
        <Dialog open={open} onOpenChange={changeOpen}>
          <DialogTrigger className="menu-trigger mono">MENU <Plus size={15} strokeWidth={1.4} aria-hidden="true" /></DialogTrigger>
          <DialogContent variant="fullscreen" showCloseButton={false}>
            <DialogTitle className="sr-only">Explore Rano&apos;s world</DialogTitle>
            <DialogDescription className="sr-only">Jump to a chapter of this personal website.</DialogDescription>
            <div className="menu-top">
              <span className="wordmark">RANO<Asterisk className="wordmark-star" strokeWidth={2.2} aria-hidden="true" /></span>
              <DialogClose className="menu-trigger mono">CLOSE <X size={16} strokeWidth={1.4} aria-hidden="true" /></DialogClose>
            </div>
            <div className="menu-body">
              <div className="menu-aside">
                <span className="mono eyebrow">A LITTLE INTRODUCTION.</span>
                <p>Not a portfolio.<br />Just a little bit of me.</p>
                <span className="mono muted">20 / INDONESIA</span>
              </div>
              <nav className="menu-links" aria-label="Main navigation">
                {chapters.map((chapter, index) => (
                  <a key={chapter.id} href={`#${chapter.id}`} className={cn("menu-link", activeSection === chapter.id && "is-active")} onClick={(event) => {
                    event.preventDefault()
                    changeOpen(false)
                    navigate(`#${chapter.id}`)
                  }}>
                    <span className="mono menu-index">0{index + 1}</span>
                    <span>{chapter.name}</span>
                    <ArrowUpRight aria-hidden="true" />
                  </a>
                ))}
              </nav>
            </div>
            <div className="menu-bottom mono"><span>BUILT OUT OF CURIOSITY.</span><span>RANO / 2026</span></div>
          </DialogContent>
        </Dialog>
      </header>
      <nav className="chapter-rail" aria-label="Chapter shortcuts">
        {chapters.map((chapter, index) => (
          <a href={`#${chapter.id}`} key={chapter.id} aria-label={`0${index + 1} ${chapter.name}`} aria-current={activeSection === chapter.id ? "location" : undefined} onClick={(event) => { event.preventDefault(); navigate(`#${chapter.id}`) }}>
            <span className="rail-label mono">{chapter.name}</span><span className="rail-mark" />
          </a>
        ))}
      </nav>
    </>
  )
}
