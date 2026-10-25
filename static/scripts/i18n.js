/* UI translations and language switching. Project texts live in projects.js. */
'use strict';

const TRANSLATIONS = {
  en: {
    'meta.title': 'Carlos Murillo | Data Engineer & Data Scientist',
    'meta.description': 'Portfolio of Carlos Murillo: data pipelines on AWS and Databricks, machine learning and data visualization projects.',
    'nav.about': 'About',
    'nav.projects': 'Projects',
    'nav.contact': 'Contact',
    'nav.toggle': 'Toggle navigation',
    'lang.switch': 'Cambiar a español',
    'hero.eyebrow': 'Hi, I\'m',
    'hero.role': 'Data Engineer & Data Scientist',
    'hero.lead': 'I design data pipelines on AWS and Databricks, build machine learning models and turn data into dashboards people can use.',
    'hero.cta.projects': 'View projects',
    'about.title': 'About me',
    'about.p1': 'I\'m a data professional with an MSc from Universidad EAFIT. My work covers the whole data lifecycle: ingesting data from APIs and databases, orchestrating serverless and streaming pipelines in the cloud, modeling it in the lakehouse and presenting the results in interactive dashboards.',
    'about.p2': 'On this site I collect projects from my professional and academic work. Most of the code is on GitHub and GitLab.',
    'about.focus.title': 'Focus areas',
    'about.focus.1': 'Data engineering on AWS, Databricks and Snowflake',
    'about.focus.2': 'Infrastructure as code with Terraform',
    'about.focus.3': 'Machine learning and NLP in Python',
    'about.focus.4': 'Dashboards with Plotly Dash and Power BI',
    'projects.title': 'Projects',
    'projects.lead': 'A selection of work across data engineering, data science, visualization and software development.',
    'projects.filter': 'Filter projects by category',
    'filter.all': 'All',
    'cat.data-eng': 'Data Engineering',
    'cat.data-science': 'Data Science',
    'cat.visualization': 'Visualization',
    'cat.programming': 'Programming',
    'link.github': 'View on GitHub',
    'link.gitlab': 'View on GitLab',
    'link.leetcode': 'View profile',
    'link.access': 'Request access',
    'contact.title': 'Let\'s connect',
    'contact.lead': 'Find more of my work or get in touch.',
    'footer.rights': 'Carlos Murillo. Built with Bootstrap.'
  },
  es: {
    'meta.title': 'Carlos Murillo | Ingeniero de Datos y Científico de Datos',
    'meta.description': 'Portafolio de Carlos Murillo: pipelines de datos en AWS y Databricks, proyectos de machine learning y visualización de datos.',
    'nav.about': 'Sobre mí',
    'nav.projects': 'Proyectos',
    'nav.contact': 'Contacto',
    'nav.toggle': 'Mostrar navegación',
    'lang.switch': 'Switch to English',
    'hero.eyebrow': 'Hola, soy',
    'hero.role': 'Ingeniero de Datos y Científico de Datos',
    'hero.lead': 'Diseño pipelines de datos en AWS y Databricks, construyo modelos de machine learning y convierto los datos en tableros que la gente puede usar.',
    'hero.cta.projects': 'Ver proyectos',
    'about.title': 'Sobre mí',
    'about.p1': 'Soy un profesional de datos con maestría de la Universidad EAFIT. Mi trabajo cubre todo el ciclo de vida de los datos: ingesta desde APIs y bases de datos, orquestación de pipelines serverless y de streaming en la nube, modelado en el lakehouse y presentación de resultados en tableros interactivos.',
    'about.p2': 'En este sitio reúno proyectos de mi experiencia profesional y académica. La mayor parte del código está en GitHub y GitLab.',
    'about.focus.title': 'Áreas de enfoque',
    'about.focus.1': 'Ingeniería de datos en AWS, Databricks y Snowflake',
    'about.focus.2': 'Infraestructura como código con Terraform',
    'about.focus.3': 'Machine learning y NLP en Python',
    'about.focus.4': 'Tableros con Plotly Dash y Power BI',
    'projects.title': 'Proyectos',
    'projects.lead': 'Una selección de trabajos en ingeniería de datos, ciencia de datos, visualización y desarrollo de software.',
    'projects.filter': 'Filtrar proyectos por categoría',
    'filter.all': 'Todos',
    'cat.data-eng': 'Ingeniería de Datos',
    'cat.data-science': 'Ciencia de Datos',
    'cat.visualization': 'Visualización',
    'cat.programming': 'Programación',
    'link.github': 'Ver en GitHub',
    'link.gitlab': 'Ver en GitLab',
    'link.leetcode': 'Ver perfil',
    'link.access': 'Solicitar acceso',
    'contact.title': 'Conectemos',
    'contact.lead': 'Conoce más de mi trabajo o ponte en contacto.',
    'footer.rights': 'Carlos Murillo. Hecho con Bootstrap.'
  }
};

const LANG_KEY = 'portfolio-lang';
let currentLang = 'en';
let currentFilter = 'all';

function getInitialLang() {
  try {
    const saved = localStorage.getItem(LANG_KEY);
    if (saved && TRANSLATIONS[saved]) return saved;
  } catch (e) { /* storage unavailable */ }
  const browser = (navigator.language || 'en').toLowerCase();
  return browser.startsWith('es') ? 'es' : 'en';
}

function setLang(lang) {
  const t = TRANSLATIONS[lang];
  currentLang = lang;
  document.documentElement.lang = lang;
  document.title = t['meta.title'];
  document.querySelector('meta[name="description"]').setAttribute('content', t['meta.description']);

  document.querySelectorAll('[data-i18n]').forEach(function (el) {
    el.textContent = t[el.dataset.i18n];
  });
  document.querySelectorAll('[data-i18n-aria]').forEach(function (el) {
    el.setAttribute('aria-label', t[el.dataset.i18nAria]);
  });

  const toggle = document.getElementById('lang-toggle');
  toggle.querySelectorAll('span').forEach(function (span) {
    span.classList.toggle('active', span.dataset.lang === lang);
  });

  renderProjects(lang, currentFilter, t);
  try { localStorage.setItem(LANG_KEY, lang); } catch (e) { /* storage unavailable */ }
}

document.addEventListener('DOMContentLoaded', function () {
  document.getElementById('lang-toggle').addEventListener('click', function () {
    setLang(currentLang === 'en' ? 'es' : 'en');
  });

  document.querySelectorAll('.filter-btn').forEach(function (btn) {
    btn.addEventListener('click', function () {
      currentFilter = btn.dataset.filter;
      document.querySelectorAll('.filter-btn').forEach(function (b) {
        const active = b === btn;
        b.classList.toggle('active', active);
        b.setAttribute('aria-pressed', active);
      });
      renderProjects(currentLang, currentFilter, TRANSLATIONS[currentLang]);
    });
  });

  // Collapse the mobile menu after picking a section.
  document.querySelectorAll('#main-nav .nav-link').forEach(function (link) {
    link.addEventListener('click', function () {
      const menu = document.getElementById('main-nav');
      if (menu.classList.contains('show')) bootstrap.Collapse.getOrCreateInstance(menu).hide();
    });
  });

  const linkedin = document.getElementById('linkedin-link');
  if (LINKEDIN_URL) linkedin.href = LINKEDIN_URL;
  else linkedin.remove();

  document.getElementById('year').textContent = new Date().getFullYear();
  setLang(getInitialLang());
});
