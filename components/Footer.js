export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-content">
        <div className="footer-brand">
          <div className="footer-logo">
            <img src="/images/logo alok.png" alt="ALOK" className="footer-logo-img" />
          </div>
          <p className="footer-description">
            Alok Sinha is a full-stack web developer with a passion for building real-world applications 
            that solve meaningful problems. With experience in both frontend and backend technologies, 
            he creates seamless and scalable digital solutions. Feel free to explore his work, 
            and don't hesitate to get in touch.
          </p>
        </div>

        <div className="footer-social">
          <a href="https://www.linkedin.com/in/alok-sinha-230005334/" aria-label="LinkedIn" className="social-link" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-linkedin-in"></i>
          </a>
          <a href="https://github.com/aloksinha123" aria-label="GitHub" className="social-link" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-github"></i>
          </a>
          <a href="https://www.linkedin.com/in/alok-sinha-230005334/" aria-label="Instagram" className="social-link" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-instagram"></i>
          </a>
          <a href="https://wa.me/918828938014" aria-label="WhatsApp" className="social-link" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-whatsapp"></i>
          </a>
          <a href="mailto:aloksinh081104@gmail.com" aria-label="Email" className="social-link">
            <i className="fas fa-envelope"></i>
          </a>
        </div>

        <div className="footer-bottom">
          <p className="copyright">© 2025 Alok Sinha. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}