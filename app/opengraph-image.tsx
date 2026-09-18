import { ImageResponse } from "next/og"

export const alt = "RANO — Developer / Gamer / Creator. A small corner of the internet."
export const size = { width: 1200, height: 630 }
export const contentType = "image/png"

export default function OpenGraphImage() {
  return new ImageResponse(
    <div style={{ width: "100%", height: "100%", display: "flex", flexDirection: "column", justifyContent: "space-between", background: "#08090d", color: "#f0eff4", padding: "46px 60px", fontFamily: "sans-serif" }}>
      <div style={{ display: "flex", justifyContent: "space-between", color: "#a8a1d5", fontSize: 15, letterSpacing: 3 }}><span>A SMALL CORNER OF THE INTERNET</span><span>20 / INDONESIA</span></div>
      <div style={{ display: "flex", alignItems: "baseline", fontSize: 285, lineHeight: 1, fontWeight: 800, letterSpacing: -22 }}><span>RANO</span><span style={{ color: "#5778ff", fontSize: 180, marginLeft: 20 }}>↗</span></div>
      <div style={{ display: "flex", justifyContent: "space-between", borderTop: "1px solid #272831", paddingTop: 25, fontSize: 15, letterSpacing: 2 }}><span>DEVELOPER / GAMER / CREATOR</span><span style={{ color: "#91939f" }}>NOT A PORTFOLIO. JUST ME.</span></div>
    </div>,
    size,
  )
}
