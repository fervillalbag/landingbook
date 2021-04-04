
import PropTypes from 'prop-types'
import Brand from '../../molecules/Brand'
import HeaderNav from '../../molecules/HeaderNav'

export default function Header() {
  return (
    <header className="header container">
      <Brand src="/logo-bookmark.svg" alt="Logo de Bookmark" />
      <div className="menu">
        <HeaderNav />
      </div>
    </header>
  )
}

Header.propTypes = {
  Brand: PropTypes.elementType,
  HeaderNav: PropTypes.elementType,
}