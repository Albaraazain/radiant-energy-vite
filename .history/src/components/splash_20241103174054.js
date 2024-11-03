// src/components/splash.js
export const splashContent = `
<section class="radiant-splash s-splash">
    <div class="splash-inner">
        <div class="huge-statement">
            <h1 class="huge-text">Illuminating Tomorrow's <br>Energy Solutions</h1>
            <div class="interactive-text-wrapper">
                <p class="interactive-text">
                    Pioneering excellence in 
                    <span class="highlight-word" data-category="lighting">lighting</span>, 
                    <span class="highlight-word" data-category="solar">solar</span>, and
                    <span class="highlight-word" data-category="transformers">transformers</span>
                    technologies.
                </p>
            </div>
        </div>
    </div>

    <div class="hover-images-container">
        <div class="hover-images-group" data-category="lighting">
            <div class="hover-image-wrapper">
                <img src="/assets/lighting-1.png" alt="Commercial Lighting Solutions" class="hover-image">
            </div>
            <div class="hover-image-wrapper">
                <img src="/assets/lighting-2.png" alt="Industrial Lighting" class="hover-image">
            </div>
            <div class="hover-image-wrapper">
                <img src="/assets/lighting-3.png" alt="LED Lighting Systems" class="hover-image">
            </div>
        </div>

        <div class="hover-images-group" data-category="solar">
            <div class="hover-image-wrapper">
                <img src="/assets/solar-3.png" alt="Solar Panel Installation" class="hover-image">
            </div>
            <div class="hover-image-wrapper">
                <img src="/assets/solar-1.png" alt="Solar Energy Systems" class="hover-image">
            </div>
            <div class="hover-image-wrapper">
                <img src="/assets/solar-2.png" alt="Commercial Solar Solutions" class="hover-image">
            </div>
        </div>

        <div class="hover-images-group" data-category="transformers">
            <div class="hover-image-wrapper">
                <img src="/assets/transformers-1.png" alt="Power Transformers" class="hover-image">
            </div>
            <div class="hover-image-wrapper">
                <img src="/assets/transformers-2.png" alt="Industrial Transformers" class="hover-image">
            </div>
            <div class="hover-image-wrapper">
                <img src="/assets/transformers-3.png" alt="Distribution Transformers" class="hover-image">
            </div>
        </div>
    </div>
</section>
`;

export function initSplash() {
    // Insert content
    const splashContainer = document.getElementById("splash-content");
    if (!splashContainer) {
        console.error("Splash content container not found");
        return;
    }
    splashContainer.innerHTML = splashContent;

    // Setup hover interactions
    const words = document.querySelectorAll(".highlight-word");
    let activeGroup = null;

    words.forEach((word) => {
        const category = word.dataset.category;
        const imageGroup = document.querySelector(
            `.hover-images-group[data-category="${category}"]`
        );

        if (!imageGroup) {
            console.warn(`Image group for category ${category} not found`);
            return;
        }

        word.addEventListener("mouseenter", () => {
            if (activeGroup) {
                activeGroup.classList.remove("active");
            }
            imageGroup.classList.add("active");
            activeGroup = imageGroup;
            word.classList.add("hover");
        });

        word.addEventListener("mouseleave", () => {
            setTimeout(() => {
                if (!word.matches(":hover")) {
                    imageGroup.classList.remove("active");
                    word.classList.remove("hover");
                    activeGroup = null;
                }
            }, 100);
        });
    });

    // Initialize entrance animations
    const title = document.querySelector(".huge-text");
    const text = document.querySelector(".interactive-text");

    requestAnimationFrame(() => {
        title?.classList.add("animate-in");
        setTimeout(() => {
            text?.classList.add("animate-in");
        }, 500);
    });

    // Initialize gradient rotation
    const gradientInner = document.querySelector('.splash-gradient-inner');
    if (gradientInner) {
        let rotation = 0;
        const rotateGradient = () => {
            rotation += 0.1;
            gradientInner.style.transform = `rotate(${rotation}deg)`;
            requestAnimationFrame(rotateGradient);
        };
        requestAnimationFrame(rotateGradient);
    }
}