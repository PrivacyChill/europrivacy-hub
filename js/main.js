// Translations

const translations = {

    hero: {

        title: {

            en: "Welcome to EuroPrivacy Hub",

            it: "Benvenuti su EuroPrivacy Hub",

            de: "Willkommen bei EuroPrivacy Hub"

        },

        description: {

            en: "Your trusted source for privacy law and data protection resources",

            it: "La tua fonte affidabile per le leggi sulla privacy e le risorse sulla protezione dei dati",

            de: "Ihre vertrauenswürdige Quelle für Datenschutzrecht und Datenschutzressourcen"

        }

    }

};

const blogPosts = [

    {

        id: 1,

        title: {

            en: "Understanding GDPR Basics",

            it: "Comprendere le basi del GDPR",

            de: "Grundlagen der DSGVO verstehen"

        },

        content: {

            en: "Introduction to European data protection principles...",

            it: "Introduzione ai principi europei sulla protezione dei dati...",

            de: "Einführung in die europäischen Datenschutzprinzipien..."

        },

        tags: ["GDPR", "Data Protection"]

    },

    {

        id: 2,

        title: {

            en: "Data Subject Rights",

            it: "Diritti dell'interessato",

            de: "Rechte der betroffenen Person"

        },

        content: {

            en: "Understanding your rights under GDPR...",

            it: "Comprendere i tuoi diritti ai sensi del GDPR...",

            de: "Verstehen Sie Ihre Rechte unter der DSGVO..."

        },

        tags: ["Rights", "GDPR"]

    }

];

// Current language state

let currentLang = 'en';

document.addEventListener('DOMContentLoaded', () => {

    // Theme Toggle Logic

    const themeToggle = document.getElementById('themeToggle');

    let isDarkTheme = false;

    // Check for saved theme preference

    const savedTheme = localStorage.getItem('theme');

    if (savedTheme) {

        document.documentElement.setAttribute('data-theme', savedTheme);

        isDarkTheme = savedTheme === 'dark';

    }

    themeToggle.addEventListener('click', () => {

        isDarkTheme = !isDarkTheme;

        const theme = isDarkTheme ? 'dark' : 'light';

        document.documentElement.setAttribute('data-theme', theme);

        localStorage.setItem('theme', theme);

    });

    // Language Selector Logic

    const langSelector = document.querySelector('.language-selector');

    const langToggle = document.querySelector('.lang-toggle');

    const langOptions = document.querySelectorAll('.lang-option');

    const currentLangText = document.querySelector('.current-lang');

    // Toggle dropdown

    langToggle.addEventListener('click', (e) => {

        e.stopPropagation();

        langSelector.classList.toggle('active');

    });

    // Close dropdown when clicking outside

    document.addEventListener('click', () => {

        langSelector.classList.remove('active');

    });

    // Language selection

    langOptions.forEach(option => {

        option.addEventListener('click', (e) => {

            e.preventDefault();

            const lang = option.dataset.lang;

            const langCode = option.querySelector('.lang-code').textContent;
            
            // Update active state

            langOptions.forEach(opt => opt.classList.remove('active'));

            option.classList.add('active');
            
            // Update current language display

            currentLangText.textContent = langCode;
            
            // Update language and content

            currentLang = lang;

            updateContent();
            
            // Close dropdown

            langSelector.classList.remove('active');

        });

    });

    // Update content based on selected language

    function updateContent() {

        const mainTitle = document.getElementById('mainTitle');

        const mainDesc = document.getElementById('mainDesc');

        const blogPostsContainer = document.getElementById('blog-posts');

        // Update hero section

        if (mainTitle && mainDesc) {

            mainTitle.textContent = translations.hero.title[currentLang];

            mainDesc.textContent = translations.hero.description[currentLang];

        }

        // Update blog posts

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

    // Initial render

    updateContent();

});