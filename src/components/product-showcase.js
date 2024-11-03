// src/components/product-showcase.js
export const productShowcaseContent = `
<section id="products" class="s-products">
    <div class="content-wrapper">
        <div class="products-header">
            <h2 class="h1 white">Our Services</h2>
            <p class="paragraph white">Lightning systems, solar solutions, and transformer technologies</p>
        </div>
        
        <div class="products-grid">
            <div class="product-card large" data-w-id="product-1">
                <div class="product-image-container">
                    <div class="product-image-parallax">
                        <div class="product-image-wrapper">
                            <div class="product-image-overlay gradient-1"></div>
                            <img src="/assets/lighting-solutions.jpg" loading="lazy" alt="Lightning Systems" class="product-image">
                        </div>
                        <div class="floating-text">
                            <div class="floating-number">01</div>
                            <h3 class="h3 white">Lightning Systems</h3>
                        </div>
                    </div>
                    <div class="product-content reveal-content">
                        <div class="content-inner">
                            <p class="paragraph white">Advanced LED solutions designed for maximum efficiency and minimal environmental impact.</p>
                            <div class="product-stats">
                                <div class="stat">
                                    <span class="stat-number">90%</span>
                                    <span class="stat-label">Energy Saving</span>
                                </div>
                                <div class="stat">
                                    <span class="stat-number">50K</span>
                                    <span class="stat-label">Hours Lifespan</span>
                                </div>
                            </div>
                            <a href="/services/lightning" class="text-link white">Explore Solutions</a>
                        </div>
                    </div>
                </div>
            </div>
            
            <div class="product-card" data-w-id="product-2">
                <div class="product-image-container">
                    <div class="product-image-parallax">
                        <div class="product-image-wrapper">
                            <div class="product-image-overlay gradient-2"></div>
                            <img src="/assets/solar-solutions.jpg" loading="lazy" alt="Solar Systems" class="product-image">
                        </div>
                        <div class="floating-text">
                            <div class="floating-number">02</div>
                            <h3 class="h3 white">Solar Systems</h3>
                        </div>
                    </div>
                    <div class="product-content reveal-content">
                        <div class="content-inner">
                            <p class="paragraph white">Sustainable energy solutions powering a greener tomorrow with cutting-edge solar technology.</p>
                            <div class="product-features">
                                <span class="feature-tag">High Efficiency</span>
                                <span class="feature-tag">Smart Grid</span>
                                <span class="feature-tag">Energy Storage</span>
                            </div>
                            <a href="/services/solar" class="text-link white">Learn More</a>
                        </div>
                    </div>
                </div>
            </div>
            
            <div class="product-card" data-w-id="product-3">
                <div class="product-image-container">
                    <div class="product-image-parallax">
                        <div class="product-image-wrapper">
                            <div class="product-image-overlay gradient-3"></div>
                            <img src="/assets/transformer-solutions.jpg" loading="lazy" alt="Transformers" class="product-image">
                        </div>
                        <div class="floating-text">
                            <div class="floating-number">03</div>
                            <h3 class="h3 white">Transformers</h3>
                        </div>
                    </div>
                    <div class="product-content reveal-content">
                        <div class="content-inner">
                            <p class="paragraph white">High-performance power distribution solutions engineered for reliability and efficiency.</p>
                            <div class="product-features">
                                <span class="feature-tag">Smart Control</span>
                                <span class="feature-tag">Load Management</span>
                                <span class="feature-tag">IoT Ready</span>
                            </div>
                            <a href="/services/transformers" class="text-link white">Discover More</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
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

export function initProductShowcase(gsap) {
    document.getElementById('product-showcase-content').innerHTML = productShowcaseContent;
    
    // Initialize parallax effect
    const cards = document.querySelectorAll('.product-card');
    
    cards.forEach(card => {
        const image = card.querySelector('.product-image-parallax');
        const content = card.querySelector('.reveal-content');
        
        // Parallax effect on mouse move
        card.addEventListener('mousemove', (e) => {
            const rect = card.getBoundingClientRect();
            const x = (e.clientX - rect.left) / rect.width;
            const y = (e.clientY - rect.top) / rect.height;
            
            gsap.to(image, {
                duration: 0.5,
                x: (x - 0.5) * 30,
                y: (y - 0.5) * 30,
                rotationY: (x - 0.5) * 10,
                rotationX: (y - 0.5) * 10,
                ease: "power2.out"
            });
            
            gsap.to(content, {
                duration: 0.5,
                opacity: 1,
                y: 0,
                ease: "power2.out"
            });
        });
        
        // Reset on mouse leave
        card.addEventListener('mouseleave', () => {
            gsap.to(image, {
                duration: 0.5,
                x: 0,
                y: 0,
                rotationY: 0,
                rotationX: 0,
                ease: "power2.out"
            });
            
            gsap.to(content, {
                duration: 0.5,
                opacity: 0,
                y: 20,
                ease: "power2.out"
            });
        });
    });
    
    // Scroll animations
    gsap.from('.product-card', {
        scrollTrigger: {
            trigger: '.products-grid',
            start: 'top center',
            toggleActions: 'play none none reverse'
        },
        y: 100,
        opacity: 0,
        duration: 1,
        stagger: 0.2
    });
}