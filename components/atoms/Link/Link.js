
import Link from 'next/link'

export default function NavLink({ children, href, align, color }) {
  return (
    <Link href={href}>
      <a className={`link ${align} ${color}`}>
        {children}
      </a>
    </Link>
  )
}
