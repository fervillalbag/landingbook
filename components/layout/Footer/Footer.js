
import { Fragment } from 'react'
import Blockquote from '../../atoms/Blockquote'
import Button from '../../atoms/Button'
import Input from '../../atoms/Input'
import Heading from '../../atoms/Heading'
import Brand from '../../molecules/Brand'
import Link from '../../atoms/Link'
import Image from '../../atoms/Image'

export default function Footer() {
  return (
    <Fragment>
      <footer className="footer">
        <div className="container">
          <header className="footer__header">
            <Blockquote>35.000 + Already joined</Blockquote>
            <Heading size="sm" color="light" margin="m-0">Stay up-to-date with what we’re doing</Heading>
          </header>
          <div className="footer__form">
            <Input />
            <Button display="block" color="danger">Contact Us</Button>
          </div>
        </div>
      </footer>
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
    </Fragment>
  )
}
