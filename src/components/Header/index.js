// Write your JS code here

import './index.css'

const Header = () => (
  <nav className="header-container">
    <img
      src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-logo-img.png"
      alt="website logo"
      className="header-logo"
    />
    <ul className="nav-menu">
      <li>Home</li>
      <li>Products</li>
      <li>Cart</li>
    </ul>
    <button type="button" className="header-button">
      Logout
    </button>
  </nav>
)

export default Header
