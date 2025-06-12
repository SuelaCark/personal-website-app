import CertificateComp from '../components/CertificateComp'
import '../styles/certifications.css'

const Certifications = () => {
  const certificates = [
    {
      title: "Java Enterprise & Mobile Programming",
      image: "src/assets/android-icon.png",
      description: ""
    },
    {
      title: "Artificial Intelligence for Smart Cities",
      image: "src/assets/smart-cities-icon.png",
      description: ""
    },
    {
      title: "Technical SEO",
      image: "src/assets/seo-icon.png",
      description: ""
    },
    {
      title: "Web Development (HTML, CSS, Javascript, ReactJs)",
      image: "src/assets/webdev-icon.png",
      description: ""
    },
    {
      title: "Python Programming",
      image: "src/assets/python-icon.png",
      description: ""
    },
    {
      title: "Java Programming",
      image: "src/assets/java-icon.png",
      description: ""
    },
    {
      title: "Women Leaders in the Tech Industry 2023",
      image: "src/assets/magazine-icon.png",
      description: "“Women Leaders in the Tech Industry 2023” – DevStyler Magazine, Bulgaria."
    },
    {
      title: "Lung Cancer Detection Reserach Project",
      image: "src/assets/paper-icon.png",
      description: "Project “Lung Cancer Detection Using Machine Learning and Data Analysis Techniques” -  International " +
      "Karatekin Science and Technology Conference, Çankiri, Turkey. "
    },
    {
      title: "U.S. Department of State",
      image: "src/assets/usa-icon.png",
      description: "Certificate for successful completion of the YES program."
    }
  ];
    return (
      <>
        <section className='certifications-section'>
          <div className='header'>
            <h2>Certifications and Honors</h2>
          </div>
          <div className='certificates-container'>
            {certificates.map((cert, index) => (
                <CertificateComp
                  key={index}
                  title={cert.title}
                  image={cert.image}
                  description={cert.description}
                />
              ))}
          </div>
        </section>
      </>
    )
  }
  
  export default Certifications
  