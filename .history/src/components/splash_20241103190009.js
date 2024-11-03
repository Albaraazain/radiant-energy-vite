// src/components/splash.js
export const splashContent = `
<!-- Tailwind CSS is assumed to be included in your project -->

<!-- Updated HTML Content with Tailwind CSS -->
<section id="splash" data-w-id="splash-section" class="radiant-splash s-splash relative h-[450vh] mb-[100px] flex flex-col justify-start items-center">
    <!-- Triggers and shapes omitted for brevity -->

    <div class="splash-inner sticky top-0 z-40 grid h-screen pb-[5vw] place-items-center grid-cols-1 grid-rows-3">
        <div id="w-node-div-block-21-7d08bc7f" class="huge-statement-wrapper relative z-30 flex flex-col justify-center items-center row-start-2 row-end-3">
            <div class="huge-statement max-w-[90%] mx-auto text-white text-center">
                <div class="content-wrapper mx-auto px-[9vw]">
                    <h1 class="huge-text mt-0 mb-0 text-[7.5vw] leading-[1.1em] font-semibold">Illuminating Tomorrow's <br>Energy Solutions</h1>
                    <div class="interactive-text-wrapper relative inline-block">
                        <p class="interactive-text paragraph white text-base leading-[1.3em] mt-0 mb-0 text-white">
                            Pioneering excellence in&nbsp;
                            <!-- Lighting -->
                            <div class="inline-block group">
                                <span class="highlight-word relative cursor-pointer font-bold text-[1.2em] text-white/90 no-underline px-1 rounded transition-colors duration-300 ease-in-out">lighting</span>
                                <div class="hover-images-group absolute bottom-[120%] left-1/2 transform -translate-x-1/2 flex justify-center gap-[1vw] opacity-0 invisible transition-opacity duration-300 pointer-events-none z-10 group-hover:opacity-100 group-hover:visible">
                                    <div class="hover-image-wrapper w-[12vw] h-[18vh] overflow-hidden rounded-[8px] mb-[5px] shadow-lg">
                                        <img src="/assets/lighting-1.png" alt="Commercial Lighting Solutions" class="hover-image w-full h-full object-cover transition-transform duration-300 ease-in-out transform hover:scale-105">
                                    </div>
                                    <!-- Other images -->
                                </div>
                            </div>,&nbsp;
                            <!-- Solar -->
                            <div class="inline-block group">
                                <span class="highlight-word relative cursor-pointer font-bold text-[1.2em] text-white/90 no-underline px-1 rounded transition-colors duration-300 ease-in-out">solar</span>
                                <div class="hover-images-group absolute bottom-[120%] left-1/2 transform -translate-x-1/2 flex justify-center gap-[1vw] opacity-0 invisible transition-opacity duration-300 pointer-events-none z-10 group-hover:opacity-100 group-hover:visible">
                                    <!-- Image wrappers -->
                                </div>
                            </div>, and&nbsp;
                            <!-- Transformers -->
                            <div class="inline-block group">
                                <span class="highlight-word relative cursor-pointer font-bold text-[1.2em] text-white/90 no-underline px-1 rounded transition-colors duration-300 ease-in-out">transformers</span>
                                <div class="hover-images-group absolute bottom-[120%] left-1/2 transform -translate-x-1/2 flex justify-center gap-[1vw] opacity-0 invisible transition-opacity duration-300 pointer-events-none z-10 group-hover:opacity-100 group-hover:visible">
                                    <!-- Image wrappers -->
                                </div>
                            </div>
                            &nbsp;technologies.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <!-- Other elements omitted for brevity -->
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

  // Hover effects are now handled via CSS, so we can remove the hover interaction JavaScript.

  // Initialize entrance animations (if any)
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