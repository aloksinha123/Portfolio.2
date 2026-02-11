import Navbar from '../components/Navbar';
import Image from 'next/image';

export default function About() {
  return (
    <div className="page-container">
      <Navbar />
      <main>
        <section className="about-content-section">
          <div className="container">
            <div className="profile-cards-grid">
              <div className="profile-card">
                <div className="profile-circle">
                  <img src="/images/alok pic 2.jpg" alt="Profile" />
                </div>
                <h2 className="profile-name">Alok Sinha</h2>
                <a href="mailto:aloksinha081104@gmail.com" className="profile-email">
                  hello@alok.dev
                </a>
                <a href="/alokcv.pdf" className="download-cv-btn" target="_blank" rel="noopener noreferrer">
                  Download CV
                </a>

              </div>

              <div className="profile-card">
                <div className="skill-icon">
                  <i className="fas fa-user"></i>
                </div>
                <h2 className="card-title">Brief About Me</h2>
                <div className="status-indicator">
                  <div className="status-dot"></div>
                  <span className="status-text">Open to Work</span>
                </div>
                <p className="card-text">
                  Full-Stack Developer and AI enthusiast with a strong foundation in building scalable and user-centric applications. I love blending creativity with logic to craft digital solutions—from dynamic web platforms and intuitive UI/UX designs to backend systems powered by cutting-edge tech.
                </p>
                <p className="card-text">
                  Born and raised in India, I'm passionate about constantly learning, building, and solving real-world problems with code. Outside of tech, I enjoy playing badminton, dancing to unwind, and staying active through regular workouts. Whether it's launching a new project or experimenting with the latest frameworks, I'm always excited to push boundaries and grow as a developer.
                </p>
              </div>

              <div className="profile-card">
                <h2 className="card-title experience-header">EXPERIENCE</h2>
                <div className="experience-details dark-card">
                  <div className="role-header">
                    <h3>SVKM School</h3>
                    <span className="duration">Jan, 2024 - May, 2024</span>
                  </div>
                  <div className="role-title">Backend Developer</div>
                  <p className="role-description">
                    Developed announcement, attendance, and notification APIs using Node.js, Express, and Firebase for seamless app integration.
                  </p>
                </div>
              </div>

              <div className="profile-card">
                <div className="skill-icon">
                  <i className="fas fa-code"></i>
                </div>
                <h2 className="card-title">TECH STACK</h2>
                <div className="tech-stack-grid">
                  <div className="tech-item">
                    <Image
                      src="/images/tech/html5.svg"
                      alt="HTML5"
                      width={45}
                      height={45}
                      className="tech-icon"
                    />
                  </div>
                  <div className="tech-item">
                    <Image
                      src="/images/tech/css3.svg"
                      alt="CSS3"
                      width={45}
                      height={45}
                      className="tech-icon"
                    />
                  </div>
                  <div className="tech-item">
                    <Image
                      src="/images/tech/javascript.svg"
                      alt="JavaScript"
                      width={45}
                      height={45}
                      className="tech-icon"
                    />
                  </div>
                  <div className="tech-item">
                    <Image
                      src="/images/tech/python.svg"
                      alt="Python"
                      width={45}
                      height={45}
                      className="tech-icon"
                    />
                  </div>
                  <div className="tech-item">
                    <Image
                      src="/images/tech/cpp.svg"
                      alt="C++"
                      width={45}
                      height={45}
                      className="tech-icon"
                    />
                  </div>
                  <div className="tech-item">
                    <Image
                      src="/images/tech/java.svg"
                      alt="Java"
                      width={45}
                      height={45}
                      className="tech-icon"
                    />
                  </div>
                  <div className="tech-item">
                    <Image
                      src="/images/tech/react.svg"
                      alt="React"
                      width={45}
                      height={45}
                      className="tech-icon react-icon"
                    />
                  </div>
                  <div className="tech-item">
                    <Image
                      src="/images/tech/express.svg"
                      alt="Express"
                      width={45}
                      height={45}
                      className="tech-icon"
                    />
                  </div>
                  <div className="tech-item">
                    <Image
                      src="/images/tech/nodejs.svg"
                      alt="Node.js"
                      width={45}
                      height={45}
                      className="tech-icon"
                    />
                  </div>
                  <div className="tech-item">
                    <Image
                      src="/images/tech/fastapi.svg"
                      alt="FastAPI"
                      width={45}
                      height={45}
                      className="tech-icon"
                    />
                  </div>
                  <div className="tech-item">
                    <Image
                      src="/images/tech/flask.svg"
                      alt="Flask"
                      width={45}
                      height={45}
                      className="tech-icon"
                    />
                  </div>
                  <div className="tech-item">
                    <Image
                      src="/images/tech/mysql.svg"
                      alt="MySQL"
                      width={45}
                      height={45}
                      className="tech-icon"
                    />
                  </div>
                  <div className="tech-item">
                    <Image
                      src="/images/tech/mongodb.svg"
                      alt="MongoDB"
                      width={45}
                      height={45}
                      className="tech-icon"
                    />
                  </div>
                  <div className="tech-item">
                    <Image
                      src="/images/tech/springboot.svg"
                      alt="Spring Boot"
                      width={45}
                      height={45}
                      className="tech-icon"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="about-footer">
        <div className="footer-content">
          <div className="footer-brand">
            <div className="brand-logo">
              <Image
                src="/images/logo alok.png"
                alt="Alok Sinha"
                width={120}
                height={40}
                className="footer-logo-image"
              />
            </div>
            <p className="footer-description">
              Alok Sinha is a full-stack web developer with a passion for building real-world
              applications that solve meaningful problems. With experience in both frontend and
              backend technologies, he creates seamless and scalable digital solutions. Feel free to
              explore his work, and don't hesitate to get in touch.
            </p>
          </div>
          <div className="footer-social">
            <a href="https://www.linkedin.com/in/alok-sinha-230005334/" target="_blank" rel="noopener noreferrer" className="social-link">
              <i className="fab fa-linkedin"></i>
            </a>
            <a href="https://github.com/aloksinha123" target="_blank" rel="noopener noreferrer" className="social-link">
              <i className="fab fa-github"></i>
            </a>
            <a href="https://www.instagram.com/_alok_sinha.7/?hl=en" target="_blank" rel="noopener noreferrer" className="social-link">
              <i className="fab fa-instagram"></i>
            </a>
            <a href="https://wa.me/918828938014" target="_blank" rel="noopener noreferrer" className="social-link">
              <i className="fab fa-whatsapp"></i>
            </a>
            <a href="mailto:aloksinh081104@gmail.com" className="social-link">
              <i className="fas fa-envelope"></i>
            </a>
          </div>
          <div className="footer-copyright">
            © 2025 Alok Sinha. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}
