// Mobile Menu Toggle
        const mobileMenuBtn = document.getElementById('mobileMenuBtn');
        const navLinks = document.getElementById('navLinks');
        
        mobileMenuBtn.addEventListener('click', () => {
            navLinks.classList.toggle('active');
            mobileMenuBtn.innerHTML = navLinks.classList.contains('active') ? 
                '<i class="fas fa-times"></i>' : '<i class="fas fa-bars"></i>';
        });
        
        // Navbar scroll effect
        const navbar = document.getElementById('navbar');
        const mobileMenuBtnIcon = document.querySelector('.mobile-menu-btn i');
        
        window.addEventListener('scroll', () => {
            if (window.scrollY > 100) {
                navbar.classList.add('scrolled');
                mobileMenuBtn.classList.add('scrolled');
            } else {
                navbar.classList.remove('scrolled');
                mobileMenuBtn.classList.remove('scrolled');
            }
        });
        
        // Smooth scrolling for anchor links
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function(e) {
                e.preventDefault();
                
                if (this.getAttribute('href') === '#') return;
                
                const target = document.querySelector(this.getAttribute('href'));
                if (target) {
                    window.scrollTo({
                        top: target.offsetTop - 80,
                        behavior: 'smooth'
                    });
                    
                    // Close mobile menu if open
                    if (navLinks.classList.contains('active')) {
                        navLinks.classList.remove('active');
                        mobileMenuBtn.innerHTML = '<i class="fas fa-bars"></i>';
                    }
                }
            });
        });
        
        // Scroll down button
        const scrollDownBtn = document.getElementById('scrollDown');
        if (scrollDownBtn) {
            scrollDownBtn.addEventListener('click', () => {
                window.scrollTo({
                    top: window.innerHeight - 80,
                    behavior: 'smooth'
                });
            });
        }
        
        // Countdown timer
        const weddingDate = new Date('June 15, 2025 16:00:00').getTime();
        
        function updateCountdown() {
            const now = new Date().getTime();
            const distance = weddingDate - now;
            
            const days = Math.floor(distance / (1000 * 60 * 60 * 24));
            const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
            const seconds = Math.floor((distance % (1000 * 60)) / 1000);
            
            document.getElementById('days').textContent = days.toString().padStart(2, '0');
            document.getElementById('hours').textContent = hours.toString().padStart(2, '0');
            document.getElementById('minutes').textContent = minutes.toString().padStart(2, '0');
            document.getElementById('seconds').textContent = seconds.toString().padStart(2, '0');
            
            if (distance < 0) {
                clearInterval(countdownTimer);
                document.querySelector('.countdown').innerHTML = '<div class="countdown-message">The wedding has begun!</div>';
            }
        }
        
        updateCountdown();
        const countdownTimer = setInterval(updateCountdown, 1000);
        
        // Form submission
        const rsvpForm = document.getElementById('weddingRsvp');
        if (rsvpForm) {
            rsvpForm.addEventListener('submit', function(e) {
                e.preventDefault();
                alert('Thank you for your RSVP! We look forward to celebrating with you.');
                this.reset();
            });
        }