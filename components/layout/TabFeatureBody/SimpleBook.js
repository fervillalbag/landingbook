
import { Fragment } from 'react'
import FeatureDetail from "../../molecules/FeatureDetail"
import Image from "../../atoms/Image"

export default function SimpleBook({ image, title, description, action }) {
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
