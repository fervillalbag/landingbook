
import Link from 'next/link'
import PropTypes from 'prop-types'

export default function NavLink({ children, href, align, type }) {
  return (
    <Link href={href}>
      <a className={`link ${align} ${type}`}>
        {children}
      </a>
    </Link>
  )
}

NavLink.defaultProps = {
  type: 'default',
  href: '/'
}

NavLink.propTypes = {
  children: PropTypes.node.isRequired,
  type: PropTypes.oneOf(['default', 'light']),
  href: PropTypes.string,
  align: PropTypes.string,
}