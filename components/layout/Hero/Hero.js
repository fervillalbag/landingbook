
import PropTypes from 'prop-types'
import Image from '../../atoms/Image'
import HeroInfo from '../../molecules/HeroInfo'

export default function Hero() {
  return (
    <div className="hero container">
      <HeroInfo
        heading="A Simple Bookmark Manager"
        description="A clean and simple interface to organize your favourite websites. Open a new browser tab and see your sites load instantly. Try it for free."
        chrome="Get it on Chrome"
        firefox="Get it on Chrome"
      />
      <div className="media">
        <Image src="/illustration-hero.svg" alt="Hero Illustration" />
      </div>
    </div>
  )
}

Hero.propTypes = {
  HeroInfo: PropTypes.elementType,
  Image: PropTypes.elementType,
}