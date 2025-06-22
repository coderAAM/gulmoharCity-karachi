// Sidebar toggle for mobile
const menuToggle = document.getElementById('menuToggle');
const sidebar = document.getElementById('sidebar');
const overlay = document.getElementById('sidebarOverlay');
menuToggle.onclick = function() {
    sidebar.classList.toggle('active');
    overlay.classList.toggle('active');
};
overlay.onclick = function() {
    sidebar.classList.remove('active');
    overlay.classList.remove('active');
};

// Show user's name in sidebar or redirect if not found
const userName = sessionStorage.getItem("registeredName");
if (userName) {
    document.getElementById("userName").textContent = userName;
} else {
    window.location.href = "index.html";
}

// Theme toggle script
const themeToggle = document.getElementById('themeToggle');
const themeIcon = document.getElementById('themeIcon');

function setTheme(night) {
    if (night) {
        document.body.classList.add('night-mode');
        themeIcon.innerHTML = `
            <svg id="moonIcon" width="26" height="26" viewBox="0 0 24 24" fill="#FFD600" xmlns="http://www.w3.org/2000/svg">
                <path d="M21 13.5A9 9 0 0 1 10.5 3c0-.3 0-.6.03-.89A1 1 0 0 0 8.9 1.08 11 11 0 1 0 22.92 15.1a1 1 0 0 0-1.03-1.13c-.29.03-.59.03-.89.03z"/>
            </svg>
        `;
    } else {
        document.body.classList.remove('night-mode');
        themeIcon.innerHTML = `
            <svg id="sunIcon" width="26" height="26" viewBox="0 0 24 24" fill="#FFD600" xmlns="http://www.w3.org/2000/svg">
                <circle cx="12" cy="12" r="5"/>
                <g>
                    <line x1="12" y1="1" x2="12" y2="3" stroke="#FFD600" stroke-width="2"/>
                    <line x1="12" y1="21" x2="12" y2="23" stroke="#FFD600" stroke-width="2"/>
                    <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" stroke="#FFD600" stroke-width="2"/>
                    <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" stroke="#FFD600" stroke-width="2"/>
                    <line x1="1" y1="12" x2="3" y2="12" stroke="#FFD600" stroke-width="2"/>
                    <line x1="21" y1="12" x2="23" y2="12" stroke="#FFD600" stroke-width="2"/>
                    <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" stroke="#FFD600" stroke-width="2"/>
                    <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" stroke="#FFD600" stroke-width="2"/>
                </g>
            </svg>
        `;
    }
    localStorage.setItem('nightMode', night ? '1' : '0');
}

themeToggle.onclick = function() {
    const night = !document.body.classList.contains('night-mode');
    setTheme(night);
};

// On page load, set theme from localStorage
window.addEventListener('DOMContentLoaded', () => {
    setTheme(localStorage.getItem('nightMode') === '1');
});

document.addEventListener('DOMContentLoaded', function() {
    var viewDetailsBtn = document.getElementById('viewDetailsBtn');
    var menuToggle = document.getElementById('menuToggle');
    if(viewDetailsBtn && menuToggle) {
        viewDetailsBtn.addEventListener('click', function() {
            menuToggle.click();
        });
    }
});

const menuLinks = [
    {
        title: "Gulmohar City Karachi",
        url: "links.html",
        desc: "Main project page with all important links and contact info."
    },
    {
        title: "About Us",
        url: "about.html",
        desc: "Learn about Gulmohar Group, their mission, vision, and values."
    },
    {
        title: "Home",
        url: "home_folder/home.html",
        desc: "Welcome to the hub of fresh lifestyle. Explore our main features."
    },
    {
        title: "Forest View Villas",
        url: "About Us/Forest View Villas/forest.html",
        desc: "Discover eco-friendly, luxury villas surrounded by greenery."
    },
    {
        title: "Feedback",
        url: "About Us/user_feedback/user.html",
        desc: "See what users say and share your own feedback about Gulmohar City."
    }
];

const sidebarSearch = document.getElementById('sidebarSearch');
const searchSuggestions = document.getElementById('searchSuggestions');

sidebarSearch.addEventListener('input', function() {
    const query = this.value.trim().toLowerCase();
    // Sidebar link filter
    document.querySelectorAll('.menu a').forEach(link => {
        link.style.display = link.textContent.toLowerCase().includes(query) ? '' : 'none';
    });

    // Suggestions
    searchSuggestions.innerHTML = '';
    if (query.length > 0) {
        const matches = menuLinks.filter(link => link.title.toLowerCase().includes(query));
        matches.forEach(link => {
            const card = document.createElement('div');
            card.className = 'suggestion-card';
            card.innerHTML = `
                <div class="suggestion-title">${link.title}</div>
                <div class="suggestion-desc">${link.desc}</div>
            `;
            card.onclick = () => window.location.href = link.url;
            searchSuggestions.appendChild(card);
        });
    }
});

// Hide suggestions when search loses focus (optional)
sidebarSearch.addEventListener('blur', function() {
    setTimeout(() => { searchSuggestions.innerHTML = ''; }, 200);
});