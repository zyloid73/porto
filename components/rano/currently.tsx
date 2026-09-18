import { Crosshair, Terminal, AudioLines, ArrowDownRight } from "lucide-react"

export function Currently() {
  return (
    <section id="currently" className="currently-scene page-gutter" data-scene="currently" tabIndex={-1} aria-labelledby="currently-title">
      <div className="section-topline mono"><span className="chapter-label"><span className="tiny-square" />04 / CURRENTLY</span><span className="muted">LIFE, IN A FEW LINES.</span></div>
      <div className="currently-layout">
        <div className="currently-heading"><h2 id="currently-title" className="now-title display">RIGHT<br /><span className="lavender">NOW.</span></h2><div className="currently-footnote mono"><span className="status-dot" /> A SNAPSHOT. NOT A LIVE FEED.</div></div>
        <div className="current-rows">
          <div className="current-row"><div className="current-label mono"><Crosshair size={16} aria-hidden="true" /><span>PLAYING</span><span className="current-counter">01</span></div><p>Valorant <span>/</span> Roblox <span>/</span> GTA V</p><span className="current-description">Just one more game.</span></div>
          <div className="current-row"><div className="current-label mono"><AudioLines size={16} aria-hidden="true" /><span>LISTENING</span><span className="equalizer" aria-hidden="true"><i /><i /><i /><i /></span></div><p>Currently playing something.</p><span className="current-description">Silence is a little overrated.</span></div>
          <div className="current-row"><div className="current-label mono"><Terminal size={16} aria-hidden="true" /><span>BUILDING</span><span className="current-counter">03</span></div><p>Something probably unnecessary<span className="blue">.</span></p><span className="current-description">But that&apos;s kind of the point.</span></div>
        </div>
      </div>
      <div className="currently-outro"><span className="mono muted">AND THIS IS WHERE IT ALL HAPPENS.</span><ArrowDownRight size={27} strokeWidth={1} aria-hidden="true" /></div>
    </section>
  )
}
