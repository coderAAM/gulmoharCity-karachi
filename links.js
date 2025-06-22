// Sidebar toggle for mobile
const menuToggle = document.getElementById('menuToggle');
const sidebar = document.getElementById('sidebar');
const overlay = document.getElementById('sidebarOverlay');
menuToggle.onclick = function () {
    sidebar.classList.toggle('active');
    overlay.classList.toggle('active');
};
overlay.onclick = function () {
    sidebar.classList.remove('active');
    overlay.classList.remove('active');
};

// Example: Show user's name from sessionStorage if available
const userName = sessionStorage.getItem("registeredName");
if (userName) {
    document.getElementById("userName").textContent = userName;
}

// Call helpline function
function callHelpline() {
    let number = prompt("Enter the phone number to call (e.g. 03001234567):");
    if (number) {
        // Remove spaces and validate simple phone number
        number = number.replace(/\s+/g, '');
        if (/^\d{10,15}$/.test(number)) {
            window.location.href = "tel:" + number;
        } else {
            alert("Please enter a valid phone number.");
        }
    }
}

// Scroll to top button
const scrollTopBtn = document.getElementById('scrollTopBtn');
window.addEventListener('scroll', function () {
    scrollTopBtn.style.display = window.scrollY > 200 ? 'flex' : 'none';
});
scrollTopBtn.onclick = function () {
    window.scrollTo({ top: 0, behavior: 'smooth' });
};
scrollTopBtn.style.display = 'none';