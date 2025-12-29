// Portfolio JavaScript - Interactivity and Enhanced User Experience

document.addEventListener('DOMContentLoaded', function() {
    initializePortfolio();
});

function initializePortfolio() {
    // Add smooth scroll behavior
    addSmoothScroll();
    
    // Add button interactions
    addButtonInteractions();
    
    // Add card animations
    addCardAnimations();
    
    // Add hover effects
    addHoverEffects();
}

/**
 * Add smooth scroll behavior to anchor links
 */
function addSmoothScroll() {
    const buttons = document.querySelectorAll('button[onclick*="scrollIntoView"]');
    
    buttons.forEach(button => {
        button.addEventListener('click', function(e) {
            e.preventDefault();
            const target = this.getAttribute('onclick').match(/'([^']+)'/)[1];
            const element = document.getElementById(target.substring(1));
            
            if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });
}

/**
 * Add interactive feedback to buttons
 */
function addButtonInteractions() {
    const buttons = document.querySelectorAll('.btn');
    
    buttons.forEach(button => {
        button.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-3px)';
        });
        
        button.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
        });
        
        button.addEventListener('click', function() {
            // Create ripple effect
            createRipple(this);
        });
    });
}

/**
 * Create ripple effect on button click
 */
function createRipple(button) {
    const ripple = document.createElement('span');
    ripple.style.position = 'absolute';
    ripple.style.width = '20px';
    ripple.style.height = '20px';
    ripple.style.background = 'rgba(255, 255, 255, 0.5)';
    ripple.style.borderRadius = '50%';
    ripple.style.pointerEvents = 'none';
    ripple.style.animation = 'rippleEffect 0.6s ease-out';
    
    button.style.position = 'relative';
    button.style.overflow = 'hidden';
    
    const rect = button.getBoundingClientRect();
    const size = Math.max(rect.width, rect.height);
    
    ripple.style.width = size + 'px';
    ripple.style.height = size + 'px';
    ripple.style.left = '50%';
    ripple.style.top = '50%';
    ripple.style.marginLeft = -size / 2 + 'px';
    ripple.style.marginTop = -size / 2 + 'px';
    
    button.appendChild(ripple);
    
    setTimeout(() => ripple.remove(), 600);
}

/**
 * Add animations to role cards and social cards on scroll
 */
function addCardAnimations() {
    const cards = document.querySelectorAll('.role-card, .social-card');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry, index) => {
            if (entry.isIntersecting) {
                setTimeout(() => {
                    entry.target.style.opacity = '1';
                    entry.target.style.animation = 'fadeInUp 0.8s ease-out forwards';
                }, index * 100);
            }
        });
    }, { threshold: 0.1 });
    
    cards.forEach(card => {
        card.style.opacity = '0';
        observer.observe(card);
    });
}

/**
 * Add enhanced hover effects
 */
function addHoverEffects() {
    const socialCards = document.querySelectorAll('.social-card');
    
    socialCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-15px) scale(1.02)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
        });
    });
}

/**
 * Add ripple animation keyframes dynamically
 */
(function() {
    const style = document.createElement('style');
    style.textContent = `
        @keyframes rippleEffect {
            0% {
                opacity: 1;
                transform: scale(0);
            }
            100% {
                opacity: 0;
                transform: scale(1);
            }
        }
    `;
    document.head.appendChild(style);
})();

/**
 * Add parallax effect on scroll
 */
window.addEventListener('scroll', function() {
    const blobs = document.querySelectorAll('.bg-blob');
    const scrollY = window.scrollY;
    
    blobs.forEach(blob => {
        blob.style.transform = `translateY(${scrollY * 0.05}px)`;
    });
});

/**
 * Prevent smooth scroll on buttons without scrolling element
 */
document.querySelectorAll('button[onclick="Learn More"]').forEach(button => {
    button.addEventListener('click', function(e) {
        e.preventDefault();
    });
});
