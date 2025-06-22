document.getElementById('bookingForm').addEventListener('submit', function(e) {
    e.preventDefault();
    // Simple validation and message
    document.getElementById('formMsg').textContent = "Thank you! Your booking request has been submitted.";
    document.getElementById('bookingForm').reset();
});

document.getElementById('backBtn').onclick = function() {
    window.location.href = "../../welcome.html";
};

document.getElementById('scrollTopBtn').onclick = function() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
};
window.addEventListener('scroll', function() {
    document.getElementById('scrollTopBtn').style.display = window.scrollY > 200 ? 'flex' : 'none';
});