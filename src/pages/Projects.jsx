import ProjectComp from '../components/ProjectComp';
import projectsData from '../data/projectsData'; 
import '../styles/projects.css'

const Projects = () => {
  const projects = [
    { 
      id: "1",
      title: "Image Encryption System (Senior Thesis)",
      description: "Developing Chaos-based, DNA-based and AES-256 encryption algorithms in Java (in progress).",
      image: "/src/assets/project-img1.webp"
    },
    { 
      id: "2",
      title: "Personal Website",
      description: "Designed and developed a personal website to showcase portfolio and projects ",
      image: "/src/assets/project-img2.png"
    },
    { 
      id: "3",
      title: "Flight Management System",
      description: "Developed a system to manage various types of flights in an airport (in C++).",
      image: "/src/assets/project-img3.webp"
    },
    { 
      id: "4",
      title: "Encryption Algorithms",
      description: "Demonstrating various encryption algorithms and their implementations in Python.",
      image: "/src/assets/project-img4.webp"
    },
    {
      id: "5",
      title: "AI-based Tourism Recommendation Website",
      description: "Hackathon project on innovative development techniques in tourism.",
      image: "/src/assets/project-img5.webp"
    }
  ];

    return (
      <>
          <section className='projects-section'>
            <div className='header'>
              <h2>Projects</h2>
            </div>
            <div className='projects-container'>
              {projects.map((proj, index) => (
              <ProjectComp
                key={index}
                id={proj.id}
                title={proj.title}
                description={proj.description}
                image={proj.image}
              />
            ))}
            </div>
          </section>
      </>
    )
  }
  
  export default Projects
  