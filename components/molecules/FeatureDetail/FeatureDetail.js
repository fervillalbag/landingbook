
import Title from "../../atoms/Title";
import Description from "../../atoms/Description";
import Button from "../../atoms/Button";

export default function FeatureDetail({ title, description, action }) {
  return (
    <div className="feature-detail">
      <Title>{title}</Title>
      <Description>{description}</Description>
      <Button>{action}</Button>
    </div>
  )
}
