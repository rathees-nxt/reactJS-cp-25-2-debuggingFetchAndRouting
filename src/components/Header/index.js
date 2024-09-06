import {Link} from 'react-router-dom'

import './index.css'

const Header = () => (
  <nav className="header-container">
    <div className="logo-and-title-container">
      <img
        alt="wave"
        className="logo"
        src="https://assets.ccbp.in/frontend/react-js/wave-logo-img.png"
      />
      <h1 className="title">Wave</h1>
    </div>
    <ul className="nav-items-list">
      <li className="link-item">
        <Link className="route-link" to="/">
          {/* path "/" have text as home */}
          Home
        </Link>
        <Link className="route-link" to="/about">
          {/* path "/about" have text as about */}
          About
        </Link>
        <Link className="route-link" to="/contact">
          {/* path "/contact" have text as contact */}
          Contact
        </Link>
      </li>
    </ul>
  </nav>
)

export default Header
