
import PropTypes from 'prop-types'
import Button from '../../atoms/Button'

export default function AskTabs() {
  return (
    <div className="ask-tabs">
      <Button
        type="arrow"
        icon="/icon-arrow.svg"
      >What is Bookmark?</Button>
      <Button
        type="arrow"
        icon="/icon-arrow.svg"
      >How can I request a new browser?</Button>
      <Button
        type="arrow"
        icon="/icon-arrow.svg"
      >Is there a mobile app?</Button>
      <Button
        type="arrow"
        icon="/icon-arrow.svg"
      >What about other Chromium browsers?</Button>
    </div>
  )
}

AskTabs.propTypes = {
  Button: PropTypes.elementType,
}