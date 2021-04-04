
import PropTypes from 'prop-types'
import Link from '../../atoms/Link'
import Brand from '../../molecules/Brand'
import Image from '../../atoms/Image'

export default function FooterNav() {
  return (
    <nav className="footer__nav">
      <div className="container">
        <div className="footer__brand">
          <Brand src="/logo-bookmark-white.svg" alt="Logo de la Empresa" />
          <div className="footer__menu">
            <Link type="light" href="/">Features</Link>
            <Link type="light" href="/">Pricing</Link>
            <Link type="light" href="/">Contact</Link>
          </div>
        </div>
        <div className="footer__social">
          <Link href="/">
            <Image src="/icon-facebook.svg" alt="Logo de Facebook" />
          </Link>
          <Link href="/">
            <Image src="/icon-twitter.svg" alt="Logo de Twitter" />
          </Link>
        </div>
      </div>
    </nav>
  )
}

FooterNav.propTypes = {
  Brand: PropTypes.elementType,
  Link: PropTypes.elementType,
  Image: PropTypes.elementType,
}
