import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom';
import meImage from '../assets/me.jpg'; // Profile image
import cakeVideo from '../assets/cake.mp4'; // Cake video
import Login from '../pages/login';
import './App.css';  // Login component

const Portfolio = () => {
  const [darkMode, setDarkMode] = useState(false);
 

  useEffect(() => {
    document.body.classList.toggle("dark-mode", darkMode);
  }, [darkMode]);

  return (
    <>
      <button onClick={() => setDarkMode(!darkMode)}>
        {darkMode ? "Light Mode" : "Dark Mode"}
      </button>
      
      {/* Profile Section */}
      <h1>MY PROFILE</h1>
      <div id="prof">
        <img src={meImage} alt="MNM" width="300" height="300" />
        <h2>MWEBEMBEZI NICOLE MBABAZI</h2>
        <h4>
          I am 23 years old, a female student at Uganda Christian University
          offering a Bachelor of Science in Computer Science. My passion in
          the IT world is Data Care and Cybersecurity. I enjoy watching
          movies and hanging out with my friends.
        </h4>
        <hr />
      </div>

      {/* Personal Information Section */}
      <div id="prof1">
        <h3>PERSONAL INFORMATION</h3>
        <ul>
          <li><b>FULL NAME:</b> MWEBEMBEZI NICOLE MBABAZI</li>
          <li><b>STUDENT ID:</b> B20723</li>
          <li><b>COURSE:</b> BACHELOR OF SCIENCE IN COMPUTER SCIENCE</li>
          <li><b>YEAR:</b> 2</li>
          <li><b>INTERESTS:</b> CYBER SECURITY AND DATA CARE</li>
          <li><b>HOBBIES:</b> Baking and decorating cakes</li>
        </ul>
      </div>

      {/* Cake Video Section */}
      <div id="cake-video-section">
        <h3>Check out my Cake Making Video</h3>
        <video width="600" controls>
          <source src={cakeVideo} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>

      {/* Career Goals Section */}
      <div id="prof2">
        <h3>CAREER GOALS</h3>
        <h4>
          As a Computer Science student, my academic goal is to specialize
          in Data Science and Cybersecurity, gaining the necessary skills to
          analyze complex data and protect digital systems from threats. I
          aim to excel in my coursework, participate in hands-on projects,
          and build a strong portfolio that showcases my expertise in these
          fields. My ultimate goal is to secure a position at Centenary
          Bank, where I can apply my knowledge to enhance data security and
          decision-making processes. Alongside my studies, I also plan to
          pursue my passion for baking by making and selling cakes as a side
          business.
        </h4>
      </div>

      {/* Results Section */}
      <table>
        <caption>YEAR 1 - SEMESTER 1 - GPA 4.19</caption>
        <thead>
          <tr>
            <th>COURSE</th>
            <th>COURSE CODE</th>
            <th>MARK</th>
            <th>CU</th>
            <th>GP</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><b>Essential Hardware and Software Concepts</b></td>
            <td>ICT1102</td>
            <td>74</td>
            <td>4</td>
            <td>4</td>
          </tr>
          <tr>
            <td><b>Fundamentals of Computing</b></td>
            <td>ICT1103</td>
            <td>72</td>
            <td>4</td>
            <td>4</td>
          </tr>
          <tr>
            <td><b>Structured Programming</b></td>
            <td>CSC1101</td>
            <td>85</td>
            <td>4</td>
            <td>5</td>
          </tr>
          <tr>
            <td><b>Discrete Mathematics</b></td>
            <td>MTH1102</td>
            <td>63</td>
            <td>3</td>
            <td>3</td>
          </tr>
          <tr>
            <td><b>Writing and Study Skills</b></td>
            <td>LNG1101</td>
            <td>76</td>
            <td>3</td>
            <td>4.5</td>
          </tr>
          <tr>
            <td><b>Understanding the Old Testament</b></td>
            <td>FS1103</td>
            <td>77</td>
            <td>3</td>
            <td>4.5</td>
          </tr>
        </tbody>
      </table>

      {/* Contact Information Section */}
      <div id="prof3">
        <h3>CONTACT INFORMATION</h3>
        <p><b>Email:</b> <a href="mailto:nicolemwebembezi2@gmail.com">nicolemwebembezi2@gmail.com</a></p>
        <p><b>Phone:</b> 0774568712</p>
        <a href="https://www.linkedin.com/in/nicole-mbabazi-22aa81291/" target="_blank" rel="noopener noreferrer">My LinkedIn</a> | 
        <a href="https://github.com/" target="_blank" rel="noopener noreferrer">My GitHub</a>
      </div>

      {/* External Links */}
      <a href="https://www.magnoliabakery.com" target="_blank" rel="noopener noreferrer">Magnolia Bakery Website</a>
      <br />
      <a href="https://elearning.ucu.ac.ug/faculty-of-science-and-technology/" target="_blank" rel="noopener noreferrer">UCU Engineering Faculty Website</a>
    </>
  );
};

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/portfolio" element={<Portfolio />} />
      </Routes>
    </Router>
  );
}

export default App;
