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
import { initSmoothScrolling } from './smooth-scroll';

// Import the Webflow-specific code
import { initWebflow } from './webflow-main';

gsap.registerPlugin(ScrollTrigger);

document.addEventListener('DOMContentLoaded', () => {
    initNavigation();
    initSplash();
    initVideo();
    initBall();
    initDiablo();
    initCta();
    
    // Initialize smooth scrolling
    initSmoothScrolling();
    
    initWebflow();
    
    // Any other initialization code...
});