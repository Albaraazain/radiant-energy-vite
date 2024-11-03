export const splashContent = `
<section id="splash" data-w-id="60d44eb8-3a18-549d-b313-a3c3762e5941" class="s-splash">
    <div data-w-id="8963c2aa-bf99-57e7-46fb-7fbe66c5f05d" class="splash-trigger-1"></div>
    <div data-w-id="5c16a29a-4e08-a223-30ce-21e24c49b560" class="splash-trigger-2"></div>
    <div data-w-id="47c8c930-e338-7654-89e0-c21517f55a06" class="splash-trigger-3"></div>
    <div data-w-id="e4d82e28-0c9c-6427-79f6-1a22495f8f93" class="splash-trigger-4"></div>
    <div class="gray-shape-wrapper">
        <div class="gray-shape-sticky">
            <div class="gray-shape-opacity">
                <img src="/assets/circle.svg" loading="lazy" alt="" class="gray-shape">
            </div>
        </div>
    </div>
    <div class="splash-inner">
        <div id="w-node-div-block-21-7d08bc7f" class="huge-statement-wrapper">
            <div style="-webkit-transform:translate3d(0, 0px, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);-moz-transform:translate3d(0, 0px, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);-ms-transform:translate3d(0, 0px, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);transform:translate3d(0, 0px, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);opacity:1" class="huge-statement">
                <div class="content-wrapper">
                    <h1 class="huge-text">
                        Advanced <span class="keyword" data-images='["lighting-1", "lighting-2", "lighting-3", "lighting-4", "lighting-5"]'>Lighting</span>, 
                        <span class="keyword" data-images='["solar-1", "solar-2", "solar-3", "solar-4", "solar-5"]'>Solar</span>, and 
                        <span class="keyword" data-images='["industrial-1", "industrial-2", "industrial-3", "industrial-4", "industrial-5"]'>Industrial</span> Solutions
                    </h1>
                </div>
            </div>
        </div>
        <div id="w-node-c73a8f61-d2f0-3bd0-d365-636664a4a2fe-7d08bc7f" class="subheading-positioner">
            <div class="content-wrapper only-right">
                <div style="opacity:0;-webkit-transform:translate3d(0, 20px, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);-moz-transform:translate3d(0, 20px, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);-ms-transform:translate3d(0, 20px, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);transform:translate3d(0, 20px, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)" class="subheading trigger-2">
                    <h2 class="h1">Radiant Energy is a dynamic leader in the energy sector, specializing in advanced lighting systems, solar energy solutions, and transformer technologies.</h2>
                </div>
                <div style="-webkit-transform:translate3d(0, 20px, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);-moz-transform:translate3d(0, 20px, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);-ms-transform:translate3d(0, 20px, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);transform:translate3d(0, 20px, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);display:none;opacity:0" class="subheading trigger-3">
                    <h2 class="h1">We are committed to meeting the energy needs of today while driving innovation for the future.</h2>
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
    <div class="splash-gradient-absolute">
        <div class="splash-gradient-sticky">
            <div class="splash-gradient-inner">
                <div class="splash-gradient-1"></div>
                <div class="splash-gradient-2"></div>
                <div class="splash-gradient-3"></div>
                <div class="splash-gradient-4"></div>
                <img src="../../assets/gradientwithgreenaswell.png" loading="lazy" alt="" class="splash-gradient-mobile">
            </div>
        </div>
        <div class="grain-overlay-splash"></div>
    </div>
</section>
`;

const newStyles = `
.keyword {
    cursor: pointer;
    transition: all 0.3s ease;
    position: relative;
    display: inline-block;
    padding-bottom: 4px; /* Space for thick line */
}

.keyword::after {
    content: '';
    position: absolute;
    width: 100%;
    height: 6px; /* Thick line */
    bottom: 0;
    left: 0;
    background-color: #fff; /* Light color */
    opacity: 0.5; /* Subtle but visible */
    transition: all 0.3s ease;
}

.keyword:hover::after {
    opacity: 0.7; /* More visible on hover but still elegant */
    height: 4px; /* Slightly thicker on hover */
}

.keyword:hover {
    opacity: 0.9;
}

.scatter-container {
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    pointer-events: none;
    z-index: 1000;
}

.scattered-image {
    position: absolute;
    opacity: 0;
    transform: scale(0);
    transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1);
}

.scattered-image.active {
    opacity: 1;
    transform: scale(1);
}
`;


// Add styles to document
const styleSheet = document.createElement("style");
styleSheet.textContent = newStyles;
document.head.appendChild(styleSheet);

export function initSplash() {
    document.getElementById('splash-content').innerHTML = splashContent;

    // Create scatter container
    const scatterContainer = document.createElement('div');
    scatterContainer.className = 'scatter-container';
    document.body.appendChild(scatterContainer);

    const keywords = document.querySelectorAll('.keyword');
    let currentImages = [];

    function createScatteredImages(images) {
        clearScatteredImages();

        const totalImages = 5;
        const minDistance = 250; // Slightly reduced to allow more positioning flexibility
        const positions = [];

        // Redefined zones to ensure better coverage
        const screenZones = [
            { x: [0.05, 0.35], y: [0.05, 0.45] },    // Top left
            { x: [0.4, 0.6], y: [0.05, 0.45] },      // Top middle
            { x: [0.65, 0.95], y: [0.05, 0.45] },    // Top right
            { x: [0.15, 0.45], y: [0.55, 0.95] },    // Bottom left
            { x: [0.55, 0.85], y: [0.55, 0.95] }     // Bottom right
        ];

        const minSize = 250;
        const maxSize = 350;

        function isValidPosition(x, y, size) {
            const centerX = x + size / 2;
            const centerY = y + size / 2;

            // First check if it's within viewport bounds with padding
            const padding = 20;
            if (x < padding ||
                x + size > window.innerWidth - padding ||
                y < padding ||
                y + size > window.innerHeight - padding) {
                return false;
            }

            // Then check distance from other images
            for (let pos of positions) {
                const otherCenterX = pos.x + pos.size / 2;
                const otherCenterY = pos.y + pos.size / 2;

                const distance = Math.sqrt(
                    Math.pow(centerX - otherCenterX, 2) +
                    Math.pow(centerY - otherCenterY, 2)
                );

                const requiredDistance = minDistance + (size + pos.size) / 4;
                if (distance < requiredDistance) {
                    return false;
                }
            }
            return true;
        }

        function getPositionInZone(zone, size, imageIndex) {
            const maxAttempts = 30; // Increased attempts
            let bestPosition = null;
            let bestDistance = 0;

            // Try multiple positions and keep the best one
            for (let attempts = 0; attempts < maxAttempts; attempts++) {
                const x = (zone.x[0] + Math.random() * (zone.x[1] - zone.x[0])) * window.innerWidth;
                const y = (zone.y[0] + Math.random() * (zone.y[1] - zone.y[0])) * window.innerHeight;

                if (isValidPosition(x, y, size)) {
                    // For first image, just return the first valid position
                    if (imageIndex === 0) return { x, y };

                    // For subsequent images, calculate minimum distance to all other images
                    let minDist = Infinity;
                    for (let pos of positions) {
                        const centerX = x + size / 2;
                        const centerY = y + size / 2;
                        const otherCenterX = pos.x + pos.size / 2;
                        const otherCenterY = pos.y + pos.size / 2;

                        const distance = Math.sqrt(
                            Math.pow(centerX - otherCenterX, 2) +
                            Math.pow(centerY - otherCenterY, 2)
                        );
                        minDist = Math.min(minDist, distance);
                    }

                    // Keep this position if it's better than what we have
                    if (minDist > bestDistance) {
                        bestDistance = minDist;
                        bestPosition = { x, y };
                    }
                }
            }

            return bestPosition;
        }

        // Always use first 5 images from the array
        const imagesToShow = images.slice(0, totalImages);

        imagesToShow.forEach((imageName, index) => {
            const size = Math.random() * (maxSize - minSize) + minSize;
            let position = getPositionInZone(screenZones[index], size, index);

            // If we failed to find a position in the preferred zone, try other zones
            if (!position) {
                for (let i = 0; i < screenZones.length; i++) {
                    if (i !== index) {
                        position = getPositionInZone(screenZones[i], size, index);
                        if (position) break;
                    }
                }
            }

            // If we still haven't found a position, use a fallback position
            if (!position) {
                position = {
                    x: (screenZones[index].x[0] + 0.1) * window.innerWidth,
                    y: (screenZones[index].y[0] + 0.1) * window.innerHeight
                };
            }

            const img = document.createElement('img');
            img.src = `/assets/${imageName}.png`;
            img.alt = 'Scattered image';
            img.className = 'scattered-image';

            img.style.width = `${size}px`;
            img.style.left = `${position.x}px`;
            img.style.top = `${position.y}px`;

            const rotation = Math.random() * 20 - 10;
            img.style.transform = `rotate(${rotation}deg) scale(0)`;

            scatterContainer.appendChild(img);
            currentImages.push(img);
            positions.push({ ...position, size });

            setTimeout(() => {
                img.classList.add('active');
                img.style.transform = `rotate(${rotation}deg) scale(1)`;
            }, index * 100);
        });
    }


    function clearScatteredImages() {
        currentImages.forEach(img => {
            img.classList.remove('active');
            img.addEventListener('transitionend', () => {
                img.remove();
            }, { once: true });
        });
        currentImages = [];
    }

    keywords.forEach(keyword => {
        keyword.addEventListener('mouseenter', function() {
            const images = JSON.parse(this.getAttribute('data-images'));
            createScatteredImages(images);
        });

        keyword.addEventListener('mouseleave', clearScatteredImages);
    });
}
