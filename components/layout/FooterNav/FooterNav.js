
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
            <Link color="light" href="/">Features</Link>
            <Link color="light" href="/">Pricing</Link>
            <Link color="light" href="/">Contact</Link>
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
