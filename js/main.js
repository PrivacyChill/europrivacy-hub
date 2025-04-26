// Translations
const translations = {
    hero: {
        title: {
            en: "Welcome to EuroPrivacy Hub",
            it: "Benvenuti su EuroPrivacy Hub",
            de: "Willkommen bei EuroPrivacy Hub",
        },
        description: {
            en: "Your trusted source for privacy law and data protection resources",
            it: "La tua fonte affidabile per le leggi sulla privacy e le risorse sulla protezione dei dati",
            de: "Ihre vertrauenswürdige Quelle für Datenschutzrecht und Datenschutzressourcen",
        },
    },
};

// Blog posts
const blogPosts = [
    {
        id: 1,
        title: { en: "Understanding GDPR Basics", it: "Comprendere le basi del GDPR", de: "Grundlagen der DSGVO verstehen" },
        content: { en: "Introduction to European data protection principles...", it: "Introduzione ai principi europei sulla protezione dei dati...", de: "Einführung in die europäischen Datenschutzprinzipien..." },
        tags: ["GDPR", "Data Protection"],
    },
    {
        id: 2,
        title: { en: "Data Subject Rights", it: "Diritti dell'interessato", de: "Rechte der betroffenen Person" },
        content: { en: "Understanding your rights under GDPR...", it: "Comprendere i tuoi diritti ai sensi del GDPR...", de: "Verstehen Sie Ihre Rechte unter der DSGVO..." },
        tags: ["Rights", "GDPR"],
    },
];

// Current language state
let currentLang = 'en';

// Initialize the app
document.addEventListener('DOMContentLoaded', () => {
    setupThemeToggle();
    updateContent();
});

// Setup theme toggle
function setupThemeToggle() {
    const themeToggleButton = createFloatingThemeToggle();
    document.body.appendChild(themeToggleButton); // Append button to the body

    // Get current theme from local storage
    const savedTheme = localStorage.getItem('theme') || 'light';
    setTheme(savedTheme);

    themeToggleButton.addEventListener('click', () => {
        const newTheme = savedTheme === 'dark' ? 'light' : 'dark';
        setTheme(newTheme);
        localStorage.setItem('theme', newTheme);
    });
}

// Set the selected theme function
function setTheme(theme) {
    document.documentElement.setAttribute('data-theme', theme);
}

// Function to create the floating theme toggle button
function createFloatingThemeToggle() {
    const button = document.createElement('button');
    button.innerHTML = '🌙'; // Use an SVG or icon if preferred
    button.classList.add('floating-theme-toggle');
    button.style.position = 'fixed';
    button.style.bottom = '20px';
    button.style.right = '20px';
    button.style.border = 'none';
    button.style.borderRadius = '50%';
    button.style.backgroundColor = '#007bff'; // Customize color
    button.style.color = 'white';
    button.style.padding = '10px';
    button.style.cursor = 'pointer';
    button.style.zIndex = '1000';
    return button;
}
// Setup language selector functionality
function setupLanguageSelector() {
    const langToggle = document.querySelector('.lang-toggle');
    const langOptions = document.querySelectorAll('.lang-option');
    const currentLangText = document.querySelector('.current-lang');

    langToggle.addEventListener('click', (e) => {
        e.stopPropagation();
        langToggle.parentElement.classList.toggle('active');
    });

    document.addEventListener('click', () => {
        langToggle.parentElement.classList.remove('active');
    });

    langOptions.forEach(option => {
        option.addEventListener('click', (e) => {
            e.preventDefault();

            currentLang = option.dataset.lang;
            currentLangText.textContent = option.querySelector('.lang-code').textContent;

            updateContent();
            langToggle.parentElement.classList.remove('active');
        });
    });
}

// Update the content based on the selected language
function updateContent() {
    const mainTitle = document.getElementById('mainTitle');
    const mainDesc = document.getElementById('mainDesc');
    const blogPostsContainer = document.getElementById('blog-posts');

    if (mainTitle && mainDesc) {
        mainTitle.textContent = translations.hero.title[currentLang];
        mainDesc.textContent = translations.hero.description[currentLang];
    }

    if (blogPostsContainer) {
        renderBlogPosts(blogPostsContainer);
    }
}

// Render blog posts
function renderBlogPosts(container) {
    container.innerHTML = blogPosts.map(post => `
        <article class="blog-post">
            <h2>${post.title[currentLang]}</h2>
            <div class="tags">
                ${post.tags.map(tag => `<span class="tag">${tag}</span>`).join('')}
            </div>
            <p>${post.content[currentLang]}</p>
        </article>
    `).join('');
}
