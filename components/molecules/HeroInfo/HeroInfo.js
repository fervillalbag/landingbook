
import PropTypes from 'prop-types'
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

HeroInfo.defaultProps = {
  heading: '',
  description: '',
  chrome: '',
  firefox: ''
}

HeroInfo.propTypes = {
  Heading: PropTypes.elementType,
  Paragraph: PropTypes.elementType,
  Button: PropTypes.elementType,
  heading: PropTypes.string,
  description: PropTypes.string,
  chrome: PropTypes.string,
  firefox: PropTypes.string
}