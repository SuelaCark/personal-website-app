import '../styles/experience.css'

const EducationComp = ({ duration, titleEdu, school, location, description, delay}) => {
  return (
    <>
        <article className='edu-card' style={{ animationDelay: `${delay}s` }} >
            <div className='edu-info'>
                <p id='edu-duration'>{duration}</p>
                <p id='edu-title'>{titleEdu}</p>
            </div>
            <div className='edu-dot'></div>
            <p id='edu-school'>{school}</p>
            <p id='edu-location'>{location}</p>
            <p id='edu-description'>{description}</p>
        </article>
    </>
  )
}

export default EducationComp
