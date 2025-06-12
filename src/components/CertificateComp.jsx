import '../styles/projects.css'

const CertificateComp = ({ title, image, description}) => {
  return (
    <>
      <div className="certificate-card">
        {image && <img src={image} alt={title} className="cert-image" />}
        <div className="certificate-info">
          <h3 id="cert-title">{title}</h3>
          <p id='cert-desc'>{description}</p>
        </div>
      </div>
    </>
  )
}

export default CertificateComp
