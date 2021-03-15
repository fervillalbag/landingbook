import Button from "../../atoms/Button";
import Description from "../../atoms/Description";
import Image from "../../atoms/Image";
import Title from "../../atoms/Title";

export default function Card({ title, image, description, href, action }) {
  return (
    <div className="card">
      <Title>{title}</Title>
      <Image src={image} alt="Logo de" />
      <Description>{description}</Description>
      <Button display="block" href={href}>{action}</Button>
    </div>
  )
}
