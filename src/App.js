import logo from './logo.svg';
import './App.css';
import cakeVideo from "./assets/cake.mp4";
import meImage from "./assets/me.jpg";
function App() {

  document.addEventListener("DOMContentLoaded", function () {
    const darkModeToggle = document.getElementById("darkModeToggle");
    const body = document.body;
    const headings = document.querySelectorAll("h1, h2, h3, h4"); // Select all headings

    darkModeToggle.addEventListener("click", () => {
        body.classList.toggle("dark-mode");

        if (body.classList.contains("dark-mode")) {
            darkModeToggle.textContent = "Light Mode";
            headings.forEach(heading => heading.style.color = "white"); // White headings in dark mode
        } else {
            darkModeToggle.textContent = "Dark Mode";
            headings.forEach(heading => heading.style.color = "darkblue"); // Dark blue headings in light mode
        }
        });
    });

  return (
    <>
      <button id="darkModeToggle">Dark Mode</button>
      <h1>MY PROFILE</h1>
      <div id="container">
        <div id="Heading">
          <div id="prof">
            <img src={meImage} alt="Profile Picture" width="300" height="300" />
            <h2>MWEBEMBEZI NICOLE MBABAZI</h2>
            <h4>
              I am 22 years old, a female student at Uganda Christian University
              offering a Bachelor of Science in Computer Science. My passion in
              the IT world is Data Care and cybersecurity. I enjoy watching
              movies and hanging out with my friends.
            </h4>
            <hr />
          </div>

          <hr />
          <div id="prof1">
            <h3>PERSONAL INFORMATION</h3>
            <ul>
              <li>
                <b>FULL NAME:</b> MWEBEMBEZI NICOLE MBABAZI
              </li>
              <li>
                <b>STUDENT ID:</b> B20723
              </li>
              <li>
                <b>COURSE:</b> BACHELOR OF SCIENCE IN COMPUTER SCIENCE
              </li>
              <li>
                <b>YEAR:</b> 2
              </li>
              <li>
                <b>INTERESTS:</b> CYBER SECURITY AND DATA CARE
              </li>
              <li>
                <b>HOBBIES:</b> Baking and decorating cakes
              </li>
            </ul>
          </div>

          <hr />
          <video id="hobby" width="300" height="300" controls>
            <source src={cakeVideo} type="video/mp4" />
          </video>
          <br />

          <hr />
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

          <hr />

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
                <td>
                  <b>Essential Hardware and Software Concepts</b>
                </td>
                <td>ICT1102</td>
                <td>74</td>
                <td>4</td>
                <td>4</td>
              </tr>
              <tr>
                <td>
                  <b>Fundamentals of Computing</b>
                </td>
                <td>ICT1103</td>
                <td>72</td>
                <td>4</td>
                <td>4</td>
              </tr>
              <tr>
                <td>
                  <b>Structured Programming</b>
                </td>
                <td>CSC1101</td>
                <td>85</td>
                <td>4</td>
                <td>5</td>
              </tr>
              <tr>
                <td>
                  <b>Discrete Mathematics</b>
                </td>
                <td>MTH1102</td>
                <td>63</td>
                <td>3</td>
                <td>3</td>
              </tr>
              <tr>
                <td>
                  <b>Writing and Study Skills</b>
                </td>
                <td>LNG1101</td>
                <td>76</td>
                <td>3</td>
                <td>4.5</td>
              </tr>
              <tr>
                <td>
                  <b>Understanding the Old Testament</b>
                </td>
                <td>FS1103</td>
                <td>77</td>
                <td>3</td>
                <td>4.5</td>
              </tr>
            </tbody>
          </table>

          <br />

          <a href="https://www.magnoliabakery.com" target="_blank" rel="noopener noreferrer">
            Magnolia Bakery Website
          </a>
          <br />
          <a href="https://elearning.ucu.ac.ug/faculty-of-science-and-technology/" target="_blank" rel="noopener noreferrer">
            UCU Engineering Faculty Website
          </a>

          <hr />

          <div id="prof3">
            <h3>CONTACT INFORMATION</h3>
            <p>
              <b>Email:</b>{' '}
              <a href="mailto:nicolemwebembezi2@gmail.com">nicolemwebembezi2@gmail.com</a>
            </p>
            <p>
              <b>Phone:</b> 0774568712
            </p>
            <a href="https://www.linkedin.com/in/nicole-mbabazi-22aa81291/" target="_blank" rel="noopener noreferrer">
              My LinkedIn
            </a>{' '}
            |{' '}
            <a href="https://github.com/" target="_blank" rel="noopener noreferrer">
              My GitHub
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
