import { ArrowDownRight, Asterisk } from "lucide-react"

export function About() {
  return (
    <section
      id="about"
      className="about-scene page-gutter"
      data-scene="about"
      tabIndex={-1}
      aria-labelledby="about-title"
    >
      <div className="section-topline mono">
        <span className="chapter-label">
          <span className="tiny-square" />
          02 / ABOUT
        </span>

        <span className="muted">A FEW THINGS I LIKE DOING.</span>
      </div>

      <div className="about-heading-wrap">
        <h2 id="about-title" className="about-headline display">
          <span className="line-mask">
            <span className="line-inner">I LIKE MAKING</span>
          </span>

          <span className="line-mask">
            <span className="line-inner">
              THINGS<span className="blue">.</span>
            </span>
          </span>
        </h2>

        <div className="about-aside">
          <ArrowDownRight size={38} strokeWidth={1} aria-hidden="true" />

          <p>
            Mostly on a screen.
            <br />
            Usually because something crossed my mind.
          </p>
        </div>
      </div>

      <div
        className="making-playground"
        aria-label="Websites, interfaces, videos, streams, and experiments"
      >
        <span className="making-word word-websites">
          websites<span className="mono">01</span>
        </span>

        <span className="making-word word-interfaces">
          interfaces<span className="mono">02</span>
        </span>

        <span className="making-word word-videos">
          videos<span className="mono">03</span>
        </span>

        <span className="making-word word-streams">
          streams<span className="mono">04</span>
        </span>

        <span className="making-word word-experiments">
          experiments<span className="mono">05</span>
        </span>

        <Asterisk
          className="playground-asterisk"
          size={65}
          strokeWidth={0.9}
          aria-hidden="true"
        />
      </div>

      <div className="because-wrap">
        <span className="mono muted">
          IT USUALLY STARTS SMALL.
          <br />
          THEN I KEEP GOING.
        </span>

        <p className="because display">
          <span className="because-line">SOMETIMES</span>
          <span className="because-line">I JUST HAVE</span>
          <span className="because-line">
            TO SEE <span className="lavender">WHERE IT GOES.</span>
          </span>
        </p>
      </div>
    </section>
  )
}
