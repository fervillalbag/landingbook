
import PropTypes from 'prop-types'
import Paragraph from '../../atoms/Paragraph'
import Button from '../../atoms/Button'
import Heading from '../../atoms/Heading'

export default function FeatureDetail({ title, description, action }) {
  return (
    <div className="feature-detail">
      <Heading size="sm">{title}</Heading>
      <Paragraph>{description}</Paragraph>
      <Button>{action}</Button>
    </div>
  )
}

FeatureDetail.propTypes = {
  Heading: PropTypes.elementType,
  Paragraph: PropTypes.elementType,
  Button: PropTypes.elementType,
}