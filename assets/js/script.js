document.addEventListener('DOMContentLoaded', () => {
    // Sparkle Trail Effect
    const createSparkle = (e) => {
        const sparkle = document.createElement('div');
        sparkle.classList.add('sparkle');

        // Randomize sparkle appearance
        const size = Math.random() * 10 + 5; // 5px to 15px
        const rotation = Math.random() * 360;
        const colors = ['#FFD700', '#FF69B4', '#00BFFF', '#ADFF2F', '#FF4500'];
        const randomColor = colors[Math.floor(Math.random() * colors.length)];

        sparkle.style.width = `${size}px`;
        sparkle.style.height = `${size}px`;
        sparkle.style.background = randomColor;
        sparkle.style.left = `${e.pageX}px`;
        sparkle.style.top = `${e.pageY}px`;
        sparkle.style.transform = `rotate(${rotation}deg)`;

        document.body.appendChild(sparkle);

        // Remove after animation
        setTimeout(() => {
            sparkle.remove();
        }, 1000);
    };

    // Throttle sparkle creation
    let lastSparkleTime = 0;
    document.addEventListener('mousemove', (e) => {
        const now = Date.now();
        if (now - lastSparkleTime > 50) { // Create sparkle every 50ms
            createSparkle(e);
            lastSparkleTime = now;
        }
    });

    // Hero Parallax Effect
    const heroSection = document.getElementById('hero');
    const heroBg = document.querySelector('.hero-bg');

    if (heroSection && heroBg) {
        heroSection.addEventListener('mousemove', (e) => {
            const { offsetWidth: width, offsetHeight: height } = heroSection;
            const { offsetX: x, offsetY: y } = e;

            const moveX = (x / width - 0.5) * 20; // Move up to 20px
            const moveY = (y / height - 0.5) * 20;

            heroBg.style.transform = `scale(1.1) translate(${-moveX}px, ${-moveY}px)`;
        });

        // Reset when mouse leaves
        heroSection.addEventListener('mouseleave', () => {
            heroBg.style.transform = 'scale(1.1) translate(0, 0)';
        });
    }
});
