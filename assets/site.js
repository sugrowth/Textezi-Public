document.querySelectorAll('.faq-question').forEach((button) => {
    button.addEventListener('click', () => {
        const item = button.closest('.faq-item');
        const answer = item.querySelector('.faq-answer');
        const isOpen = item.classList.contains('open');

        document.querySelectorAll('.faq-item').forEach((other) => {
            other.classList.remove('open');
            const otherAnswer = other.querySelector('.faq-answer');
            const icon = other.querySelector('.faq-question span:last-child');
            if (otherAnswer) {
                otherAnswer.style.maxHeight = null;
            }
            if (icon) {
                icon.textContent = '+';
            }
        });

        if (!isOpen) {
            item.classList.add('open');
            answer.style.maxHeight = `${answer.scrollHeight}px`;
            button.querySelector('span:last-child').textContent = '−';
        }
    });
});
