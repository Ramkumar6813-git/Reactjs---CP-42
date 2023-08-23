import ThemeContext from '../../context/ThemeContext'
import Navbar from '../Navbar'
import './index.css'

const About = () => (
  <ThemeContext.Consumer>
    {value => {
      const {isDarkTheme} = value
      const bgColor = isDarkTheme && 'dark-theme-bg-color'
      const textColor = isDarkTheme && 'dark-theme-heading-color'
      return (
        <>
          <Navbar />
          <div className={`about-container ${bgColor}`}>
            <img
              src={
                isDarkTheme
                  ? 'https://assets.ccbp.in/frontend/react-js/about-dark-img.png'
                  : 'https://assets.ccbp.in/frontend/react-js/about-light-img.png'
              }
              className="about-image"
              alt="about"
            />
            <h1 className={`about-heading ${textColor}`}>About</h1>
          </div>
        </>
      )
    }}
  </ThemeContext.Consumer>
)

export default About
