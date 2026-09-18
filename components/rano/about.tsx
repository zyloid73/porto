import { ArrowDownRight, Asterisk } from "lucide-react"

export function About() {
  return (
    <section id="about" className="about-scene page-gutter" data-scene="about" tabIndex={-1} aria-labelledby="about-title">
      <div className="section-topline mono"><span className="chapter-label"><span className="tiny-square" />02 / ABOUT</span><span className="muted">CURIOSITY IS THE COMMON THREAD.</span></div>
      <div className="about-heading-wrap">
        <h2 id="about-title" className="about-headline display"><span className="line-mask"><span className="line-inner">I LIKE MAKING</span></span><span className="line-mask"><span className="line-inner">THINGS<span className="blue">.</span></span></span></h2>
        <div className="about-aside"><ArrowDownRight size={38} strokeWidth={1} aria-hidden="true" /><p>Usually on a screen.<br />Always out of curiosity.</p></div>
      </div>
      <div className="making-playground" aria-label="Websites, interfaces, videos, streams, and experiments">
        <span className="making-word word-websites">websites<span className="mono">01</span></span>
        <span className="making-word word-interfaces">interfaces<span className="mono">02</span></span>
        <span className="making-word word-videos">videos<span className="mono">03</span></span>
        <span className="making-word word-streams">streams<span className="mono">04</span></span>
        <span className="making-word word-experiments">experiments<span className="mono">05</span></span>
        <Asterisk className="playground-asterisk" size={65} strokeWidth={0.9} aria-hidden="true" />
      </div>
      <div className="because-wrap">
        <span className="mono muted">NO BIG MASTER PLAN.<br />JUST ONE MORE IDEA.</span>
        <p className="because display"><span className="because-line">AND SOMETIMES</span><span className="because-line">I BUILD THINGS</span><span className="because-line">JUST BECAUSE <span className="lavender">I CAN.</span></span></p>
      </div>
    </section>
  )
}
