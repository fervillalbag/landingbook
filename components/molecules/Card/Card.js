import Button from "../../atoms/Button";
import Description from "../../atoms/Description";
import Image from "../../atoms/Image";

export default function Card({ image, description, href, action }) {
  return (
    <div className="card">
      <Image src={image} alt="Logo de" />
      <Description>{description}</Description>
      <Button display="block" href={href}>{action}</Button>
    </div>
  )
}
