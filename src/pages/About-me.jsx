import '../styles/about-me.css';
import codingimg from '/assets/coding.avif';

const AboutMe = () => {
  const skills = [
    { name: "Leadership", percent: 95 },
    { name: "Creativity", percent: 90 },
    { name: "Communication", percent: 97 },
    { name: "HTML, CSS, ReactJS", percent: 90 },
    { name: "Python programming", percent: 70 },
    { name: "Linux/Bash scripting", percent: 70 },
    { name: "Java programming", percent: 97 },
    { name: "C++", percent: 90 }
  ];

  return (
    <>
        <section className='about-section'>
          {/* About Me Section */}
          <div className='about'>
            <div className='header'>
                <h2>About Me</h2>
            </div>
                <p><b>I am Suela Çarkaxhija, a graduate of Computer Science from American University in Bulgaria (AUBG).</b>
                  <br /> <br />
                  I'm a <b>Software Engineer with background in agile methodologies </b> and a passion for emerging technologies. 
                  I build responsive, user-friendly applications and solve complex challenges with innovative solutions. When I'm not coding, you'll find me exploring the latest tech trends and creative designs.
                </p>
              </div>
              <div className='about-image'>
                <img src={codingimg} alt="Coding image" />
              </div>
        </section>
        
        {/* Skills Section */}
        <section className='skills-section'>
          <div className='header'>
            <h2>My Skills</h2>
          </div>
            <div className="skills-container">
              {skills.map((skill, index) => (
                <div className="skill-row" key={index}>
                  <span className="skill-name">{skill.name}</span>
                  <div className="skill-bar-container">
                    <div className="skill-bar"
                      style={{ width: `${skill.percent}%` }}
                    ></div>
                </div>
                  <span className="skill-percent">{skill.percent}%</span>
                </div>
              ))}
            </div>
        </section>
    </>
  )
}

export default AboutMe
