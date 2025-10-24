import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import Image from 'next/image';

export default function EduConnectProject() {
  return (
    <div className="page-container">
      <Navbar />
      <main>
        <section className="project-detail-section">
          <div className="container">
            <div className="project-header">
              <h1 className="project-title">EDU-CONNECT APP</h1>
              <div className="project-meta">
                <span className="project-date">October 2025</span>
                <span className="project-category">Backend Development</span>
              </div>
            </div>
            
            <div className="project-content">
              <div className="project-image-container">
                <Image 
                  src="/images/projects/Screenshot 2025-10-23 210420.png"
                  alt="EDU-CONNECT App Screenshot" 
                  width={1200}
                  height={800}
                  className="project-main-image"
                  priority
                />
              </div>
              
              <div className="project-description">
                <h2>Project Overview</h2>
                <p>
                  EDU-CONNECT is a comprehensive web solution that bridges the communication gap between educational institutions, teachers, and parents. 
                  This platform streamlines academic communication, progress tracking, and administrative tasks through an intuitive interface.
                </p>

                <h2>Key Features</h2>
                <ul>
                  <li>Real-time messaging system between teachers and parents</li>
                  <li>Student progress tracking and reporting</li>
                  <li>Event scheduling and calendar management</li>
                  <li>Document sharing and resource management</li>
                  <li>Attendance tracking and notification system</li>
                </ul>

                <h2>Technical Stack</h2>
                <p>
                  Built with a robust backend using Node.js and Express, the application leverages MongoDB for flexible data storage
                  and WebSocket for real-time communications. The REST API architecture ensures smooth integration with various frontend clients.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}