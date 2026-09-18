import Image from "next/image"
import { ArrowDown, ArrowDownRight, Asterisk } from "lucide-react"

export function Intro() {
  return (
    <section
      id="intro"
      className="intro-scene page-gutter"
      data-scene="intro"
      tabIndex={-1}
      aria-labelledby="intro-title"
    >
      <div className="hero-art" aria-hidden="true">
        <Image
          src="/images/blue-folds.webp"
          alt=""
          fill
          priority
          sizes="100vw"
          className="hero-art-image"
        />
      </div>

      <div className="hero-shade" aria-hidden="true" />

      <div className="hero-topline mono">
        <span className="chapter-label">
          <span className="tiny-square" />
          01 / INTRO
        </span>

        <span className="hero-top-right">
          PERSONAL SPACE<span className="muted"> — 2026</span>
        </span>
      </div>

      <div className="hero-main">
        <div className="hero-pretitle mono">
          <span>NOT A PORTFOLIO. JUST ME.</span>
          <ArrowDownRight size={16} aria-hidden="true" />
        </div>

        <div className="hero-wordmark">
          <h1 id="intro-title" className="hero-title" aria-label="Rano">
            {"RANO".split("").map((letter) => (
              <span
                className="hero-title-letter"
                key={letter}
                aria-hidden="true"
              >
                {letter}
              </span>
            ))}
          </h1>

          <span className="hero-edition mono" aria-hidden="true">
            *
          </span>
        </div>

        <div className="hero-details mono">
          <div className="hero-location">
            <span>20</span>
            <span className="detail-divider" />
            <span>
              BASED IN INDONESIA <span className="location-dot" />
            </span>
          </div>

          <span className="hero-roles">
            DEVELOPER <span>/</span> GAMER <span>/</span> CREATOR
          </span>
        </div>
      </div>

      <div className="hero-bottom">
        <a href="#about" className="scroll-invitation">
          <span className="circle-arrow">
            <ArrowDown size={18} strokeWidth={1.3} aria-hidden="true" />
          </span>

          <span className="mono">SCROLL TO MEET ME</span>
        </a>

        <div className="hero-note">
          <Asterisk size={31} strokeWidth={1.15} aria-hidden="true" />

          <p>
            A few things I&apos;m into.
            <br />
            <span className="muted">And whatever else shows up.</span>
          </p>
        </div>

        <span className="hero-coordinate mono">
          MOSTLY AT MY DESK
          <span className="muted">SOMEWHERE ONLINE</span>
        </span>
      </div>
    </section>
  )
}
