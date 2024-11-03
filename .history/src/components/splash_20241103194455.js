// src/components/splash.js
export const splashContent = `
<!-- Tailwind CSS is assumed to be included in your project -->

<!-- Full HTML Content with Tailwind CSS -->
<section id="splash" data-w-id="splash-section" class="radiant-splash s-splash relative h-[450vh] mb-[100px] flex flex-col justify-start items-center">
    <!-- Main Content -->
    <div class="splash-inner sticky top-0 z-40 grid h-screen pb-[5vw] place-items-center grid-cols-1 grid-rows-3">
        <div class="huge-statement-wrapper relative z-30 flex flex-col justify-center items-center row-start-2 row-end-3">
            <div class="huge-statement max-w-[90%] mx-auto text-white text-center">
                <div class="content-wrapper mx-auto px-[9vw]">
                    <!-- Title -->
                    <h1 class="huge-text mt-0 mb-4 text-[7.5vw] leading-[1.1em] font-semibold">Illuminating Tomorrow's <br>Energy Solutions</h1>
                    <!-- Interactive Text -->
                    <div class="interactive-text-wrapper relative inline-block mt-4">
                        <p class="interactive-text paragraph mb-3 text-base leading-[1.3em] mt-0 text-white max-w-full whitespace-nowrap overflow-hidden">
                            Pioneering excellence in&nbsp;
                            <!-- Lighting -->
                            <div class="inline-block group">
                                <span class="highlight-word relative cursor-pointer font-bold text-[2.5em] text-white underline px-1 rounded transition duration-300 ease-in-out hover:text-gray-300 underline-offset-4">lighting</span>
                                <div class="hover-images-group absolute bottom-[150%] left-1/2 transform -translate-x-1/2 flex justify-center items-center gap-6 opacity-0 invisible transition-all duration-700 pointer-events-none z-10 group-hover:opacity-100 group-hover:visible">
                                    <!-- Further increased image sizes and enhanced smooth animations -->
                                    <div class="hover-image-wrapper relative w-[35vw] h-[45vh] overflow-hidden rounded-[8px] shadow-lg transform transition-transform duration-700 ease-in-out translate-y-16 group-hover:translate-y-0 group-hover:opacity-100">
                                        <img src="/assets/lighting-1.png" alt="Commercial Lighting Solutions" class="hover-image absolute inset-0 w-full h-full object-cover">
                                    </div>
                                    <div class="hover-image-wrapper relative w-[35vw] h-[45vh] overflow-hidden rounded-[8px] shadow-lg transform transition-transform duration-700 ease-in-out translate-y-24 group-hover:translate-y-0 group-hover:opacity-100">
                                        <img src="/assets/lighting-2.png" alt="Industrial Lighting" class="hover-image absolute inset-0 w-full h-full object-cover">
                                    </div>
                                    <div class="hover-image-wrapper relative w-[35vw] h-[45vh] overflow-hidden rounded-[8px] shadow-lg transform transition-transform duration-700 ease-in-out translate-y-32 group-hover:translate-y-0 group-hover:opacity-100">
                                        <img src="/assets/lighting-3.png" alt="LED Lighting Systems" class="hover-image absolute inset-0 w-full h-full object-cover">
                                    </div>
                                </div>
                            </div>,&nbsp;
                            <!-- Solar -->
                            <div class="inline-block group">
                                <span class="highlight-word relative cursor-pointer font-bold text-[2.5em] text-white underline px-1 rounded transition duration-300 ease-in-out hover:text-gray-300 underline-offset-4">solar</span>
                                <div class="hover-images-group absolute bottom-[150%] left-1/2 transform -translate-x-1/2 flex justify-center items-center gap-6 opacity-0 invisible transition-all duration-700 pointer-events-none z-10 group-hover:opacity-100 group-hover:visible">
                                    <!-- Further increased image sizes and enhanced smooth animations -->
                                    <div class="hover-image-wrapper relative w-[35vw] h-[45vh] overflow-hidden rounded-[8px] shadow-lg transform transition-transform duration-700 ease-in-out translate-y-16 group-hover:translate-y-0 group-hover:opacity-100">
                                        <img src="/assets/solar-1.png" alt="Solar Energy Systems" class="hover-image absolute inset-0 w-full h-full object-cover">
                                    </div>
                                    <div class="hover-image-wrapper relative w-[35vw] h-[45vh] overflow-hidden rounded-[8px] shadow-lg transform transition-transform duration-700 ease-in-out translate-y-24 group-hover:translate-y-0 group-hover:opacity-100">
                                        <img src="/assets/solar-2.png" alt="Commercial Solar Solutions" class="hover-image absolute inset-0 w-full h-full object-cover">
                                    </div>
                                    <div class="hover-image-wrapper relative w-[35vw] h-[45vh] overflow-hidden rounded-[8px] shadow-lg transform transition-transform duration-700 ease-in-out translate-y-32 group-hover:translate-y-0 group-hover:opacity-100">
                                        <img src="/assets/solar-3.png" alt="Solar Panel Installation" class="hover-image absolute inset-0 w-full h-full object-cover">
                                    </div>
                                </div>
                            </div>, and&nbsp;
                            <!-- Transformers -->
                            <div class="inline-block group">
                                <span class="highlight-word relative cursor-pointer font-bold text-[2.5em] text-white underline px-1 rounded transition duration-300 ease-in-out hover:text-gray-300 underline-offset-4">transformers</span>
                                <div class="hover-images-group absolute bottom-[150%] left-1/2 transform -translate-x-1/2 flex justify-center items-center gap-6 opacity-0 invisible transition-all duration-700 pointer-events-none z-10 group-hover:opacity-100 group-hover:visible">
                                    <!-- Further increased image sizes and enhanced smooth animations -->
                                    <div class="hover-image-wrapper relative w-[35vw] h-[45vh] overflow-hidden rounded-[8px] shadow-lg transform transition-transform duration-700 ease-in-out translate-y-16 group-hover:translate-y-0 group-hover:opacity-100">
                                        <img src="/assets/transformers-1.png" alt="Power Transformers" class="hover-image absolute inset-0 w-full h-full object-cover">
                                    </div>
                                    <div class="hover-image-wrapper relative w-[35vw] h-[45vh] overflow-hidden rounded-[8px] shadow-lg transform transition-transform duration-700 ease-in-out translate-y-24 group-hover:translate-y-0 group-hover:opacity-100">
                                        <img src="/assets/transformers-2.png" alt="Industrial Transformers" class="hover-image absolute inset-0 w-full h-full object-cover">
                                    </div>
                                    <div class="hover-image-wrapper relative w-[35vw] h-[45vh] overflow-hidden rounded-[8px] shadow-lg transform transition-transform duration-700 ease-in-out translate-y-32 group-hover:translate-y-0 group-hover:opacity-100">
                                        <img src="/assets/transformers-3.png" alt="Distribution Transformers" class="hover-image absolute inset-0 w-full h-full object-cover">
                                    </div>
                                </div>
                            </div>
                            &nbsp;technologies.
                        </p>
                    </div>
                </div>
            </div>
        </div>

        <!-- Included HTML snippet placed at the bottom -->
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

  // Initialize entrance animations
  const title = document.querySelector(".huge-text");
  const text = document.querySelector(".interactive-text");

  requestAnimationFrame(() => {
    if (title) title.classList.add("animate-in");
    setTimeout(() => {
      if (text) text.classList.add("animate-in");
    }, 500);
  });

  // Initialize gradient rotation
  const gradientInner = document.querySelector(".splash-gradient-inner");
  if (gradientInner) {
    let rotation = 0;
    const rotateGradient = () => {
      rotation += 0.05;
      gradientInner.style.transform = `rotate(${rotation}deg)`;
      requestAnimationFrame(rotateGradient);
    };
    requestAnimationFrame(rotateGradient);
  }
}
