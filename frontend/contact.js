/* ==========================================================================
   PAGE 6 DOM SCRIPT: contact.js
   Practising: Theme Toggle, Show/Hide FAQ, and Live Form Validation
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {
    // 1. Theme Toggle
    const themeBtn = document.getElementById('theme-toggle-btn');
    themeBtn.addEventListener('click', () => {
        document.body.classList.toggle('dark-roast-theme');
        const isDark = document.body.classList.contains('dark-roast-theme');
        themeBtn.textContent = isDark ? '☀️ Light Mode' : '🌙 Dark Roast Mode';
    });

    // 2. Show/Hide FAQ
    const faqBtn = document.getElementById('toggle-faq-btn');
    const faqPanel = document.getElementById('faq-hidden-panel');
    faqBtn.addEventListener('click', () => {
        faqPanel.classList.toggle('d-none');
    });

    // 3. Live Form Check
    const nameInput = document.getElementById('senderName');
    const emailInput = document.getElementById('senderEmail');
    const msgInput = document.getElementById('senderMessage');
    const nameFb = document.getElementById('nameFeedback');
    const emailFb = document.getElementById('emailFeedback');
    const msgFb = document.getElementById('msgFeedback');

    function checkForm() {
        const nameOk = nameInput.value.trim().length >= 3;
        nameFb.textContent = nameOk ? '✓ Valid name' : 'Min 3 characters required';
        nameFb.className = nameOk ? 'text-success small' : 'text-danger small';

        const emailOk = emailInput.value.includes('@') && emailInput.value.includes('.');
        emailFb.textContent = emailOk ? '✓ Valid email' : 'Enter a valid email';
        emailFb.className = emailOk ? 'text-success small' : 'text-danger small';

        const msgOk = msgInput.value.trim().length >= 10;
        msgFb.textContent = msgOk ? '✓ Message looks good' : 'Min 10 characters required';
        msgFb.className = msgOk ? 'text-success small' : 'text-danger small';

        return nameOk && emailOk && msgOk;
    }

    [nameInput, emailInput, msgInput].forEach(el => el.addEventListener('input', checkForm));

    document.getElementById('contactForm').addEventListener('submit', (e) => {
        e.preventDefault();
        if (checkForm()) {
            const banner = document.getElementById('contactSuccessBanner');
            banner.classList.remove('d-none');
            banner.textContent = `Thank you, ${nameInput.value}! Your message has been sent.`;
            e.target.reset();
        }
    });
});