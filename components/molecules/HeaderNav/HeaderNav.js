
import { Fragment, useState } from 'react'
import Link from '../../atoms/Link'
import Button from '../../atoms/Button'
import Image from '../../atoms/Image'

export default function HeaderNav() {

  const [isActive, setIsActive] = useState(false)

  const handleShow = () => {
    setIsActive(!isActive)
  }

  return (
    <Fragment>
      <div className={`header-nav ${isActive && 'active'}`}>
        <Link align="vertical" href="/">Features</Link>
        <Link align="vertical" href="/">Pricing</Link>
        <Link align="vertical" href="/">Contact</Link>
        <Button type="danger">Login</Button>

        <div className="header-nav__close">
          <Button
            type="light"
            onClick={handleShow}
          >
            <Image
              src='/icon-close.svg'
              alt="Button burguer"
            />
          </Button>
        </div>

      </div>
      <div className="bars">
        <Button
          type="light"
          onClick={handleShow}
        >
          <Image
            src='/icon-hamburger.svg'
            alt="Button burguer"
          />
        </Button>
      </div>
    </Fragment>
  )
}
