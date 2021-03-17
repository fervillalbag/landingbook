
import PropTypes from 'prop-types'

export default function Button({ children, type, width, handleClick }) {
  return (
    <button
      onClick={handleClick}
      className={`button ${type} ${width}`}
    >
      {children}
    </button>
  )
}

Button.defaultProps = {
  type: 'default'
}

Button.protoType = {
  children: PropTypes.node.isRequired,
  color: PropTypes.oneOf['default', 'light', 'danger'],
  display: PropTypes.node.isRequired,
  handleClick: PropTypes.func
}