import { useParams, useNavigate } from 'react-router-dom';
import projectsData from '../data/projectsData';
import '../styles/projectdetail.css';

const ProjectDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const project = projectsData.find(item => String(item.id) === id);

  if (!project) {
    return (
      <div className='not-found'>
        <h2>Project Not Found</h2>
        <button onClick={() => navigate(-1)}>Go Back</button>
      </div>
    );
  }

  return (
    <div className="project-detail">
      <header className="header">
        <h2>{project.title}</h2>
      </header>
      <div className="project-detail-content">
        <img src={project.image} alt={project.title} className="project-detail-image" />
        <div className="project-detail-description">
          <p>{project.description}</p>
        </div>
      </div>
      <div className="project-detail-button">
        <button onClick={() => navigate(-1)} className="back-button">
          Back to Projects
        </button>
        <button
            onClick={() => window.open(project.githubLink, "_blank")}
            className="github-button" >
        View on GitHub
        </button>
      </div>
    </div>
  );
}

export default ProjectDetail;
