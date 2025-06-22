const fakeFeedbacks = [
    { name: "Ali", text: "Gulmohar City bhut acha hai, family ke liye best jagah hai!", comments: [] },
    { name: "Sara", text: "Yahan ki environment aur security mujhe pasand hai.", comments: [] },
    { name: "Ahmed", text: "Payment plan bohot flexible hai, staff bhi helpful hai.", comments: [] },
    { name: "Fatima", text: "Green spaces aur parks bohot ache hain, bachon ke liye safe hai.", comments: [] },
    { name: "Usman", text: "Main recommend karta hoon, investment ke liye bhi best hai.", comments: [] }
];

let allFeedbacks = [...fakeFeedbacks];

function renderFeedbacks() {
    const loop = document.getElementById('feedbackLoop');
    loop.innerHTML = '';
    allFeedbacks.forEach((fb, idx) => {
        const item = document.createElement('div');
        item.className = 'feedback-item';
        item.innerHTML = `
            <div class="feedback-user">${fb.name}</div>
            <div class="feedback-text">${fb.text}</div>
            <div class="comment-section">
                <ul class="comment-list" id="commentList${idx}">
                    ${fb.comments.map(c => `<li>${c}</li>`).join('')}
                </ul>
                <form class="comment-form" data-idx="${idx}">
                    <input type="text" placeholder="Add comment..." required>
                    <button type="submit">Comment</button>
                </form>
            </div>
        `;
        loop.appendChild(item);
    });
}
renderFeedbacks();

// Auto-scroll loop
let scrollPos = 0;
setInterval(() => {
    const loop = document.getElementById('feedbackLoop');
    scrollPos += 1;
    if (scrollPos > loop.scrollHeight - loop.clientHeight) scrollPos = 0;
    loop.scrollTop = scrollPos;
}, 50);

// Feedback submit
document.getElementById('feedbackForm').addEventListener('submit', function(e) {
    e.preventDefault();
    const name = document.getElementById('userName').value.trim() || "User";
    const text = document.getElementById('userFeedback').value.trim();
    if (text) {
        allFeedbacks.push({ name, text, comments: [] });
        renderFeedbacks();
        document.getElementById('feedbackForm').reset();
    }
});

// Comment submit
document.getElementById('feedbackLoop').addEventListener('submit', function(e) {
    if (e.target.classList.contains('comment-form')) {
        e.preventDefault();
        const idx = +e.target.getAttribute('data-idx');
        const input = e.target.querySelector('input');
        const comment = input.value.trim();
        if (comment) {
            allFeedbacks[idx].comments.push(comment);
            renderFeedbacks();
        }
    }
});

// Back button functionality
document.getElementById('backBtn').onclick = function() {
    window.location.href = "../../welcome.html";
};

// Scroll to top button functionality
const scrollTopBtn = document.getElementById('scrollTopBtn');
window.addEventListener('scroll', function() {
    scrollTopBtn.style.display = window.scrollY > 200 ? 'flex' : 'none';
});
scrollTopBtn.onclick = function() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
};
scrollTopBtn.style.display = 'none';