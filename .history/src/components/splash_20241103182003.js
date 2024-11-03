// src/components/splash.js
export const splashContent = `
<style>
/* Enhanced keyword styling */
.radiant-splash .highlight-word {
    position: relative;
    cursor: pointer;
    transition: all 0.3s ease;
    font-weight: 800;  /* Made even bolder */
    font-size: 1.4em;  /* Made bigger */
    text-decoration: underline;
    text-underline-offset: 6px; /* Increased offset */
    padding: 4px 12px;  /* More padding */
    border-radius: 6px;
    letter-spacing: 0.5px; /* Added letter spacing */
    display: inline-block; /* Better hover handling */
}

/* Enhance the hover colors for better visibility */
.radiant-splash .highlight-word[data-category="lighting"] {
    color: rgba(0, 229, 210, 1);  /* Made more vivid */
    text-decoration-color: rgba(0, 229, 210, 0.5); /* More visible underline */
}

.radiant-splash .highlight-word[data-category="solar"] {
    color: rgba(252, 68, 15, 1);
    text-decoration-color: rgba(252, 68, 15, 0.5);
}

.radiant-splash .highlight-word[data-category="transformers"] {
    color: rgba(113, 167, 254, 1);
    text-decoration-color: rgba(113, 167, 254, 0.5);
}

/* Enhanced hover effects */
.radiant-splash .highlight-word:hover {
    transform: scale(1.1) translateY(-2px); /* Added slight lift */
    text-shadow: 0 0 20px currentColor;  /* Stronger glow */
}

/* Add a subtle bounce animation on hover */
@keyframes bounce {
    0%, 100% { transform: scale(1.1) translateY(-2px); }
    50% { transform: scale(1.1) translateY(-4px); }
}

.radiant-splash .highlight-word:hover {
    animation: bounce 1s ease infinite;
}

/* Enhanced background effect on hover */
.radiant-splash .highlight-word[data-category="lighting"]:hover {
    background: rgba(0, 229, 210, 0.15);
    box-shadow: 0 4px 15px rgba(0, 229, 210, 0.2);
}

.radiant-splash .highlight-word[data-category="solar"]:hover {
    background: rgba(252, 68, 15, 0.15);
    box-shadow: 0 4px 15px rgba(252, 68, 15, 0.2);
}

.radiant-splash .highlight-word[data-category="transformers"]:hover {
    background: rgba(113, 167, 254, 0.15);
    box-shadow: 0 4px 15px rgba(113, 167, 254, 0.2);
}

/* Add a subtle rotation to the underline animation */
.radiant-splash .highlight-word::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 3px; /* Thicker underline */
    background: currentColor;
    transform: scaleX(0) rotate(-1deg);
    transition: transform 0.4s cubic-bezier(0.4, 0, 0.2, 1);
    transform-origin: left;
}

.radiant-splash .highlight-word:hover::after {
    transform: scaleX(1) rotate(0deg);
}

/* Mobile responsiveness */
@media screen and (max-width: 767px) {
    .radiant-splash .highlight-word {
        font-size: 1.2em;
        padding: 2px 8px;
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
  window.Webflow && window.Webflow.require("ix2").init();

  // Setup hover interactions - using mutation observer to ensure elements are ready
  const observer = new MutationObserver((mutations, obs) => {
    const splashSection = document.querySelector(".radiant-splash");
    if (splashSection) {
      initHoverEffects();
      obs.disconnect(); // Stop observing once initialized
    }
  });

  observer.observe(document.body, {
    childList: true,
    subtree: true,
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
      word.addEventListener("mouseenter", function (e) {
        e.stopPropagation();
        if (activeGroup) {
          activeGroup.classList.remove("active");
        }
        imageGroup.classList.add("active");
        activeGroup = imageGroup;
        this.classList.add("hover");
      });

      word.addEventListener("mouseleave", function (e) {
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
  const gradientInner = document.querySelector(".splash-gradient-inner");
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
