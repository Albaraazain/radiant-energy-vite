export const navigationContent = `
<aside class="scroll-nav">
    <div class="scroll-nav-inner">
        <a href="#splash" class="scroll-nav-link-block w-inline-block">
            <div class="scroll-nav-text">Home</div>
            <div class="scroll-nav-line"></div>
        </a>
        <a href="#video" class="scroll-nav-link-block w-inline-block">
            <div class="scroll-nav-text">Philosophy</div>
            <div class="scroll-nav-line"></div>
        </a>
        <a href="#ball" class="scroll-nav-link-block w-inline-block">
            <div class="scroll-nav-text">Experience</div>
            <div class="scroll-nav-line"></div>
        </a>
        <a href="#technical" class="scroll-nav-link-block w-inline-block">
            <div class="scroll-nav-text">Technical expertise</div>
            <div class="scroll-nav-line"></div>
        </a>
        <a href="#solution" class="scroll-nav-link-block w-inline-block">
            <div class="scroll-nav-text">Package</div>
            <div class="scroll-nav-line"></div>
        </a>
        <a href="#cta" class="scroll-nav-link-block w-inline-block">
            <div class="scroll-nav-text">Contact</div>
            <div class="scroll-nav-line"></div>
        </a>
    </div>
</aside>
<aside data-w-id="55db6fa6-907d-b55b-b404-bd54651374eb" class="scroll-down">
    <div class="scrol-down-lottie" data-w-id="55db6fa6-907d-b55b-b404-bd54651374ec" data-animation-type="lottie" data-src="/assets/scroll.json" data-loop="1" data-direction="1" data-autoplay="1" data-is-ix2-target="0" data-renderer="svg" data-default-duration="1.5333333333333334" data-duration="0"></div>
</aside>
<!-- Rest of the navigation HTML -->
`;

export function initNavigation() {
    document.getElementById('navigation-content').innerHTML = navigationContent;
    // Any additional initialization logic can go here
}
