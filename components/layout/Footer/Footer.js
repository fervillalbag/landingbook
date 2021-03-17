
import { Fragment } from 'react'
import FooterHeader from '../FooterHeader'
import FooterNav from '../FooterNav/FooterNav'

export default function Footer() {
  return (
    <Fragment>
      <footer className="footer">
        <div className="container">
          <FooterHeader />
        </div>
      </footer>
      <FooterNav />
    </Fragment>
  )
}
