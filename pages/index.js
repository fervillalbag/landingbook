
import { Fragment } from 'react'
import PropTypes from 'prop-types'
import Header from '../components/layout/Header'
import Hero from '../components/layout/Hero/Hero'
import Features from '../components/layout/Features'
import Download from '../components/layout/Download'
import Ask from '../components/layout/Ask/Ask'
import Footer from '../components/layout/Footer/Footer'

export default function Home() {
  return (
    <Fragment>
      <Header />
      <Hero />
      <Features />
      <Download />
      <Ask />
      <Footer />
    </Fragment>
  )
}

Home.propTypes = {
  Header: PropTypes.elementType,
  Hero: PropTypes.elementType,
  Features: PropTypes.elementType,
  Download: PropTypes.elementType,
  Ask: PropTypes.elementType,
  Footer: PropTypes.elementType,
}