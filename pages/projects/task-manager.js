import Navbar from '../../components/Navbar';
import Link from 'next/link';
import Image from 'next/image';
import Footer from '../../components/Footer';

export default function TaskManagerProject() {
  return (
    <div className="page-container">
      <Navbar />
      <main>
        <section className="project-detail-section">
          <div className="container">
            <div className="project-header">
              <h1>Task Manager</h1>
              <span className="project-meta">Full-Stack Development | October 2025</span>
            </div>

            <div className="project-image-container">
              <img 
                src="/images/task-manager-logo.png" 
                alt="Task Manager Project" 
                className="project-detail-image"
              />
            </div>

            <div className="project-details">
              <div className="project-description">
                <h2>Project Overview</h2>
                <p>
                  A comprehensive to-do list application built with Java Spring Boot. This application helps users manage and track their daily tasks efficiently. It features a clean dark theme interface, task creation, editing, deletion, and an interactive statistics dashboard that displays task progress in real-time.
                </p>

                <h3>Technologies Used</h3>
                <div className="tech-stack">
                  <span className="tech-tag">Java</span>
                  <span className="tech-tag">Spring Boot</span>
                  <span className="tech-tag">Thymeleaf</span>
                  <span className="tech-tag">CSS3</span>
                </div>
              </div>
            </div>
            <div className="project-cta">
              <Link href="/projects" className="btn btn-secondary">
                ← Back to Projects
              </Link>
              <a 
                href="https://github.com/aloksinha123/task-manager" 
                target="_blank" 
                rel="noopener noreferrer"
                className="btn btn-primary"
              >
                View Source Code
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
