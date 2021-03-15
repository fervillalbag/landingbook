
import { Fragment } from "react"
import Header from "../components/layout/Header"
import Hero from "../components/layout/Hero/Hero"
import Features from "../components/layout/Features"
import Download from "../components/layout/Download"
import Ask from "../components/layout/Ask/Ask"

export default function Home() {
  return (
    <Fragment>
      <Header />
      <Hero />
      <Features />
      <Download />
      <Ask />
    </Fragment>
  )
}
