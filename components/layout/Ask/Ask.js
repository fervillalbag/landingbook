
import PropTypes from 'prop-types'
import AskTabs from '../AskTabs'
import IntroInfo from '../../molecules/IntroInfo'
import Button from '../../atoms/Button'

export default function Ask() {
  return (
    <div className="ask container">
      <IntroInfo
        title="Frequently Asked Questions"
        description="Here are some of our FAQs. If you have any other questions you’d like answered please feel free to email us."
      />

      <AskTabs />

      <div className="ask-action">
        <Button href="/">More Info</Button>
      </div>
    </div>
  )
}

Ask.propTypes = {
  IntroInfo: PropTypes.elementType,
  AskTabs: PropTypes.elementType,
  Button: PropTypes.elementType,
}