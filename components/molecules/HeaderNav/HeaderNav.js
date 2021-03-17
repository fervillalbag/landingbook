
import Link from '../../atoms/Link'
import Button from '../../atoms/Button'

export default function HeaderNav() {
  return (
    <div className="header-nav">
      <Link align="vertical" href="/">Features</Link>
      <Link align="vertical" href="/">Pricing</Link>
      <Link align="vertical" href="/">Contact</Link>
      <Button type="danger">Login</Button>
    </div>
  )
}
