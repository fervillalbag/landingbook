
import PropTypes from 'prop-types'

export default function Image({ src, alt }) {
  return (
    <img src={src} alt={alt} className="image" />
  )
}

Image.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired
}