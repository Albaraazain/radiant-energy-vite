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
        background: #000;
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

const additionalStyles = `
    .s_prev, .s_next {
        position: relative;
        width: 3.385vw;
        height: 100%;
        background: transparent;
        border-radius: 100%;
        border: 0.052vw solid #fff;
        transition: 0.35s;
        cursor: pointer;
    }

    .s_prev span {
        background: url("data:image/svg+xml,%3Csvg width='25' height='20' viewBox='0 0 25 20' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0.585785 9.58579C0.195262 9.97631 0.195262 10.6095 0.585785 11L7.58579 18C7.97631 18.3905 8.60948 18.3905 9 18C9.39052 17.6095 9.39052 16.9763 9 16.5858L2.91422 10.5L9 4.41421C9.39052 4.02369 9.39052 3.39052 9 3C8.60948 2.60948 7.97631 2.60948 7.58579 3L0.585785 9.58579ZM25 9.25L1.5 9.25V11.25L25 11.25V9.25Z' fill='white'/%3E%3C/svg%3E") no-repeat center;
        width: 100%;
        height: 100%;
        transition: 0.35s;
        display: block;
        position: absolute;
        top: 0;
        left: 0;
        bottom: 0;
        right: 0;
        margin: auto;
    }

    .s_next span {
        background: url("data:image/svg+xml,%3Csvg width='25' height='20' viewBox='0 0 25 20' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M24.4142 11C24.8047 10.6095 24.8047 9.97631 24.4142 9.58579L17.4142 2.58579C17.0237 2.19526 16.3905 2.19526 16 2.58579C15.6095 2.97631 15.6095 3.60948 16 4L22.0858 10.5L16 16.5858C15.6095 16.9763 15.6095 17.6095 16 18C16.3905 18.3905 17.0237 18.3905 17.4142 18L24.4142 11.4142L24.4142 11ZM0 11.25L23.5 11.25L23.5 9.25L0 9.25L0 11.25Z' fill='white'/%3E%3C/svg%3E") no-repeat center;
        width: 100%;
        height: 100%;
        transition: 0.35s;
        display: block;
        position: absolute;
        top: 0;
        left: 0;
        bottom: 0;
        right: 0;
        margin: auto;
    }

    .s_prev:hover, .s_next:hover {
        background: #000;
    }

    .s_prev:hover span {
        background: url("data:image/svg+xml,%3Csvg width='25' height='20' viewBox='0 0 25 20' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0.585785 9.58579C0.195262 9.97631 0.195262 10.6095 0.585785 11L7.58579 18C7.97631 18.3905 8.60948 18.3905 9 18C9.39052 17.6095 9.39052 16.9763 9 16.5858L2.91422 10.5L9 4.41421C9.39052 4.02369 9.39052 3.39052 9 3C8.60948 2.60948 7.97631 2.60948 7.58579 3L0.585785 9.58579ZM25 9.25L1.5 9.25V11.25L25 11.25V9.25Z' fill='%230f1318'/%3E%3C/svg%3E") no-repeat center;
    }

    .s_next:hover span {
        background: url("data:image/svg+xml,%3Csvg width='25' height='20' viewBox='0 0 25 20' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M24.4142 11C24.8047 10.6095 24.8047 9.97631 24.4142 9.58579L17.4142 2.58579C17.0237 2.19526 16.3905 2.19526 16 2.58579C15.6095 2.97631 15.6095 3.60948 16 4L22.0858 10.5L16 16.5858C15.6095 16.9763 15.6095 17.6095 16 18C16.3905 18.3905 17.0237 18.3905 17.4142 18L24.4142 11.4142L24.4142 11ZM0 11.25L23.5 11.25L23.5 9.25L0 9.25L0 11.25Z' fill='%230f1318'/%3E%3C/svg%3E") no-repeat center;
    }

    @media (max-width: 768px) {
        .mn_slr {
            height: 519px;
            padding-left: 10px;
        }

        .swiper-slide {
            width: 355px;
        }

        .s_nav {
            width: 101px;
            height: 48px;
            margin: 42px auto 0;
        }

        .s_prev, .s_next {
            width: 48px;
            border: 1px solid #000;
        }

        .s_prev span, .s_next span {
            width: 18px;
            height: 13px;
        }

        .h4 {
            font-size: 27px;
            line-height: 30px;
        }

        .s_ttl p {
            font-size: 13px;
            line-height: 18px;
            margin-top: 21px;
        }

        .s_prev span {
            background: url("data:image/svg+xml,%3Csvg width='25' height='20' viewBox='0 0 25 20' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0.585785 9.58579C0.195262 9.97631 0.195262 10.6095 0.585785 11L7.58579 18C7.97631 18.3905 8.60948 18.3905 9 18C9.39052 17.6095 9.39052 16.9763 9 16.5858L2.91422 10.5L9 4.41421C9.39052 4.02369 9.39052 3.39052 9 3C8.60948 2.60948 7.97631 2.60948 7.58579 3L0.585785 9.58579ZM25 9.25L1.5 9.25V11.25L25 11.25V9.25Z' fill='%230f1318'/%3E%3C/svg%3E") no-repeat center;
        }

        .s_next span {
            background: url("data:image/svg+xml,%3Csvg width='25' height='20' viewBox='0 0 25 20' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M24.4142 11C24.8047 10.6095 24.8047 9.97631 24.4142 9.58579L17.4142 2.58579C17.0237 2.19526 16.3905 2.19526 16 2.58579C15.6095 2.97631 15.6095 3.60948 16 4L22.0858 10.5L16 16.5858C15.6095 16.9763 15.6095 17.6095 16 18C16.3905 18.3905 17.0237 18.3905 17.4142 18L24.4142 11.4142L24.4142 11ZM0 11.25L23.5 11.25L23.5 9.25L0 9.25L0 11.25Z' fill='%230f1318'/%3E%3C/svg%3E") no-repeat center;
        }
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
        speed: 800,
        effect: 'fade',
        fadeEffect: {
            crossFade: true
        },
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