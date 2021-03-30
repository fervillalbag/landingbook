
import PropTypes from 'prop-types'

export default function Description({ children }) {
  return (
    <p className="description">{children}</p>
  )
}

Description.propTypes = {
  children: PropTypes.node.isRequired
}