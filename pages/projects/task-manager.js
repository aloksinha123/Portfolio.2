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
                src="/images/projects/Screenshot 2025-10-23 210420.png" 
                alt="Task Manager Project" 
                className="project-detail-image"
              />
            </div>

            <div className="project-details">
              <div className="project-description">
                <h2>Project Overview</h2>
                <p>
                  Task Manager is a comprehensive to-do list application built with Java Spring Boot that helps users efficiently manage and track their daily tasks. The application features an intuitive interface with a dark theme and provides real-time statistical insights into task completion progress.
                </p>
                
                <h3>Key Features</h3>
                <ul>
                  <li><strong>Task Management:</strong> Create, edit, delete, and mark tasks as completed</li>
                  <li><strong>Statistics Dashboard:</strong> View total, completed, and pending task counts</li>
                  <li><strong>Visual Progress Chart:</strong> Interactive chart showing task completion percentages</li>
                  <li><strong>Dark Theme UI:</strong> Modern, user-friendly interface with smooth animations</li>
                  <li><strong>Responsive Design:</strong> Works seamlessly on desktop and mobile devices</li>
                  <li><strong>Real-time Updates:</strong> Instant feedback on task operations</li>
                </ul>

                <h3>Technologies Used</h3>
                <div className="tech-stack">
                  <span className="tech-tag">Java</span>
                  <span className="tech-tag">Spring Boot</span>
                  <span className="tech-tag">Thymeleaf</span>
                  <span className="tech-tag">CSS3</span>
                  <span className="tech-tag">HTML5</span>
                </div>

                <h3>Architecture</h3>
                <p>
                  The project follows the MVC (Model-View-Controller) architecture pattern using Spring Boot:
                </p>
                <ul>
                  <li><strong>Model:</strong> Todo class with title and completion status properties</li>
                  <li><strong>View:</strong> Thymeleaf templates for dynamic HTML rendering</li>
                  <li><strong>Controller:</strong> TodoController handling CRUD operations (Create, Read, Update, Delete)</li>
                  <li><strong>Storage:</strong> In-memory ArrayList for task persistence during session</li>
                </ul>

                <h3>Core Functionality</h3>
                <ul>
                  <li>Add new tasks via form submission</li>
                  <li>Toggle task completion status with visual feedback</li>
                  <li>Edit task titles inline with save functionality</li>
                  <li>Delete tasks with automatic UI updates</li>
                  <li>Real-time statistics calculation and chart rendering</li>
                </ul>
              </div>

              <div className="project-info">
                <div className="info-card">
                  <h4>Repository</h4>
                  <p>
                    <a 
                      href="https://github.com/aloksinha123/task-manager" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="project-link"
                    >
                      View on GitHub
                    </a>
                  </p>
                </div>

                <div className="info-card">
                  <h4>Technologies</h4>
                  <ul className="tech-list">
                    <li>Java 11+</li>
                    <li>Spring Boot 2.x</li>
                    <li>Thymeleaf</li>
                    <li>HTML5 & CSS3</li>
                    <li>Maven</li>
                  </ul>
                </div>

                <div className="info-card">
                  <h4>Project Date</h4>
                  <p>October 2025</p>
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
