export const splashContent = `
<section id="splash" data-w-id="splash-section" class="radiant-splash s-splash" style="position: relative;">
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

    <div class="splash-inner" style="position: relative; z-index: 2;">
        <div id="w-node-div-block-21-7d08bc7f" class="huge-statement-wrapper">
            <div class="huge-statement">
                <div class="content-wrapper">
                    <h1 class="huge-text">Illuminating Tomorrow's <br>Energy Solutions</h1>
                    <div class="interactive-text-wrapper">
                        <p class="interactive-text paragraph white" style="position: relative; z-index: 50;">
                            Pioneering excellence in 
                            <span class="highlight-word" data-category="lighting" style="cursor: pointer; position: relative; display: inline-block; padding: 0 5px; transition: color 0.3s ease;">lighting</span>, 
                            <span class="highlight-word" data-category="solar" style="cursor: pointer; position: relative; display: inline-block; padding: 0 5px; transition: color 0.3s ease;">solar</span>, and
                            <span class="highlight-word" data-category="transformers" style="cursor: pointer; position: relative; display: inline-block; padding: 0 5px; transition: color 0.3s ease;">transformers</span>
                            technologies.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <div class="hover-images-container" style="position: fixed; top: 0; left: 0; width: 100vw; height: 100vh; pointer-events: none; z-index: 40; display: flex; align-items: center; justify-content: center;">
        <div class="hover-images-group" data-category="lighting" style="position: absolute; top: 50%; left: 50%; width: 100%; height: 100%; display: flex; align-items: center; justify-content: center; opacity: 0; visibility: hidden; transition: opacity 0.5s ease; transform: translate(-50%, -50%);">
            <div class="hover-image-wrapper" style="position: absolute; width: 25vw; height: 40vh; overflow: hidden; border-radius: 8px; opacity: 0; transform: translate(-20vw, -10vh) rotate(-15deg); transition: all 0.6s cubic-bezier(0.4, 0, 0.2, 1); border: 1px solid rgba(0, 229, 210, 0.3); background: rgba(0, 0, 0, 0.2);">
                <img src="/assets/lighting-1.png" alt="Commercial Lighting Solutions" class="hover-image" style="width: 100%; height: 100%; object-fit: cover;">
            </div>
            <div class="hover-image-wrapper" style="position: absolute; width: 25vw; height: 40vh; overflow: hidden; border-radius: 8px; opacity: 0; transform: translate(0, 0) rotate(10deg); transition: all 0.6s cubic-bezier(0.4, 0, 0.2, 1); border: 1px solid rgba(0, 229, 210, 0.3); background: rgba(0, 0, 0, 0.2);">
                <img src="/assets/lighting-2.png" alt="Industrial Lighting" class="hover-image" style="width: 100%; height: 100%; object-fit: cover;">
            </div>
            <div class="hover-image-wrapper" style="position: absolute; width: 25vw; height: 40vh; overflow: hidden; border-radius: 8px; opacity: 0; transform: translate(20vw, -5vh) rotate(-8deg); transition: all 0.6s cubic-bezier(0.4, 0, 0.2, 1); border: 1px solid rgba(0, 229, 210, 0.3); background: rgba(0, 0, 0, 0.2);">
                <img src="/assets/lighting-3.png" alt="LED Lighting Systems" class="hover-image" style="width: 100%; height: 100%; object-fit: cover;">
            </div>
        </div>

        <div class="hover-images-group" data-category="solar" style="position: absolute; top: 50%; left: 50%; width: 100%; height: 100%; display: flex; align-items: center; justify-content: center; opacity: 0; visibility: hidden; transition: opacity 0.5s ease; transform: translate(-50%, -50%);">
            <!-- Similar structure for solar images -->
            <div class="hover-image-wrapper" style="position: absolute; width: 25vw; height: 40vh; overflow: hidden; border-radius: 8px; opacity: 0; transform: translate(-25vw, -5vh) rotate(12deg); transition: all 0.6s cubic-bezier(0.4, 0, 0.2, 1); border: 1px solid rgba(252, 68, 15, 0.3); background: rgba(0, 0, 0, 0.2);">
                <img src="/assets/solar-3.png" alt="Solar Panel Installation" class="hover-image" style="width: 100%; height: 100%; object-fit: cover;">
            </div>
            <div class="hover-image-wrapper" style="position: absolute; width: 25vw; height: 40vh; overflow: hidden; border-radius: 8px; opacity: 0; transform: translate(0, 10vh) rotate(-5deg); transition: all 0.6s cubic-bezier(0.4, 0, 0.2, 1); border: 1px solid rgba(252, 68, 15, 0.3); background: rgba(0, 0, 0, 0.2);">
                <img src="/assets/solar-1.png" alt="Solar Energy Systems" class="hover-image" style="width: 100%; height: 100%; object-fit: cover;">
            </div>
            <div class="hover-image-wrapper" style="position: absolute; width: 25vw; height: 40vh; overflow: hidden; border-radius: 8px; opacity: 0; transform: translate(25vw, -15vh) rotate(7deg); transition: all 0.6s cubic-bezier(0.4, 0, 0.2, 1); border: 1px solid rgba(252, 68, 15, 0.3); background: rgba(0, 0, 0, 0.2);">
                <img src="/assets/solar-2.png" alt="Commercial Solar Solutions" class="hover-image" style="width: 100%; height: 100%; object-fit: cover;">
            </div>
        </div>

        <div class="hover-images-group" data-category="transformers" style="position: absolute; top: 50%; left: 50%; width: 100%; height: 100%; display: flex; align-items: center; justify-content: center; opacity: 0; visibility: hidden; transition: opacity 0.5s ease; transform: translate(-50%, -50%);">
            <!-- Similar structure for transformer images -->
            <div class="hover-image-wrapper" style="position: absolute; width: 25vw; height: 40vh; overflow: hidden; border-radius: 8px; opacity: 0; transform: translate(-20vw, 5vh) rotate(-10deg); transition: all 0.6s cubic-bezier(0.4, 0, 0.2, 1); border: 1px solid rgba(113, 167, 254, 0.3); background: rgba(0, 0, 0, 0.2);">
                <img src="/assets/transformers-1.png" alt="Power Transformers" class="hover-image" style="width: 100%; height: 100%; object-fit: cover;">
            </div>
            <div class="hover-image-wrapper" style="position: absolute; width: 25vw; height: 40vh; overflow: hidden; border-radius: 8px; opacity: 0; transform: translate(5vw, -10vh) rotate(15deg); transition: all 0.6s cubic-bezier(0.4, 0, 0.2, 1); border: 1px solid rgba(113, 167, 254, 0.3); background: rgba(0, 0, 0, 0.2);">
                <img src="/assets/transformers-2.png" alt="Industrial Transformers" class="hover-image" style="width: 100%; height: 100%; object-fit: cover;">
            </div>
            <div class="hover-image-wrapper" style="position: absolute; width: 25vw; height: 40vh; overflow: hidden; border-radius: 8px; opacity: 0; transform: translate(20vw, 10vh) rotate(-7deg); transition: all 0.6s cubic-bezier(0.4, 0, 0.2, 1); border: 1px solid rgba(113, 167, 254, 0.3); background: rgba(0, 0, 0, 0.2);">
                <img src="/assets/transformers-3.png" alt="Distribution Transformers" class="hover-image" style="width: 100%; height: 100%; object-fit: cover;">
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
    const splashContainer = document.getElementById("splash-content");
    if (!splashContainer) {
        console.error("Splash content container not found");
        return;
    }
    splashContainer.innerHTML = splashContent;

    const words = document.querySelectorAll(".highlight-word");
    let activeGroup = null;

    words.forEach((word) => {
        const category = word.dataset.category;
        const imageGroup = document.querySelector(
            `.hover-images-group[data-category="${category}"]`
        );

        if (!imageGroup) return;

        word.addEventListener("mouseenter", () => {
            if (activeGroup) {
                activeGroup.style.opacity = "0";
                activeGroup.style.visibility = "hidden";
                activeGroup.querySelectorAll('.hover-image-wrapper').forEach(wrapper => {
                    wrapper.style.opacity = "0";
                    wrapper.style.transform = wrapper.dataset.initialTransform || "none";
                });
            }
            
            imageGroup.querySelectorAll('.hover-image-wrapper').forEach((wrapper, index) => {
                if (!wrapper.dataset.initialTransform) {
                    wrapper.dataset.initialTransform = wrapper.style.transform;
                }
                setTimeout(() => {
                    wrapper.style.opacity = "1";
                    wrapper.style.transform = "translate(0, 0) rotate(0deg)";
                }, index * 100);
            });

            imageGroup.style.opacity = "1";
            imageGroup.style.visibility = "visible";
            activeGroup = imageGroup;
            word.style.color = "#00e5d2";
        });

        word.addEventListener("mouseleave", () => {
            setTimeout(() => {
                if (!word.matches(":hover")) {
                    imageGroup.style.opacity = "0";
                    imageGroup.style.visibility = "hidden";
                    word.style.color = "";
                    
                    imageGroup.querySelectorAll('.hover-image-wrapper').forEach(wrapper => {
                        wrapper.style.opacity = "0";
                        wrapper.style.transform = wrapper.dataset.initialTransform || "none";
                    });
                    
                    activeGroup = null;
                }
            }, 300);
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