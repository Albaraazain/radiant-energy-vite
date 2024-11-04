import './styles/main.css';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import 'lazysizes';

import { initNavigation } from './components/navigation';
import { initSplash } from './components/splash';
import { initVideo } from './components/video';
import { initBall } from './components/ball';
import { initDiablo } from './components/diablo';
import { initCta } from './components/cta';
import { initProductShowcase } from './components/product-showcase';
import { initSmoothScrolling } from './smooth-scroll';
import { initWebflow } from './webflow-main';
import { industrialSliderContent, initIndustrialSlider } from './components/slider';

gsap.registerPlugin(ScrollTrigger);

document.addEventListener('DOMContentLoaded', () => {
    initNavigation();
    initSplash();
    initVideo();
    initBall();
    initProductShowcase(gsap);  // Pass gsap here
    // initIndustrialSlider(gsap);
    initDiablo();
    initIndustrialSlider();
    initCta();
    // Initialize smooth scrolling
    initSmoothScrolling();
    
    initWebflow();
});