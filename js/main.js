// Dark / Light Mode Toggle
const themeToggle = document.getElementById('theme-toggle');
const rootElement = document.documentElement;
const storedTheme = localStorage.getItem('theme');

if (storedTheme === 'dark') {
  rootElement.classList.add('dark');
  themeToggle.textContent = '☀️';
}

themeToggle.addEventListener('click', () => {
  rootElement.classList.toggle('dark');
  const isDark = rootElement.classList.contains('dark');
  themeToggle.textContent = isDark ? '☀️' : '🌙';
  localStorage.setItem('theme', isDark ? 'dark' : 'light');
});

// Dynamic Year in Footer
const yearSpan = document.getElementById('year');
if (yearSpan) yearSpan.textContent = new Date().getFullYear();

// Projects
const projects = [
  {
    title: 'Tournament Manager App',
    image: 'images/tournament-app.png',
    description: 'Full‑stack web app for organizing tournaments with advanced pairing logic.',
    tech: ['React', 'Node', 'MongoDB'],
    github: 'https://github.com/yourname/tournament-app',
    demo: '#'
  },
  {
    title: 'Card Sorting Robot',
    image: 'images/card-sorter.jpg',
    description: 'Autonomous robot that sorts trading cards using computer vision and robotics.',
    tech: ['C++', 'Arduino', 'OpenCV', 'Python'],
    github: 'https://github.com/yourname/card-sorter',
    demo: '#'
  }
];

const schoolProjects = [
  {
    title: 'Full Stack Development',
    image: 'images/full-stack.png',
    description: 'Used various tools in order to create and manage a web application from front to back.',
    tech: ['AWS', 'Postman', 'MongoDB'],
    github: 'https://github.com/Noah-Raybuck/cs465-fullstack',
    demo: '#'
  },
  {
    title: 'Current and Emerging Trends // Machine Learning',
    image: 'images/Machine-Learning.png',
    description: 'In this project, I programmed an agent to navigate a maze using provided pseudo-code and machine learning tools, reflecting how computer scientists apply technology ethically and creatively to solve real-world problems while ensuring data security and system integrity.',
    tech: ['Jupyter Notebook', 'Python', 'Keras'],
    github: 'https://github.com/Noah-Raybuck/current-emerging-trends',
    demo: '#'
  },
  {
    title: 'Emerging Systems and Architecture',
    image: 'images/ESA.png',
    description: 'In this project, I integrated a thermometer, buttons, and LEDs to create a temperature warning system, demonstrating strengths in LED setup, identifying UART as an area for improvement, and emphasizing the importance of adaptability, clear commenting, and reliable resources like StackOverflow for troubleshooting.',
    tech: ['UART', 'C', 'Microcontrollers'],
    github: 'https://github.com/Noah-Raybuck/Emerging-Systems-and-Architecture',
    demo: '#'
  }


];

// --- Card Factory ---------------------------------------------------
function createProjectCard(project) {
  const card = document.createElement('article');
  card.className = 'project-card';
  card.innerHTML = `
    <img src="${project.image}" alt="Screenshot of ${project.title}" />
    <div class="content">
      <h3>${project.title}</h3>
      <p>${project.description}</p>
      <p><strong>Tech:</strong> ${project.tech.join(', ')}</p>
      <a href="${project.github}" target="_blank" rel="noopener">GitHub</a>
      ${project.demo && project.demo !== '#' ? ` | <a href="${project.demo}" target="_blank" rel="noopener">Live Demo</a>` : ''}
    </div>
  `;
  return card;
}

// --- Render Helpers -------------------------------------------------
function renderProjectGrid(list, containerId) {
  const container = document.getElementById(containerId);
  if (!container) return; // Fail‑soft if the container is missing

  const fragment = document.createDocumentFragment();
  list.forEach(p => fragment.appendChild(createProjectCard(p)));
  container.appendChild(fragment);
}

// --- Bootstrap ------------------------------------------------------
renderProjectGrid(projects, 'projectsGrid');
renderProjectGrid(schoolProjects, 'schoolProjectsGrid');
