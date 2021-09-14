import { SocialIcon } from 'react-social-icons'

function About() {
  return (
    <section className="about-page">
      <div className="text-box">
        <h1 className="text">Design Feed</h1>
        <p className="text">Created by Jessica Strawford</p>
        <div className="social">
          <SocialIcon url="https://github.com/jessicastrawford" bgColor="white" className="github"/>
          <SocialIcon url="https://www.linkedin.com/in/jessica-strawford-a63117145/" bgColor="white" className="linkdin"/>
        </div>
      </div>
    </section>

  )

}

export default About