
import PropTypes from 'prop-types'

export default function Heading({ children, type, size, margin }) {
  return (
    <h1 className={`heading ${type} ${size} ${margin}`}>
      {children}
    </h1>
  )
}

Heading.defaultProps = {
  size: 'lg',
  type: 'default'
}

Heading.protoType = {
  children: PropTypes.node.isRequired,
  type: PropTypes.oneOf(['default', 'light']),
  size: PropTypes.oneOf(['lg', 'md', 'sm']),
  margin: PropTypes.string
}