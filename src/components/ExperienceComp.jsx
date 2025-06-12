import '../styles/experience.css'

const ExperienceComp =  ({ duration, position, company, location, description, className}) => {
  return (
    <>
        <div className={`experience-card ${className}`}>
          <div className="exp-dot"></div>
          <div className='experience-info'>
            <div className='exp-info-right'>
              <p id='exp-duration'>{duration}</p>
              <p id='exp-position'>{position}</p>
            </div>
            <div className='exp-info-left'>
              <h5 id='exp-company'>{company}</h5>
              <p id='exp-location'>{location}</p>
              <p id='exp-desc'>{description}</p>
            </div>
          </div>
        </div>
    </>
  )
}

export default ExperienceComp
