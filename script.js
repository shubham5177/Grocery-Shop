 // Mobile hamburger menu
 const hamburger = document.querySelector('.hamburger');
 const navLinks = document.querySelector('.nav-links');

 hamburger.addEventListener('click', () => {
     hamburger.classList.toggle('active');
     navLinks.classList.toggle('active');
 });

 // Close mobile menu when clicking on a link
 document.querySelectorAll('.nav-links a').forEach(link => {
     link.addEventListener('click', () => {
         hamburger.classList.remove('active');
         navLinks.classList.remove('active');
     });
 });

 // Contact form submission
 const contactForm = document.querySelector('.contact-form form');
 contactForm.addEventListener('submit', (e) => {
     e.preventDefault();
     alert('Thank you for your message! We\'ll get back to you soon.');
     contactForm.reset();
 });

 // Custom cursor effect
 const cursor = document.querySelector('.cursor');
 const cursorTrail = document.querySelector('.cursor-trail');

 let mouseX = 0;
 let mouseY = 0;
 let cursorX = 0;
 let cursorY = 0;
 let trailX = 0;
 let trailY = 0;

 // Update mouse position
 document.addEventListener('mousemove', (e) => {
     mouseX = e.clientX;
     mouseY = e.clientY;
 });

 // Animate cursor
 function animateCursor() {
     // Smooth cursor movement
     cursorX += (mouseX - cursorX) * 0.1;
     cursorY += (mouseY - cursorY) * 0.1;

     // Trail follows with delay
     trailX += (mouseX - trailX) * 0.05;
     trailY += (mouseY - trailY) * 0.05;

     cursor.style.left = cursorX - 10 + 'px';
     cursor.style.top = cursorY - 10 + 'px';

     cursorTrail.style.left = trailX - 4 + 'px';
     cursorTrail.style.top = trailY - 4 + 'px';

     requestAnimationFrame(animateCursor);
 }

 // Start cursor animation
 animateCursor();

 // Cursor hover effects
 const hoverElements = document.querySelectorAll('a, button, .product-card, .cta-button');

 hoverElements.forEach(element => {
     element.addEventListener('mouseenter', () => {
         cursor.classList.add('hover');
     });

     element.addEventListener('mouseleave', () => {
         cursor.classList.remove('hover');
     });
 });

 // Click effect
 document.addEventListener('mousedown', () => {
     cursor.classList.add('click');
 });

 document.addEventListener('mouseup', () => {
     cursor.classList.remove('click');
 });

 // Create floating particles
 function createParticles() {
     for (let i = 0; i < 50; i++) {
         const particle = document.createElement('div');
         particle.className = 'particle';
         particle.style.left = Math.random() * 100 + '%';
         particle.style.top = Math.random() * 100 + '%';
         particle.style.animationDelay = Math.random() * 6 + 's';
         particle.style.animationDuration = (Math.random() * 3 + 3) + 's';
         document.body.appendChild(particle);
     }
 }

 // Smooth scrolling for navigation links
 document.querySelectorAll('a[href^="#"]').forEach(anchor => {
     anchor.addEventListener('click', function(e) {
         e.preventDefault();
         const target = document.querySelector(this.getAttribute('href'));
         if (target) {
             target.scrollIntoView({
                 behavior: 'smooth',
                 block: 'start'
             });
         }
     });
 });

 // Header scroll effect
 window.addEventListener('scroll', () => {
     const header = document.querySelector('header');
     if (window.scrollY > 100) {
         header.style.background = 'rgba(0, 0, 0, 0.9)';
         header.style.backdropFilter = 'blur(20px)';
     } else {
         header.style.background = 'rgba(255, 255, 255, 0.1)';
         header.style.backdropFilter = 'blur(20px)';
     }
 });

 // Animate product cards on scroll
 const observerOptions = {
     threshold: 0.1,
     rootMargin: '0px 0px -50px 0px'
 };

 const observer = new IntersectionObserver((entries) => {
     entries.forEach(entry => {
         if (entry.isIntersecting) {
             entry.target.style.animation = 'fadeInUp 0.6s ease-out forwards';
         }
     });
 }, observerOptions);

 document.querySelectorAll('.product-card').forEach(card => {
     card.style.opacity = '0';
     card.style.transform = 'translateY(50px)';
     observer.observe(card);
 });

 // Initialize particles when page loads
 window.addEventListener('load', createParticles);

 // Add hover effect to CTA button
 const ctaButton = document.querySelector('.cta-button');
 ctaButton.addEventListener('mouseenter', function() {
     this.style.animation = 'none';
     this.style.transform = 'translateY(-5px) scale(1.05)';
 });

 ctaButton.addEventListener('mouseleave', function() {
     this.style.transform = 'translateY(0) scale(1)';
 });