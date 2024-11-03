// src/components/splash.js
export const splashContent = `
<!-- Tailwind CSS is assumed to be included in your project -->

<!-- Updated HTML Content with Tailwind CSS -->
<section id="splash" data-w-id="splash-section" class="radiant-splash s-splash relative h-[450vh] mb-[100px] flex flex-col justify-start items-center">
    <div class="splash-trigger-1 absolute left-0 top-0 w-0 h-[25%]"></div>
    <div class="splash-trigger-2 absolute left-0 top-[25%] w-0 h-[25%]"></div>
    <div class="splash-trigger-3 absolute left-0 top-[50%] w-0 h-[25%]"></div>
    <div class="splash-trigger-4 absolute left-0 top-[85%] w-0 h-[25%]"></div>

    <div class="gray-shape-wrapper absolute inset-0 flex flex-col justify-start items-end overflow-hidden w-full h-full">
        <div class="gray-shape-sticky sticky top-0 w-full h-screen">
            <div class="gray-shape-opacity">
                <img src="/assets/circle.svg" loading="lazy" alt="" class="gray-shape absolute inset-0 block h-[126vw] opacity-30 transform rotate-[77deg]">
            </div>
        </div>
    </div>

    <div class="splash-inner sticky top-0 z-40 grid h-screen pb-[5vw] place-items-center grid-cols-1 grid-rows-3">
        <div id="w-node-div-block-21-7d08bc7f" class="huge-statement-wrapper relative z-30 flex flex-col justify-center items-center row-start-2 row-end-3">
            <div class="huge-statement max-w-[90%] mx-auto text-white text-center">
                <div class="content-wrapper mx-auto px-[9vw]">
                    <h1 class="huge-text mt-0 mb-0 text-[7.5vw] leading-[1.1em] font-semibold">Illuminating Tomorrow's <br>Energy Solutions</h1>
                    <div class="interactive-text-wrapper relative inline-block">
                        <p class="interactive-text paragraph white text-base leading-[1.3em] mt-0 mb-0 text-white">
                            Pioneering excellence in&nbsp;
                            <!-- Lighting -->
                            <span class="highlight-word relative cursor-pointer font-bold text-[1.2em] text-white/90 no-underline px-1 rounded transition-colors duration-300 ease-in-out" data-category="lighting">lighting</span>
                            <div class="hover-images-group absolute bottom-[120%] left-1/2 transform -translate-x-1/2 flex justify-center gap-[1vw] opacity-0 invisible transition-opacity duration-300 pointer-events-none z-10 group-hover:opacity-100 group-hover:visible" data-category="lighting">
                                <div class="hover-image-wrapper w-[12vw] h-[18vh] overflow-hidden rounded-[8px] mb-[5px] shadow-lg">
                                    <img src="/assets/lighting-1.png" alt="Commercial Lighting Solutions" class="hover-image w-full h-full object-cover transition-transform duration-300 ease-in-out">
                                </div>
                                <div class="hover-image-wrapper w-[12vw] h-[18vh] overflow-hidden rounded-[8px] mb-[5px] shadow-lg">
                                    <img src="/assets/lighting-2.png" alt="Industrial Lighting" class="hover-image w-full h-full object-cover transition-transform duration-300 ease-in-out">
                                </div>
                                <div class="hover-image-wrapper w-[12vw] h-[18vh] overflow-hidden rounded-[8px] mb-[5px] shadow-lg">
                                    <img src="/assets/lighting-3.png" alt="LED Lighting Systems" class="hover-image w-full h-full object-cover transition-transform duration-300 ease-in-out">
                                </div>
                            </div>,&nbsp;
                            <!-- Solar -->
                            <span class="highlight-word relative cursor-pointer font-bold text-[1.2em] text-white/90 no-underline px-1 rounded transition-colors duration-300 ease-in-out" data-category="solar">solar</span>
                            <div class="hover-images-group absolute bottom-[120%] left-1/2 transform -translate-x-1/2 flex justify-center gap-[1vw] opacity-0 invisible transition-opacity duration-300 pointer-events-none z-10 group-hover:opacity-100 group-hover:visible" data-category="solar">
                                <div class="hover-image-wrapper w-[12vw] h-[18vh] overflow-hidden rounded-[8px] mb-[5px] shadow-lg">
                                    <img src="/assets/solar-1.png" alt="Solar Energy Systems" class="hover-image w-full h-full object-cover transition-transform duration-300 ease-in-out">
                                </div>
                                <div class="hover-image-wrapper w-[12vw] h-[18vh] overflow-hidden rounded-[8px] mb-[5px] shadow-lg">
                                    <img src="/assets/solar-2.png" alt="Commercial Solar Solutions" class="hover-image w-full h-full object-cover transition-transform duration-300 ease-in-out">
                                </div>
                                <div class="hover-image-wrapper w-[12vw] h-[18vh] overflow-hidden rounded-[8px] mb-[5px] shadow-lg">
                                    <img src="/assets/solar-3.png" alt="Solar Panel Installation" class="hover-image w-full h-full object-cover transition-transform duration-300 ease-in-out">
                                </div>
                            </div>, and&nbsp;
                            <!-- Transformers -->
                            <span class="highlight-word relative cursor-pointer font-bold text-[1.2em] text-white/90 no-underline px-1 rounded transition-colors duration-300 ease-in-out" data-category="transformers">transformers</span>
                            <div class="hover-images-group absolute bottom-[120%] left-1/2 transform -translate-x-1/2 flex justify-center gap-[1vw] opacity-0 invisible transition-opacity duration-300 pointer-events-none z-10 group-hover:opacity-100 group-hover:visible" data-category="transformers">
                                <div class="hover-image-wrapper w-[12vw] h-[18vh] overflow-hidden rounded-[8px] mb-[5px] shadow-lg">
                                    <img src="/assets/transformers-1.png" alt="Power Transformers" class="hover-image w-full h-full object-cover transition-transform duration-300 ease-in-out">
                                </div>
                                <div class="hover-image-wrapper w-[12vw] h-[18vh] overflow-hidden rounded-[8px] mb-[5px] shadow-lg">
                                    <img src="/assets/transformers-2.png" alt="Industrial Transformers" class="hover-image w-full h-full object-cover transition-transform duration-300 ease-in-out">
                                </div>
                                <div class="hover-image-wrapper w-[12vw] h-[18vh] overflow-hidden rounded-[8px] mb-[5px] shadow-lg">
                                    <img src="/assets/transformers-3.png" alt="Distribution Transformers" class="hover-image w-full h-full object-cover transition-transform duration-300 ease-in-out">
                                </div>
                            </div>
                            &nbsp;technologies.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <div class="splash-gradient-absolute absolute inset-0 w-full h-full">
        <div class="splash-gradient-sticky sticky top-0 overflow-hidden w-full h-screen">
            <div class="splash-gradient-inner w-full h-full opacity-0 filter brightness-[110%]">
                <div class="splash-gradient-1 absolute left-[-18%] top-0 w-[65vw] h-[65vw] rounded-full bg-[#fa6312] blur-[100px] hidden"></div>
                <div class="splash-gradient-2 absolute left-[38%] w-[55vw] h-[55vw] rounded-full bg-[#00e5d2] blur-[100px] hidden"></div>
                <div class="splash-gradient-3 absolute left-[26%] top-[9%] w-[41vw] h-[59vw] rounded-full bg-[#cf0bb0] blur-[100px] hidden"></div>
                <div class="splash-gradient-4 absolute left-[21%] top-[9%] z-20 w-[16vw] h-[48vw] rounded-full bg-[#ff002e] blur-[100px] hidden"></div>
                <img src="/assets/gradientwithgreenaswell.png" loading="lazy" alt="" class="splash-gradient-mobile block w-full h-screen">
            </div>
        </div>
        <div class="grain-overlay-splash absolute inset-0 z-10 hidden w-full h-full bg-[url('/assets/Grain.jpg')] bg-left-top bg-auto opacity-14 invert"></div>
    </div>

    <div class="lines-wrapper absolute inset-0 z-11 flex justify-around w-full h-full overflow-hidden">
        <div class="line w-px h-full bg-white opacity-20"></div>
        <div class="line w-px h-full bg-white opacity-20"></div>
        <div class="line w-px h-full bg-white opacity-20"></div>
        <div class="line w-px h-full bg-white opacity-20"></div>
        <div class="line w-px h-full bg-white opacity-20"></div>
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

  // Setup hover interactions
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
        if (activeGroup && activeGroup !== imageGroup) {
          activeGroup.classList.remove("active");
        }
        imageGroup.classList.add("opacity-100", "visible");
        activeGroup = imageGroup;
      });

      word.addEventListener("mouseleave", function (e) {
        e.stopPropagation();
        // Small delay to handle quick mouse movements
        setTimeout(() => {
          if (
            !word.matches(":hover") &&
            !imageGroup.matches(":hover")
          ) {
            imageGroup.classList.remove("opacity-100", "visible");
            if (activeGroup === imageGroup) {
              activeGroup = null;
            }
          }
        }, 100);
      });
    });
  }

  // Initialize hover effects when the DOM is ready
  document.addEventListener("DOMContentLoaded", () => {
    initHoverEffects();
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
