import React from 'react'
import { SocialIcon } from 'react-social-icons'
import MovingComponent from 'react-moving-text'
import logo from '../../assets/design_feed_logo.png'

function About() {

  const [isClicked, setIsClicked] = React.useState(false)

  const handleClick = () => {
    setIsClicked(true)
  }

  const handleGoBack = () => {
    setIsClicked(false)
  }


  return (
    <section className="about-page">
      {!isClicked ? 
        <div className="text-box">
          <MovingComponent
            type="slideInFromTop"
            duration="2000ms"
            delay="0s"
            direction="normal"
            timing="ease"
            iteration="infinite"
            fillMode="none"
            className="annimation-title">
        Design Feed
          </MovingComponent>
          <p className="text">Created by Jessica Strawford</p>
          <div className="social">
            <SocialIcon url="https://github.com/jessicastrawford" 
              bgColor="white" 
              className="github"/>
            <SocialIcon url="https://www.linkedin.com/in/jessica-strawford-a63117145/" 
              bgColor="white" 
              className="linkdin"/>
          </div>
          <div>
            <button onClick={handleClick} className="find-out-more-button">More info?</button>
          </div>
        </div> : 
        <div className="more-info-section">
          <MovingComponent
            type="fadeInFromTop"
            duration="2000ms"
            delay="0s"
            direction="normal"
            timing="ease"
            iteration="infinite"
            fillMode="none"
            className="title">
            Design Feed
          </MovingComponent>
          <p>Design Feed is an online social network that allows users to share their work, including images, measurements and technical drawings for feedback from other users. Design Feed was created in September 2021 by software engineer, Jessica Strawford. With a history being a fashion designer herself she often found it would be helpful if there was platform she could share her ideas and designs to recieve feedback from other people. The next plan to develop this website is to add user followings and pin boards (in product categories in the profile show pages), much like Pinterest and to add different types of user accounts. Design Feed could be used by companys for their employees to upload their work for managerial overseeing. Therefore the website would have a freelance user (much like what it is like now) and company, employee or manager user accounts. If you register as a company only those who work in that company can see that companies designs etc. As the site grows and more users add their comments, the comment section will be updated so a large amount of comments can be viewed better.
          </p>
          <button onClick={handleGoBack} className="back-button">Go back</button>
          <div>
            {/* <img src={logo} alt="design-feed-logo" className="logo"/> */}
          </div>
        </div>
      }
    </section>

  )

}

export default About