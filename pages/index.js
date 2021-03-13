
import Blockquote from "../components/atoms/Blockquote"
import Button from "../components/atoms/Button"
import Description from "../components/atoms/Description"
import Heading from "../components/atoms/Heading"
import Image from "../components/atoms/Image"
import Link from "../components/atoms/Link"
import TabButton from "../components/atoms/TabButton"
import Title from "../components/atoms/Title"
import Brand from "../components/molecules/Brand/Brand"
import Card from "../components/molecules/Card"
import HeaderNav from "../components/molecules/HeaderNav/HeaderNav"

export default function Home() {
  return (
    <div>
      <Button>Button</Button>
      <Image src="/logo-bookmark.svg" alt="Logo" />
      <Link href="/">Features</Link>
      <Heading>Heading</Heading>
      <Description>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Optio, sequi!</Description>
      <Title>Title</Title>
      <Blockquote>+35.000 already joined</Blockquote>
      <TabButton active={true}>Simple Bookmarking</TabButton>
      <section>
        <Card
          image="logo-chrome.svg"
          description="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Optio, sequi!"
          href="/"
          action="Add & Install Extension"
        />
      </section>
      <Brand src="./vercel.svg" alt="Logo de vercel" />
      <HeaderNav />

      <style jsx>{`
        div {
          padding: 4rem;
        }

        section {
          margin: 2rem 0;
          display: grid;
          grid-template-columns: repeat(3, 1fr);
        }
      `}</style>
    </div>

  )
}
