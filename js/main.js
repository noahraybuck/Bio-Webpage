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

// Example Projects Array (extend as needed)
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
    tech: ['C++', 'Arduino', 'OpenCV'],
    github: 'https://github.com/yourname/card-sorter',
    demo: '#'
  }
];

const projectsGrid = document.getElementById('projectsGrid');

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
      ${project.demo !== '#' ? ` | <a href="${project.demo}" target="_blank" rel="noopener">Live Demo</a>` : ''}
    </div>
  `;
  return card;
}

projects.forEach(p => projectsGrid.appendChild(createProjectCard(p)));
