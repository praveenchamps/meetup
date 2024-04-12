import {Link} from 'react-router-dom'

import Header from '../Header'

import RegisterContext from '../../context/RegisterContext'

import './index.css'

const Home = props => {
  const onRegister = () => {
    const {history} = props
    history.replace('/register')
  }
  return (
    <RegisterContext.Consumer>
      {value => {
        const {name, topic, isRegistered} = value
        return (
          <div>
            <Header />
            {isRegistered === true ? (
              <div className="home">
                <h1 className="res-head">Hello {name}</h1>
                <p className="res-para">Welcome to {topic}</p>
                <img
                  src="https://assets.ccbp.in/frontend/react-js/meetup/meetup-img.png"
                  alt="meetup"
                  className="home-img"
                />
              </div>
            ) : (
              <div className="home">
                <h1 className="home-head">Welcome to MeetUp</h1>

                <p className="home-para">Please Register for the topic</p>

                <img
                  src="https://assets.ccbp.in/frontend/react-js/meetup/meetup-img.png"
                  alt="meetup"
                  className="home-img"
                />
                <Link to="/register">
                  <button type="button" className="button" onClick={onRegister}>
                    Register
                  </button>
                </Link>
              </div>
            )}
          </div>
        )
      }}
    </RegisterContext.Consumer>
  )
}

export default Home
