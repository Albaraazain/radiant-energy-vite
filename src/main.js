// src/main.js
import jQuery from 'jquery';
window.jQuery = window.$ = jQuery;

import './styles/main.css';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Lenis from '@studio-freight/lenis';
import 'lazysizes';

import { initNavigation } from './components/navigation';
import { initSplash } from './components/splash';
import { initVideo } from './components/video';
import { initBall } from './components/ball';
import { initDiablo } from './components/diablo';
import { initCta } from './components/cta';

// Import the Webflow-specific code
import './webflow-main.js';

gsap.registerPlugin(ScrollTrigger);

let lenis; // Declare lenis here

document.addEventListener('DOMContentLoaded', () => {
    initNavigation();
    initSplash();
    initVideo();
    initBall();
    initDiablo();
    initCta();

    // Initialize smooth scrolling
    initSmoothScrolling();

    // Any other initialization code...
});
~
function initSmoothScrolling() {
    lenis = new Lenis({
        duration: 1.5,
        easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
        direction: 'vertical',
        gestureDirection: 'vertical',
        smooth: true,
        mouseMultiplier: 0.8,
        smoothTouch: true,
        touchMultiplier: 1.5,
        infinite: false,
    });

    function raf(time) {
        lenis.raf(time);
        requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    // Lenis and ScrollTrigger integration
    lenis.on('scroll', ScrollTrigger.update);

    gsap.ticker.add((time) => {
        lenis.raf(time * 1000);
    });

    gsap.ticker.lagSmoothing(0);
}

// Expose lenis instance globally if needed
window.lenis = lenis;