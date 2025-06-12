import { useNavigate } from 'react-router-dom';
import '../styles/projects.css'

const ProjectComp = ({ id, title, description, image }) => {
  const navigate = useNavigate();

  const handleViewProject = () => {
    navigate(`/project/${id}`);
  };

  return (
    <>
      <div className="project-card">
        {image && <img src={image} alt={title} className="project-image" />}
        <div className="project-info">
          <h3 className="project-title">{title}</h3>
          <p className="project-description">{description}</p>
          <button className="project-link" onClick={handleViewProject}>
          View Project
          </button>
        </div>
      </div>
    </>
  )
}

export default ProjectComp
