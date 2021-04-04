
import PropTypes from 'prop-types'
import Image from '../Image'

export default function Button({ children, type, width, onClick, icon, active }) {
  return (
    <button
      onClick={onClick}
      className={`button ${type} ${width} ${active && 'active'}`}
    >
      <span>
        {children}
      </span>
      {icon && (
        <span>
          <Image src={icon} alt={`${children} Icon`} />
        </span>
      )}
    </button>
  )
}

Button.defaultProps = {
  type: 'default'
}

Button.protoType = {
  children: PropTypes.node.isRequired,
  color: PropTypes.oneOf(['default', 'light', 'danger']),
  display: PropTypes.node.isRequired,
  onClick: PropTypes.func,
  type: PropTypes.string,
}