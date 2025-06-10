// Translations (keep this for multi-language support)
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
    // Add other page-specific translations here if needed, e.g., for blog/resource headings
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
        }
    }
};

// --- Blog posts data ---
const blogPosts = [
    {
        id: "gdpr-article-17-erasure",
        title: {
            en: "Understanding GDPR Article 17: The Right to Erasure",
            it: "Comprendere l'articolo 17 del GDPR: Il Diritto alla Cancellazione",
            de: "DSGVO Artikel 17 verstehen: Das Recht auf Löschung"
        },
        excerpt: {
            en: "Explore the nuances of the 'right to be forgotten' and its implications for data controllers.",
            it: "Esplora le sfumature del 'diritto all'oblio' e le sue implicazioni per i titolari del trattamento dei dati.",
            de: "Entdecken Sie die Nuancen des 'Rechts auf Vergessenwerden' und seine Auswirkungen auf Datenverantwortliche."
        },
        content: {
            en: `
                <p>GDPR's Article 17 grants individuals the 'right to erasure', often known as the 'right to be forgotten'. This means individuals have the right to request the deletion or removal of personal data where there is no compelling reason for its continued processing. Understanding this right is crucial for organizations handling personal data.</p>
                <p>This right is not absolute and only applies in certain circumstances. For example, it does not apply if the processing is necessary for compliance with a legal obligation or for the establishment, exercise, or defense of legal claims.</p>
                <p>For businesses, implementing this right effectively requires robust data mapping and clear procedures for handling deletion requests. It's not just about deleting data from one system, but ensuring its removal across all connected databases and backups, within a reasonable timeframe.</p>
            `,
            it: `
                <p>L'articolo 17 del GDPR riconosce agli individui il 'diritto alla cancellazione', spesso conosciuto come 'diritto all'oblio'. Ciò significa che gli individui hanno il diritto di richiedere la cancellazione o la rimozione dei dati personali quando non esiste un motivo legittimo per la loro conservazione. Comprendere questo diritto è fondamentale per le organizzazioni che trattano dati personali.</p>
                <p>Questo diritto non è assoluto e si applica solo in determinate circostanze. Ad esempio, non si applica se il trattamento è necessario per l'adempimento di un obbligo legale o per l'accertamento, l'esercizio o la difesa di un diritto in sede giudiziaria.</p>
                <p>Per le aziende, implementare efficacemente questo diritto richiede una mappatura dei dati robusta e procedure chiare per la gestione delle richieste di cancellazione. Non si tratta solo di eliminare i dati da un sistema, ma di garantirne la rimozione da tutti i database e backup collegati, entro un termine ragionevole.</p>
            `,
            de: `
                <p>Artikel 17 der DSGVO gewährt Einzelpersonen das „Recht auf Löschung“, oft als „Recht auf Vergessenwerden“ bekannt. Dies bedeutet, dass Einzelpersonen das Recht haben, die Löschung oder Entfernung personenbezogener Daten zu verlangen, wenn kein zwingender Grund für deren weitere Verarbeitung vorliegt. Das Verständnis dieses Rechts ist für Organisationen, die personenbezogene Daten verarbeiten, von entscheidender Bedeutung.</p>
                <p>Dieses Recht ist nicht absolut und gilt nur unter bestimmten Umständen. Es gilt beispielsweise nicht, wenn die Verarbeitung zur Erfüllung einer rechtlichen Verpflichtung oder zur Geltendmachung, Ausübung oder Verteidigung von Rechtsansprüchen erforderlich ist.</p>
                <p>Für Unternehmen erfordert die effektive Umsetzung dieses Rechts eine robuste Datenkartierung und klare Verfahren für die Bearbeitung von Löschanfragen. Es geht nicht nur darum, Daten aus einem System zu löschen, sondern deren Entfernung aus allen verbundenen Datenbanken und Backups innerhalb eines angemessenen Zeitraums sicherzustellen.</p>
            `
        },
        imageUrl: "https://placehold.co/800x400/1a73e8/ffffff?text=GDPR+Article+17",
        imageAlt: {
            en: "Abstract image illustrating data deletion, with particles fading away.",
            it: "Immagine astratta che illustra la cancellazione dei dati, con particelle che svaniscono.",
            de: "Abstrakte Darstellung der Datenlöschung, mit verblassenden Partikeln."
        },
        date: "April 20, 2025",
        author: "EuroPrivacy Hub Team",
        tags: ["GDPR", "Data Subject Rights", "Compliance"]
    },
    {
        id: "role-of-dpo",
        title: {
            en: "The Role of the Data Protection Officer (DPO)",
            it: "Il Ruolo del Responsabile della Protezione dei Dati (RPD)",
            de: "Die Rolle des Datenschutzbeauftragten (DSB)"
        },
        excerpt: {
            en: "An in-depth look at the responsibilities and importance of a DPO in modern data governance.",
            it: "Uno sguardo approfondito alle responsabilità e all'importanza di un RPD nella moderna governance dei dati.",
            de: "Ein detaillierter Blick auf die Verantwortlichkeiten und die Bedeutung eines DSB in der modernen Daten-Governance."
        },
        content: {
            en: `
                <p>The Data Protection Officer (DPO) plays a pivotal role in ensuring an organization's compliance with data protection laws like the GDPR. Their responsibilities are broad, ranging from informing and advising on data protection obligations to monitoring internal compliance and acting as a contact point for supervisory authorities and data subjects.</p>
                <p>A DPO must be independent, an expert in data protection law and practices, and have the ability to fulfill their tasks without conflict of interest. Their appointment demonstrates an organization's commitment to data privacy.</p>
                <p>This role is particularly critical for public authorities and bodies, or organizations whose core activities involve large-scale regular and systematic monitoring of data subjects or large-scale processing of special categories of data.</p>
            `,
            it: `
                <p>Il Responsabile della Protezione dei Dati (RPD) svolge un ruolo fondamentale nel garantire la conformità di un'organizzazione alle leggi sulla protezione dei dati come il GDPR. Le sue responsabilità sono ampie, dall'informazione e consulenza sugli obblighi di protezione dei dati al monitoraggio della conformità interna e all'agire come punto di contatto per le autorità di controllo e gli interessati.</p>
                <p>Un RPD deve essere indipendente, un esperto in diritto e pratiche di protezione dei dati, e avere la capacità di svolgere i propri compiti senza conflitti di interesse. La sua nomina dimostra l'impegno di un'organizzazione per la privacy dei dati.</p>
                <p>Questo ruolo è particolarmente critico per le autorità e gli organismi pubblici, o per le organizzazioni le cui attività principali comportano il monitoraggio regolare e sistematico su larga scala degli interessati o il trattamento su larga scala di categorie speciali di dati.</p>
            `,
            de: `
                <p>Der Datenschutzbeauftragte (DSB) spielt eine zentrale Rolle bei der Sicherstellung der Einhaltung von Datenschutzgesetzen wie der DSGVO in einer Organisation. Seine Aufgaben sind vielfältig und reichen von der Information und Beratung über Datenschutzpflichten bis zur Überwachung der internen Einhaltung und der Funktion als Ansprechpartner für Aufsichtsbehörden und betroffene Personen.</p>
                <p>Diese Rolle ist besonders kritisch für öffentliche Behörden und Stellen oder Organisationen, deren Kerntätigkeiten die umfangreiche regelmäßige und systematische Überwachung von betroffenen Personen oder die umfangreiche Verarbeitung besonderer Datenkategorien umfassen.</p>
            `
        },
        imageUrl: "https://placehold.co/800x400/1a73e8/ffffff?text=Data+Protection+Officer",
        imageAlt: {
            en: "Image of a data protection officer's badge or a related professional icon.",
            it: "Immagine di un badge di responsabile della protezione dei dati o di un'icona professionale correlata.",
            de: "Bild eines Ausweises für Datenschutzbeauftragte oder eines verwandten Berufszeichens."
        },
        date: "March 8, 2025",
        author: "EuroPrivacy Hub Team",
        tags: ["DPO", "GDPR", "Compliance"]
    },
    {
        id: "international-transfers-guide",
        title: {
            en: "Navigating International Data Transfers",
            it: "Navigare i Trasferimenti Internazionali di Dati",
            de: "Umgang mit internationalen Datenübermittlungen"
        },
        excerpt: {
            en: "A breakdown of mechanisms and considerations for compliant cross-border data flows.",
            it: "Una disamina dei meccanismi e delle considerazioni per flussi di dati transfrontalieri conformi.",
            de: "Eine Aufschlüsselung der Mechanismen und Überlegungen für konforme grenzüberschreitende Datenflüsse."
        },
        content: {
            en: `
                <p>International data transfers remain a complex area under GDPR, especially after recent rulings like Schrems II. This post breaks down the key mechanisms and considerations for ensuring compliance when data leaves the EU/EEA.</p>
                <p>From Standard Contractual Clauses (SCCs) to Transfer Impact Assessments (TIAs), we cover the essentials for secure and lawful international data flows. Understanding the adequacy decisions and the need for supplementary measures is vital for organizations.</p>
                <p>We'll explore the current landscape, common pitfalls, and best practices for establishing and maintaining legal international data transfer arrangements.</p>
            `,
            it: `
                <p>I trasferimenti internazionali di dati rimangono un'area complessa ai sensi del GDPR, soprattutto dopo recenti sentenze come Schrems II. Questo post analizza i meccanismi chiave e le considerazioni per garantire la conformità quando i dati lasciano l'UE/SEE.</p>
                <p>Dalle Clausole Contrattuali Standard (SCC) alle Valutazioni d'Impatto sui Trasferimenti (TIA), trattiamo gli elementi essenziali per flussi di dati internazionali sicuri e leciti. Comprendere le decisioni di adeguatezza e la necessità di misure supplementari è fondamentale per le organizzazioni.</p>
                <p>Esploreremo il panorama attuale, le insidie comuni e le migliori pratiche per stabilire e mantenere accordi legali per il trasferimento internazionale di dati.</p>
            `,
            de: `
                <p>Internationale Datenübermittlungen bleiben ein komplexes Feld unter der DSGVO, insbesondere nach jüngsten Urteilen wie Schrems II. Dieser Beitrag schlüsselt die Schlüsselmechanismen und Überlegungen zur Sicherstellung der Konformität bei Datenübermittlungen außerhalb der EU/EWR auf.</p>
                <p>Von Standardvertragsklauseln (SCC) bis zu Transfer Impact Assessments (TIAs) behandeln wir die Grundlagen für sichere und rechtmäßige internationale Datenflüsse. Das Verständnis der Angemessenheitsbeschlüsse und die Notwendigkeit ergänzender Maßnahmen ist für Organisationen von entscheidender Bedeutung.</p>
                <p>Wir werden die aktuelle Landschaft, häufige Fallstricke und Best Practices für die Einrichtung und Aufrechterhaltung legaler internationaler Datenübertragungsvereinbarungen untersuchen.</p>
            `
        },
        imageUrl: "https://placehold.co/800x400/1a73e8/ffffff?text=Data+Transfers",
        imageAlt: {
            en: "Image depicting data flow across continents with security icons.",
            it: "Immagine che rappresenta il flusso di dati tra i continenti con icone di sicurezza.",
            de: "Bild, das den Datenfluss über Kontinente mit Sicherheitssymbolen darstellt."
        },
        date: "April 15, 2025",
        author: "EuroPrivacy Hub Team",
        tags: ["International Transfers", "GDPR", "Schrems II"]
    }
    // Add more articles here following the same structure
];

// --- Resources data ---
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


// Current language state (default to English)
let currentLang = 'en';

// Helper to map language codes to display names
const langDisplayNames = {
    'en': 'EN',
    'it': 'IT',
    'de': 'DE'
};


// Initialize the app when the DOM is fully loaded
document.addEventListener('DOMContentLoaded', () => {
    setupThemeToggle(); // Setup the theme toggle button and initial theme
    setupLanguageSelector(); // Setup language selector
    updateContent(); // Update content based on current language
});

// Function to set the theme (light/dark)
function setTheme(theme) {
    // Add or remove 'dark-mode' class on the body element
    document.body.classList.toggle('dark-mode', theme === 'dark');
    // Save the chosen theme to local storage
    localStorage.setItem('theme', theme);
}

// Function to setup the theme toggle button
function setupThemeToggle() {
    const themeToggleButton = document.querySelector('.theme-toggle-button');

    if (!themeToggleButton) {
        console.warn("Theme toggle button not found. Please ensure a button with class 'theme-toggle-button' exists in your header.");
        return; // Exit if button not found
    }

    // Initial theme setting (this part is crucial for default to white)
    const initialTheme = localStorage.getItem('theme');
    if (initialTheme) {
        setTheme(initialTheme);
    } else {
        // Default to light if no preference is saved in local storage.
        setTheme('light');
    }

    // Add event listener for the toggle button
    themeToggleButton.addEventListener('click', () => {
        // Get the *current* theme from the body class, not a stale variable
        const currentThemeIsDark = document.body.classList.contains('dark-mode');
        const newTheme = currentThemeIsDark ? 'light' : 'dark';
        setTheme(newTheme); // Apply and save the new theme
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

    // Initialize current language display
    currentLangTextSpan.textContent = langDisplayNames[currentLang].toUpperCase();

    // Toggle dropdown visibility on button click
    langToggle.addEventListener('click', (event) => {
        event.stopPropagation(); // Prevent document click from closing it immediately
        const isOpen = langToggle.parentElement.classList.toggle('open');
        langToggle.setAttribute('aria-expanded', isOpen);
    });

    // Handle language selection from dropdown
    dropdownContent.querySelectorAll('a').forEach(option => {
        option.addEventListener('click', (event) => {
            event.preventDefault(); // Prevent default link behavior

            currentLang = option.dataset.lang; // Get language from data-lang attribute
            currentLangTextSpan.textContent = langDisplayNames[currentLang].toUpperCase(); // Update displayed text

            updateContent(); // Update all dynamic content
            
            // Close the dropdown after selection
            langToggle.parentElement.classList.remove('open');
            langToggle.setAttribute('aria-expanded', 'false');
        });
    });

    // Close dropdown when clicking outside
    document.addEventListener('click', (event) => {
        if (!langToggle.parentElement.contains(event.target)) {
            langToggle.parentElement.classList.remove('open');
            langToggle.setAttribute('aria-expanded', 'false');
        }
    });
}


// Update all dynamic content on the page based on the current language
function updateContent() {
    // Update Hero Section (index.html)
    const heroTitle = document.querySelector('.hero h1');
    const heroDesc = document.querySelector('.hero p');
    if (heroTitle && translations.hero.title[currentLang]) {
        heroTitle.textContent = translations.hero.title[currentLang];
    }
    if (heroDesc && translations.hero.description[currentLang]) {
        heroDesc.textContent = translations.hero.description[currentLang];
    }

    // Update Page Headers (blog.html, resources.html, about.html)
    const pageHeaderTitle = document.querySelector('.page-header h1');
    const pageHeaderDesc = document.querySelector('.page-header p');
    // Determine current page based on body ID or title if needed
    const currentPageId = document.body.id || document.title.toLowerCase(); 

    if (currentPageId.includes("blog") && pageHeaderTitle && translations.blogPage.title[currentLang]) {
        pageHeaderTitle.textContent = translations.blogPage.title[currentLang];
        pageHeaderDesc.textContent = translations.blogPage.description[currentLang];
    } else if (currentPageId.includes("resources") && pageHeaderTitle && translations.resourcesPage.title[currentLang]) {
        pageHeaderTitle.textContent = translations.resourcesPage.title[currentLang];
        pageHeaderDesc.textContent = translations.resourcesPage.description[currentLang];
    }
    // 'About' page header already has static content in HTML, if you want dynamic update, add similar logic
    // else if (currentPageId.includes("about") && pageHeaderTitle) { ... }

    // Render Blog Posts for index.html (preview) and blog.html (full list)
    renderBlogPosts();

    // Render Resources for index.html (preview) and resources.html (full list)
    renderResources();

    // Update the displayed current language text in the header
    const currentLangTextSpan = document.querySelector('.language-selector .current-lang-text');
    if (currentLangTextSpan) {
        currentLangTextSpan.textContent = langDisplayNames[currentLang].toUpperCase();
    }
}

// Function to render blog posts dynamically
function renderBlogPosts() {
    const blogPreviewGrid = document.querySelector('.blog-articles-grid'); // For index.html
    const blogMainContent = document.querySelector('.blog-main'); // For blog.html

    // Ensure we have a container for full blog posts on blog.html
    let blogPostsContainer = null;
    if (blogMainContent) {
        blogPostsContainer = blogMainContent.querySelector('.blog-posts-container');
        if (!blogPostsContainer) { // Create if it doesn't exist (e.g., if you haven't added it to HTML yet)
            blogPostsContainer = document.createElement('div');
            blogPostsContainer.classList.add('blog-posts-container');
            // Find where to insert it, typically before pagination or at the end of blog-main
            const pagination = blogMainContent.querySelector('.pagination');
            if (pagination) {
                blogMainContent.insertBefore(blogPostsContainer, pagination);
            } else {
                blogMainContent.appendChild(blogPostsContainer);
            }
        }
    }

    // Clear existing content
    if (blogPreviewGrid) blogPreviewGrid.innerHTML = '';
    if (blogPostsContainer) blogPostsContainer.innerHTML = ''; 

    // Render for index.html (showing first 2 posts as preview)
    if (blogPreviewGrid) {
        blogPosts.slice(0, 2).forEach(post => { // Display first 2 posts for preview
            const articleHtml = `
                <div class="blog-card">
                    <img src="${post.imageUrl}" alt="${post.imageAlt[currentLang]}">
                    <div class="card-content">
                        <h3>${post.title[currentLang]}</h3>
                        <p>${post.excerpt[currentLang]}</p>
                        <a href="blog.html#${post.id}" class="read-more">Read More</a>
                    </div>
                </div>
            `;
            blogPreviewGrid.insertAdjacentHTML('beforeend', articleHtml);
        });
    }

    // Render for blog.html (showing all posts)
    if (blogPostsContainer) {
        blogPosts.forEach(post => {
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
                    <div class="post-content">
                        ${post.content[currentLang]}
                    </div>
                    <a href="blog.html" class="read-more">Back to Blog List</a>
                </article>
            `;
            blogPostsContainer.insertAdjacentHTML('beforeend', fullPostHtml);
        });
    }
}

// Function to render resources dynamically
function renderResources() {
    const resourcesPreviewGrid = document.querySelector('.resources-grid'); // For index.html
    const resourcesListing = document.querySelector('.resources-listing'); // For resources.html

    // Clear existing content
    if (resourcesPreviewGrid) resourcesPreviewGrid.innerHTML = '';
    if (resourcesListing) resourcesListing.innerHTML = '';

    // Render for index.html (showing first 3 resources as preview)
    if (resourcesPreviewGrid) {
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

    // Render for resources.html (showing all resources)
    if (resourcesListing) {
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
}
