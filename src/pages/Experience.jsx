import ExperienceComp from '../components/ExperienceComp'
import EducationComp from '../components/EducationComp'
import '../styles/experience.css'

const Experience = () => {
  const education = [
    {
      duration: "2021 - Present",
      titleEdu: "Bachelor of Computer Science",
      school: "American University in Bulgaria (AUBG)",
      location: "Blagoevgrad, Bulgaria",
      description: "Bachelor of Arts in Computer Science. Software Develoopment Concentration. Minor: Philosophy. Dean's List Fall 2022, Fall 2024. CGPA 3.75 / 4.00"
    },
    {
      duration: "2023 - 2024",
      titleEdu: "Erasmus+ Exchange",
      school: "Otto-Friedrich-Universitaet Bamberg",
      location: "Bamberg, Bavaria, Germany",
      description: "Study abroad coursework in Applied Computer Science."
    }, 
    {
      duration: "2018 - 2021",
      titleEdu: "High School Diploma",
      school: "Gymnasium Hajdar Dushi",
      location: "Gjakova, Kosovo",
      description: "High School Diploma, Natural Sciences and Mathematics Concentration. CGPA 4.00 / 4.00"
    },
    {
      duration: "2019 - 2020",
      titleEdu: "Exchange Year Abroad",
      school: "West Florence High School",
      location: "Florence, South Carolina, USA",
      description: "Study abroad coursework in high school. CGPA 4.00 / 4.00"
    }
  ];

  const experiences = [
    {
      duration: "October 2023 - January 2024",
      position: "Software Engineer / Project Manager",
      company: "Aracom IT Services GMBH",
      location: "Bamberg, Bavaria, Germany",
      description: "Developed a smart grocery app with Java Spring Boot, JavaFX, and MySQL that uses the Apriori algorithm for personalized suggestions. " + 
      "As Scrum Master, improved delivery efficiency by 15% and reduced integration issues by 30% with effective team collaboration."
    },
    {
      duration: "September 2022 - September 2023",
      position: "Software Developer & Head of Development Department",
      company: "The Hub AUBG",
      location: "Blagoevgrad, Bulgaria",
      description: "Built and maintained a responsive HUB AUBG website using HTML, CSS, React (frontend) and Go, Python (backend). " + 
      "Managed a development team to reduce delays and aligned UI/UX design with stakeholder recommendations."
    }, 
    {
      duration: "June 2023",
      position: "Wordpress Developer Intern",
      company: "DM Consulting Services",
      location: "Tirana, Albania",
      description: "Developed a full-stack HR website with an optimized, user-friendly interface by integrating research insights and HR content from Albania."
    },
    {
      duration: "June 2022 - January 2023",
      position: "Project Consultant / Intern",
      company: "Jakova Innovation Center",
      location: "Gjakova, Kosovo",
      description: "Enhanced proposals and marketing materials to secure funding, streamlined documentation and bilingual communications, and contributed strategic ideas that improved project implementation."
    },
    {
      duration: "July 2022 - August 2022",
      position: "Tech Intern",
      company: "Bonevet",
      location: "Gjakova, Kosovo",
      description: "Supported sustainable smart city projects by integrating software and hardware, conducting relevant research, and generating innovative ideas that enhanced project execution."
    }
  ];

  return (
    <>
        <div className='experience-page'>
          <div className='header'>
            <h2>My Journey</h2>
          </div>
          <div className='journey-container'>
              <h4>Education</h4>
              <section className='education'>
              {education.map((edu, index) => (
                <EducationComp
                  key={index}
                  duration={edu.duration}
                  titleEdu={edu.titleEdu}
                  school={edu.school}
                  location={edu.location}
                  description={edu.description}
                  delay={index * 0.5} 
                />
              ))}
            </section>
            <section className='experience-section'>
              <h4>Experience</h4>
              <div className='experience-cards'>
                  {experiences.map((exp, index) => (
                    <ExperienceComp
                      key={index}
                      className={ index % 2 === 0 ? "left" : "right"}
                      duration={exp.duration}
                      position={exp.position}
                      company={exp.company}
                      location={exp.location}
                      description={exp.description}
                    />
                ))}
              </div>
            </section>
          </div>
        </div>
    </>
  )
}

export default Experience
