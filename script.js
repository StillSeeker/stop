// script.js
document.addEventListener('DOMContentLoaded', () => {
    const music = document.getElementById('background-music');
    const toggleBtn = document.querySelector('.music-toggle');
    
    // Toggle music
    toggleBtn.addEventListener('click', () => {
        if (music.paused) {
            music.play();
            toggleBtn.textContent = '🎵 Music On';
        } else {
            music.pause();
            toggleBtn.textContent = '🎵 Music Off';
        }
    });

    // Create falling hearts
    function createHeart() {
        const heart = document.createElement('div');
        heart.innerHTML = '💖';
        heart.style.position = 'absolute';
        heart.style.left = Math.random() * 100 + '%';
        heart.style.animation = `fall ${Math.random() * 3 + 5}s linear infinite`;
        heart.style.fontSize = Math.random() * 20 + 10 + 'px';
        document.querySelector('.hearts-falling').appendChild(heart);
        
        setTimeout(() => heart.remove(), 6000);
    }

    setInterval(createHeart, 300);
    
    // Interactive photo hover
    const photo = document.querySelector('.bestie-photo');
    photo.addEventListener('mouseover', () => {
        photo.style.transform = 'rotate(5deg) scale(1.1)';
    });
    photo.addEventListener('mouseout', () => {
        photo.style.transform = 'rotate(0) scale(1)';
    });
});