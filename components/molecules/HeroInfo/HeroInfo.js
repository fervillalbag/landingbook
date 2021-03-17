
import Heading from '../../atoms/Heading'
import Paragraph from '../../atoms/Paragraph'
import Button from '../../atoms/Button'

export default function HeroInfo({ heading, description, chrome, firefox }) {
  return (
    <div>
      <Heading>{heading}</Heading>
      <Paragraph>{description}</Paragraph>
      <div className="action">
        <Button>{chrome}</Button>
        <Button type="light">{firefox}</Button>
      </div>
    </div>
  )
}
