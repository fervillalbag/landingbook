
import Heading from '../../atoms/Heading'
import Description from '../../atoms/Description'
import Button from '../../atoms/Button'

export default function HeroInfo({ heading, description, chrome, firefox }) {
  return (
    <div>
      <Heading>{heading}</Heading>
      <Description>{description}</Description>
      <div className="action">
        <Button>{chrome}</Button>
        <Button color="light">{firefox}</Button>
      </div>
    </div>
  )
}
