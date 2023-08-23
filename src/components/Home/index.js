import ThemeContext from '../../context/ThemeContext'
import Navbar from '../Navbar'

import './index.css'

const Home = () => (
  <ThemeContext.Consumer>
    {value => {
      const {isDarkTheme} = value
      const bgColor = isDarkTheme && 'dark-theme-bg-color'
      const textColor = isDarkTheme && 'dark-theme-heading-color'
      return (
        <>
          <Navbar />
          <div className={`home-container ${bgColor}`}>
            <img
              src={
                isDarkTheme
                  ? 'https://assets.ccbp.in/frontend/react-js/home-dark-img.png'
                  : 'https://assets.ccbp.in/frontend/react-js/home-light-img.png'
              }
              className="home-image"
              alt="home"
            />
            <h1 className={`home-heading ${textColor}`}>Home</h1>
          </div>
        </>
      )
    }}
  </ThemeContext.Consumer>
)

export default Home
