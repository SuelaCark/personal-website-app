import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes, faHouse } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";
import '../styles/navbar.css'

function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);
    const navigate = useNavigate();

    const toggleMenu = () => {
        setMenuOpen(prevState => !prevState);
      };

    // Close the menu when a link is clicked
    const handleNavigation = (path) => {
      setMenuOpen(false); 
      navigate(path);
  };

  return (
    <>
      <nav>
        <div className='navbar'>
            <div className='logo'onClick={() => navigate("/")}><FontAwesomeIcon icon={faHouse} /> Suela Çarkaxhija</div>
            <ul className='links'>
                <li onClick={() => navigate("/about-me")}>About Me</li>
                <li onClick={() => navigate("/experience")}>Experience</li>
                <li onClick={() => navigate("/projects")}>Projects</li>
                <li onClick={() => navigate("/certifications")}>Certifications</li>
            </ul>
            <button className="action-btn" onClick={() => navigate("/contact")}>Contact</button>

        {/* Hamburger Menu Button */}
            <div className="toggle-btn" onClick={toggleMenu}>
                <FontAwesomeIcon icon={menuOpen ? faTimes : faBars} />
            </div>

        {/* Menu Links (Hidden on Mobile) */}
            <ul className={`hamburger-menu ${menuOpen ? "open" : ""}`}>
                <li onClick={() => handleNavigation("/about-me")}>About Me</li>
                <li onClick={() => handleNavigation("/experience")}>Experience</li>
                <li onClick={() => handleNavigation("/projects")}>Projects</li>
                <li onClick={() => handleNavigation("/certifications")}>Certifications</li>
                <li onClick={() => handleNavigation("/contact")}>Contact</li>
            </ul>
        </div>
      </nav>
    </>
  )
}

export default Navbar
