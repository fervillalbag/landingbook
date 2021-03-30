
import PropTypes from 'prop-types'

export default function Blockquote({ children, type }) {
  return (
    <span className={`blockquote ${type}`}>
      {children}
    </span>
  )
}

Blockquote.defaultProps = {
  type: 'default'
}

Blockquote.propTypes = {
  children: PropTypes.node,
  type: PropTypes.oneOf(['default', 'light'])
}