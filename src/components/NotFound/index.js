import ThemeContext from '../../context/ThemeContext'
import NavBar from '../Navbar'

import './index.css'

const NotFound = () => (
  <ThemeContext.Consumer>
    {value => {
      const {isDarkTheme} = value
      const bgColor = isDarkTheme && 'dark-theme-bg-color'
      const headingColor = isDarkTheme && 'dark-theme-heading-color'
      const textColor = isDarkTheme
        ? 'dark-theme-description-color'
        : 'light-theme-description-color'
      return (
        <>
          <NavBar />
          <div className={`not-found-container ${bgColor}`}>
            <img
              src="https://assets.ccbp.in/frontend/react-js/not-found-img.png"
              className="not-found-image"
              alt="not found"
            />
            <h1 className={`not-found-heading ${headingColor}`}>
              Lost Your Way?
            </h1>
            <p className={`not-found-description ${textColor}`}>
              We cannot seem to find the page you are looking for.
            </p>
          </div>
        </>
      )
    }}
  </ThemeContext.Consumer>
)

export default NotFound
