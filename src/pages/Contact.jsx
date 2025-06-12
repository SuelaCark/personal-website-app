import '../styles/contact.css';
import sphoto from '../assets/suela-photo.jpeg';

function Contact() {
  // Form Functionality/backend to be developed in the future

  // const [formData, setFormData] = useState({
  //   name: '',
  //   email: '',
  //   message: ''
  // });

  // const handleChange = (e) => {
  //   const { name, value } = e.target;
  //   setFormData(prev => ({ ...prev, [name]: value }));
  // };

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   console.log("Submitted form data:", formData);
  //   setFormData({ name: '', email: '', message: '' });
  // };
  // <form onSubmit={handleSubmit} className="contact-form">
  //           <input type="text" name="name" id="name" placeholder='Full Name' value={formData.name} onChange={handleChange} required />
  //           <input type="text" name="email" id="email" placeholder='Your Email' value={formData.email} onChange={handleChange} required />
  //           <input type="text" name="message" id="message" placeholder='Message' value={formData.message} onChange={handleChange} required/>
  //           <button type='submit'>Submit</button>
  //         </form>

    return (
      <>
        <section className='contact'>
          <div className='contact-form-col'>
            <div className='header'>
              <h2>Contact Me</h2>
            </div>
            <form className="contact-form">
              <input type="text" name="name" id="name" placeholder='Full Name' required />
              <input type="text" name="email" id="email" placeholder='Your Email' required />
              <textarea name="message" id="message" placeholder='Message' required />
              <button type='submit'>Submit</button>
            </form>
          </div>
          <div className='contact-info-col'>
          <img id="contact-pic" src={sphoto} alt="Picture of Suela" />
            <h3>Suela Çarkaxhija</h3>
            <p>Software Engineer</p>
            <br />
            {/* <p>123-456-789</p>
            <p>XXX@yyy.edu</p> */}
            <p><a href="https://github.com/SuelaCark">GitHub</a>: @SuelaCark</p>
            <p><a href="https://www.linkedin.com/in/suelacark">LinkedIn</a>: @Suela Çarkaxhija</p>
          </div>
        </section>
      </>
    )
  }
  
  export default Contact
  