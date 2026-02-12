
document.addEventListener('DOMContentLoaded', function () {

    // --- Background Floating Hearts Animation ---
    const heartsContainer = document.getElementById('hearts-container');

    function createHeart() {
        const heart = document.createElement('div');
        heart.classList.add('heart');
        heart.innerHTML = '❤️';
        heart.style.left = Math.random() * 100 + 'vw';
        heart.style.animationDuration = Math.random() * 2 + 3 + 's'; // 3 to 5 seconds
        heart.style.fontSize = Math.random() * 20 + 10 + 'px'; // 10 to 30px

        heartsContainer.appendChild(heart);

        // Remove heart after animation completes
        setTimeout(() => {
            heart.remove();
        }, 5000);
    }

    // Create a new heart every 400ms
    setInterval(createHeart, 400);


    // --- Surprise Button Handling ---
    const surpriseBtn = document.getElementById('surprise-btn');
    const hiddenMessage = document.getElementById('hidden-message');

    surpriseBtn.addEventListener('click', function () {
        hiddenMessage.classList.add('show');
        surpriseBtn.style.display = 'none'; // Optional: hide button after click

        // Burst of hearts for effect
        for (let i = 0; i < 30; i++) {
            setTimeout(createHeart, i * 50);
        }
    });


    // --- Music Display ---
    const musicBtn = document.getElementById('music-btn');
    const bgMusic = document.getElementById('bg-music');
    let isPlaying = false;

    musicBtn.addEventListener('click', function () {
        if (isPlaying) {
            bgMusic.pause();
            musicBtn.innerHTML = '🎵 Play Music';
        } else {
            bgMusic.play().catch(error => {
                console.log("Audio play failed (browser policy): ", error);
                alert("Please interact with the page first to play music!");
            });
            musicBtn.innerHTML = '⏸️ Pause Music';
        }
        isPlaying = !isPlaying;
    });


    // --- Intersection Observer for Scroll Animations ---
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, {
        threshold: 0.1
    });

    document.querySelectorAll('.fade-in').forEach(section => {
        observer.observe(section);
    });

});
