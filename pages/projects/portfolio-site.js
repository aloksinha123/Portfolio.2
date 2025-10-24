import Navbar from '../../components/Navbar';
import Link from 'next/link';
import Image from 'next/image';
import Footer from '../../components/Footer';

export default function PortfolioSiteProject() {
  return (
    <div className="page-container">
      <Navbar />
      <main>
        <section className="project-detail-section">
          <div className="container">
            <div className="project-header">
              <h1 className="project-title">Portfolio Website</h1>
              <div className="project-meta">
                <span className="project-date">October 2025</span>
                <span className="project-category">Web Development</span>
              </div>
            </div>
            
            <div className="project-content">
              <div className="project-image-container">
                <Image 
                  src="/images/projects/portfolio-logo.png"
                  alt="Portfolio Website Screenshot" 
                  width={1200}
                  height={800}
                  className="project-main-image"
                  priority
                />
              </div>
              
              <div className="project-description">
                <h2>Project Overview</h2>
                <p>
                  A modern, fully responsive portfolio website built with **Next.js** and **React** to showcase projects, skills, and professional experience. The website features a clean design, smooth animations, and optimized performance. It includes multiple pages (Home, About, Projects, Contact) with a working contact form and is fully mobile-responsive.

                </p>

        

                <div className="tech-stack">
                  <h2>Technologies Used</h2>
                  <div className="tech-tags">
                    <span className="tech-tag">Next.js</span>
                    <span className="tech-tag">React</span>
                    <span className="tech-tag">CSS3</span>
                    <span className="tech-tag">JavaScript</span>
                    <span className="tech-tag">Vercel</span>
                  </div>
                </div>

                <div className="project-links">
                  <a 
                    href="https://github.com/aloksinha123/Portfolio.2" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="btn btn-primary"
                  >
                    <i className="fab fa-github"></i> View Source Code
                  </a>
                  <a 
                    href="https://portfolio-2-delta-two.vercel.app" 
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
