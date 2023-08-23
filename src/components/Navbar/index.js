import {Link} from 'react-router-dom'
import ThemeContext from '../../context/ThemeContext'

import './index.css'

const Navbar = () => (
  <ThemeContext.Consumer>
    {value => {
      const {isDarkTheme, toggleTheme} = value
      const onClickToggleTheme = () => {
        toggleTheme()
      }

      const bgColor = isDarkTheme ? 'dark-theme' : 'light-theme'
      const linkColorClassName = isDarkTheme
        ? 'link-color-dark-theme '
        : 'link-color-light-theme '
      return (
        <nav className={`nav-bar-div ${bgColor}`}>
          <Link to="/">
            <img
              src={
                isDarkTheme
                  ? 'https://assets.ccbp.in/frontend/react-js/website-logo-dark-theme-img.png'
                  : 'https://assets.ccbp.in/frontend/react-js/website-logo-light-theme-img.png'
              }
              className="website-logo"
              alt="website logo"
            />
          </Link>
          <ul className="nav-links">
            <Link
              to="/"
              className={`link-item linkColorClassName ${linkColorClassName}`}
            >
              <li>Home</li>
            </Link>
            <Link
              to="/about"
              className={`link-item linkColorClassName ${linkColorClassName}`}
            >
              <li>About</li>
            </Link>
          </ul>
          <button
            type="button"
            className="theme-button"
            data-testid="theme"
            onClick={onClickToggleTheme}
          >
            <img
              src={
                isDarkTheme
                  ? 'https://assets.ccbp.in/frontend/react-js/light-theme-img.png'
                  : 'https://assets.ccbp.in/frontend/react-js/dark-theme-img.png'
              }
              className="theme-icon"
              alt="theme"
            />
          </button>
        </nav>
      )
    }}
  </ThemeContext.Consumer>
)

export default Navbar
