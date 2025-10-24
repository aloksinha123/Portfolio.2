import Navbar from '../components/Navbar';
import Link from 'next/link';
import Footer from '../components/Footer';

export default function Projects() {
  const allProjects = [
    {
      id: 1,
      title: "Whack a Mole Game",
      category: "Game Development",
      description: "A faithful recreation and creative enhancement of the iconic arcade game, meticulously developed using Python and the Pygame library. Features dynamic difficulty scaling, robust score tracking, and engaging gameplay mechanics.",
      date: "23/10/2025",
      image: "/images/projects/Screenshot 2025-10-23 203855.png",
      link: "/projects/whack-a-mole",
      tags: ["Python", "Pygame", "Game Development", "UI Design"]
    },
    {
      id: 2,
      title: "EDU-CONNECT APP",
      category: "Backend",
      description: "A cross-platform mobile and web solution designed to enhance communication and collaboration between teachers, parents, and school administrators.",
      date: "19/10/2025",
      image: "/images/projects/Screenshot 2025-10-23 210420.png",
      link: "/projects/edu-connect",
      tags: ["Node.js", "MongoDB", "WebSocket", "REST API"]
    },
    {
      id: 7,
      title: "Portfolio Website",
      category: "Web Development",
      description: "A modern, fully responsive portfolio website built with Next.js and React to showcase projects, skills, and professional experience. Features clean design, smooth animations, and optimized performance.",
      date: "24/10/2025", 
      image: "/images/portfolio-logo.png",
      link: "/projects/portfolio-site",
      tags: ["Next.js", "React", "CSS3", "Vercel"]
    },
    {
      id: 3,
      title: "AI Task Manager",
      category: "Machine Learning",
      description: "An intelligent task management system that uses AI to prioritize tasks, suggest optimal schedules, and automate routine workflow processes. Built with Python, TensorFlow, and React.",
      date: "22/10/2025",
      image: "/images/ai-task-manager.jpg",
      tags: ["Python", "TensorFlow", "React", "AI/ML"]
    },
    {
      id: 4,
      title: "E-Commerce Platform",
      category: "Full-Stack Development",
      description: "A modern e-commerce platform with real-time inventory management, secure payment processing, and personalized product recommendations. Built with Next.js, MongoDB, and Stripe API.",
      date: "23/10/2025",
      image: "/images/ecommerce-platform.jpg",
      tags: ["Next.js", "MongoDB", "Stripe", "Redux"]
    },
    {
      id: 5,
      title: "Weather Forecast App",
      category: "Frontend Development",
      description: "A sleek weather application that provides real-time weather updates, 7-day forecasts, and weather alerts. Built with React, OpenWeather API, and styled with Tailwind CSS.",
      date: "23/10/2025",
      image: "/images/weather-app.jpg",
      tags: ["React", "Tailwind CSS", "OpenWeather API"]
    },
    {
      id: 6,
      title: "ChatGPT Clone",
      category: "AI/ML Development",
      description: "A sophisticated chat application that leverages OpenAI's GPT-3 API to provide intelligent responses. Features include conversation history, code highlighting, and markdown support.",
      date: "23/10/2025",
      image: "/images/chatgpt-clone.jpg",
      tags: ["Next.js", "OpenAI API", "Socket.io", "MongoDB"]
    }
  ];

  return (
    <div className="page-container">
      <Navbar />
      <main>
        <section className="projects-hero">
          <div className="container">
            <h1>My Projects</h1>
            <p className="lead">
              Explore my portfolio of projects spanning web development, AI/ML, and more. 
              Each project represents a unique challenge and solution.
            </p>
          </div>
        </section>

        <section className="all-projects">
          <div className="container">
            <div className="projects-filters">
              <button className="filter-btn active">All</button>
              <button className="filter-btn">Full-Stack</button>
              <button className="filter-btn">Frontend</button>
              <button className="filter-btn">Backend</button>
              <button className="filter-btn">Game Dev</button>
              <button className="filter-btn">AI/ML</button>
            </div>

            <div className="projects-grid">
              {allProjects.map((project) => (
                <div key={project.id} className="project-card">
                  <div className="card">
                    <img src={project.image} alt={project.title} className="project-image" />
                    <div className="project-content">
                      <h3 className="card-title">{project.title}</h3>
                      <span className="project-category">{project.category}</span>
                      <p className="card-desc">{project.description}</p>
                      <div className="project-tags">
                        {project.tags.map((tag, index) => (
                          <span key={index} className="tag">{tag}</span>
                        ))}
                      </div>
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
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  )
}
