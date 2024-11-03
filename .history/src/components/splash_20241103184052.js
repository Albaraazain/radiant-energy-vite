// src/components/splash.js
export const splashContent = `
<style>
/* Positioning the hover images above the words */
.radiant-splash .interactive-text-wrapper {
    position: relative;
}

.radiant-splash .hover-images-group {
    position: absolute;
    bottom: 100%; /* Positions the group above the word */
    left: 50%;
    transform: translate(-50%, -10px); /* Centers above the word and slightly moves it up */
    display: flex;
    justify-content: center;
    gap: 1vw;
    opacity: 0;
    visibility: hidden;
    transition: opacity 0.4s ease, visibility 0.4s ease, transform 0.4s ease;
    pointer-events: none; /* So it doesn't interfere with text selection */
}

/* Show images on hover */
.radiant-splash .highlight-word:hover + .hover-images-group {
    opacity: 1;
    visibility: visible;
    transform: translate(-50%, 0); /* Moves it into position */
}

/* Hover image wrapper */
.radiant-splash .hover-image-wrapper {
    width: 15vw;
    height: 20vh;
    overflow: hidden;
    border-radius: 8px;
    margin-bottom: 5px;
}

/* Image styling */
.radiant-splash .hover-image {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.3s ease;
}

/* Scale effect on hover */
.radiant-splash .hover-images-group:hover .hover-image {
    transform: scale(1.05);
}

/* Adjust the text styles as needed */
.radiant-splash .highlight-word {
    position: relative;
    cursor: pointer;
    font-weight: 700;
    font-size: 1.4em;
    color: rgba(30, 30, 30, 0.85);
    text-decoration: underline;
    text-underline-offset: 4px;
    padding: 2px 4px;
    border-radius: 4px;
    transition: color 0.3s ease, transform 0.3s ease;
}

/* Underline animation */
.radiant-splash .highlight-word::after {
    content: '';
    position: absolute;
    bottom: -2px;
    left: 0;
    width: 100%;
    height: 2px;
    background-color: rgba(30, 144, 255, 0.6);
    transform: scaleX(0);
    transform-origin: left;
    transition: transform 0.3s ease;
}

.radiant-splash .highlight-word:hover::after {
    transform: scaleX(1);
}

/* Hover effects */
.radiant-splash .highlight-word:hover {
    color: rgba(30, 144, 255, 1);
    transform: scale(1.05);
}

/* Responsive adjustments */
@media screen and (max-width: 991px) {
    .radiant-splash .hover-image-wrapper {
        width: 25vw;
        height: 20vh;
    }
}

@media screen and (max-width: 767px) {
    .radiant-splash .hover-image-wrapper {
        width: 30vw;
        height: 18vh;
    }
}

@media screen and (max-width: 479px) {
    .radiant-splash .hover-image-wrapper {
        width: 60vw;
        height: 20vh;
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
