import ThemeContext from '../../context/ThemeContext'
import Navbar from '../Navbar'

import './index.css'

const Home = () => (
  <ThemeContext.Consumer>
    {value => {
      const {isDarkTheme} = value
      return (
        <>
          <Navbar />
          <div className="home-container">
            <img
              src="https://assets.ccbp.in/frontend/react-js/home-light-img.png"
              className="home-image"
              alt="home"
            />
            <h1 className="home-heading">Home</h1>
          </div>
        </>
      )
    }}
  </ThemeContext.Consumer>
)

export default Home
