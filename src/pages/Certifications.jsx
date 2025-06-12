import CertificateComp from '../components/CertificateComp';
import '../styles/certifications.css';
import androidIcon from '../assets/android-icon.png';
import smartCitiesIcon from '../assets/smart-cities-icon.png';
import seoIcon from '../assets/seo-icon.png';
import webDevIcon from '../assets/webdev-icon.png';
import pythonIcon from '../assets/python-icon.png';
import javaIcon from '../assets/java-icon.png';
import magazineIcon from '../assets/magazine-icon.png';
import paperIcon from '../assets/paper-icon.png';
import usaIcon from '../assets/usa-icon.png';

const Certifications = () => {
  const certificates = [
    {
      title: "Java Enterprise & Mobile Programming",
      image: {androidIcon},
      description: ""
    },
    {
      title: "Artificial Intelligence for Smart Cities",
      image: {smartCitiesIcon},
      description: ""
    },
    {
      title: "Technical SEO",
      image: {seoIcon},
      description: ""
    },
    {
      title: "Web Development (HTML, CSS, Javascript, ReactJs)",
      image: {webDevIcon},
      description: ""
    },
    {
      title: "Python Programming",
      image: {pythonIcon},
      description: ""
    },
    {
      title: "Java Programming",
      image: {javaIcon},
      description: ""
    },
    {
      title: "Women Leaders in the Tech Industry 2023",
      image: {magazineIcon},
      description: "“Women Leaders in the Tech Industry 2023” – DevStyler Magazine, Bulgaria."
    },
    {
      title: "Lung Cancer Detection Reserach Project",
      image: {paperIcon},
      description: "Project “Lung Cancer Detection Using Machine Learning and Data Analysis Techniques” -  International " +
      "Karatekin Science and Technology Conference, Çankiri, Turkey. "
    },
    {
      title: "U.S. Department of State",
      image: {usaIcon},
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
  