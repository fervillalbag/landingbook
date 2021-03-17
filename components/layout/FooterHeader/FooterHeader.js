
import { Fragment } from 'react'
import Blockquote from '../../atoms/Blockquote'
import Button from '../../atoms/Button'
import Input from '../../atoms/Input'
import Heading from '../../atoms/Heading'

export default function FooterHeader() {
  return (
    <Fragment>
      <header className="footer__header">
        <Blockquote type="light">35.000 + Already joined</Blockquote>
        <Heading size="md" type="light" margin="m-0">Stay up-to-date with what we’re doing</Heading>
      </header>
      <div className="footer__form">
        <Input />
        <Button width="full" type="danger">Contact Us</Button>
      </div>
    </Fragment>
  )
}
