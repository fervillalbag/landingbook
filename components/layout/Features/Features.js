
import FeatureTabs from "../../layout/FeatureTabs"
import IntroInfo from "../../molecules/IntroInfo"

export default function Features() {
  return (
    <div className="feature container">
      <IntroInfo
        title="Features"
        description="Our aim is to make it quick and easy for you to access your favourite websites. Your bookmarks sync between your devices so you can access them on the go."
      />
      <FeatureTabs />
    </div>
  )
}
