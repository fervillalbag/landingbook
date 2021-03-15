
import Title from '../../atoms/Title'
import Description from '../../atoms/Description'

export default function FeatureInfo({ title, description }) {
  return (
    <div className="feature-info">
      <Title>{title}</Title>
      <Description>{description}</Description>
    </div>
  )
}
