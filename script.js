
// Developer Console Message
console.log(`
██╗  ██╗███████╗██╗   ██╗    ████████╗██╗  ██╗███████╗██████╗ ███████╗    ██████╗ ███████╗██╗   ██╗
██║  ██║██╔════╝╚██╗ ██╔╝    ╚══██╔══╝██║  ██║██╔════╝██╔══██╗██╔════╝    ██╔══██╗██╔════╝██║   ██║
███████║█████╗   ╚████╔╝        ██║   ███████║█████╗  ██████╔╝█████╗      ██║  ██║█████╗  ██║   ██║
██╔══██║██╔══╝    ╚██╔╝         ██║   ██╔══██║██╔══╝  ██╔══██╗██╔══╝      ██║  ██║██╔══╝  ╚██╗ ██╔╝
██║  ██║███████╗   ██║          ██║   ██║  ██║███████╗██║  ██║███████╗    ██████╔╝███████╗ ╚████╔╝ 
╚═╝  ╚═╝╚══════╝   ╚═╝          ╚═╝   ╚═╝  ╚═╝╚══════╝╚═╝  ╚═╝╚══════╝    ╚═════╝ ╚══════╝  ╚═══╝  
`);

console.log("👋 Oh hey, you're one of those people who checks the console. I respect that.");
console.log("I'm Wolfgang, a UX designer who actually codes... a bit...");
console.log("Good news: no more 'make it pop' requests or designs that require bending the laws of physics.");
console.log("I tinker with AI tools because I'm curious, not because I'm trying to replace myself.");
console.log("✉️ Want to chat? → info@wolfgegenlicht.de");

// Smooth scrolling for navigation links
document.addEventListener('DOMContentLoaded', function() {
    // Add smooth scrolling to all links
    const links = document.querySelectorAll('a[href^="#"]');
    
    links.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);
            
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
    
    // Add scroll effect to navigation
    const header = document.querySelector('.header');
    let lastScrollTop = 0;
    
    window.addEventListener('scroll', function() {
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        
        if (scrollTop > lastScrollTop && scrollTop > 100) {
            // Scrolling down
            header.style.transform = 'translateY(-100%)';
            header.classList = 'header';

        } else {
            // Scrolling up
            header.style.transform = 'translateY(0)';
            header.classList = 'header header-visible';
        }
        
        lastScrollTop = scrollTop;
    });
    
    // Add loading animation for sections
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate');
            }
        });
    }, observerOptions);
    
    // Observe all sections
    document.querySelectorAll('section').forEach(section => {
        observer.observe(section);
    });
    
    // Timeline animation
    const timeline = document.querySelector('.timeline');
    if (timeline) {
        const timelineItems = timeline.querySelectorAll('.timeline-item');
        
        const timelineObserver = new IntersectionObserver(function(entries) {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    // Start the timeline line animation
                    entry.target.classList.add('animate');
                    
                    // Animate each timeline item with staggered delays
                    timelineItems.forEach((item, index) => {
                        setTimeout(() => {
                            item.classList.add('animate');
                        }, index * 200); // 200ms delay between each item
                    });
                    
                    // Stop observing once animation is triggered
                    timelineObserver.unobserve(entry.target);
                }
            });
        }, {
            threshold: 0.2,
            rootMargin: '0px 0px -100px 0px'
        });
        
        timelineObserver.observe(timeline);
    }
    
  
    // Add click effects to buttons
    const buttons = document.querySelectorAll('.btn');
    buttons.forEach(btn => {
        btn.addEventListener('click', function(e) {
            const ripple = document.createElement('span');
            const rect = this.getBoundingClientRect();
            const size = Math.max(rect.width, rect.height);
            const x = e.clientX - rect.left - size / 2;
            const y = e.clientY - rect.top - size / 2;
            
            ripple.style.width = ripple.style.height = size + 'px';
            ripple.style.left = x + 'px';
            ripple.style.top = y + 'px';
            ripple.classList.add('ripple');
            
            this.appendChild(ripple);
            
            setTimeout(() => {
                ripple.remove();
            }, 600);
        });
    });
    
    // Add CSS for ripple effect
    const style = document.createElement('style');
    style.textContent = `
        .btn {
            position: relative;
            overflow: hidden;
        }
        
        .ripple {
            position: absolute;
            border-radius: 50%;
            background: rgba(255, 255, 255, 0.6);
            transform: scale(0);
            animation: ripple-animation 0.6s linear;
            pointer-events: none;
        }
        
        @keyframes ripple-animation {
            to {
                transform: scale(4);
                opacity: 0;
            }
        }
    `;
    document.head.appendChild(style);
    
    
    
    // Mobile menu toggle (if needed)
    const createMobileMenu = () => {
        const nav = document.querySelector('.nav');
        const navLinks = document.querySelector('.nav-links');
        
        if (window.innerWidth <= 768) {
            if (!document.querySelector('.mobile-menu-toggle')) {
                const mobileToggle = document.createElement('button');
                mobileToggle.classList.add('mobile-menu-toggle');
                mobileToggle.innerHTML = '☰';
                mobileToggle.style.cssText = `
                    display: block;
                    background: none;
                    border: none;
                    font-size: 1.5rem;
                    color: var(--dark-text);
                    cursor: pointer;
                `;
                
                nav.appendChild(mobileToggle);
                
                mobileToggle.addEventListener('click', function() {
                    navLinks.classList.toggle('mobile-open');
                });
            }
        } else {
            const mobileToggle = document.querySelector('.mobile-menu-toggle');
            if (mobileToggle) {
                mobileToggle.remove();
            }
            navLinks.classList.remove('mobile-open');
        }
    };
    
    createMobileMenu();
    window.addEventListener('resize', createMobileMenu);
    
    // Initialize image zoom functionality
    if (typeof mediumZoom !== 'undefined') {
        const zoom = mediumZoom('[data-zoomable]', {
            background: 'rgba(0, 0, 0, 0.8)',
            margin: 40,
            scrollOffset: 80
        });
        
    }
    
    // Rough annotation system - supports both circle and underline with intersection observer
    function createRoughAnnotation(element, type = 'circle', options = {}) {
        if (!element || typeof rough === 'undefined') return;
        
        const container = element.closest('section') || document.body;
        container.style.position = 'relative';
        
        let animationTriggered = false;
        
        function createAnnotation() {
            if (animationTriggered) return;
            animationTriggered = true;
            
            const rect = element.getBoundingClientRect();
            const containerRect = container.getBoundingClientRect();
            
            if (rect.width === 0 || rect.height === 0) {
                setTimeout(createAnnotation, 100);
                return;
            }
            
            // Calculate position relative to container
            const centerX = rect.left - containerRect.left + rect.width / 2;
            const centerY = rect.top - containerRect.top + rect.height / 2;
            const width = rect.width + (options.padding || 25);
            const height = rect.height + (options.padding || 20);
            
            // Create SVG element
            const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
            svg.classList.add('rough-annotation');
            svg.style.cssText = `
                position: absolute;
                top: 0;
                left: 0;
                overflow: visible;
                pointer-events: none;
                width: 100%;
                height: 100%;
                z-index: -1;
            `;
            
            // Create rough.js instance for SVG
            const rc = rough.svg(svg);
            let annotation;
            
            // Generate different annotation types
            if (type === 'circle') {
                annotation = rc.ellipse(centerX, centerY, width, height, {
                    stroke: options.color || '#fde74c',
                    strokeWidth: options.strokeWidth || 3,
                    roughness: options.roughness || 2.8,
                    fill: 'none'
                });
            } else if (type === 'underline') {
                const startX = rect.left - containerRect.left - 5;
                const endX = rect.right - containerRect.left + 5;
                const y = rect.bottom - containerRect.top + 5;
                
                annotation = rc.line(startX, y, endX, y, {
                    stroke: options.color || '#fde74c',
                    strokeWidth: options.strokeWidth || 3,
                    roughness: options.roughness || 2.8
                });
            } else if (type === 'box') {
                const x = rect.left - containerRect.left - 10;
                const y = rect.top - containerRect.top - 10;
                const boxWidth = rect.width + 20;
                const boxHeight = rect.height + 20;
                
                annotation = rc.rectangle(x, y, boxWidth, boxHeight, {
                    stroke: options.color || '#fde74c',
                    strokeWidth: options.strokeWidth || 2,
                    roughness: options.roughness || 2.5,
                    fill: 'none'
                });
            }
            
            // Add annotation to SVG
            svg.appendChild(annotation);
            
            // Add SVG to container
            container.appendChild(svg);
            
            // Add CSS animation for drawing effect
            const paths = svg.querySelectorAll('path');
            paths.forEach((path, index) => {
                const pathLength = path.getTotalLength();
                path.style.strokeDasharray = pathLength;
                path.style.strokeDashoffset = pathLength;
                path.style.setProperty('--path-length', pathLength);
                
                // Add animation with staggered timing for multiple paths
                const delay = index * 0.3; // 300ms delay between paths
                const duration = options.duration || 1; // 1 second default
                
                path.style.animation = `rough-notation-dash ${duration}s ease-out ${delay}s forwards`;
            });
        }
        
        // Create intersection observer for this element
        const annotationObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting && !animationTriggered) {
                    // Wait for the specified delay, then create annotation
                    setTimeout(() => {
                        createAnnotation();
                    }, options.delay || 0);
                    
                    // Stop observing once animation is triggered
                    annotationObserver.unobserve(element);
                }
            });
        }, {
            threshold: 0.5, // Trigger when 50% of element is visible
            rootMargin: '0px 0px -50px 0px' // Start animation slightly before element is fully in view
        });
        
        // Start observing the element
        annotationObserver.observe(element);
        
        // Handle window resize
        window.addEventListener('resize', () => {
            if (animationTriggered) {
                const existingSvg = container.querySelector('.rough-annotation');
                if (existingSvg) {
                    existingSvg.remove();
                }
                animationTriggered = false;
                // Re-observe element after resize
                annotationObserver.observe(element);
            }
        });
    }
    
    // Apply annotations using classes - with sequential timing based on HTML order
    
    // Collect all annotation elements in document order
    const allAnnotations = [];
    
    // Find all elements with annotation classes
    document.querySelectorAll('.rough-circle, .rough-underline, .rough-box').forEach(element => {
        let type = 'circle';
        if (element.classList.contains('rough-underline')) type = 'underline';
        else if (element.classList.contains('rough-box')) type = 'box';
        
        allAnnotations.push({ element, type });
    });
    
    // Apply annotations in document order with staggered delays
    allAnnotations.forEach((annotation, index) => {
        const { element, type } = annotation;
        
        // ⚡ ANIMATION TIMING SETTINGS - Change these to customize speed
        const ANIMATION_SETTINGS = {
            startDelay: 200,        // Initial delay after scrolling into view (ms)
            betweenDelay: 200,      // Delay between each annotation (ms)
            drawingSpeed: 1.0       // How fast each annotation draws (seconds)
        };
        
        // Base options for each type
        const baseOptions = {
            circle: {
                color: '#fde74c',
                strokeWidth: 3,
                roughness: 2.8,
                duration: ANIMATION_SETTINGS.drawingSpeed
            },
            underline: {
                color: '#fde74c',
                strokeWidth: 3,
                roughness: 2.5,
                duration: ANIMATION_SETTINGS.drawingSpeed
            },
            box: {
                color: '#fde74c',
                strokeWidth: 2,
                roughness: 2.5,
                duration: ANIMATION_SETTINGS.drawingSpeed
            }
        };
        
        // Apply annotation with sequential delay
        createRoughAnnotation(element, type, {
            ...baseOptions[type],
            delay: ANIMATION_SETTINGS.startDelay + (index * ANIMATION_SETTINGS.betweenDelay)
        });
    });

    // Initialize vanilla JS drag and drop for photos
    const draggablePhotos = document.querySelectorAll('.draggable-photo');
    const resizeHandles = document.querySelectorAll('.resize-handle');
    const photoCanvas = document.getElementById('photo-canvas');
    
    if (photoCanvas && draggablePhotos.length > 0) {
        let draggedElement = null;
        let resizedElement = null;
        let offset = { x: 0, y: 0 };
        let initialSize = { width: 0, height: 0 };
        let startPos = { x: 0, y: 0 };
        let isDragging = false;
        let isResizing = false;

        // Add drag functionality to photos
        draggablePhotos.forEach(photo => {
            photo.addEventListener('mousedown', startDrag);
            photo.addEventListener('touchstart', startDrag, { passive: false });
        });

        // Add resize functionality to handles
        resizeHandles.forEach(handle => {
            handle.addEventListener('mousedown', startResize);
            handle.addEventListener('touchstart', startResize, { passive: false });
        });

        function startDrag(e) {
            // Don't start dragging if clicking on resize handle
            if (e.target.classList.contains('resize-handle')) return;
            
            e.preventDefault();
            isDragging = true;
            draggedElement = e.target.closest('.draggable-photo');
            draggedElement.classList.add('photo-dragging');
            
            const rect = draggedElement.getBoundingClientRect();
            const canvasRect = photoCanvas.getBoundingClientRect();
            
            const clientX = e.type === 'touchstart' ? e.touches[0].clientX : e.clientX;
            const clientY = e.type === 'touchstart' ? e.touches[0].clientY : e.clientY;
            
            offset.x = clientX - rect.left;
            offset.y = clientY - rect.top;
            
            document.addEventListener('mousemove', drag);
            document.addEventListener('touchmove', drag, { passive: false });
            document.addEventListener('mouseup', stopDrag);
            document.addEventListener('touchend', stopDrag);
        }

        function startResize(e) {
            e.preventDefault();
            e.stopPropagation();
            isResizing = true;
            resizedElement = e.target.closest('.draggable-photo');
            resizedElement.classList.add('photo-resizing');
            
            const rect = resizedElement.getBoundingClientRect();
            const clientX = e.type === 'touchstart' ? e.touches[0].clientX : e.clientX;
            const clientY = e.type === 'touchstart' ? e.touches[0].clientY : e.clientY;
            
            initialSize.width = rect.width;
            initialSize.height = rect.height;
            startPos.x = clientX;
            startPos.y = clientY;
            
            document.addEventListener('mousemove', resize);
            document.addEventListener('touchmove', resize, { passive: false });
            document.addEventListener('mouseup', stopResize);
            document.addEventListener('touchend', stopResize);
        }

        function drag(e) {
            if (!isDragging || !draggedElement) return;
            
            e.preventDefault();
            
            const clientX = e.type === 'touchmove' ? e.touches[0].clientX : e.clientX;
            const clientY = e.type === 'touchmove' ? e.touches[0].clientY : e.clientY;
            
            const canvasRect = photoCanvas.getBoundingClientRect();
            const photoRect = draggedElement.getBoundingClientRect();
            
            let newX = clientX - canvasRect.left - offset.x;
            let newY = clientY - canvasRect.top - offset.y;
            
            // Keep photo within canvas bounds
            newX = Math.max(0, Math.min(newX, canvasRect.width - photoRect.width));
            newY = Math.max(0, Math.min(newY, canvasRect.height - photoRect.height));
            
            draggedElement.style.left = newX + 'px';
            draggedElement.style.top = newY + 'px';
        }

        function resize(e) {
            if (!isResizing || !resizedElement) return;
            
            e.preventDefault();
            
            const clientX = e.type === 'touchmove' ? e.touches[0].clientX : e.clientX;
            const clientY = e.type === 'touchmove' ? e.touches[0].clientY : e.clientY;
            
            const deltaX = clientX - startPos.x;
            const deltaY = clientY - startPos.y;
            const delta = Math.max(deltaX, deltaY); // Use the larger delta for proportional scaling
            
            let newWidth = initialSize.width + delta;
            let newHeight = 'auto';
            
            // Set minimum and maximum sizes
            const minSize = 80;
            const maxSize = 400;
            
            newWidth = Math.max(minSize, Math.min(newWidth, maxSize));
            newHeight = Math.max(minSize, Math.min(newHeight, maxSize));
            
            resizedElement.style.width = newWidth + 'px';
            resizedElement.style.height = newHeight + 'px';
        }

        function stopDrag() {
            if (draggedElement) {
                draggedElement.classList.remove('photo-dragging');
                draggedElement = null;
            }
            isDragging = false;
            
            document.removeEventListener('mousemove', drag);
            document.removeEventListener('touchmove', drag);
            document.removeEventListener('mouseup', stopDrag);
            document.removeEventListener('touchend', stopDrag);
        }

        function stopResize() {
            if (resizedElement) {
                resizedElement.classList.remove('photo-resizing');
                resizedElement = null;
            }
            isResizing = false;
            
            document.removeEventListener('mousemove', resize);
            document.removeEventListener('touchmove', resize);
            document.removeEventListener('mouseup', stopResize);
            document.removeEventListener('touchend', stopResize);
        }
    }
});

// Add CSS for mobile menu
const mobileMenuStyle = document.createElement('style');
mobileMenuStyle.textContent = `
    @media (max-width: 768px) {
        .nav-links {
            position: absolute;
            top: 100%;
            left: 0;
            right: 0;
            background: var(--white);
            flex-direction: column;
            padding: 1rem;
            box-shadow: var(--shadow);
            transform: translateY(-100%);
            opacity: 0;
            visibility: hidden;
            transition: all 0.3s ease;
        }
        
        .nav-links.mobile-open {
            transform: translateY(0);
            opacity: 1;
            visibility: visible;
        }
        
        .nav-links li {
            margin: 0.5rem 0;
        }
    }
`;
document.head.appendChild(mobileMenuStyle);