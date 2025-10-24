import Navbar from '../components/Navbar';
import Link from 'next/link';
import Head from 'next/head';

export default function Home() {
  const featuredProjects = [
    {
      id: 1,
      title: "Whack a Mole Game",
      category: "Game Development",
      description: "A faithful recreation and creative enhancement of the iconic arcade game, meticulously developed using Python and the Pygame library. Features dynamic difficulty scaling, robust score tracking, and engaging gameplay mechanics.",
      date: "23/10/2025",
      image: "/images/projects/whack-a-mole-game.png",
      link: "/projects/whack-a-mole"
    },
    {
      id: 7,
      title: "Portfolio Website",
      category: "Web Development",
      description: "A modern, fully responsive portfolio website built with Next.js and React to showcase projects, skills, and professional experience. Features clean design, smooth animations, and optimized performance.",
      date: "24/10/2025",
      image: "/images/portfolio-logo.png",
      link: "/projects/portfolio-site"
    }
  ];

  const aboutContent = {
    title: "About Me",
    description: `I'm a passionate full-stack developer with a keen eye for creating seamless digital experiences. 
    With 3+ years of hands-on experience in modern web technologies, I specialize in building robust 
    and scalable applications that solve real-world problems.`
  };

  return (
    <div className="landing-page">
      <Head>
        <title>Welcome to Alok's Portfolio</title>
        <meta name="description" content="Portfolio of Alok Sinha - Full Stack Developer" />
  <link rel="icon" type="image/png" href="/images/logo alok.png" />
  <link rel="apple-touch-icon" href="/images/logo alok.png" />
        <meta name="theme-color" content="#000000" />
      </Head>
      <Navbar />
      <main>
        <section className="hero">
          <div className="hero-content">
            <h1 className="hero-title">
              Welcome To
              <span className="highlight">ALOK.DEV</span>
            </h1>
            <p className="hero-text">
              I'm Alok Sinha — a passionate developer who turns ideas into powerful digital solutions. 
              Your goals drive my code, and together, we build experiences that matter.
            </p>
            <div className="cta-row">
              <a href="/resume.pdf" className="btn btn-primary" target="_blank" rel="noopener noreferrer" download="Alok_Sinha_Resume.pdf">
                <i className="fas fa-download"></i> Download Resume
              </a>
              <a href="/about" className="btn btn-secondary">
                <i className="fas fa-user"></i> Know Me
              </a>
              <a href="#contact" className="btn btn-secondary">
                <i className="fas fa-paper-plane"></i> Contact Me
              </a>
            </div>
            <div className="achievements">
              <div className="achievement-item">
                <span className="achievement-number">15<span className="highlight">+</span></span>
                <p>Build Projects<br />Across Full Stack</p>
              </div>
              <div className="achievement-item">
                <span className="achievement-number">3<span className="highlight">+</span></span>
                <p>Years of<br />Dev Experience</p>
              </div>
              <div className="achievement-item">
                <span className="achievement-number">5<span className="highlight">+</span></span>
                <p>Participated<br />Hackathons & Events</p>
              </div>
              <div className="achievement-item">
                <span className="achievement-number">10<span className="highlight">+</span></span>
                <p>Leadership<br />& Team Contributions</p>
              </div>
            </div>
          </div>
          
          <div className="hero-image">
            <div className="profile-circle">
              <img src="/images/alokpic.jpg" alt="Alok Sinha" />
            </div>
          </div>
        </section>

        <section id="about" className="about-section container">
          <h2 className="section-title">ABOUT ME</h2>
          <div className="about-content">
            <div className="about-grid">
              <div className="about-image">
                <div className="square-image">
                  <img src="/images/alok pic 3.jpg" alt="Alok Sinha" />
                </div>
              </div>
              <div className="about-text-content">
                <h3 style={{ color: '#000000' }}>Hello, I am Alok Sinha</h3>
                <p className="about-text">
                  I am a 20-year-old full-stack developer with a Bachelor's degree in Computer Science. 
                  My passion is building modern web applications that solve real-world problems. 
                  I love learning new technologies, collaborating with creative people, and turning ideas into digital experiences. 
                  When I'm not coding, you'll find me exploring new places, reading, or working out.
                </p>
                <div className="signature">Alok Sinha</div>
              </div>
            </div>
          </div>
        </section>

        <section id="projects" className="projects-section container">
          <h2 className="section-title">Featured Projects</h2>
          <div className="projects-grid">
            {featuredProjects.map((project) => (
              <div key={project.id} className="card">
                <img src={project.image} alt={project.title} className="project-image" />
                <div className="project-content">
                  <h3 className="card-title">{project.title}</h3>
                  <span className="project-category">{project.category}</span>
                  <p className="card-desc">{project.description}</p>
                  <div className="card-links">
                    <Link href={project.link || "#"} className="btn btn-secondary btn-sm">
                      View Project
                    </Link>
                    {project.liveDemo && (
                      <a href={project.liveDemo} className="btn btn-primary btn-sm" target="_blank" rel="noopener noreferrer">Live Demo</a>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="view-all-projects">
            <Link href="/projects" className="btn btn-primary">
              <i className="fas fa-project-diagram"></i> View All Projects
            </Link>
          </div>
        </section>

        <section id="contact" className="contact-section container">
          <h2 className="section-title">Contact Me</h2>
          <p className="contact-intro">
            I'm always open to connecting! Reach out via any of the platforms below, or send me a message directly. 
            Let's build something great together.
          </p>
          <div className="social-links">
            <a href="https://www.linkedin.com/in/alok-sinha-230005334/" className="social-icon" aria-label="LinkedIn" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-linkedin-in"></i>
            </a>
            <a href="https://github.com/aloksinha123" className="social-icon" aria-label="GitHub" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-github"></i>
            </a>
            <a href="https://www.linkedin.com/in/alok-sinha-230005334/" className="social-icon" aria-label="Instagram" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-instagram"></i>
            </a>
            <a href="https://wa.me/918828938014" className="social-icon" aria-label="WhatsApp" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-whatsapp"></i>
            </a>
            <a href="mailto:aloksinh081104@gmail.com" className="social-icon" aria-label="Email">
              <i className="fas fa-envelope"></i>
            </a>
          </div>
          
          <div className="newsletter-box">
            <h2>Subscribe to Our Newsletter</h2>
            <input type="email" placeholder="Enter your email" required />
            <br />
            <button>Subscribe</button>
          </div>
          
          <Link href="/contact" className="contact-button">
            Contact Me <i className="fas fa-arrow-right"></i>
          </Link>
        </section>

        <section className="quote-section container">
          <div className="quote-container">
            <i className="fas fa-quote-left quote-icon"></i>
            <blockquote className="quote-text">
              "Spread love everywhere you go. Let no one ever come to you without leaving happier."
            </blockquote>
            <div className="quote-author">― Alok Sinha</div>
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="footer-content">
          <div className="footer-brand">
            <div className="footer-logo">
              <img src="/images/logo alok.png" alt="Alok Sinha Logo" className="footer-logo-image" onError={(e)=>{e.currentTarget.onerror=null; e.currentTarget.src='/avatar.png';}} />
            </div>

            <p className="footer-description">
              Alok Sinha is a full-stack web developer with a passion for building real-world 
              applications that solve meaningful problems. With experience in both frontend and 
              backend technologies, he creates seamless and scalable digital solutions. Feel free to 
              explore his work, and don't hesitate to get in touch.
            </p>
          </div>

          <div className="footer-social">
            <a href="https://www.linkedin.com/in/alok-sinha-230005334/" className="social-link" target="_blank" rel="noopener noreferrer">
              <div className="social-icon-circle">
                <i className="fab fa-linkedin-in"></i>
              </div>
            </a>
            <a href="https://github.com/aloksinha123" className="social-link" target="_blank" rel="noopener noreferrer">
              <div className="social-icon-circle">
                <i className="fab fa-github"></i>
              </div>
            </a>
            <a href="https://www.linkedin.com/in/alok-sinha-230005334/" className="social-link" target="_blank" rel="noopener noreferrer">
              <div className="social-icon-circle">
                <i className="fab fa-instagram"></i>
              </div>
            </a>
            <a href="https://wa.me/918828938014" className="social-link" target="_blank" rel="noopener noreferrer">
              <div className="social-icon-circle">
                <i className="fab fa-whatsapp"></i>
              </div>
            </a>
            <a href="mailto:aloksinh081104@gmail.com" className="social-link">
              <div className="social-icon-circle">
                <i className="fas fa-envelope"></i>
              </div>
            </a>
          </div>

          <div className="footer-bottom">
            <p className="copyright">© 2025 Alok Sinha. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}


