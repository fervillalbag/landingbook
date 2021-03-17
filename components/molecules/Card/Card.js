
import Button from "../../atoms/Button"
import Paragraph from "../../atoms/Paragraph"
import Heading from "../../atoms/Heading"
import Image from "../../atoms/Image"

export default function Card({ title, image, description, href, action }) {
  return (
    <div className="card">
      <Heading size="sm">{title}</Heading>
      <Image src={image} alt="Logo de" />
      <Paragraph>{description}</Paragraph>
      <Button display="block" href={href}>{action}</Button>
    </div>
  )
}