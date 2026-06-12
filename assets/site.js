document.querySelectorAll('.faq-question').forEach((button) => {
    button.setAttribute('aria-expanded', 'false');

    button.addEventListener('click', () => {
        const item = button.closest('.faq-item');
        const answer = item.querySelector('.faq-answer');
        const isOpen = item.classList.contains('open');

        document.querySelectorAll('.faq-item').forEach((other) => {
            other.classList.remove('open');
            const otherAnswer = other.querySelector('.faq-answer');
            const otherButton = other.querySelector('.faq-question');
            const icon = other.querySelector('.faq-question span:last-child');
            if (otherAnswer) {
                otherAnswer.style.maxHeight = null;
            }
            if (otherButton) {
                otherButton.setAttribute('aria-expanded', 'false');
            }
            if (icon) {
                icon.textContent = '+';
            }
        });

        if (!isOpen && answer) {
            item.classList.add('open');
            answer.style.maxHeight = `${answer.scrollHeight}px`;
            button.setAttribute('aria-expanded', 'true');
            const icon = button.querySelector('span:last-child');
            if (icon) {
                icon.textContent = '−';
            }
        }
    });
});
