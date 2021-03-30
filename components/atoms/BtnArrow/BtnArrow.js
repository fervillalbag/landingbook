
import Image from '../../atoms/Image'
import PropTypes from 'prop-types'

export default function BtnArrow({ text, icon }) {
  return (
    <button className="button-arrow">
      <span>{text}</span>
      <span>
        <Image src={icon} alt={`${text} Icon`} />
      </span>
    </button>
  )
}

BtnArrow.propTypes = {
  text: PropTypes.string,
  icon: PropTypes.string.isRequired,
}