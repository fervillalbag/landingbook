
import PropTypes from 'prop-types'

export default function Input({ type, placeholder }) {
  return (
    <input
      type={type}
      placeholder={placeholder}
      className="input"
    />
  )
}

Input.defaultProps = {
  type: 'text',
  placeholder: ''
}

Input.propTypes = {
  type: PropTypes.string.isRequired,
  placeholder: PropTypes.string
}