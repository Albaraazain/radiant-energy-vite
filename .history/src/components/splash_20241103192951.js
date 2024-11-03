// src/components/splash.js
export const splashContent = `
<!-- Tailwind CSS is assumed to be included in your project -->

<!-- Full HTML Content with Tailwind CSS -->
<section id="splash" data-w-id="splash-section" class="radiant-splash s-splash relative h-[450vh] mb-[100px] flex flex-col justify-start items-center">
    <!-- Background Gradient -->
    <div class="splash-gradient absolute inset-0 z-10 overflow-hidden">
        <div class="splash-gradient-inner absolute inset-0 bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 opacity-60"></div>
    </div>

    <!-- Decorative Shapes -->
    <div class="splash-shapes absolute inset-0 z-20 pointer-events-none">
        <!-- Example shapes -->
        <div class="shape-circle absolute w-[200px] h-[200px] bg-blue-500 rounded-full top-[10%] left-[15%] opacity-30"></div>
        <div class="shape-triangle absolute w-0 h-0 border-l-[50px] border-r-[50px] border-b-[100px] border-l-transparent border-r-transparent border-b-yellow-500 top-[30%] right-[20%] opacity-30"></div>
        <!-- Add more shapes as needed -->
    </div>

    <!-- Main Content -->
    <div class="splash-inner sticky top-0 z-40 grid h-screen pb-[5vw] place-items-center grid-cols-1 grid-rows-3">
        <!-- Statement Section -->
        <div class="huge-statement-wrapper relative z-30 flex flex-col justify-center items-center row-start-2 row-end-3">
            <div class="huge-statement max-w-[90%] mx-auto text-white text-center">
                <div class="content-wrapper mx-auto px-[9vw]">
                    <!-- Title -->
                    <h1 class="huge-text mt-0 mb-4 text-[7.5vw] leading-[1.1em] font-semibold animate-in">Illuminating Tomorrow's <br>Energy Solutions</h1>
                    <!-- Interactive Text -->
                    <div class="interactive-text-wrapper relative inline-block mt-4">
                        <p class="interactive-text paragraph mb-3 text-base leading-[1.3em] mt-0 text-white max-w-full whitespace-nowrap overflow-hidden">
                            Pioneering excellence in&nbsp;
                            <!-- Lighting -->
                            <div class="inline-block group relative">
                                <span class="highlight-word relative cursor-pointer font-bold text-[2em] text-yellow-300 underline px-1 rounded transition-colors duration-300 ease-in-out hover:text-yellow-400 underline-offset-4">lighting</span>
                                <div class="hover-images-group absolute bottom-[150%] left-1/2 transform -translate-x-1/2 flex justify-center items-center gap-2 opacity-0 invisible transition-opacity duration-300 pointer-events-none z-10 group-hover:opacity-100 group-hover:visible">
                                    <!-- Images -->
                                    <div class="hover-image-wrapper relative w-[22vw] h-[32vh] overflow-hidden rounded-[8px] shadow-lg transform transition-transform duration-300 ease-in-out group-hover:translate-y-0 group-hover:opacity-100">
                                        <img src="/assets/lighting-1.png" alt="Commercial Lighting Solutions" class="hover-image absolute inset-0 w-full h-full object-cover">
                                    </div>
                                    <div class="hover-image-wrapper relative w-[22vw] h-[32vh] overflow-hidden rounded-[8px] shadow-lg transform translate-y-4 transition-transform duration-300 ease-in-out group-hover:translate-y-0 group-hover:opacity-100">
                                        <img src="/assets/lighting-2.png" alt="Industrial Lighting" class="hover-image absolute inset-0 w-full h-full object-cover">
                                    </div>
                                    <div class="hover-image-wrapper relative w-[22vw] h-[32vh] overflow-hidden rounded-[8px] shadow-lg transform translate-y-8 transition-transform duration-300 ease-in-out group-hover:translate-y-0 group-hover:opacity-100">
                                        <img src="/assets/lighting-3.png" alt="LED Lighting Systems" class="hover-image absolute inset-0 w-full h-full object-cover">
                                    </div>
                                </div>
                            </div>,&nbsp;
                            <!-- Solar -->
                            <div class="inline-block group relative">
                                <span class="highlight-word relative cursor-pointer font-bold text-[2em] text-yellow-300 underline px-1 rounded transition-colors duration-300 ease-in-out hover:text-yellow-400 underline-offset-4">solar</span>
                                <div class="hover-images-group absolute bottom-[150%] left-1/2 transform -translate-x-1/2 flex justify-center items-center gap-2 opacity-0 invisible transition-opacity duration-300 pointer-events-none z-10 group-hover:opacity-100 group-hover:visible">
                                    <!-- Images -->
                                    <div class="hover-image-wrapper relative w-[22vw] h-[32vh] overflow-hidden rounded-[8px] shadow-lg transform transition-transform duration-300 ease-in-out group-hover:translate-y-0 group-hover:opacity-100">
                                        <img src="/assets/solar-1.png" alt="Solar Energy Systems" class="hover-image absolute inset-0 w-full h-full object-cover">
                                    </div>
                                    <div class="hover-image-wrapper relative w-[22vw] h-[32vh] overflow-hidden rounded-[8px] shadow-lg transform -translate-y-4 transition-transform duration-300 ease-in-out group-hover:translate-y-0 group-hover:opacity-100">
                                        <img src="/assets/solar-2.png" alt="Commercial Solar Solutions" class="hover-image absolute inset-0 w-full h-full object-cover">
                                    </div>
                                    <div class="hover-image-wrapper relative w-[22vw] h-[32vh] overflow-hidden rounded-[8px] shadow-lg transform -translate-y-8 transition-transform duration-300 ease-in-out group-hover:translate-y-0 group-hover:opacity-100">
                                        <img src="/assets/solar-3.png" alt="Solar Panel Installation" class="hover-image absolute inset-0 w-full h-full object-cover">
                                    </div>
                                </div>
                            </div>, and&nbsp;
                            <!-- Transformers -->
                            <div class="inline-block group relative">
                                <span class="highlight-word relative cursor-pointer font-bold text-[2em] text-yellow-300 underline px-1 rounded transition-colors duration-300 ease-in-out hover:text-yellow-400 underline-offset-4">transformers</span>
                                <div class="hover-images-group absolute bottom-[150%] left-1/2 transform -translate-x-1/2 flex justify-center items-center gap-2 opacity-0 invisible transition-opacity duration-300 pointer-events-none z-10 group-hover:opacity-100 group-hover:visible">
                                    <!-- Images -->
                                    <div class="hover-image-wrapper relative w-[22vw] h-[32vh] overflow-hidden rounded-[8px] shadow-lg transform transition-transform duration-300 ease-in-out group-hover:translate-y-0 group-hover:opacity-100">
                                        <img src="/assets/transformers-1.png" alt="Power Transformers" class="hover-image absolute inset-0 w-full h-full object-cover">
                                    </div>
                                    <div class="hover-image-wrapper relative w-[22vw] h-[32vh] overflow-hidden rounded-[8px] shadow-lg transform translate-y-4 transition-transform duration-300 ease-in-out group-hover:translate-y-0 group-hover:opacity-100">
                                        <img src="/assets/transformers-2.png" alt="Industrial Transformers" class="hover-image absolute inset-0 w-full h-full object-cover">
                                    </div>
                                    <div class="hover-image-wrapper relative w-[22vw] h-[32vh] overflow-hidden rounded-[8px] shadow-lg transform translate-y-8 transition-transform duration-300 ease-in-out group-hover:translate-y-0 group-hover:opacity-100">
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

        <!-- Scroll Indicator -->
        <div class="scroll-indicator absolute bottom-10 left-1/2 transform -translate-x-1/2 z-50 flex flex-col items-center">
            <span class="scroll-text text-white text-sm mb-2">Scroll Down</span>
            <div class="scroll-arrow w-6 h-6 border-b-2 border-r-2 border-white transform rotate-45"></div>
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
