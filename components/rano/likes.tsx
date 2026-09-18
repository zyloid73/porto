import Image from "next/image"
import { ArrowUpRight, Asterisk } from "lucide-react"

const images = [
  { name: "GAMES", subtitle: "A different kind of escape.", image: "/images/game.webp", alt: "A cinematic game environment with geometric concrete architecture and a lavender sky.", className: "collage-game", index: "01" },
  { name: "MUSIC", subtitle: "Something for every mood.", image: "/images/music.webp", alt: "Deep blue light catches the fine grooves of a vinyl record.", className: "collage-music", index: "02" },
  { name: "MOVIES & SERIES", subtitle: "Just one more episode.", image: "/images/cinema.webp", alt: "A lone figure on a monumental concrete staircase in a cinematic black-and-white scene.", className: "collage-cinema", index: "03" },
]

export function Likes() {
  return (
    <section id="likes" className="likes-scene page-gutter" data-scene="likes" tabIndex={-1} aria-labelledby="likes-title">
      <div className="section-topline mono"><span className="chapter-label"><span className="tiny-square" />06 / THINGS I LIKE</span><span className="muted">A VERY INCOMPLETE COLLECTION.</span></div>
      <div className="likes-heading"><h2 id="likes-title" className="display">GOOD<br />DISTRACTIONS<span className="blue">.</span></h2><p>A few things that make<br />the hours disappear.</p></div>
      <div className="collage">
        {images.map((image) => (
          <div key={image.name} className={`collage-item ${image.className}`}><figure className="collage-frame" tabIndex={0}><Image src={image.image} alt={image.alt} fill sizes="(max-width: 600px) 58vw, 32vw" /><figcaption><span className="mono">{image.index} / {image.name}</span><span>{image.subtitle}</span><ArrowUpRight size={20} aria-hidden="true" /></figcaption></figure></div>
        ))}
        <div className="collage-item collage-internet"><div className="internet-print" tabIndex={0}><span className="mono">THE INTERNET IS A STRANGE PLACE.</span><span className="internet-print-title">STAY<br />CURIOUS<span>↗</span></span><div className="internet-print-bottom"><Asterisk size={35} strokeWidth={1.2} aria-hidden="true" /><span className="mono">TECHNOLOGY<br />& INTERNET CULTURE</span></div></div></div>
        <span className="collage-note mono">NO ALGORITHM.<br />JUST THINGS I LIKE.</span>
      </div>
      <div className="likes-bottom mono"><span>GAMES / MUSIC / MOVIES / SERIES / TECH / THE INTERNET</span><span className="muted">COLLECTED, NOT CURATED.</span></div>
    </section>
  )
}
