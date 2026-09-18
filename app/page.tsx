import { Experience } from "@/components/rano/experience"
import { Navigation } from "@/components/rano/navigation"
import { Intro } from "@/components/rano/intro"
import { About } from "@/components/rano/about"
import { World } from "@/components/rano/world"
import { Currently } from "@/components/rano/currently"
import { Setup } from "@/components/rano/setup"
import { Likes } from "@/components/rano/likes"
import { Random, FindMe, Farewell } from "@/components/rano/closing"

export default function Page() {
  return (
    <Experience>
      <Navigation />
      <main>
        <Intro />
        <About />
        <World />
        <Currently />
        <Setup />
        <Likes />
        <Random />
        <FindMe />
      </main>
      <Farewell />
    </Experience>
  )
}
