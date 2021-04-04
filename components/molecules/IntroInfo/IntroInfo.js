
import PropTypes from 'prop-types'
import Heading from '../../atoms/Heading'
import Paragraph from '../../atoms/Paragraph'

export default function IntroInfo({ title, description }) {
  return (
    <div className="feature-info">
      <Heading size="sm">{title}</Heading>
      <Paragraph>{description}</Paragraph>
    </div>
  )
}

IntroInfo.propTypes = {
  Heading: PropTypes.elementType,
  Paragraph: PropTypes.elementType,
  title: PropTypes.string,
  description: PropTypes.string
}