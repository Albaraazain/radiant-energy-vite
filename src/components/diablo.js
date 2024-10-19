export const diabloContent = `
<section class="s-diablo">
    <div id="technical" data-w-id="31dd69f3-ef24-8f55-9720-f2a4fd5114fa" class="diablo-inner">
        <div class="diablo-sticky">
            <div data-is-ix2-target="1" class="diablo" data-w-id="31dd69f3-ef24-8f55-9720-f2a4fd5114fc" data-animation-type="lottie" data-src="611d005f5ab332c43708bc80/light-circle.json" data-loop="1" data-direction="1" data-autoplay="0" data-renderer="canvas" data-default-duration="6.333333333333333" data-duration="0"></div>
            <div class="lottie-container">
                <div data-w-id="0ad070b2-bcc4-5c25-4a38-d28481a2636f" data-animation-type="lottie" data-src="" data-loop="0" data-direction="1" data-autoplay="1" data-is-ix2-target="0" data-renderer="canvas" data-default-duration="7.916666666666667" data-duration="0"></div>
            </div>
        </div>
        <div class="diablo-content-absolute">
            <div class="diablo-content-sticky">
                <div id="w-node-_31dd69f3-ef24-8f55-9720-f2a4fd5114ff-7d08bc7f" class="diablo-content-block _1">
                    <div class="content-wrapper only-right">
                        <div class="heading-block">
                            <h1 class="h1 white">We have the technical expertise</h1>
                            <div class="paragraph-margin-top">
                                <p class="paragraph white">Whether you need energy-efficient lighting, solar power solutions, or advanced transformer technologies, we have the know-how. We apply our expertise in every project to help you achieve optimal energy efficiency and performance.</p>
                            </div>
                        </div>
                    </div>
                </div>
                <!-- More diablo-content-block sections... -->
            </div>
        </div>
    </div>
    <div id="solution" data-w-id="Div Block 30" class="diablo-transition">
        <div class="lines-wrapper">
            <div class="line"></div>
            <div class="line"></div>
            <div class="line"></div>
            <div class="line"></div>
            <div class="line"></div>
        </div>
        <div class="transition-block"></div>
        <div class="s-frosted">
            <!-- Frosted section content... -->
        </div>
    </div>
</section>
`;

export function initDiablo() {
    document.getElementById('diablo-content').innerHTML = diabloContent;
    // Any additional initialization logic for the diablo section can go here
}
