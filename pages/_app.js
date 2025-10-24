import '../styles/globals.css';
import '../styles/project.css';
import '../styles/contact.css';
import '../styles/footer.css';
import '../styles/hero.css';
import '../styles/sections.css';
import Head from 'next/head';

export default function App({ Component, pageProps }) {
  return (
    <>
      <style jsx global>{`
        .footer, .footer *, .footer-description, .footer .copyright, .footer .social-link {
          color: #ffffff !important;
        }
        .footer {
          background: #000000 !important;
        }
        .footer-content {
          background-color: #000000 !important;
        }
      `}</style>
      <Component {...pageProps} />
    </>
  );
}
