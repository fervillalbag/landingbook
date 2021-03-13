
import Link from 'next/link'

export default function Button({ children, color = "", href = "/", display = "" }) {
  return (
    <Link href={href}>
      <a className={`button ${color} ${display}`}>
        {children}
      </a>
    </Link>
  )
}