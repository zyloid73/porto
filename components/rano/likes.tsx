import Image from "next/image"
import { ArrowUpRight, Asterisk } from "lucide-react"

const images = [
  { name: "GAMES", subtitle:"One more round. Usually.", image: "/images/game.webp", alt: "A cinematic game environment with geometric concrete architecture and a lavender sky.", className: "collage-game", index: "01" },
  { name: "MUSIC", subtitle: "There&apos;s usually something playing.", image: "/images/music.webp", alt: "Deep blue light catches the fine grooves of a vinyl record.", className: "collage-music", index: "02" },
  { name: "MOVIES & SERIES", subtitle: "That was definitely the last one.", image: "/images/cinema.webp", alt: "A lone figure on a monumental concrete staircase in a cinematic black-and-white scene.", className: "collage-cinema", index: "03" },
]

export function Likes() {
  return (
    <section id="likes" className="likes-scene page-gutter" data-scene="likes" tabIndex={-1} aria-labelledby="likes-title">
      <div className="section-topline mono"><span className="chapter-label"><span className="tiny-square" />06 / THINGS I LIKE</span><span className="muted">A FEW THINGS I KEEP COMING BACK TO.</span></div>
      <div className="likes-heading"><h2 id="likes-title" className="display">GOOD<br />DISTRACTIONS<span className="blue">.</span></h2><p>Things I end up coming back to<br />when I need a break.</p></div>
      <div className="collage">
        {images.map((image) => (
          <div key={image.name} className={`collage-item ${image.className}`}><figure className="collage-frame" tabIndex={0}><Image src={image.image} alt={image.alt} fill sizes="(max-width: 600px) 58vw, 32vw" /><figcaption><span className="mono">{image.index} / {image.name}</span><span>{image.subtitle}</span><ArrowUpRight size={20} aria-hidden="true" /></figcaption></figure></div>
        ))}
        <div className="collage-item collage-internet"><div className="internet-print" tabIndex={0}><span className="mono">I SPEND WAY TOO MUCH TIME HERE.</span><span className="internet-print-title">STAY<br />CURIOUS<span>↗</span></span><div className="internet-print-bottom"><Asterisk size={35} strokeWidth={1.2} aria-hidden="true" /><span className="mono">TECHNOLOGY<br />& INTERNET CULTURE</span></div></div></div>
        <span className="collage-note mono">NO DEEP REASON.<br />I JUST LIKES THIS STUFF.</span>
      </div>
      <div className="likes-bottom mono"><span>GAMES / MUSIC / MOVIES / SERIES / TECH / THE INTERNET</span><span className="muted">COLLECTED, NOT CURATED.</span></div>
    </section>
  )
}
