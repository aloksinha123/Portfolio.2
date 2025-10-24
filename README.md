<<<<<<< HEAD
# Personal Portfolio (Next.js)

Minimal, frontend-only personal portfolio built with Next.js, JavaScript, and plain CSS. Designed for clarity, responsiveness, and easy deployment to Vercel.

Getting started

1. Install dependencies

```powershell
npm install
```

2. Run development server

```powershell
npm run dev
```

3. Build for production

```powershell
npm run build; npm start
```

Deploying

Connect this repository to Vercel and it will automatically build and deploy the Next.js site. No backend required.

Customizing

- Replace `public/avatar.png` with your photo.
- Update social links in `pages/index.js`.
- Add or edit projects in `pages/projects.js` or wire a JSON file.
=======
# 🎯 Portfolio 2.0

A modern, responsive portfolio website built with **Next.js** and **React** to showcase my projects, skills, and experience.

## 📋 Overview

This is a full-stack portfolio website featuring:
- **Responsive Design** - Works seamlessly on desktop, tablet, and mobile devices
- **Project Showcase** - Displays featured projects with descriptions and links
- **About Section** - Personal introduction and background
- **Contact Form** - Functional contact form for visitors to reach out
- **Tech Stack Showcase** - Visual display of technologies and skills

## ✨ Features

- **Hero Section** - Eye-catching landing page with call-to-action
- **Navigation Bar** - Smooth navigation across all pages
- **Projects Page** - Detailed project cards with descriptions and tech stacks
  - Whack a Mole Game
  - EDU-CONNECT App
- **About Page** - Professional background and skills
- **Contact Page** - Working contact form with email integration
- **Responsive Footer** - Social links and additional information
- **Fast Performance** - Optimized with Next.js for fast loading
- **Mobile Friendly** - Fully responsive on all screen sizes
- **Custom Favicon** - Branded browser tab icon

## 🛠️ Tech Stack

### Frontend
- **React** - UI library
- **Next.js** - React framework for production
- **CSS3** - Styling and animations
- **JavaScript** - Interactive functionality

### Backend (API)
- **Node.js** - Runtime environment
- **Express.js** - Web server framework
- **Nodemailer** - Email sending functionality

### Additional Technologies
- **MongoDB** - Database support
- **FastAPI/Flask** - Python backend support
- **Spring Boot** - Java backend support

## 📁 Project Structure

```
portfolio.2/
├── pages/                      # Next.js pages
│   ├── index.js               # Homepage
│   ├── about.js               # About page
│   ├── projects.js            # Projects listing
│   ├── contact.js             # Contact page
│   ├── _app.js                # App wrapper
│   ├── _document.js           # Document wrapper
│   ├── api/
│   │   └── contact.js         # Contact form API
│   └── projects/
│       ├── whack-a-mole.js    # Whack a Mole project details
│       └── edu-connect.js     # EDU-CONNECT project details
├── components/                # Reusable React components
│   ├── Navbar.js             # Navigation component
│   ├── Footer.js             # Footer component
│   └── ProjectCard.js        # Project card component
├── public/                    # Static assets
│   ├── images/               # Project and tech images
│   ├── avatar.png            # Profile picture
│   ├── resume.pdf            # Resume file
│   ├── logo alok.png         # Custom logo/favicon
│   └── favicon.svg           # Browser tab icon
├── styles/                    # CSS stylesheets
│   ├── globals.css           # Global styles
│   ├── hero.css              # Hero section
│   ├── sections.css          # Section styles
│   ├── project.css           # Project styles
│   ├── footer.css            # Footer styles
│   ├── contact.css           # Contact form styles
│   └── footerLogo.css        # Footer logo styles
├── package.json              # Project dependencies
├── next.config.js            # Next.js configuration
├── .gitignore                # Git ignore rules
└── README.md                 # Project documentation
```

## ⚙️ Installation & Setup

### Prerequisites
- **Node.js** 14.0 or higher ([Download](https://nodejs.org/))
- **npm** or **yarn**
- **Git** (for cloning the repository)

### Steps

1. **Clone the repository**
   ```bash
   git clone https://github.com/aloksinha123/Portfolio.2.git
   cd Portfolio.2
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Run development server**
   ```bash
   npm run dev
   ```

4. **Open in browser**
   - Navigate to `http://localhost:3000`
   - The site will automatically reload when you make changes

## 🚀 Available Scripts

```bash
# Start development server with hot reload
npm run dev

# Build for production
npm run build

# Start production server (after building)
npm start

# Run linting checks (if configured)
npm run lint
```

## 📱 Mobile Access

### Access on Mobile Locally:

1. **Find your computer's IP address**:
   ```bash
   ipconfig
   ```
   Look for "IPv4 Address" (e.g., `192.168.1.100`)

2. **On your mobile device**, open browser and visit:
   ```
   http://192.168.1.100:3000
   ```
   (Replace with your actual IP address)

### Access Anywhere:
Deploy to **Vercel**, **Netlify**, or **GitHub Pages** to make it accessible worldwide from any mobile device.

## 🏗️ Building for Production

```bash
# Build the project for production
npm run build

# Start production server
npm start
```

The build creates optimized files ready for deployment.

## 📄 Featured Projects

### 1. Whack a Mole Game
- Interactive browser-based game
- Built with HTML5, CSS3, and JavaScript
- Responsive gameplay across all devices
- Real-time score tracking

### 2. EDU-CONNECT App
- Educational platform for connecting students and tutors
- Full-stack application with database support
- Real-time messaging and scheduling features
- User authentication and profiles

## 🌐 Deployment Options

Deploy your portfolio to any of these platforms:

- **Vercel** (⭐ Recommended for Next.js)
  - Zero-config deployment
  - Automatic builds on git push
  - Free SSL certificates
  - Global CDN

- **Netlify**
  - Easy drag-and-drop deployment
  - Continuous deployment from Git
  - Serverless functions support

- **GitHub Pages**
  - Free hosting
  - GitHub integration

- **AWS, Heroku, DigitalOcean**
  - More advanced options
  - Full control over infrastructure

## 📞 Contact Form Configuration

The contact form uses **Nodemailer** for email functionality. To enable email sending:

1. Update email credentials in `pages/api/contact.js`
2. Configure your email service (Gmail, SendGrid, etc.)
3. Test the contact form on the `/contact` page

## 🎨 Customization

### Change Branding:
- Update logo: Replace `public/images/logo alok.png`
- Update favicon: Replace `public/favicon.svg`
- Modify colors in CSS files in `styles/`

### Update Content:
- Edit pages in `pages/` directory
- Modify components in `components/` directory
- Update project data in individual project files

### Add New Pages:
- Create new `.js` file in `pages/` directory
- Next.js automatically creates routes

## 🔧 Troubleshooting

| Issue | Solution |
|-------|----------|
| Dependencies not installing | Run `npm install --legacy-peer-deps` |
| Port 3000 already in use | The dev server will use the next available port |
| Changes not reflecting | Clear `.next` folder: `rm -r .next` and restart |
| Mobile can't connect | Ensure both devices on same WiFi network |
| Build errors | Clear node_modules: `rm -r node_modules` and `npm install` |

## 📊 Performance

- ⚡ Fast page loads with Next.js optimization
- 📦 Optimized images and code splitting
- 🌐 Built-in SEO support
- 📱 Mobile-first responsive design
- 🎯 Lighthouse optimized

## 📝 License

This project is open source and available under the **MIT License**.

## 👤 Author

**Alok Singh**
- **GitHub**: [@aloksinha123](https://github.com/aloksinha123)
- **Portfolio**: [Portfolio.2](https://github.com/aloksinha123/Portfolio.2)
- **Email**: aloksinh081104@gmail.com

## 🤝 Contributing

Contributions are welcome! Feel free to:
1. Fork this project
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📞 Get in Touch

Have questions or want to collaborate? 
- Fill out the **contact form** on my portfolio
- Reach out via **email**: aloksinh081104@gmail.com
- Connect on **GitHub**: [@aloksinha123](https://github.com/aloksinha123)

## 🙏 Acknowledgments

- Next.js documentation and community
- React best practices
- Open source community

---

**Made with ❤️ by Alok Singh**

⭐ If you find this helpful, please consider giving it a star!

Last Updated: October 24, 2025
my portfolio
>>>>>>> 654a98e8e46e2325465fbf7a44cb93a10174224a
