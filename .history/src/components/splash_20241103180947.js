// src/components/splash.js
export const splashContent = `
<style>
.radiant-splash .hover-images-container {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    pointer-events: none;
    z-index: 1;
}

.radiant-splash .hover-images-group {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 2vw;
    padding: 5vh 5vw;
    opacity: 0;
    visibility: hidden;
    transition: opacity 0.6s ease, visibility 0.6s ease;
}

.radiant-splash .hover-images-group.active {
    opacity: 1;
    visibility: visible;
}

.radiant-splash .hover-image-wrapper {
    width: 25vw;
    height: 40vh;
    overflow: hidden;
    border-radius: 8px;
    transform: translateY(30px);
    opacity: 0;
    transition: all 0.6s cubic-bezier(0.4, 0, 0.2, 1);
}

.radiant-splash .hover-image {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transform: scale(1.1);
    transition: transform 0.6s cubic-bezier(0.4, 0, 0.2, 1);
}

/* Category-specific styling */
.radiant-splash .hover-images-group[data-category="lighting"] .hover-image-wrapper {
    border: 1px solid rgba(0, 229, 210, 0.3);
    background: rgba(0, 229, 210, 0.05);
}

.radiant-splash .hover-images-group[data-category="solar"] .hover-image-wrapper {
    border: 1px solid rgba(252, 68, 15, 0.3);
    background: rgba(252, 68, 15, 0.05);
}

.radiant-splash .hover-images-group[data-category="transformers"] .hover-image-wrapper {
    border: 1px solid rgba(113, 167, 254, 0.3);
    background: rgba(113, 167, 254, 0.05);
}

/* Active states */
.radiant-splash .hover-images-group.active .hover-image-wrapper {
    opacity: 1;
    transform: translateY(0);
}

.radiant-splash .hover-images-group.active .hover-image-wrapper:nth-child(1) {
    transition-delay: 0.1s;
}

.radiant-splash .hover-images-group.active .hover-image-wrapper:nth-child(2) {
    transition-delay: 0.2s;
}

.radiant-splash .hover-images-group.active .hover-image-wrapper:nth-child(3) {
    transition-delay: 0.3s;
}

/* Text hover effects */
.radiant-splash .highlight-word {
    position: relative;
    cursor: pointer;
    transition: color 0.3s ease;
}

.radiant-splash .highlight-word::after {
    content: '';
    position: absolute;
    bottom: -2px;
    left: 0;
    width: 100%;
    height: 2px;
    transform: scaleX(0);
    transition: transform 0.3s ease;
}

.radiant-splash .highlight-word[data-category="lighting"]::after {
    background-color: rgba(0, 229, 210, 1);
}

.radiant-splash .highlight-word[data-category="solar"]::after {
    background-color: rgba(252, 68, 15, 1);
}

.radiant-splash .highlight-word[data-category="transformers"]::after {
    background-color: rgba(113, 167, 254, 1);
}

.radiant-splash .highlight-word.hover::after {
    transform: scaleX(1);
}

/* Responsive adjustments */
@media screen and (max-width: 991px) {
    .radiant-splash .hover-image-wrapper {
            width: 30vw;
            height: 35vh;
    }
}

@media screen and (max-width: 767px) {
    .radiant-splash .hover-images-group {
            padding: 3vh 3vw;
    }
    
    .radiant-splash .hover-image-wrapper {
            width: 40vw;
            height: 30vh;
    }
}

@media screen and (max-width: 479px) {
    .radiant-splash .hover-images-group {
            flex-direction: column;
            gap: 20px;  
    }
    
    .radiant-splash .hover-image-wrapper {
            width: 80vw;
            height: 25vh;
    }
}
</style>
<section id="splash" data-w-id="splash-section" class="radiant-splash s-splash">
        <div class="splash-trigger-1"></div>
        <div class="splash-trigger-2"></div>
        <div class="splash-trigger-3"></div>
        <div class="splash-trigger-4"></div>

        <div class="gray-shape-wrapper">
                <div class="gray-shape-sticky">
                        <div class="gray-shape-opacity">
                                <img src="/assets/circle.svg" loading="lazy" alt="" class="gray-shape">
                        </div>
                </div>
        </div>

        <div class="splash-inner">
                <div id="w-node-div-block-21-7d08bc7f" class="huge-statement-wrapper">
                        <div class="huge-statement">
                                <div class="content-wrapper">
                                        <h1 class="huge-text">Illuminating Tomorrow's <br>Energy Solutions</h1>
                                        <div class="interactive-text-wrapper">
                                                <p class="interactive-text paragraph white">
                                                        Pioneering excellence in 
                                                        <span class="highlight-word" data-category="lighting">lighting</span>, 
                                                        <span class="highlight-word" data-category="solar">solar</span>, and
                                                        <span class="highlight-word" data-category="transformers">transformers</span>
                                                        technologies.
                                                </p>
                                        </div>
                                </div>
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

        <div class="splash-gradient-absolute">
                <div class="splash-gradient-sticky">
                        <div class="splash-gradient-inner">
                                <div class="splash-gradient-1"></div>
                                <div class="splash-gradient-2"></div>
                                <div class="splash-gradient-3"></div>
                                <div class="splash-gradient-4"></div>
                                <img src="/assets/gradientwithgreenaswell.png" loading="lazy" alt="" class="splash-gradient-mobile">
                        </div>
                </div>
                <div class="grain-overlay-splash"></div>
        </div>

        <div class="lines-wrapper">
                <div class="line"></div>
                <div class="line"></div>
                <div class="line"></div>
                <div class="line"></div>
                <div class="line"></div>
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

        // Wait for Webflow to be ready
        window.Webflow && window.Webflow.destroy();
        window.Webflow && window.Webflow.ready();
        window.Webflow && window.Webflow.require('ix2').init();

        // Setup hover interactions - using mutation observer to ensure elements are ready
        const observer = new MutationObserver((mutations, obs) => {
                const splashSection = document.querySelector('.radiant-splash');
                if (splashSection) {
                        initHoverEffects();
                        obs.disconnect(); // Stop observing once initialized
                }
        });

        observer.observe(document.body, {
                childList: true,
                subtree: true
        });

        function initHoverEffects() {
                const words = document.querySelectorAll(".highlight-word");
                let activeGroup = null;

                words.forEach((word) => {
                        const category = word.dataset.category;
                        const imageGroup = document.querySelector(
                                `.hover-images-group[data-category="${category}"]`
                        );

                        if (!imageGroup) return;

                        // Use mouseenter/mouseleave for better performance
                        word.addEventListener("mouseenter", function(e) {
                                e.stopPropagation();
                                if (activeGroup) {
                                        activeGroup.classList.remove("active");
                                }
                                imageGroup.classList.add("active");
                                activeGroup = imageGroup;
                                this.classList.add("hover");
                        });

                        word.addEventListener("mouseleave", function(e) {
                                e.stopPropagation();
                                const word = this;
                                // Small delay to handle quick mouse movements
                                setTimeout(() => {
                                        if (!word.matches(":hover")) {
                                                imageGroup.classList.remove("active");
                                                word.classList.remove("hover");
                                                if (activeGroup === imageGroup) {
                                                        activeGroup = null;
                                                }
                                        }
                                }, 100);
                        });
                });
        }

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