import ProjectComp from '../components/ProjectComp';
import '../styles/projects.css';
import projectimg1 from '../assets/project-img1.webp';
import projectimg2 from '../assets/project-img2.png';
import projectimg3 from '../assets/project-img3.webp';
import projectimg4 from '../assets/project-img4.webp';
import projectimg5 from '../assets/project-img5.webp';

const Projects = () => {
  const projects = [
    { 
      id: "1",
      title: "Image Encryption System (Senior Thesis)",
      description: "Developed Chaos-based, DNA-based, and AES-256 encryption algorithms and a Hybrid algorithm in Java. ",
      image: projectimg1
    },
    { 
      id: "2",
      title: "Personal Website",
      description: "Designed and developed a personal website with ReactJs to showcase portfolio and projects. ",
      image: projectimg2
    },
    { 
      id: "3",
      title: "Flight Management System",
      description: "Developed a C++ system to manage various types of flights in an airport. ",
      image: projectimg3
    },
    { 
      id: "4",
      title: "Encryption Algorithms",
      description: "Demonstrating various encryption algorithms and their implementations in Python.",
      image: projectimg4
    },
    {
      id: "5",
      title: "AI-based Tourism Recommendation Website",
      description: "Hackathon project on innovative development techniques in tourism.",
      image: projectimg5
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
  