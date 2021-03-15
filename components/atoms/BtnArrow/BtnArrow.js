
import Image from '../../atoms/Image'

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
