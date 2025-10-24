import Navbar from '../../components/Navbar';
import Link from 'next/link';
import Image from 'next/image';
import Footer from '../../components/Footer';

export default function WhackAMoleProject() {
  return (
    <div className="page-container">
      <Navbar />
      <main>
        <section className="project-detail-section">
          <div className="container">
            <div className="project-header">
              <h1 className="project-title">Whack a Mole Game</h1>
              <div className="project-meta">
                <span className="project-date">October 2025</span>
                <span className="project-category">Game Development</span>
              </div>
            </div>
            
            <div className="project-content">
              <div className="project-image-container">
                <Image 
                  src="/images/projects/whack-a-mole-game.png"
                  alt="Whack a Mole Game Screenshot" 
                  width={1200}
                  height={800}
                  className="project-main-image"
                  priority
                />
              </div>
              
              <div className="project-description">
                <h2>Project Overview</h2>
                <p>
                  The **Whack-a-Mole Game** is an interactive web-based project built using **HTML, CSS, and JavaScript**, where players test their reflexes by clicking on moles that randomly pop up from holes within a limited time. The game features a dynamic scoring system, timer, and smooth animations, all controlled through JavaScript for logic and interactivity, CSS for styling and animations, and HTML for the game’s structure. This project showcases core front-end development skills such as **DOM manipulation, event handling, randomization, and real-time updates**, making it a fun and engaging demonstration of JavaScript-based game development.

                </p>

        

                <div className="tech-stack">
                  <h2>Technologies Used</h2>
                  <div className="tech-tags">
                    <span className="tech-tag">HTML</span>
                    <span className="tech-tag">CSS</span>
                    <span className="tech-tag">JAVASCRIPT</span>
                    
                  </div>
                </div>

                <div className="project-links">
                  <a 
                    href="https://github.com/aloksinha123/whac-a-mole" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="btn btn-primary"
                  >
                    <i className="fab fa-github"></i> View Source Code
                  </a>
                  <a 
                    href="https://your-demo-link.com" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="btn btn-secondary"
                  >
                    <i className="fas fa-external-link-alt"></i> Live Demo
                  </a>
                </div>
              </div>
            </div>

            <div className="back-button-section">
              <Link href="/projects" className="btn btn-secondary">
                ← Back to Projects
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}