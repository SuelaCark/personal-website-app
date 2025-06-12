import '../styles/landing.css'
import photo from '../assets/suela-photo.jpeg';

function Landing() {
  return (
    <>
    {/* Landing page Section */}
    <section className='landing-section'>
      <div className='landing'>
        <img id="landing-pic" src={photo} alt="Picture of Suela" />
        <p><strong>Hello, my name is Suela.</strong><br /> Nice to meet you!<br /> <br />
          <span id='landing-description'>I'm a Software Engineer with background in agile methodologies <br />
            and a passion for emerging technologies.</span>
        </p>
      </div>
    </section>
    </>
  )
}

export default Landing
