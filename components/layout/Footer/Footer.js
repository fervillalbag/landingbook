
import { Fragment } from 'react'
import PropTypes from 'prop-types'
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

Footer.propTypes = {
  FooterHeader: PropTypes.elementType,
  FooterNav: PropTypes.elementType,
}