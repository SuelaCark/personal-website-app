# Personal Portfolio Website

This repository contains my personal portfolio website built to showcase my resume, projects, skills, and certifications. The website is built from scratch using HTML, CSS, and React, with Vite as the build tool, and it implements dynamic routing, responsive design, and custom animations.

---

## Project Overview

- **Purpose:**  
  A professional portfolio site for a tech role that highlights my background, skills, projects, and certifications.
  
- **Key Features:**
  - 10+ individual pages with clear navigation.
  - Responsive design that adapts seamlessly to desktop, tablet, and mobile.
  - Dynamic routing (with React Router) for project detail pages.
  - Custom navigation menu (including a hamburger menu on mobile).
  - Animated skill bars and hover effects.
  - Unique background images/gradients applied to different sections.

---

## Technologies and Dependencies

- **React**: For building reusable components and managing the UI.
- **Vite**: Fast build tool and development server.
- **React Router**: Dynamic routing (`/project/:id`) for project detail pages.
- **Font Awesome**: For iconography (e.g., in the navbar and contact page).
- **HTML/CSS**: Custom styling with CSS animations and media queries for responsiveness.

Other dependencies include any additional NPM packages required by Vite and your project (see the `package.json` file for details).

---

## Project Structure

The project is organized as follows:
```
my-personal-website/ 
├── public/ # Static files (e.g., vite.svg) 
├── src/ 
│   ├── assets/ # Images and other assets 
│   ├── components/ # Reusable components (Navbar, Footer, ProjectComp, CertificateComp, etc.) 
│   ├── data/ # Data files (e.g., projectsData.js) 
│   ├── pages/ # Page components (Landing, AboutMe, Experience, Projects, Certifications, Contact) 
│   ├── styles/ # Global and component-specific CSS files 
│   ├── App.css # Application CSS styling
│   ├── App.jsx # Main application component including routing logic 
│   ├── index.css # Main application CSS styling
│   └── main.jsx # Entry point (wrapped with BrowserRouter) 
├── .gitignore
├── eslint.config.js
├── index.html
├── package-lock.json # Project metadata and dependencies 
├── package.json # Project metadata and dependencies 
├── README.md # This documentation
└──vite.config.js
```

---

## Installation

1. **Clone the Repository:**

   ```bash
   git clone https://github.com/yourusername/my-personal-website.git
   cd my-personal-website

2. **Install Dependencies:**
    Make sure you have Node.js installed. Then run: npm install

3. **Start the Development Server (using Vite):**
    npm run dev
    This will start the Vite development server. Open the URL indicated in your terminal (usually http://localhost:5173/) in your browser.

---

## Dependencies Setup
Vite: Vite is used as the development server and build tool. Its fast module replacement and build speed help streamline development.

Font Awesome Icons: To use Font Awesome icons, the following packages are installed:
npm install @fortawesome/react-fontawesome @fortawesome/free-solid-svg-icons @fortawesome/fontawesome-svg-core

React Router Dom: This package enables dynamic routing across the website:
npm install react-router-dom
It is used in your App.jsx (and components like ProjectDetail.jsx) to navigate between pages and pass parameters (like project ID).

---

## Running the Project
After installation, run: npm run dev
This command launches your website with hot module replacement, so changes in your code are reflected live in your browser.

