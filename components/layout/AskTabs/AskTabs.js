
import BtnArrow from '../../atoms/BtnArrow/BtnArrow'

export default function AskTabs() {
  return (
    <div className="ask-tabs">
      <BtnArrow
        text="What is Bookmark?"
        icon="/icon-arrow.svg"
      />
      <BtnArrow
        text="How can I request a new browser?"
        icon="/icon-arrow.svg"
      />
      <BtnArrow
        text="Is there a mobile app?"
        icon="/icon-arrow.svg"
      />
      <BtnArrow
        text="What about other Chromium browsers?"
        icon="/icon-arrow.svg"
      />
    </div>
  )
}
