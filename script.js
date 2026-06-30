/* ========================================
   WOODCRAFT STUDIO - JavaScript
   ======================================== */

document.addEventListener('DOMContentLoaded', function() {
    
    // ========================================
    // NAVIGATION
    // ========================================
    const navbar = document.getElementById('navbar');
    const navToggle = document.getElementById('navToggle');
    const navMenu = document.getElementById('navMenu');
    
    // Scroll effect for navbar
    window.addEventListener('scroll', function() {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });
    
    // Mobile menu toggle
    navToggle.addEventListener('click', function() {
        navMenu.classList.toggle('active');
        const spans = navToggle.querySelectorAll('span');
        if (navMenu.classList.contains('active')) {
            spans[0].style.transform = 'rotate(45deg) translate(5px, 5px)';
            spans[1].style.opacity = '0';
            spans[2].style.transform = 'rotate(-45deg) translate(5px, -5px)';
        } else {
            spans[0].style.transform = 'none';
            spans[1].style.opacity = '1';
            spans[2].style.transform = 'none';
        }
    });
    
    // Close mobile menu on link click
    navMenu.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
            navMenu.classList.remove('active');
            const spans = navToggle.querySelectorAll('span');
            spans[0].style.transform = 'none';
            spans[1].style.opacity = '1';
            spans[2].style.transform = 'none';
        });
    });
    
    // ========================================
    // SMOOTH SCROLLING
    // ========================================
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                const offset = 80;
                const targetPosition = target.getBoundingClientRect().top + window.pageYOffset - offset;
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // ========================================
    // PRODUCT FILTERING
    // ========================================
    const filterBtns = document.querySelectorAll('.filter-btn');
    const productCards = document.querySelectorAll('.product-card');
    
    filterBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            // Update active button
            filterBtns.forEach(b => b.classList.remove('active'));
            this.classList.add('active');
            
            const filter = this.getAttribute('data-filter');
            
            productCards.forEach(card => {
                if (filter === 'all' || card.getAttribute('data-category') === filter) {
                    card.style.display = 'block';
                    setTimeout(() => {
                        card.style.opacity = '1';
                        card.style.transform = 'scale(1)';
                    }, 50);
                } else {
                    card.style.opacity = '0';
                    card.style.transform = 'scale(0.95)';
                    setTimeout(() => {
                        card.style.display = 'none';
                    }, 300);
                }
            });
        });
    });
    
    // ========================================
    // INQUIRY BUTTONS - Scroll to contact form
    // ========================================
    document.querySelectorAll('.btn-inquiry').forEach(btn => {
        btn.addEventListener('click', function() {
            const product = this.getAttribute('data-product');
            const productSelect = document.getElementById('product');
            
            // Scroll to contact form
            const contactSection = document.getElementById('contact');
            const offset = 80;
            const targetPosition = contactSection.getBoundingClientRect().top + window.pageYOffset - offset;
            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });
            
            // Pre-select the product in the form
            setTimeout(() => {
                if (productSelect) {
                    for (let i = 0; i < productSelect.options.length; i++) {
                        if (productSelect.options[i].value === product) {
                            productSelect.selectedIndex = i;
                            productSelect.dispatchEvent(new Event('change'));
                            break;
                        }
                    }
                }
            }, 500);
        });
    });
    
    // ========================================
    // EPOXY CUSTOMIZER
    // ========================================
    const previewTable = document.getElementById('previewTable');
    const tableSurface = document.getElementById('tableSurface');
    const epoxyLayer = document.getElementById('epoxyLayer');
    const woodEdges = document.querySelectorAll('.wood-edge');
    const previewName = document.getElementById('previewName');
    const previewDesc = document.getElementById('previewDesc');
    const estimateTime = document.getElementById('estimateTime');
    const estimateDimensions = document.getElementById('estimateDimensions');
    
    // Color configurations
    const epoxyColors = {
        blue: { 
            gradient: 'linear-gradient(180deg, #1e3a5f 0%, #4a90c2 50%, #87ceeb 100%)',
            shadow: '0 0 40px rgba(74, 144, 194, 0.6)',
            name: 'Ocean Blue'
        },
        green: { 
            gradient: 'linear-gradient(180deg, #1a472a 0%, #3d8b4a 50%, #7ec850 100%)',
            shadow: '0 0 40px rgba(61, 139, 74, 0.6)',
            name: 'Forest Green'
        },
        amber: { 
            gradient: 'linear-gradient(180deg, #8B4513 0%, #DAA520 50%, #FFD700 100%)',
            shadow: '0 0 40px rgba(218, 165, 32, 0.6)',
            name: 'Golden Amber'
        },
        purple: { 
            gradient: 'linear-gradient(180deg, #2d1b4e 0%, #6b3fa0 50%, #b47dd1 100%)',
            shadow: '0 0 40px rgba(107, 63, 160, 0.6)',
            name: 'Galaxy Purple'
        },
        red: { 
            gradient: 'linear-gradient(180deg, #6b1a1a 0%, #c23b22 50%, #e85d4e 100%)',
            shadow: '0 0 40px rgba(194, 59, 34, 0.6)',
            name: 'Ruby Red'
        },
        black: { 
            gradient: 'linear-gradient(180deg, #1a1a1a 0%, #3d3d3d 50%, #666666 100%)',
            shadow: '0 0 40px rgba(61, 61, 61, 0.6)',
            name: 'Onyx Black'
        },
        white: { 
            gradient: 'linear-gradient(180deg, #d4d4d4 0%, #f0f0f0 50%, #ffffff 100%)',
            shadow: '0 0 40px rgba(240, 240, 240, 0.6)',
            name: 'Pearl White'
        },
        turquoise: { 
            gradient: 'linear-gradient(180deg, #0d5c5c 0%, #20b2aa 50%, #40e0d0 100%)',
            shadow: '0 0 40px rgba(32, 178, 170, 0.6)',
            name: 'Turquoise'
        }
    };
    
    // Wood configurations
    const woodColors = {
        walnut: '#5d4e37',
        oak: '#8b6f47',
        cherry: '#7a3e2e',
        maple: '#d4a76a',
        pine: '#c4a77d'
    };
    
    // Table type configurations
    const tableTypes = {
        coffee: {
            name: 'River Coffee Table',
            desc: 'Small coffee table with flowing epoxy river design',
            time: '2-3 weeks',
            dimensions: '80cm x 60cm x 45cm',
            surfaceHeight: '200px'
        },
        dining: {
            name: 'Ocean Dining Table',
            desc: 'Dining table with ocean-wave epoxy pattern. Seats 6-8 people.',
            time: '3-4 weeks',
            dimensions: '180cm x 90cm x 75cm',
            surfaceHeight: '200px'
        },
        side: {
            name: 'Golden Resin Side Table',
            desc: 'Compact side table with golden amber epoxy accents.',
            time: '2 weeks',
            dimensions: '50cm x 50cm x 55cm',
            surfaceHeight: '150px'
        },
        nightstand: {
            name: 'Galaxy Nightstand',
            desc: 'Bedside table with deep galaxy epoxy effect',
            time: '2 weeks',
            dimensions: '45cm x 40cm x 55cm',
            surfaceHeight: '150px'
        }
    };
    
    let currentTable = 'coffee';
    let currentColor = 'blue';
    let currentWood = 'walnut';
    
    // Table type selection
    document.querySelectorAll('.table-option').forEach(btn => {
        btn.addEventListener('click', function() {
            document.querySelectorAll('.table-option').forEach(b => b.classList.remove('active'));
            this.classList.add('active');
            
            currentTable = this.getAttribute('data-table');
            const tableData = tableTypes[currentTable];
            
            // Update preview info
            previewName.textContent = tableData.name;
            previewDesc.textContent = tableData.desc;
            estimateTime.textContent = tableData.time;
            estimateDimensions.textContent = tableData.dimensions;
            
            // Update table size
            tableSurface.style.height = tableData.surfaceHeight;
            
            updatePreview();
        });
    });
    
    // Color selection
    document.querySelectorAll('.color-option').forEach(btn => {
        btn.addEventListener('click', function() {
            document.querySelectorAll('.color-option').forEach(b => b.classList.remove('active'));
            this.classList.add('active');
            
            currentColor = this.getAttribute('data-color');
            updatePreview();
        });
    });
    
    // Wood selection
    document.querySelectorAll('.wood-option').forEach(btn => {
        btn.addEventListener('click', function() {
            document.querySelectorAll('.wood-option').forEach(b => b.classList.remove('active'));
            this.classList.add('active');
            
            currentWood = this.getAttribute('data-wood');
            updatePreview();
        });
    });
    
    function updatePreview() {
        // Update epoxy color and dynamic glow
        epoxyLayer.style.background = epoxyColors[currentColor].gradient;
        epoxyLayer.style.boxShadow = epoxyColors[currentColor].shadow;
        
        // Update wood edges
        woodEdges.forEach(edge => {
            edge.style.background = woodColors[currentWood];
        });
    }
    
    // Interactive 3D Perspective on Mousemove
    const previewWrapper = document.getElementById('previewWrapper');
    const customizerPreviewArea = document.querySelector('.customizer-preview');
    if (previewWrapper && customizerPreviewArea) {
        customizerPreviewArea.addEventListener('mousemove', function(e) {
            const rect = this.getBoundingClientRect();
            const x = Math.max(0, Math.min(e.clientX - rect.left, rect.width));
            const y = Math.max(0, Math.min(e.clientY - rect.top, rect.height));
            
            const xPercent = x / rect.width;
            const yPercent = y / rect.height;
            
            // Base rotation is 60deg X, -45deg Z
            const rotX = 50 + (yPercent * 20); // 50 to 70
            const rotZ = -35 - (xPercent * 20); // -35 to -55
            
            previewWrapper.style.transform = `rotateX(${rotX}deg) rotateZ(${rotZ}deg)`;
        });
        
        customizerPreviewArea.addEventListener('mouseleave', function() {
            previewWrapper.style.transform = `rotateX(60deg) rotateZ(-45deg)`;
        });
    }
    
    // Customizer inquiry button
    document.getElementById('customizerInquiry').addEventListener('click', function() {
        const product = tableTypes[currentTable].name;
        const color = epoxyColors[currentColor].name;
        const wood = currentWood.charAt(0).toUpperCase() + currentWood.slice(1);
        const dimensions = tableTypes[currentTable].dimensions;
        
        // Scroll to contact form
        const contactSection = document.getElementById('contact');
        const offset = 80;
        const targetPosition = contactSection.getBoundingClientRect().top + window.pageYOffset - offset;
        window.scrollTo({
            top: targetPosition,
            behavior: 'smooth'
        });
        
        // Pre-fill the form with customizer selections
        setTimeout(() => {
            const productSelect = document.getElementById('product');
            const messageField = document.getElementById('message');
            
            // Find closest matching option
            let bestMatch = 0;
            let bestMatchScore = 0;
            for (let i = 0; i < productSelect.options.length; i++) {
                const option = productSelect.options[i].value.toLowerCase();
                const productLower = product.toLowerCase();
                if (productLower.includes(option) || option.includes(productLower.split(' ')[0])) {
                    if (option.length > bestMatchScore) {
                        bestMatch = i;
                        bestMatchScore = option.length;
                    }
                }
            }
            productSelect.selectedIndex = bestMatch;
            productSelect.dispatchEvent(new Event('change'));
            
            // Pre-fill message with customizer details
            const prefillMessage = `I'm interested in a custom ${product} with the following specifications:\n\n` +
                `- Wood Type: ${wood}\n` +
                `- Epoxy Color: ${color}\n` +
                `- Preferred Dimensions: ${dimensions}\n\n` +
                `Please let me know the estimated time and cost for this custom piece.`;
            
            messageField.value = prefillMessage;
        }, 500);
    });
    
    // ========================================
    // CONTACT FORM - Epoxy color toggle
    // ========================================
    const productSelect = document.getElementById('product');
    const epoxyOptions = document.getElementById('epoxyOptions');
    
    if (productSelect && epoxyOptions) {
        productSelect.addEventListener('change', function() {
            const selected = this.value.toLowerCase();
            if (selected.includes('epoxy') || selected.includes('river') || selected.includes('ocean') || 
                selected.includes('galaxy') || selected.includes('golden') || selected.includes('custom')) {
                epoxyOptions.style.display = 'block';
            } else {
                epoxyOptions.style.display = 'none';
            }
        });
    }
    
    // ========================================
    // FORM SUBMISSION
    // ========================================
    const inquiryForm = document.getElementById('inquiryForm');
    const successModal = document.getElementById('successModal');
    
    inquiryForm.addEventListener('submit', async function(e) {
        e.preventDefault();

        const formAction = this.getAttribute('action');
        const submitButton = this.querySelector('button[type="submit"]');
        const originalButtonHtml = submitButton.innerHTML;

        submitButton.disabled = true;
        submitButton.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Sending...';

        try {
            const response = await fetch(formAction, {
                method: 'POST',
                body: new FormData(this),
                headers: {
                    Accept: 'application/json'
                }
            });

            if (!response.ok) {
                throw new Error('Form submission failed');
            }

            successModal.classList.add('active');
            inquiryForm.reset();

            if (epoxyOptions) {
                epoxyOptions.style.display = 'none';
            }
        } catch (error) {
            console.error('Inquiry submission failed:', error);
            window.alert('We could not send your inquiry right now. Please try again in a moment or contact us on WhatsApp.');
        } finally {
            submitButton.disabled = false;
            submitButton.innerHTML = originalButtonHtml;
        }
    });
    
    // Close modal function
    window.closeModal = function() {
        successModal.classList.remove('active');
    };
    
    // Close modal on backdrop click
    successModal.addEventListener('click', function(e) {
        if (e.target === successModal) {
            closeModal();
        }
    });
    
    // ========================================
    // SCROLL REVEAL ANIMATIONS
    // ========================================
    const revealElements = document.querySelectorAll('.product-card, .gallery-item, .about-feature, .contact-card, .stat');
    
    const revealObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
                revealObserver.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    });
    
    revealElements.forEach(el => {
        el.classList.add('reveal');
        revealObserver.observe(el);
    });
    
    // ========================================
    // GALLERY LIGHTBOX (simple click effect)
    // ========================================
    document.querySelectorAll('.gallery-item').forEach(item => {
        item.addEventListener('click', function() {
            this.style.transform = 'scale(1.02)';
            setTimeout(() => {
                this.style.transform = '';
            }, 200);
        });
    });
    
    // ========================================
    // PARALLAX EFFECT ON HERO
    // ========================================
    window.addEventListener('scroll', function() {
        const hero = document.querySelector('.hero');
        const scrolled = window.pageYOffset;
        if (hero && scrolled < window.innerHeight) {
            hero.style.backgroundPositionY = (scrolled * 0.5) + 'px';
        }
    });
    
    // ========================================
    // ACTIVE NAV LINK ON SCROLL
    // ========================================
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-menu a[href^="#"]');
    
    window.addEventListener('scroll', function() {
        let current = '';
        sections.forEach(section => {
            const sectionTop = section.offsetTop - 100;
            if (window.scrollY >= sectionTop) {
                current = section.getAttribute('id');
            }
        });
        
        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === '#' + current) {
                link.classList.add('active');
            }
        });
    });
    
    // ========================================
    // EPoxy shimmer effect on preview
    // ========================================
    function addShimmerEffect() {
        const epoxy = document.getElementById('epoxyLayer');
        if (!epoxy) return;
        
        let shimmerPos = -100;
        function animateShimmer() {
            shimmerPos += 0.5;
            if (shimmerPos > 200) shimmerPos = -100;
            
            epoxy.style.backgroundImage = `linear-gradient(90deg, transparent ${shimmerPos}%, rgba(255,255,255,0.15) ${shimmerPos + 50}%, transparent ${shimmerPos + 100}%)`;
            requestAnimationFrame(animateShimmer);
        }
        
        // Only apply shimmer if the user has interacted
        let interacted = false;
        document.querySelector('.customizer').addEventListener('mouseenter', function() {
            if (!interacted) {
                interacted = true;
                // animateShimmer(); // Uncomment for subtle shimmer effect
            }
        });
    }
    
    addShimmerEffect();
    
    // ========================================
    // CONSOLE WELCOME MESSAGE
    // ========================================
    console.log('%c 🌳 WoodCraft Studio Website', 'color: #c4956a; font-size: 20px; font-weight: bold;');
    console.log('%c Custom wood & epoxy furniture showcase', 'color: #5d4e37; font-size: 14px;');
    console.log('');
    console.log('%c 📧 Contact Form:', 'color: #c4956a; font-size: 14px; font-weight: bold;');
    console.log('1. Form submissions are sent through Formspree');
    console.log('2. Update contact info and social links in the HTML as needed');
    console.log('3. Deploy to GitHub Pages or any static host');
    
});
