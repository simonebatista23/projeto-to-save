document.addEventListener('DOMContentLoaded', (event) => {
    // Initialize Lucide icons
    lucide.createIcons();

    // Comparison slider functionality
    const slider = document.querySelector('.comparison-slider .slider');
    const beforeImage = document.querySelector('.comparison-slider img');
    const afterVideo = document.querySelector('.comparison-slider video');

    slider.addEventListener('input', (e) => {
        const sliderPos = e.target.value;
        beforeImage.style.clipPath = `inset(0 ${100 - sliderPos}% 0 0)`;
        afterVideo.style.clipPath = `inset(0 0 0 ${sliderPos}%)`;
    });

    // Scroll animations
    const animateOnScroll = (entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate');
            }
        });
    };

    const observer = new IntersectionObserver(animateOnScroll, {
        root: null,
        threshold: 0.1
    });

    document.querySelectorAll('.product-card, .feature').forEach(el => {
        observer.observe(el);
    });

    // Parallax effect for imagination section
    const imagination = document.querySelector('#imagination');
    window.addEventListener('scroll', () => {
        const scrollPosition = window.pageYOffset;
        imagination.style.backgroundPositionY = `${scrollPosition * 0.7}px`;
    });
});


let moon = document.querySelector(".fa-moon");
let sun = document.querySelector(".fa-sun");

// Verifica se o modo escuro estava ativado antes
if (localStorage.getItem("darkMode") === "enabled") {
    document.body.classList.add("dark-mode");
    moon.style.display = "none";
    sun.style.display = "block";
} else {
    sun.style.display = "none";
}

// Ativar modo escuro
moon.addEventListener("click", () => {
    document.body.classList.add("dark-mode");
    localStorage.setItem("darkMode", "enabled");
    moon.style.display = "none";
    sun.style.display = "block";
});

// Desativar modo escuro
sun.addEventListener("click", () => {
    document.body.classList.remove("dark-mode");
    localStorage.setItem("darkMode", "disabled");
    sun.style.display = "none";
    moon.style.display = "block";
});
