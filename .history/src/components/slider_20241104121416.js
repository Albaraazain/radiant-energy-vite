// industrial-slider.js
import Swiper from 'swiper';
import { Navigation, EffectFade } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';

// Initialize Swiper with modules
Swiper.use([Navigation, EffectFade]);

export const industrialSliderContent = `
<section id="industrial-showcase" class="s-industrial-slider">
    <div class="mn_slr_wrap">
        <div class="swiper mn_slr">
            <div class="swiper-wrapper">
                <div class="swiper-slide">
                    <div class="caption">
                        <img src="/assets/lighting-2.png" alt="Industrial project showcase">
                        <div class="s_ttl">
                            <div class="h4">Свои строительные <span class="br">бригады</span></div>
                            <p>Проверенные профессионалы</p>
                        </div>
                        <div class="ovr"></div>
                    </div>
                </div>
                <div class="swiper-slide">
                    <div class="caption">
                        <img src="/assets/solar-5.png" alt="Industrial project showcase">
                        <div class="s_ttl">
                            <div class="h4">Полная проверка <span class="br">комплектующих</span></div>
                            <p>Комплексная проверка всех комплектующих.</p>
                        </div>
                        <div class="ovr"></div>
                    </div>
                </div>
                <div class="swiper-slide">
                    <div class="caption">
                        <img src="/assets/industrial-3.png" alt="Industrial project showcase">
                        <div class="s_ttl">
                            <div class="h4">Свои строительные <span class="br">бригады</span></div>
                            <p>Проверенные профессионалы</p>
                        </div>
                        <div class="ovr"></div>
                    </div>
                </div>
            </div>
        </div>
        <div class="s_nav">
            <div class="s_prev"><span></span></div>
            <div class="s_next"><span></span></div>
        </div>
    </div>
</section>
`;

const industrialSliderStyles = `
    .s-industrial-slider {
        position: relative;
        z-index: 1;
        background: #000
    }

    .mn_slr_wrap {
        position: relative;
        overflow: hidden;
        z-index: 10;
    }

    .mn_slr {
        height: 36.51vw;
        padding-left: 25.26vw;
    }

    .swiper-slide {
        width: 56.719vw;
    }

    .caption {
        position: relative;
        height: 100%;
        overflow: hidden;
    }

    .caption img {
        position: absolute;
        top: 0;
        left: 0;
        bottom: 0;
        right: 0;
        margin: auto;
        object-fit: cover;
        object-position: 50% 50%;
        width: 100%;
        height: 100%;
        transform-origin: 0 0;
        transform: scale(0.85);
        transition: 1.4s;
    }

    .swiper-slide-active .caption img {
        transform: scale(1);
    }

    .s_ttl {
        position: relative;
        z-index: 20;
        padding: 2.917vw 2.76vw;
    }

    .h4 {
        color: #fff;
        font-size: 1.875vw;
        line-height: 2.135vw;
        letter-spacing: -0.047vw;
    }

    .s_ttl p {
        color: rgba(255,255,255,0.6);
        font-size: 0.833vw;
        line-height: 2.135vw;
        letter-spacing: 0.008vw;
        margin: 1.927vw 0 0;
    }

    .ovr {
        position: absolute;
        top: 0;
        left: 0;
        bottom: 0;
        right: 0;
        margin: auto;
        width: 100%;
        height: 100%;
        background: #0f1318;
        transform-origin: 0 50%;
        z-index: 20;
        transform: scale(1, 1);
        transition: transform 0.7s ease-in-out;
    }

    .s_nav {
        position: relative;
        width: 7.083vw;
        height: 3.385vw;
        display: flex;
        justify-content: space-between;
        margin-top: 2vw;
        margin-left: 28.021vw;
    }
`;

const industrialSliderStyles = `
    .s-industrial-slider {
        position: relative;
        z-index: 1;
    }

    .mn_slr_wrap {
        position: relative;
        overflow: hidden;
        z-index: 10;
    }

    .mn_slr {
        height: 36.51vw;
        padding-left: 25.26vw;
    }

    .swiper-slide {
        width: 56.719vw;
        opacity: 0.4;
        transition: opacity 0.5s ease;
    }

    .swiper-slide-active {
        opacity: 1;
    }

    .caption {
        position: relative;
        height: 100%;
        overflow: hidden;
    }

    .caption img {
        position: absolute;
        top: 0;
        left: 0;
        bottom: 0;
        right: 0;
        margin: auto;
        object-fit: cover;
        object-position: 50% 50%;
        width: 100%;
        height: 100%;
        transform-origin: center center;
        transform: scale(1);
        transition: transform 0.8s cubic-bezier(0.4, 0, 0.2, 1);
    }

    .swiper-slide-active .caption img {
        transform: scale(1.05);
    }

    .s_ttl {
        position: relative;
        z-index: 20;
        padding: 2.917vw 2.76vw;
        opacity: 0;
        transform: translateY(20px);
        transition: all 0.5s ease 0.2s;
    }

    .swiper-slide-active .s_ttl {
        opacity: 1;
        transform: translateY(0);
    }

    .h4 {
        color: #fff;
        font-size: 1.875vw;
        line-height: 2.135vw;
        letter-spacing: -0.047vw;
    }

    .s_ttl p {
        color: rgba(255,255,255,0.6);
        font-size: 0.833vw;
        line-height: 2.135vw;
        letter-spacing: 0.008vw;
        margin: 1.927vw 0 0;
    }

    .ovr {
        position: absolute;
        top: 0;
        left: 0;
        bottom: 0;
        right: 0;
        margin: auto;
        width: 100%;
        height: 100%;
        background: #000;
        transform-origin: center;
        z-index: 20;
        transform: scaleX(1);
        transition: transform 0.6s cubic-bezier(0.4, 0, 0.2, 1);
    }

    .swiper-slide-active .ovr {
        transform: scaleX(0);
    }

    .s_nav {
        position: relative;
        width: 7.083vw;
        height: 3.385vw;
        display: flex;
        justify-content: space-between;
        margin-top: 2vw;
        margin-left: 28.021vw;
    }
`;

export function initIndustrialSlider() {
    // First add the styles
    const styleSheet = document.createElement('style');
    styleSheet.textContent = industrialSliderStyles + additionalStyles;
    document.head.appendChild(styleSheet);

    // Create temporary container
    const temp = document.createElement('div');
    temp.innerHTML = industrialSliderContent;
    
    // Find the element after which we want to insert our slider
    const ballSection = document.getElementById('ball');
    if (ballSection && ballSection.parentNode) {
        ballSection.parentNode.insertBefore(temp.firstElementChild, ballSection.nextSibling);
    } else {
        // Fallback: append to body if target element not found
        document.body.appendChild(temp.firstElementChild);
    }

    // Initialize Swiper
    const swiper = new Swiper('.mn_slr', {
        slidesPerView: 'auto',
        spaceBetween: 25,
        speed: 1000,
        navigation: {
            nextEl: '.s_next',
            prevEl: '.s_prev'
        },
        on: {
            init: function() {
                updateSlides(this);
            },
            slideChange: function() {
                updateSlides(this);
            }
        }
    });

    function updateSlides(swiper) {
        const slides = swiper.slides;
        slides.forEach((slide, index) => {
            const overlay = slide.querySelector('.ovr');
            if (overlay) {
                if (index === swiper.activeIndex) {
                    overlay.style.transform = 'scale(0, 1)';
                } else {
                    overlay.style.transform = 'scale(1, 1)';
                }
            }
        });
    }

    // // Optional: Initialize ScrollTrigger animation if GSAP is available
    // if (window.gsap && window.ScrollTrigger) {
    //     gsap.from('.mn_slr_wrap', {
    //         scrollTrigger: {
    //             trigger: '.s-industrial-slider',
    //             start: 'top center',
    //             end: 'bottom center',
    //             scrub: true
    //         },
    //         y: 100,
    //         opacity: 0
    //     });
    // }
}