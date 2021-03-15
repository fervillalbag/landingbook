
import TabButton from "../../atoms/TabButton";
import FeatureDetail from "../../molecules/FeatureDetail";
import Image from "../../atoms/Image";

export default function FeatureTabs() {
  return (
    <div className="feature-tabs">
      <div className="nav">
        <TabButton active={true}>Simple Bookmarking</TabButton>
        <TabButton>Speedy Searching</TabButton>
        <TabButton>Easy Sharing</TabButton>
      </div>

      <div className="body">
        <div className="media">
          <Image src="illustration-features-tab-1.svg" alt="Illustration Feature 1" />
        </div>
        <FeatureDetail
          title="Bookmark in one click"
          description="Organize your bookmarks however you like. Our simple drag-and-drop interface gives you complete control over how you manage your favourite sites."
          action="More Info"
        />
      </div>
    </div>
  )
}
