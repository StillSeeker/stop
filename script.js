// Updated JavaScript with auto-play and mobile support
document.addEventListener('DOMContentLoaded', () => {
    const music = document.getElementById('background-music');
    
    // Auto-play music with user interaction
    const playMusic = () => {
        music.play().catch(() => {
            // Handle autoplay restrictions
            document.body.addEventListener('click', playMusicOnce, { once: true });
        });
    };

    const playMusicOnce = () => {
        music.play();
        document.body.removeEventListener('click', playMusicOnce);
    };

    // Start music on initial touch/click
    document.body.addEventListener('touchstart', playMusic, { once: true });
    document.body.addEventListener('click', playMusic, { once: true });

    // Mobile-friendly falling hearts
    function createHeart() {
        const heart = document.createElement('div');
        heart.innerHTML = '💖';
        heart.style.position = 'fixed';
        heart.style.left = Math.random() * 100 + '%';
        heart.style.animation = `fall ${Math.random() * 3 + 5}s linear infinite`;
        heart.style.fontSize = Math.random() * 15 + 8 + 'px'; // Smaller hearts for mobile
        document.querySelector('.hearts-falling').appendChild(heart);
        
        setTimeout(() => heart.remove(), 6000);
    }

    // Adjust heart creation rate for mobile
    const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
    setInterval(createHeart, isMobile ? 500 : 300);

    // Mobile-friendly image interaction
    const photo = document.querySelector('.bestie-photo');
    let lastTouch = 0;
    
    photo.addEventListener('touchstart', (e) => {
        e.preventDefault();
        const now = new Date().getTime();
        if (now - lastTouch < 300) { // Double-tap
            photo.style.transform = photo.style.transform === 'rotate(5deg) scale(1.1)' 
                ? 'rotate(0) scale(1)' 
                : 'rotate(5deg) scale(1.1)';
        }
        lastTouch = now;
    });
});
