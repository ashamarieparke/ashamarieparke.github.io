// nav items, stats, skills, experience, and projects data for easy updates and
//  mapping in the UI
const navItems = [
  { label: 'About', href: '#about' },
  { label: 'Education', href: '#education' },
  { label: 'Experience', href: '#experience' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
];

const stats = [
  { value: '1', label: 'featured internship' },
  { value: '5', label: 'portfolio projects' },
  { value: '6+', label: 'core toolsets' },
];

const skills = [
  { name: 'React', icon: 'fa-brands fa-react', color: '#61dafb' },
  { name: 'HTML5', icon: 'fa-brands fa-html5', color: '#e34c26' },
  { name: 'CSS3', icon: 'fa-brands fa-css3-alt', color: '#2965f1' },
  { name: 'JavaScript', icon: 'fa-brands fa-js-square', color: '#f7df1e' },
  { name: 'Python', icon: 'fa-brands fa-python', color: '#3776ab' },
  { name: 'C++', icon: 'fa-solid fa-code', color: '#00599c' },
  { name: 'Java', icon: 'fa-brands fa-java', color: '#007396' },
  { name: 'Git', icon: 'fa-brands fa-git-alt', color: '#f05032' },
  { name: 'GitHub', icon: 'fa-brands fa-github', color: '#181717' },
  { name: 'NumPy', icon: 'fa-solid fa-calculator', color: '#013243' },
  { name: 'Firebase', icon: 'fa-solid fa-database', color: '#2965f1' },
  { name: 'Bootstrap', icon: 'fa-brands fa-bootstrap', color: '#563d7c' },
  { name: 'Node.js', icon: 'fa-brands fa-node-js', color: '#339933' },
];

const experience = [
  {
    company: 'Xai Robotics',
    title: 'Technical and Educational Innovation / Software Engineering Intern',
    date: 'May 2025 - June 2025',
    location: 'Coral Springs, FL',
    bullets: [
      'Installed and configured an open-source tool across internal systems, improving setup consistency and onboarding clarity.',
      'Assisted with debugging embedded C++ for microcontroller-based systems and supported prototype development.',
      'Helped senior engineers and supported 5+ students during engineering summer camps by troubleshooting code and explaining concepts.',
    ],
  },
];

const projects = [
  {
    icon: 'fa-leaf',
    title: 'EcoAgent',
    description:
      'A GenAI-powered sustainability advisor that gives personalized, actionable recommendations for individuals and organizations.',
    stack: 'Python, CrewAI, GPT-4',
    links: [
      { label: 'GitHub', href: 'https://github.com/ashamarieparke/EcoAgent' },
      {
        label: 'Link',
        href: 'https://app.crewai.com/crews/3550ad98-32d9-45b6-a8ee-775f9c59562b/chats?token=ImQ5NDdlZjExLTk3NzYtNGY3Yi1hNmU0LTNlNGNiNTczM2EyYyI%3D--80d4acf8600df79969323703112123e4fc5929fa',
      },
    ],
  },
  {
    icon: 'fa-utensils',
    title: 'RecipePal App',
    description:
      'An iOS app that helps users search recipes from ingredients at home and save favorites with a heart icon.',
    stack: 'Swift, SwiftUI, Spoonacular API',
    links: [
      { label: 'GitHub', href: 'https://github.com/ashamarieparke/RecipePal' },
      { label: 'GIF Demo', href: 'https://github.com/ashamarieparke/RecipePal/blob/main/DemoGIF.gif' },
    ],
  },
  {
    icon: 'fa-file-alt',
    title: 'Readme Generator for GitHub',
    description:
      'A CLI tool that helps developers create README templates for showcasing project details quickly.',
    stack: 'JavaScript, Node.js, CLI',
    links: [{ label: 'GitHub', href: 'https://github.com/ashamarieparke/readme-generator' }],
  },
  {
    icon: 'fa-gamepad',
    title: 'Word Guessing Game',
    description:
      'A simple guessing game where the user has seven attempts to find the word hidden in the word file.',
    stack: 'Python',
    links: [{ label: 'GitHub', href: 'https://github.com/ashamarieparke/word-guessing-game' }],
  },
  {
    icon: 'fa-hand-rock',
    title: 'Rock Paper Scissors',
    description:
      'A classic rock-paper-scissors game played against a computer opponent that makes random choices.',
    stack: 'Python',
    links: [{ label: 'GitHub', href: 'https://github.com/ashamarieparke/RPSgame' }],
  },
  {
    icon: 'fa-laptop-code',
    title: 'Portfolio Website',
    description: 'The site you are looking at now, rebuilt as a React experience with a more polished presentation layer.',
    stack: 'React, HTML5, CSS3, JavaScript',
    links: [{ label: 'GitHub', href: 'https://github.com/ashamarieparke/ashamarieparke.github.io' }],
  },
];

// reusable section title component for consistency and easy updates across sections
function SectionTitle({ eyebrow, title, description }) {
  return (
    <div className="section-heading">
      <p className="eyebrow">{eyebrow}</p>
      <h2>{title}</h2>
      {description ? <p className="section-copy">{description}</p> : null}
    </div>
  );
}

function App() {
  return (
    <div className="page-shell">
      <div className="orb orb-one" />
      <div className="orb orb-two" />
      <header className="topbar">
        <div className="brand-mark">AP</div>
        <nav className="nav-chips" aria-label="Primary">
          {navItems.map((item) => (
            <a key={item.href} href={item.href}>
              {item.label}
            </a>
          ))}
        </nav>
      </header>
{/* Main content area with hero section, stats, about, education, experience, skills,
 projects, and contact CTA sections. Each section uses the SectionTitle component 
 for consistent styling and structure. The hero section includes a portrait 
 and contact links, while the projects section maps over the projects array to 
 display project cards with links. */}
      <main className="layout">
        <section className="hero">
          <div className="hero-copy reveal">
            <p className="eyebrow">Computer Science student at Florida Atlantic University</p>
            <h1>Building polished products with software, AI, and a sharp eye for detail.</h1>
            <p className="hero-text">
              I like turning ideas into clean, useful interfaces and practical systems. I have experience with React, HTML,
              CSS, JavaScript, Python, Java, and C++, and I am looking for summer internship opportunities where I can
              contribute and keep learning.
            </p>

            <div className="hero-actions">
              <a className="button button-primary" href="#projects">
                View projects
              </a>
              <a className="button button-secondary" href="mailto:ashamarie.parke@gmail.com">
                Contact me
              </a>
            </div>

            <div className="contact-row" aria-label="Contact links">
              <a href="mailto:ashamarie.parke@gmail.com" target="_blank" rel="noreferrer" aria-label="Email">
                <i className="bi bi-envelope" />
              </a>
              <a href="https://www.linkedin.com/in/ashamarieparke/" target="_blank" rel="noreferrer" aria-label="LinkedIn">
                <i className="bi bi-linkedin" />
              </a>
              <a href="https://github.com/ashamarieparke" target="_blank" rel="noreferrer" aria-label="GitHub">
                <i className="bi bi-github" />
              </a>
            </div>
          </div>

          <aside className="hero-panel reveal">
            <div className="portrait-card">
              <img
                src="profile.jpeg"
                alt="Professional portrait of Ashamarie Parke"
                className="bio-pic"
              />
              <div className="portrait-meta">
                <p className="portrait-name">Ashamarie Parke</p>
                <p className="portrait-role">Aspiring software engineer and product-minded builder</p>
              </div>
            </div>

            <div className="highlight-card">
              <p className="highlight-label">Current focus</p>
              <p>
                Deepening my AI skills and building projects that feel polished, useful, and easy to understand.
              </p>
            </div>
          </aside>
        </section>
      {/* Stats section that maps over the stats array to display key highlights 
      in a grid layout. Each stat card has a reveal animation with a staggered delay
       for a dynamic entrance effect. */}
        <section className="stats-grid">
          {stats.map((stat, index) => (
            <article key={stat.label} className="stat-card reveal" style={{ animationDelay: `${index * 90}ms` }}>
              <strong>{stat.value}</strong>
              <span>{stat.label}</span>
            </article>
          ))}
        </section>

        {/* About section with a brief introduction and overview of interests and experience.*/}
        <section id="about" className="info-card reveal">
          <SectionTitle eyebrow="About" title="A quick snapshot" />
          <p>
            I enjoy exploring software engineering, product management, and AI/ML. I have built a recipe-finding app
            in Swift, multiple web applications, and several projects that
            helped me grow my fundamentals across different languages and workflows.
          </p>
        </section>
        {/* Education section that highlights the current degree program and expected graduation date.
         It features a timeline item with an icon and uses the SectionTitle component for styling. */}
        <section id="education" className="info-card reveal">
          <SectionTitle eyebrow="Education" title="Florida Atlantic University" />
          <div className="timeline-item">
            <div className="timeline-badge">
              <i className="fa-solid fa-graduation-cap" />
            </div>
            <div>
              <h3>Bachelor of Science in Computer Science</h3>
              <p>Expected December 2026</p>
            </div>
          </div>
        </section>
        {/* Experience section that maps over the experience array to display past roles and responsibilities. Each experience card includes the company, title, 
        date, location, and key bullet points about the work done.  */}
        <section id="experience" className="info-card reveal">
          <SectionTitle eyebrow="Experience" title="Hands-on work" />
          <div className="experience-list">
            {experience.map((job) => (
              <article key={`${job.company}-${job.title}`} className="experience-card">
                <div className="experience-head">
                  <div>
                    <p className="experience-company">{job.company}</p>
                    <h3>{job.title}</h3>
                  </div>
                  <p className="date-location">
                    {job.date} · {job.location}
                  </p>
                </div>
                <ul>
                  {job.bullets.map((bullet) => (
                    <li key={bullet}>{bullet}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </section>
        {/* Skills section that maps over the skills array to display a 
        grid of skill pills. Each pill includes an icon and the skill name, 
        with the icon colored according to the specified color in the data.  */}
        <section id="skills" className="info-card reveal">
          <SectionTitle eyebrow="Skills" title="Tools I use" />
          <div className="skill-grid">
            {skills.map((skill) => (
              <div key={skill.name} className="skill-pill">
                <i className={skill.icon} style={{ color: skill.color }} />
                <span>{skill.name}</span>
              </div>
            ))}
          </div>
        </section>
          {/* Projects section that maps over the projects array to display a grid of
           project cards. Each card includes an icon, title, description, tech stack,
            and links to GitHub or live demos. */}
        <section id="projects" className="info-card reveal">
          <SectionTitle
            eyebrow="Projects"
            title="Selected work"
            description="These are the pieces that best show how I combine engineering, design, and practical problem solving."
          />
          <div className="projects-grid">
            {projects.map((project, index) => (
              <article key={project.title} className="project-card" style={{ animationDelay: `${index * 80}ms` }}>
                <div className="project-icon">
                  <i className={`fas ${project.icon}`} />
                </div>
                <div className="project-info">
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>
                  <p className="tech-stack">{project.stack}</p>
                  <div className="project-links">
                    {project.links.map((link) => (
                      <a key={link.label} href={link.href} target="_blank" rel="noreferrer">
                        {link.label}
                      </a>
                    ))}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>
        {/* Contact CTA section that encourages visitors to get in touch. It includes a heading, 
        a brief message, and a prominent button that opens the user's email client to send an email.*/}
        <section className="contact-cta reveal">
          <h2>Like what you see?</h2>
          <p>I'm always excited to connect with fellow builders, potential mentors, and anyone interested in chatting about software, AI, or product design!</p>
          <a className="button button-primary" href="mailto:ashamarie.parke@gmail.com">
            Get in Touch
          </a>
        </section>
        {/* Footer section with a simple copyright notice. */}
      <section className="footer">
        <p>&copy; {new Date().getFullYear()} Ashamarie Parke. All rights reserved.</p>
      </section>
      </main>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);

