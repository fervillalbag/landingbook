
import Link from 'next/link'

export default function NavLink({ children, href, align }) {
  return (
    <Link href={href}>
      <a className={`link ${align}`}>
        {children}
      </a>
    </Link>
  )
}
