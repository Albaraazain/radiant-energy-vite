// industrial-slider.js
import Swiper from 'swiper';
import { Navigation, EffectFade, EffectCreative, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/effect-creative';

// Initialize Swiper with additional modules
Swiper.use([Navigation, EffectFade, EffectCreative, Autoplay]);

const industrialSliderStyles = `
    .s-industrial-slider {
        position: relative;
        z-index: 1;
        height: 100vh;
        padding-top: 20vh;
    }

    .s-industrial-slider.is-sticky {
        position: sticky;
        top: 50%;
        transform: translateY(-50%);
    }

    .s-industrial-slider.is-bottom {
        position: relative;
    }

    .mn_slr_wrap {
        position: relative;
        overflow: hidden;
        z-index: 10;
        background: #000;
    }

    .mn_slr {
        height: 36.51vw;
        padding-left: 25.26vw;
    }

    .swiper-slide {
        width: 56.719vw;
        transform: scale(0.85) translateX(0);
        transition: all 1.2s cubic-bezier(0.4, 0, 0.2, 1);
        opacity: 0.5;
        filter: grayscale(100%);
        visibility: visible !important;
    }

    .swiper-slide-active {
        transform: scale(1) translateX(0);
        opacity: 1;
        filter: grayscale(0%);
    }
    
    .swiper-slide-prev {
        transform: scale(0.85) translateX(0);
        opacity: 0.5;
        pointer-events: auto;
    }
    
    .swiper-slide-next {
        transform: scale(0.85) translateX(0);
        opacity: 0.5;
        pointer-events: auto;
    }

    .caption {
        position: relative;
        height: 100%;
        overflow: hidden;
        border-radius: 8px;
        transform: translateZ(0);
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
        transition: transform 1.2s cubic-bezier(0.4, 0, 0.2, 1);
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
        transition: all 1.2s cubic-bezier(0.4, 0, 0.2, 1);
        transition-delay: 0.2s;
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
        transform: translateY(20px);
        transition: transform 1.2s cubic-bezier(0.4, 0, 0.2, 1);
        transition-delay: 0.3s;
    }

    .swiper-slide-active .h4 {
        transform: translateY(0);
    }

    .s_ttl p {
        color: rgba(255,255,255,0.6);
        font-size: 0.833vw;
        line-height: 2.135vw;
        letter-spacing: 0.008vw;
        margin: 1.927vw 0 0;
        transform: translateY(20px);
        opacity: 0;
        transition: all 1.2s cubic-bezier(0.4, 0, 0.2, 1);
        transition-delay: 0.4s;
    }

    .swiper-slide-active .s_ttl p {
        transform: translateY(0);
        opacity: 1;
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
        background: rgba(0,0,0,0.6);
        z-index: 20;
        transition: opacity 1.2s cubic-bezier(0.4, 0, 0.2, 1);
        opacity: 1;
    }

    .swiper-slide-active .ovr {
        opacity: 0;
    }

    .progress-bar {
        position: absolute;
        bottom: 0;
        left: 28.021vw;
        width: 200px;
        height: 2px;
        background: rgba(255,255,255,0.2);
        border-radius: 2px;
        overflow: hidden;
    }

    .progress {
        width: 0;
        height: 100%;
        background: #fff;
        transition: width 1.2s cubic-bezier(0.4, 0, 0.2, 1);
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

    .scroll-prompt {
        position: absolute;
        bottom: 20px;
        left: 50%;
        transform: translateX(-50%);
        color: white;
        font-size: 14px;
        opacity: 0.7;
        transition: opacity 0.3s;
        pointer-events: none;
    }

    .scroll-prompt.hide {
        opacity: 0;
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
        background: #fff;
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
            border: 1px solid #fff;
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
    }
`;

export const industrialSliderContent = `
<section id="industrial-showcase" class="s-industrial-slider">
    <div class="mn_slr_wrap">
        <div class="swiper mn_slr">
            <div class="swiper-wrapper">
                <div class="swiper-slide">
                    <div class="caption">
                        <img src="/assets/lighting-2.png" alt="Commercial lighting solutions">
                        <div class="s_ttl">
                            <div class="h4">Advanced Lighting <span class="br">Solutions</span></div>
                            <p>Energy-efficient LED systems for commercial and industrial spaces with smart controls and automation</p>
                        </div>
                        <div class="ovr"></div>
                    </div>
                </div>
                <div class="swiper-slide">
                    <div class="caption">
                        <img src="/assets/solar-5.png" alt="Solar power installations">
                        <div class="s_ttl">
                            <div class="h4">Solar Power <span class="br">Systems</span></div>
                            <p>Complete solar installations with high-efficiency panels and advanced energy storage solutions</p>
                        </div>
                        <div class="ovr"></div>
                    </div>
                </div>
                <div class="swiper-slide">
                    <div class="caption">
                        <img src="/assets/industrial-3.png" alt="Industrial automation solutions">
                        <div class="s_ttl">
                            <div class="h4">Industrial <span class="br">Automation</span></div>
                            <p>State-of-the-art industrial automation and control systems for maximum efficiency</p>
                        </div>
                        <div class="ovr"></div>
                    </div>
                </div>
            </div>
            <div class="swiper-pagination"></div>
        </div>
        <div class="s_nav">
            <div class="s_prev"><span></span></div>
            <div class="s_next"><span></span></div>
        </div>
        <div class="progress-bar"><div class="progress"></div></div>
    </div>
    <div class="scroll-prompt">Scroll to explore</div>
</section>
`;

export function initIndustrialSlider() {
    // Add styles
    const styleSheet = document.createElement('style');
    styleSheet.textContent = industrialSliderStyles + additionalStyles;
    document.head.appendChild(styleSheet);

    // Insert slider content
    const temp = document.createElement('div');
    temp.innerHTML = industrialSliderContent;
    
    const ballSection = document.getElementById('ball');
    if (ballSection && ballSection.parentNode) {
        ballSection.parentNode.insertBefore(temp.firstElementChild, ballSection.nextSibling);
    } else {
        document.body.appendChild(temp.firstElementChild);
    }

    // Initialize Swiper with modified settings
    const swiper = new Swiper('.mn_slr', {
        slidesPerView: 'auto',
        spaceBetween: 30,
        speed: 1200,
        grabCursor: true,
        watchSlidesProgress: true,
        mousewheelControl: false, // Disable default mousewheel control
        keyboardControl: true,
        centeredSlides: false,
        initialSlide: 0,
        slideToClickedSlide: true,
        autoplay: false, // Disable autoplay as we'll control slides with scroll
        navigation: {
            nextEl: '.s_next',
            prevEl: '.s_prev'
        },
        on: {
            init: function() {
                updateSlides(this);
                updateProgress(this);
            },
            slideChange: function() {
                updateSlides(this);
                updateProgress(this);
            }
        }
    });

    // Scroll handling variables
    let isSticky = false;
    let hasReachedBottom = false;
    let lastScrollPosition = 0;
    let scrollTimeout;
    let lastScrollTime = Date.now();
    const scrollCooldown = 800; // Cooldown period in milliseconds
    const sliderSection = document.querySelector('.s-industrial-slider');
    const scrollPrompt = document.querySelector('.scroll-prompt');

    // Handle slide updates with smooth transitions
    function updateSlides(swiper) {
        const slides = swiper.slides;
        slides.forEach((slide, index) => {
            const overlay = slide.querySelector('.ovr');
            const caption = slide.querySelector('.s_ttl');
            
            if (index === swiper.activeIndex) {
                slide.style.transition = 'transform 1.2s ease-out';
                slide.style.transform = 'scale(1)';
                if (overlay) {
                    overlay.style.transition = 'opacity 1.2s ease-out';
                    overlay.style.opacity = '0';
                }
                if (caption) {
                    caption.style.transition = 'all 1.2s ease-out';
                    caption.style.opacity = '1';
                    caption.style.transform = 'translateY(0)';
                }
            } else {
                slide.style.transition = 'transform 1.2s ease-out';
                slide.style.transform = 'scale(0.85)';
                if (overlay) {
                    overlay.style.transition = 'opacity 1.2s ease-out';
                    overlay.style.opacity = '1';
                }
                if (caption) {
                    caption.style.transition = 'all 1.2s ease-out';
                    caption.style.opacity = '0';
                    caption.style.transform = 'translateY(20px)';
                }
            }
        });
    }

    // Update progress bar
    function updateProgress(swiper) {
        const progress = (swiper.activeIndex / (swiper.slides.length - 1)) * 100;
        const progressBar = document.querySelector('.progress');
        progressBar.style.transition = 'width 1.2s ease-out';
        progressBar.style.width = `${progress}%`;
    }

    // Calculate positions and handle sticky behavior
    function updatePositions() {
        const rect = sliderSection.getBoundingClientRect();
        const windowHeight = window.innerHeight;
        const centerTriggerPoint = windowHeight * 0.3; // Trigger point at 30% from top

        if (rect.top <= centerTriggerPoint && !hasReachedBottom) {
            if (!isSticky) {
                isSticky = true;
                sliderSection.classList.add('is-sticky');
            }

            // Handle scroll-based slide changes with cooldown
            const currentTime = Date.now();
            if (currentTime - lastScrollTime >= scrollCooldown) {
                const scrollDiff = window.scrollY - lastScrollPosition;
                if (Math.abs(scrollDiff) > 50) { // Minimum scroll threshold
                    if (scrollDiff > 0 && swiper.activeIndex < swiper.slides.length - 1) {
                        swiper.slideNext();
                        lastScrollTime = currentTime;
                    } else if (scrollDiff < 0 && swiper.activeIndex > 0) {
                        swiper.slidePrev();
                        lastScrollTime = currentTime;
                    }
                }
            }
            lastScrollPosition = window.scrollY;

            // Check if we've reached the last slide
            if (swiper.activeIndex === swiper.slides.length - 1) {
                setTimeout(() => {
                    hasReachedBottom = true;
                    sliderSection.classList.remove('is-sticky');
                    sliderSection.classList.add('is-bottom');
                    scrollPrompt.classList.add('hide');
                }, 800); // Delay to allow for slide transition
            }
        } else if (rect.top > centerTriggerPoint) {
            // Reset when scrolling back up
            isSticky = false;
            hasReachedBottom = false;
            sliderSection.classList.remove('is-sticky', 'is-bottom');
            scrollPrompt.classList.remove('hide');
            lastScrollPosition = window.scrollY;
        }
    }

    // Add scroll event listener with throttling
    let ticking = false;
    window.addEventListener('scroll', () => {
        if (!ticking) {
            window.requestAnimationFrame(() => {
                updatePositions();
                ticking = false;
            });
            ticking = true;
        }
    });

    // Handle keyboard navigation
    document.addEventListener('keydown', (e) => {
        if (isSticky && !hasReachedBottom) {
            if (e.key === 'ArrowRight' || e.key === 'ArrowDown') {
                swiper.slideNext();
            } else if (e.key === 'ArrowLeft' || e.key === 'ArrowUp') {
                swiper.slidePrev();
            }
        }
    });

    // Handle touch events
    let touchStartY = 0;
    let touchEndY = 0;

    document.addEventListener('touchstart', (e) => {
        touchStartY = e.touches[0].clientY;
    }, { passive: true });

    document.addEventListener('touchmove', (e) => {
        if (isSticky && !hasReachedBottom) {
            touchEndY = e.touches[0].clientY;
            const diff = touchEndY - touchStartY;

            if (Math.abs(diff) > 50) { // Minimum swipe threshold
                if (diff < 0 && swiper.activeIndex < swiper.slides.length - 1) {
                    swiper.slideNext();
                } else if (diff > 0 && swiper.activeIndex > 0) {
                    swiper.slidePrev();
                }
                touchStartY = touchEndY;
            }
        }
    }, { passive: true });

    // Update positions on resize
    window.addEventListener('resize', () => {
        updatePositions();
    });

    // Initial position check
    updatePositions();

    return swiper;
}