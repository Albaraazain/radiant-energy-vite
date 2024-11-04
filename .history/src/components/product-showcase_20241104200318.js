// src/components/product-showcase.js
import '../styles/product-showcase.css';

const products = [
    {
        id: "product-1",
        title: "Lightning Systems",
        description: "Advanced LED solutions designed for maximum efficiency and minimal environmental impact.",
        image: "/assets/lighting-1.png",
        features: ["90% Energy Saving", "50K Hours Lifespan"],
        link: "/services/lightning",
        gradientClass: "gradient-1",
        floatingNumber: "01"
    },
    {
        id: "product-2",
        title: "Solar Systems",
        description: "Sustainable energy solutions powering a greener tomorrow with cutting-edge solar technology.",
        image: "/assets/solar-5.png",
        features: ["High Efficiency", "Smart Grid", "Energy Storage"],
        link: "/services/solar",
        gradientClass: "gradient-2",
        floatingNumber: "02"
    },
    {
        id: "product-3",
        title: "Industrial Solutions",
        description: "Industrial Solutions for a smarter, more efficient, and sustainable future.",
        image: "/assets/industrial-1.png",
        features: ["Smart Control", "Load Management", "IoT Ready"],
        link: "/services/industrial",
        gradientClass: "gradient-3",
        floatingNumber: "03"
    }
];

function renderProductCards(products) {
    return products.map(product => `
        <div class="product-card" data-w-id="${product.id}">
            <div class="product-image-container">
                <div class="product-image-parallax">
                    <div class="product-image-wrapper">
                        <div class="product-image-overlay ${product.gradientClass}"></div>
                        <img src="${product.image}" loading="lazy" alt="${product.title}" class="product-image">
                    </div>
                    <div class="floating-text">
                        <div class="floating-number">${product.floatingNumber}</div>
                        <h3 class="h3 white">${product.title}</h3>
                    </div>
                </div>
                <div class="product-content reveal-content">
                    <div class="content-inner">
                        <p class="paragraph white">${product.description}</p>
                        <div class="product-features">
                            ${product.features.map(feature => `<span class="feature-tag">${feature}</span>`).join('')}
                        </div>
                        <a href="${product.link}" class="text-link white">Explore Solutions</a>
                    </div>
                </div>
            </div>
        </div>
    `).join('');
}

export const productShowcaseContent = `
    <section id="products" class="s-products">
        <div class="content-wrapper">
            <div class="products-header">
                <h2 class="h1 white">Our Services</h2>
                <p class="paragraph white">Lightning systems, solar solutions, and transformer technologies</p>
            </div>
            <div class="products-grid">
                ${renderProductCards(products)}
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
        
        let animationFrame;
        
        card.addEventListener('mousemove', (e) => {
            if (animationFrame) return;
            animationFrame = requestAnimationFrame(() => {
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
                animationFrame = null;
            });
        });
        
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
