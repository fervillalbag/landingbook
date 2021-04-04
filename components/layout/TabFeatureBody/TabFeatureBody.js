
import { Fragment } from 'react'
import PropTypes from 'prop-types'
import FeatureDetail from "../../molecules/FeatureDetail"
import Image from "../../atoms/Image"

export default function TabFeatureBody({ image, title, description, action }) {
  return (
    <Fragment>
      <div className="media">
        <Image src={image} alt="Illustration Feature 1" />
      </div>
      <FeatureDetail
        title={title}
        description={description}
        action={action}
      />
    </Fragment>
  )
}

TabFeatureBody.defaultProps = {
  image: '/',
  title: '',
  description: '',
  action: ''
}

TabFeatureBody.propTypes = {
  Image: PropTypes.elementType,
  FeatureDetail: PropTypes.elementType,
  image: PropTypes.string,
  title: PropTypes.string,
  description: PropTypes.string,
  action: PropTypes.string,
}