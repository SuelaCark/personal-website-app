import ExperienceComp from '../components/ExperienceComp'
import EducationComp from '../components/EducationComp'
import '../styles/experience.css'

const Experience = () => {
  const education = [
    {
      duration: "2021 - 2025",
      titleEdu: "Bachelor of Computer Science",
      school: "American University in Bulgaria (AUBG)",
      location: "Blagoevgrad, Bulgaria",
      description: "Bachelor of Arts in Computer Science (conferred with honors). Magna Cum Laude. Software Develoopment Concentration." +
      "Minor in Philosophy. CGPA 3.73 / 4.00. Awards: Outstanding Achievements in Computer Science and Philosophy. Dean's List Fall 2022, Fall 2024."
    },
    {
      duration: "2023 - 2024",
      titleEdu: "Erasmus+ Exchange",
      school: "Otto-Friedrich-Universitaet Bamberg",
      location: "Bamberg, Bavaria, Germany",
      description: "Erasmus+ academic year study abroad program in Applied Computer Science."
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
      description: "Kennedy-Lugar YES Program academic year study abroad in high school. CGPA 4.00 / 4.00"
    }
  ];

  const experiences = [
    {
      duration: "October 2023 - January 2024",
      position: "Software Engineer / Project Manager",
      company: "Aracom IT Services GMBH",
      location: "Bamberg, Bavaria, Germany",
      description: "(In collaboration with the Chair of Software Engineering and Programming Languages of Otto-Friedrich-Universität Bamberg). " +
      "Designed a Smart Grocery List application that delivers personalized suggestions to elevate the shopping experience. " +
      "Developed using Java Spring Boot, JavaFX, and MySQL. Led agile sprints as Scrum Master; boosted delivery efficiency by managing the " +
      "product backlog and sprint planning. Collaborated with team members using Git/GitLab, reducing code integration issues. "    
    },
    {
      duration: "September 2022 - September 2023",
      position: "Software Developer & Head of Development Department",
      company: "The Hub AUBG",
      location: "Blagoevgrad, Bulgaria",
      description: "Built and maintained a responsive HUB AUBG website using HTML, CSS, React (frontend) and Go, Python (backend). " + 
      "Managed a development team to reduce delays and aligned UI/UX design with stakeholder recommendations. "
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
      description: "Enhanced project proposals and marketing materials. Wrote grant applications that secured successful funding. " +
      "Streamlined documentation and bilingual communications. Contributed strategic ideas that improved project implementation. "
    },
    {
      duration: "July 2022 - August 2022",
      position: "Tech Intern",
      company: "Bonevet",
      location: "Gjakova, Kosovo",
      description: "Supervised and guided students on technical aspects of building projects. " +
      "Monitored project progress and provided feedback throughout the construction and planning phases."
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
