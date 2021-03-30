
import PropTypes from 'prop-types'

export default function TabButton({ children, active, onClick }) {
  return (
    <button
      onClick={onClick}
      className={`tab-button ${active && 'active'}`}>
      {children}
    </button>
  )
}

TabButton.defaultProps = {
  active: false
}

TabButton.propTypes = {
  children: PropTypes.node.isRequired,
  active: PropTypes.bool,
  onClick: PropTypes.func
}