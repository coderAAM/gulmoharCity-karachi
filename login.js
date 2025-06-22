document.addEventListener("DOMContentLoaded", function () {
    // Prefill email and password if available
    const registeredEmail = sessionStorage.getItem("registeredEmail") || "";
    const registeredPassword = sessionStorage.getItem("registeredPassword") || "";
    document.getElementById("email").value = registeredEmail;
    document.getElementById("password").value = registeredPassword;

    document.getElementById("loginForm").addEventListener("submit", function(e) {
        e.preventDefault();
        const email = document.getElementById("email").value.trim();
        const password = document.getElementById("password").value;
        const messageDiv = document.getElementById("message");

        // Validate against registered credentials
        if (
            email === sessionStorage.getItem("registeredEmail") &&
            password === sessionStorage.getItem("registeredPassword")
        ) {
            messageDiv.textContent = "Login successful!";
            messageDiv.style.color = "green";
            setTimeout(function() {
                window.location.href = "welcome.html";
            }, 1000);
        } else {
            messageDiv.textContent = "Invalid email or password.";
            messageDiv.style.color = "red";
        }
    });

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

    window.addEventListener('DOMContentLoaded', () => {
        setTheme(localStorage.getItem('nightMode') === '1');
    });
});