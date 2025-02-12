document.addEventListener('DOMContentLoaded', () => {
    // Initialize AOS
    AOS.init({
        duration: 1000,
        once: true
    });

    // Theme cards hover effect
    const themeCards = document.querySelectorAll('.theme-card');
    
    themeCards.forEach(card => {
        card.addEventListener('mouseenter', () => {
            const icon = card.querySelector('.card-icon i');
            icon.style.transform = 'scale(1.2) rotate(10deg)';
            icon.style.transition = 'transform 0.3s ease';
        });

        card.addEventListener('mouseleave', () => {
            const icon = card.querySelector('.card-icon i');
            icon.style.transform = 'scale(1) rotate(0deg)';
        });
    });

    // Reveal text animation
    const revealText = document.querySelector('.reveal-text');
    if (revealText) {
        const text = revealText.textContent;
        revealText.innerHTML = '';
        
        [...text].forEach((char, i) => {
            const span = document.createElement('span');
            span.textContent = char;
            span.style.animationDelay = `${i * 0.1}s`;
            revealText.appendChild(span);
        });
    }
});