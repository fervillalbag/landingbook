
import PropTypes from 'prop-types'
import Image from '../../atoms/Image'
import Link from '../../atoms/Link'

export default function Brand({ src, alt }) {
  return (
    <Link href="/">
      <Image src={src} alt={alt} />
    </Link>
  )
}

Brand.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired
}