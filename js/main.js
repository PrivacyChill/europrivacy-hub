// Translations
const translations = {
    hero: {
        title: {
            en: "Your Guide to European Data Protection Law.",
            it: "La Tua Guida al Diritto Europeo sulla Protezione dei Dati.",
            de: "Ihr Leitfaden zum europäischen Datenschutzrecht.",
        },
        ctaBlog: {
            en: "Explore Latest Insights",
            it: "Esplora gli Ultimi Approfondimenti",
            de: "Neueste Einblicke entdecken",
        },
        ctaResources: {
            en: "Discover Privacy Resources",
            it: "Scopri le Risorse sulla Privacy",
            de: "Datenschutzressourcen entdecken",
        }
    },
    whatWeOffer: {
        headline: {
            en: "Your Privacy Journey, Curated.",
            it: "Il Tuo Percorso sulla Privacy, Curato.",
            de: "Ihre Datenschutzreise, Kuratiert.",
        },
        intro: {
            en: "Navigating European data protection can be complex. We've distilled years of insights and practical findings into a central hub, offering you everything we've personally found helpful on this path.",
            it: "Navigare la protezione dei dati in Europa può essere complesso. Abbiamo distillato anni di approfondimenti e scoperte pratiche in un hub centrale, offrendoti tutto ciò che abbiamo trovato personalmente utile in questo percorso.",
            de: "Die Navigation im europäischen Datenschutz kann komplex sein. Wir haben jahrelange Erkenntnisse und praktische Ergebnisse in einem zentralen Hub zusammengefasst und bieten Ihnen alles, was wir persönlich auf diesem Weg als hilfreich empfunden haben."
        },
        expertGuidance: {
            title: {en: "Expert Guidance", it: "Guida Esperta", de: "Expertenberatung"},
            description: {en: "Clear, accessible explanations of complex GDPR articles and EU privacy regulations.", it: "Spiegazioni chiare e accessibili di complessi articoli GDPR e regolamenti sulla privacy dell'UE.", de: "Klare, zugängliche Erklärungen komplexer DSGVO-Artikel und EU-Datenschutzvorschriften."}
        },
        practicalTools: {
            title: {en: "Practical Tools", it: "Strumenti Pratici", de: "Praktische Tools"},
            description: {en: "Downloadable templates, checklists, and guides to streamline your compliance efforts.", it: "Modelli, checklist e guide scaricabili per semplificare i tuoi sforzi di conformità.", de: "Herunterladbare Vorlagen, Checklisten und Leitfäden zur Rationalisierung Ihrer Compliance-Bemühungen."}
        },
        timelyUpdates: {
            title: {en: "Timely Updates", it: "Aggiornamenti Tempestivi", de: "Rechtzeitige Updates"},
            description: {en: "Stay informed with analysis of legal developments and landmark rulings.", it: "Rimani informato con l'analisi degli sviluppi legali e delle sentenze di riferimento.", de: "Bleiben Sie mit Analysen von Rechtsentwicklungen und wegweisenden Urteilen auf dem Laufenden."}
        },
        ctaAbout: {
            en: "Learn More About Our Mission",
            it: "Scopri di Più sulla Nostra Missione",
            de: "Erfahren Sie mehr über unsere Mission"
        }
    },
    newsletter: {
        headline: {en: "Stay Informed, Effortlessly.", it: "Resta Informato, Senza Sforzo.", de: "Bleiben Sie mühelos informiert."},
        description: {en: "Receive a single weekly email with our latest insights, essential resources, and critical privacy news. Your email is for our newsletter only – no spam, ever.", it: "Ricevi una singola email settimanale con i nostri ultimi approfondimenti, risorse essenziali e notizie cruciali sulla privacy. La tua email è solo per la nostra newsletter – mai spam.", de: "Erhalten Sie eine einzige wöchentliche E-Mail mit unseren neuesten Erkenntnissen, wichtigen Ressourcen und kritischen Datenschutz-Nachrichten. Ihre E-Mail ist nur für unseren Newsletter – niemals Spam."}
    },
    footer: {
        privacyPolicy: {en: "Privacy Policy", it: "Informativa sulla Privacy", de: "Datenschutzerklärung"},
        termsOfService: {en: "Terms of Service", it: "Termini di Servizio", de: "Nutzungsbedingungen"},
        cookiePolicy: {en: "Cookie Policy", it: "Politica sui Cookie", de: "Cookie-Richtlinie"},
        contactEmail: "contact@europrivacyhub.com"
    },
    blogPage: {
        title: {
            en: "Privacy Blog",
            it: "Blog sulla Privacy",
            de: "Datenschutz-Blog",
        },
        description: {
            en: "Latest insights, news, and analysis on data protection",
            it: "Approfondimenti, notizie e analisi sulla protezione dei dati",
            de: "Neueste Einblicke, Nachrichten und Analysen zum Datenschutz",
        }
    },
    resourcesPage: {
        title: {
            en: "Privacy Resources",
            it: "Risorse sulla Privacy",
            de: "Datenschutz-Ressourcen",
        },
        description: {
            en: "Tools, templates, and guides to help you navigate European privacy laws",
            it: "Strumenti, modelli e guide per aiutarti a navigare nelle leggi europee sulla privacy",
            de: "Tools, Vorlagen und Leitfäden zur Navigation durch europäische Datenschutzgesetze",
        },
        recommendedSectionTitle: {en: "Our Privacy Toolkit & Curated Content", it: "Il Nostro Toolkit Privacy e Contenuti Curati", de: "Unser Datenschutz-Toolkit & Kuratierte Inhalte"}
    },
    postPage: { // New translations for post.html
        backToBlog: {en: "Back to Blog List", it: "Torna all'Elenco del Blog", de: "Zurück zur Blogliste"},
        notFound: {
            title: {en: "Post Not Found", it: "Articolo Non Trovato", de: "Beitrag nicht gefunden"},
            message: {en: "The blog post you are looking for does not exist.", it: "L'articolo del blog che cerchi non esiste.", de: "Der gesuchte Blogbeitrag existiert nicht."}
        }
    }
};

// --- Resources data (still in main.js, as requested) ---
const resourcesData = [
    {
        id: "gdpr-checklist",
        iconSvg: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><rect width="18" height="14" x="3" y="7" rx="2"></rect><path d="M12 7V3c0-1.1-.9-2-2-2H4c-1.1 0-2 .9-2 2v18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V9c0-1.1-.9-2-2-2h-8zM8 5h4m-4 4h8m-8 4h8"></path></svg>`,
        title: {
            en: "GDPR Compliance Checklist",
            it: "Checklist di Conformità GDPR",
            de: "DSGVO-Konformitäts-Checkliste"
        },
        description: {
            en: "A comprehensive checklist to help your organization assess and ensure compliance with the General Data Protection Regulation.",
            it: "Una checklist completa per aiutare la tua organizzazione a valutare e garantire la conformità al Regolamento Generale sulla Protezione dei Dati.",
            de: "Eine umfassende Checkliste, um Ihrer Organisation bei der Bewertung und Sicherstellung der Einhaltung der Datenschutz-Grundverordnung zu helfen."
        },
        format: "PDF",
        updated: "March 2025",
        downloadLink: "#" // Replace with actual download link
    },
    {
        id: "privacy-policy-template",
        iconSvg: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-file-text"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="16" y1="13" x2="8" y2="13"></line><line x1="16" y1="17" x2="8" y2="17"></line><polyline points="10 9 9 9 8 9"></polyline></svg>`,
        title: {
            en: "Privacy Policy Template",
            it: "Modello di Informativa sulla Privacy",
            de: "Datenschutzerklärung-Vorlage"
        },
        description: {
            en: "A customizable template to help you create a clear and compliant privacy policy for your website or application.",
            it: "Un modello personalizzabile per aiutarti a creare un'informativa sulla privacy chiara e conforme per il tuo sito web o applicazione.",
            de: "Eine anpassbare Vorlage, die Ihnen hilft, eine klare und konforme Datenschutzerklärung für Ihre Website oder Anwendung zu erstellen."
        },
        format: "DOCX",
        updated: "February 2025",
        downloadLink: "#" // Replace with actual download link
    },
    {
        id: "international-data-transfer-guide",
        iconSvg: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-book-open"><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path></svg>`,
        title: {
            en: "International Data Transfer Guide",
            it: "Guida ai Trasferimenti Internazionali di Dati",
            de: "Leitfaden für internationale Datenübermittlungen"
        },
        description: {
            en: "Comprehensive guide to navigating international data transfers under European privacy law, including SCCs and TFRs.",
            it: "Guida completa per navigare i trasferimenti internazionali di dati secondo la legge europea sulla privacy, inclusi SCC e TFR.",
            de: "Umfassender Leitfaden zum Umgang mit internationalen Datenübermittlungen gemäß europäischem Datenschutzrecht, einschließlich SCCs und TFRs."
        },
        format: "PDF",
        updated: "April 2025",
        downloadLink: "#" // Replace with actual download link
    }
    // Add more resources here following the same structure
];

// --- Recommended Items (Tools, Creators, Content) data ---
const recommendedItems = [
    {
        id: "recommended-vpn",
        type: {en: "VPN Service", it: "Servizio VPN", de: "VPN-Dienst"},
        title: {en: "Recommended VPN for Privacy", it: "VPN Consigliata per la Privacy", de: "Empfohlener VPN-Dienst für Datenschutz"},
        description: {
            en: "Enhance your online privacy and security with a reliable VPN service.",
            it: "Migliora la tua privacy e sicurezza online con un servizio VPN affidabile.",
            de: "Verbessern Sie Ihre Online-Privatsphäre und -Sicherheit mit einem zuverlässigen VPN-Dienst."
        },
        link: "#", // Replace with actual VPN affiliate link
        note: {en: "Affiliate link: Get a special discount!", it: "Link affiliato: Ottieni uno sconto speciale!", de: "Affiliate-Link: Erhalten Sie einen Sonderrabatt!"}
    },
    {
        id: "privacy-youtube-channel",
        type: {en: "YouTube Channel", it: "Canale YouTube", de: "YouTube-Kanal"},
        title: {en: "Top Privacy Creator Channel", it: "Canale YouTube di un Creatore di Privacy Top", de: "Top Datenschutz-Creator-Kanal"},
        description: {
            en: "Explore engaging videos and deep dives into privacy topics from a leading creator.",
            it: "Esplora video coinvolgenti e approfondimenti su argomenti di privacy da un creatore di spicco.",
            de: "Entdecken Sie fesselnde Videos und tiefgehende Einblicke in Datenschutzthemen von einem führenden Creator."
        },
        link: "#", // Replace with actual YouTube channel link
        note: {en: "External content", it: "Contenuto esterno", de: "Externer Inhalt"}
    },
    {
        id: "privacy-software-discount",
        type: {en: "Privacy Software", it: "Software per la Privacy", de: "Datenschutzsoftware"},
        title: {en: "Essential Privacy Software", it: "Software Essenziale per la Privacy", de: "Essenzielle Datenschutzsoftware"},
        description: {
            en: "Discover a powerful tool to manage your digital footprint and protect your data.",
            it: "Scopri uno strumento potente per gestire la tua impronta digitale e proteggere i tuoi dati.",
            de: "Entdecken Sie ein leistungsstarkes Tool zur Verwaltung Ihres digitalen Fußabdrucks und zum Schutz Ihrer Daten."
        },
        link: "#", // Replace with actual software link
        note: {en: "Future discount code available!", it: "Futuro codice sconto disponibile!", de: "Zukünftiger Rabattcode verfügbar!"}
    }
    // Add more recommended items here
];


// Current language state (default to English)
let currentLang = 'en';

// Helper to map language codes to display names
const langDisplayNames = {
    'en': 'EN',
    'it': 'IT',
    'de': 'DE'
};

// For CTA carousel
let currentCtaIndex = 0;
const ctaMessages = [
    { textKey: 'ctaBlog', link: 'blog.html' },
    { textKey: 'ctaResources', link: 'resources.html' }
];

// Stores the fetched blog index (list of posts with excerpts)
let blogIndex = [];

// Initialize the app when the DOM is fully loaded
document.addEventListener('DOMContentLoaded', async () => {
    // Determine current page to run specific rendering functions
    const currentPage = window.location.pathname.split('/').pop();

    setupThemeToggle(); // Setup theme toggle and initial theme
    setupLanguageSelector(); // Setup language selector

    // Fetch blog index first as it's needed by multiple pages
    try {
        const response = await fetch('content/blog/blog-index.json');
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        blogIndex = await response.json();
    } catch (error) {
        console.error("Could not fetch blog index:", error);
        // Fallback or display error message on the site
        blogIndex = []; // Ensure it's an empty array if fetch fails
    }


    if (currentPage === 'post.html') {
        renderIndividualBlogPost(); // Render only the specific blog post
    } else {
        // These run on all pages *except* post.html
        updateContent(); // Update general page content (hero, page headers, etc.)
        if (currentPage === 'index.html') {
            renderBlogPreviews(); // Renders previews for index.html
            renderResourcePreviews(); // Renders resource previews for index.html
            startCtaCarousel(); // Start CTA carousel only on index.html
        } else if (currentPage === 'blog.html') {
            renderFullBlogListing(); // Renders full blog list for blog.html
        } else if (currentPage === 'resources.html') {
            renderFullResourceListing(); // Renders full resource list for resources.html
            renderRecommendedItems(); // Renders recommended items for resources.html
        }
    }
});

// Function to set the theme (light/dark)
function setTheme(theme) {
    document.body.classList.toggle('dark-mode', theme === 'dark');
    localStorage.setItem('theme', theme);
}

// Function to setup the theme toggle button
function setupThemeToggle() {
    const themeToggleButton = document.querySelector('.theme-toggle-button');
    if (!themeToggleButton) {
        console.warn("Theme toggle button not found. Please ensure a button with class 'theme-toggle-button' exists in your header.");
        return;
    }

    const initialTheme = localStorage.getItem('theme');
    if (initialTheme) {
        setTheme(initialTheme);
    } else {
        setTheme('light'); // Default to light
    }

    themeToggleButton.addEventListener('click', () => {
        const currentThemeIsDark = document.body.classList.contains('dark-mode');
        const newTheme = currentThemeIsDark ? 'light' : 'dark';
        setTheme(newTheme);
    });
}

// Setup language selector functionality
function setupLanguageSelector() {
    const langToggle = document.querySelector('.language-selector .lang-toggle');
    const dropdownContent = document.querySelector('.language-selector .dropdown-content');
    const currentLangTextSpan = document.querySelector('.language-selector .current-lang-text');

    if (!langToggle || !dropdownContent || !currentLangTextSpan) {
        console.warn("Language selector elements not found. Ensure .lang-toggle, .dropdown-content, and .current-lang-text exist.");
        return;
    }

    currentLang = localStorage.getItem('language') || 'en';
    currentLangTextSpan.textContent = langDisplayNames[currentLang].toUpperCase();

    langToggle.addEventListener('click', (event) => {
        event.stopPropagation();
        const isOpen = langToggle.parentElement.classList.toggle('open');
        langToggle.setAttribute('aria-expanded', isOpen);
    });

    dropdownContent.querySelectorAll('a').forEach(option => {
        option.addEventListener('click', (event) => {
            event.preventDefault();

            currentLang = option.dataset.lang;
            currentLangTextSpan.textContent = langDisplayNames[currentLang].toUpperCase();
            localStorage.setItem('language', currentLang);

            // Re-render content based on the current page
            const currentPage = window.location.pathname.split('/').pop();
            if (currentPage === 'post.html') {
                renderIndividualBlogPost(); // For the post page
            } else {
                updateContent(); // For other pages
            }
            
            langToggle.parentElement.classList.remove('open');
            langToggle.setAttribute('aria-expanded', 'false');
        });
    });

    document.addEventListener('click', (event) => {
        if (!langToggle.parentElement.contains(event.target)) {
            langToggle.parentElement.classList.remove('open');
            langToggle.setAttribute('aria-expanded', 'false');
        }
    });
}


// Update content for main pages (index, blog list, resources list)
function updateContent() {
    // Update Hero Section (index.html)
    const heroTitle = document.querySelector('.hero h1');
    if (heroTitle && translations.hero.title[currentLang]) {
        heroTitle.textContent = translations.hero.title[currentLang];
    }
    // Hero CTA carousel text is updated by updateCtaCarousel function


    // Update "What We Offer" Section (index.html)
    const whatWeOfferSection = document.querySelector('.what-we-offer');
    if (whatWeOfferSection) {
        const whatWeOfferHeadline = whatWeOfferSection.querySelector('h2');
        const whatWeOfferIntro = whatWeOfferSection.querySelector('.intro-text');
        const offeringItems = whatWeOfferSection.querySelectorAll('.offering-item');
        const ctaAboutBtn = whatWeOfferSection.querySelector('.btn');

        if (whatWeOfferHeadline) whatWeOfferHeadline.textContent = translations.whatWeOffer.headline[currentLang];
        if (whatWeOfferIntro) whatWeOfferIntro.textContent = translations.whatWeOffer.intro[currentLang];

        if (offeringItems.length >= 3) {
            offeringItems[0].querySelector('h3').textContent = translations.whatWeOffer.expertGuidance.title[currentLang];
            offeringItems[0].querySelector('p').textContent = translations.whatWeOffer.expertGuidance.description[currentLang];
            
            offeringItems[1].querySelector('h3').textContent = translations.whatWeOffer.practicalTools.title[currentLang];
            offeringItems[1].querySelector('p').textContent = translations.whatWeOffer.practicalTools.description[currentLang];
            
            offeringItems[2].querySelector('h3').textContent = translations.whatWeOffer.timelyUpdates.title[currentLang];
            offeringItems[2].querySelector('p').textContent = translations.whatWeOffer.timelyUpdates.description[currentLang];
        }
        if (ctaAboutBtn) ctaAboutBtn.textContent = translations.whatWeOffer.ctaAbout[currentLang];
    }


    // Update Newsletter Section (index.html, resources.html)
    const newsletterSection = document.querySelector('.newsletter-section');
    if (newsletterSection) {
        const newsletterHeadline = newsletterSection.querySelector('h2');
        const newsletterDescription = newsletterSection.querySelector('p');
        if (newsletterHeadline) newsletterHeadline.textContent = translations.newsletter.headline[currentLang];
        if (newsletterDescription) newsletterDescription.textContent = translations.newsletter.description[currentLang];
    }


    // Update Page Headers (blog.html, resources.html, about.html)
    const pageHeader = document.querySelector('.page-header');
    if (pageHeader) {
        const pageHeaderTitle = pageHeader.querySelector('h1');
        const pageHeaderDesc = pageHeader.querySelector('p');
        const currentPageTitle = document.title; // Get title from HTML

        // Check if the current page title contains specific keywords to determine which header translations to use
        if (currentPageTitle.includes("Blog") && translations.blogPage.title[currentLang]) {
            if (pageHeaderTitle) pageHeaderTitle.textContent = translations.blogPage.title[currentLang];
            if (pageHeaderDesc) pageHeaderDesc.textContent = translations.blogPage.description[currentLang];
        } else if (currentPageTitle.includes("Resources") && translations.resourcesPage.title[currentLang]) {
            if (pageHeaderTitle) pageHeaderTitle.textContent = translations.resourcesPage.title[currentLang];
            if (pageHeaderDesc) pageHeaderDesc.textContent = translations.resourcesPage.description[currentLang];

            // Update Recommended Tools Section on Resources page
            const recommendedToolsHeadline = document.querySelector('.recommended-tools h2');
            if (recommendedToolsHeadline) {
                recommendedToolsHeadline.textContent = translations.resourcesPage.recommendedSectionTitle[currentLang];
            }
        }
    }

    // Update Footer Links (These elements are on all HTML pages)
    const privacyPolicyLink = document.getElementById('privacy-policy-link');
    const termsOfServiceLink = document.getElementById('terms-of-service-link');
    const cookiePolicyLink = document.getElementById('cookie-policy-link');

    if (privacyPolicyLink) privacyPolicyLink.textContent = translations.footer.privacyPolicy[currentLang];
    if (termsOfServiceLink) termsOfServiceLink.textContent = translations.footer.termsOfService[currentLang];
    if (cookiePolicyLink) cookiePolicyLink.textContent = translations.footer.cookiePolicy[currentLang];
    
    const contactEmailLink = document.getElementById('footer-contact-email');
    if (contactEmailLink) {
        contactEmailLink.textContent = translations.footer.contactEmail;
        contactEmailLink.href = `mailto:${translations.footer.contactEmail}`;
    }

    // Update the displayed current language text in the header
    const currentLangTextSpan = document.querySelector('.language-selector .current-lang-text');
    if (currentLangTextSpan) {
        currentLangTextSpan.textContent = langDisplayNames[currentLang].toUpperCase();
    }
}

// Hero CTA Carousel Logic
function updateCtaCarousel() {
    const ctaCarousel = document.querySelector('.hero-cta-carousel');
    if (!ctaCarousel) return;

    // Clear existing slides to avoid duplicates during language switch
    ctaCarousel.innerHTML = '';

    const currentCta = ctaMessages[currentCtaIndex];
    const newSlide = document.createElement('a');
    newSlide.href = currentCta.link;
    newSlide.classList.add('btn', 'hero-cta-slide');
    newSlide.textContent = translations.hero[currentCta.textKey][currentLang];
    
    ctaCarousel.appendChild(newSlide);

    // Trigger reflow to ensure transition works for the new slide
    newSlide.offsetWidth; // Force reflow
    newSlide.classList.add('active');
}

let ctaInterval; // Declare interval variable to clear it
function startCtaCarousel() {
    // Clear any existing interval to prevent multiple carousels running
    if (ctaInterval) {
        clearInterval(ctaInterval);
    }

    updateCtaCarousel(); // Display initial CTA

    ctaInterval = setInterval(() => {
        const activeSlide = document.querySelector('.hero-cta-carousel .hero-cta-slide.active');
        if (activeSlide) {
            activeSlide.classList.remove('active');
            // Adding a class for exit transition if needed, then remove
            activeSlide.addEventListener('transitionend', function handler() {
                activeSlide.removeEventListener('transitionend', handler);
                activeSlide.remove();
            }, { once: true });
        }

        currentCtaIndex = (currentCtaIndex + 1) % ctaMessages.length;
        updateCtaCarousel();

    }, 5000); // Change CTA every 5 seconds
}


// Function to render blog post previews on index.html
function renderBlogPreviews() {
    const blogPreviewGrid = document.querySelector('.blog-articles-grid');
    if (!blogPreviewGrid) return;

    blogPreviewGrid.innerHTML = ''; // Clear existing content

    // Use blogIndex (fetched from JSON) for previews
    blogIndex.slice(0, 2).forEach(post => { // Display first 2 posts for preview
        const articleHtml = `
            <div class="blog-card">
                <img src="${post.imageUrl}" alt="${post.imageAlt[currentLang]}">
                <div class="card-content">
                    <h3>${post.title[currentLang]}</h3>
                    <p>${post.excerpt[currentLang]}</p>
                    <a href="post.html?id=${post.id}" class="read-more">Read More</a>
                </div>
            </div>
        `;
        blogPreviewGrid.insertAdjacentHTML('beforeend', articleHtml);
    });
}

// Function to render full blog listing on blog.html
function renderFullBlogListing() {
    const blogMainContent = document.querySelector('.blog-main');
    if (!blogMainContent) return;

    let blogPostsContainer = blogMainContent.querySelector('.blog-posts-container');
    if (!blogPostsContainer) {
        blogPostsContainer = document.createElement('div');
        blogPostsContainer.classList.add('blog-posts-container');
        const pagination = blogMainContent.querySelector('.pagination');
        if (pagination) {
            blogMainContent.insertBefore(blogPostsContainer, pagination);
        } else {
            blogMainContent.appendChild(blogPostsContainer);
        }
    }
    blogPostsContainer.innerHTML = ''; // Clear container for full posts

    // Use blogIndex for full listing previews
    blogIndex.forEach(post => {
        const fullPostHtml = `
            <article class="blog-post" id="${post.id}">
                <h2>${post.title[currentLang]}</h2>
                <div class="post-meta">
                    <span class="post-date">${post.date}</span>
                    <span class="post-author">By ${post.author}</span>
                    <div class="tags">
                        ${post.tags.map(tag => `<span class="tag">${tag}</span>`).join('')}
                    </div>
                </div>
                <img src="${post.imageUrl}" alt="${post.imageAlt[currentLang]}" class="post-image">
                <div class="post-excerpt">
                    ${post.excerpt[currentLang]}
                </div>
                <a href="post.html?id=${post.id}" class="read-more">Read Full Post</a>
            </article>
        `;
        blogPostsContainer.insertAdjacentHTML('beforeend', fullPostHtml);
    });
}

// Function to render an individual blog post on post.html
async function renderIndividualBlogPost() {
    const postContentArea = document.getElementById('post-content-area');
    if (!postContentArea) return;

    // Reset language for post.html page header for consistency
    const pageHeaderTitle = document.querySelector('.page-header h1');
    const pageHeaderDesc = document.querySelector('.page-header p');
    if (pageHeaderTitle) pageHeaderTitle.textContent = "Blog Post"; // Default title for post page
    if (pageHeaderDesc) pageHeaderDesc.textContent = "Detailed article on data protection"; // Default description

    // Update footer links specific to post.html (these are static elements in HTML, so update their text)
    const privacyPolicyLink = document.getElementById('privacy-policy-link');
    const termsOfServiceLink = document.getElementById('terms-of-service-link');
    const cookiePolicyLink = document.getElementById('cookie-policy-link');

    if (privacyPolicyLink) privacyPolicyLink.textContent = translations.footer.privacyPolicy[currentLang];
    if (termsOfServiceLink) termsOfServiceLink.textContent = translations.footer.termsOfService[currentLang];
    if (cookiePolicyLink) cookiePolicyLink.textContent = translations.footer.cookiePolicy[currentLang];
    
    const contactEmailLink = document.getElementById('footer-contact-email');
    if (contactEmailLink) {
        contactEmailLink.textContent = translations.footer.contactEmail;
        contactEmailLink.href = `mailto:${translations.footer.contactEmail}`;
    }


    const urlParams = new URLSearchParams(window.location.search);
    const postId = urlParams.get('id');

    if (!postId) {
        postContentArea.innerHTML = `
            <div class="not-found-message" style="text-align: center; padding: 4rem 0;">
                <h1>${translations.postPage.notFound.title[currentLang]}</h1>
                <p>${translations.postPage.notFound.message[currentLang]}</p>
                <a href="blog.html" class="btn">${translations.postPage.backToBlog[currentLang]}</a>
            </div>
        `;
        document.title = `EuroPrivacy Hub - ${translations.postPage.notFound.title[currentLang]}`;
        return;
    }

    try {
        // Fetch the individual blog post JSON file
        const response = await fetch(`content/blog/${postId}.json`);
        if (!response.ok) {
            if (response.status === 404) {
                // Post not found
                postContentArea.innerHTML = `
                    <div class="not-found-message" style="text-align: center; padding: 4rem 0;">
                        <h1>${translations.postPage.notFound.title[currentLang]}</h1>
                        <p>${translations.postPage.notFound.message[currentLang]}</p>
                        <a href="blog.html" class="btn">${translations.postPage.backToBlog[currentLang]}</a>
                    </div>
                `;
                document.title = `EuroPrivacy Hub - ${translations.postPage.notFound.title[currentLang]}`;
                return;
            }
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const post = await response.json();

        // Update page title based on the fetched post
        document.title = `EuroPrivacy Hub - ${post.title[currentLang]}`;

        postContentArea.innerHTML = `
            <article class="full-blog-post">
                <h1>${post.title[currentLang]}</h1>
                <div class="post-meta">
                    <span class="post-date">${post.date}</span>
                    <span class="post-author">By ${post.author}</span>
                    <div class="tags">
                        ${post.tags.map(tag => `<span class="tag">${tag}</span>`).join('')}
                    </div>
                </div>
                <img src="${post.imageUrl}" alt="${post.imageAlt[currentLang]}" class="post-image">
                <div class="post-content">
                    ${post.content[currentLang]}
                </div>
                <div style="margin-top: 2rem;">
                    <a href="blog.html" class="btn">${translations.postPage.backToBlog[currentLang]}</a>
                </div>
            </article>
        `;
    } catch (error) {
        console.error("Error fetching individual blog post:", error);
        postContentArea.innerHTML = `
            <div class="not-found-message" style="text-align: center; padding: 4rem 0;">
                <h1>${translations.postPage.notFound.title[currentLang]}</h1>
                <p>${translations.postPage.notFound.message[currentLang]}</p>
                <a href="blog.html" class="btn">${translations.postPage.backToBlog[currentLang]}</a>
            </div>
        `;
        document.title = `EuroPrivacy Hub - ${translations.postPage.notFound.title[currentLang]}`;
    }
}


// Function to render resource previews on index.html
function renderResourcePreviews() {
    const resourcesPreviewGrid = document.querySelector('.resources-grid');
    if (!resourcesPreviewGrid) return;

    resourcesPreviewGrid.innerHTML = ''; // Clear existing content

    resourcesData.slice(0, 3).forEach(resource => { // Display first 3 resources for preview
        const cardHtml = `
            <div class="resource-card">
                <h3>${resource.title[currentLang]}</h3>
                <p>${resource.description[currentLang]}</p>
                <a href="${resource.downloadLink}" class="btn">${currentLang === 'en' ? 'Download' : (currentLang === 'it' ? 'Scarica' : 'Herunterladen')} ${resource.format}</a>
            </div>
        `;
        resourcesPreviewGrid.insertAdjacentHTML('beforeend', cardHtml);
    });
}

// Function to render full resource listing on resources.html
function renderFullResourceListing() {
    const resourcesListing = document.querySelector('.resources-listing');
    if (!resourcesListing) return;

    resourcesListing.innerHTML = ''; // Clear existing content

    resourcesData.forEach(resource => {
        const itemHtml = `
            <div class="resource-item">
                <div class="resource-icon">
                    ${resource.iconSvg}
                </div>
                <div class="resource-content">
                    <h3>${resource.title[currentLang]}</h3>
                    <p>${resource.description[currentLang]}</p>
                    <div class="resource-meta">
                        <span class="format">Format: ${resource.format}</span>
                        <span class="updated">Updated: ${resource.updated}</span>
                    </div>
                    <a href="${resource.downloadLink}" class="btn">${currentLang === 'en' ? 'Download' : (currentLang === 'it' ? 'Scarica' : 'Herunterladen')}</a>
                </div>
            </div>
        `;
        resourcesListing.insertAdjacentHTML('beforeend', itemHtml);
    });
}


// Function to render recommended items dynamically (for resources.html)
function renderRecommendedItems() {
    const recommendedItemsGrid = document.querySelector('.recommended-items-grid');

    if (!recommendedItemsGrid) return;

    recommendedItemsGrid.innerHTML = ''; // Clear existing content

    recommendedItems.forEach(item => {
        const itemHtml = `
            <div class="recommended-item">
                <h3><a href="${item.link}" target="_blank" rel="noopener noreferrer">${item.title[currentLang]}</a></h3>
                <span class="item-type">${item.type[currentLang]}</span>
                <p>${item.description[currentLang]}</p>
                ${item.note ? `<span class="item-note">${item.note[currentLang]}</span>` : ''}
            </div>
        `;
        recommendedItemsGrid.insertAdjacentHTML('beforeend', itemHtml);
    });
}
