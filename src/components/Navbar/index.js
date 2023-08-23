import {Link} from 'react-router-dom'
import ThemeContext from '../../context/ThemeContext'

import './index.css'

const Navbar = () => (
  <ThemeContext.Consumer>
    {value => {
      const {isDarkTheme} = value
      return (
        <nav className="nav-bar-div">
          <img
            src="https://assets.ccbp.in/frontend/react-js/website-logo-light-theme-img.png"
            className="website-logo"
            alt="website logo"
          />
          <ul className="nav-links">
            <Link to="/" className="link-item">
              <li>Home</li>
            </Link>
            <Link to="/about" className="link-item">
              <li>About</li>
            </Link>
          </ul>
          <img
            src="https://assets.ccbp.in/frontend/react-js/dark-theme-img.png"
            className="theme-icon"
            alt="theme"
          />
        </nav>
      )
    }}
  </ThemeContext.Consumer>
)

export default Navbar
