// Wait for the document to fully load
document.addEventListener('DOMContentLoaded', function() {
    // Custom pig cursor
    const pigCursor = document.querySelector('.pig-cursor');
    
    document.addEventListener('mousemove', function(e) {
        pigCursor.style.display = 'block';
        pigCursor.style.left = e.clientX + 'px';
        pigCursor.style.top = e.clientY + 'px';
    });
    
    // Profile picture effects
    const profilePic = document.getElementById('profile-pic');
    let oinkAudio;
    
    // Preload oink sound
    try {
        oinkAudio = new Audio('https://www.soundjay.com/animals/sounds/pig-oink-1.mp3');
    } catch (e) {
        console.log('Audio could not be loaded:', e);
    }
    
    profilePic.addEventListener('mouseenter', function() {
        this.style.transform = 'rotate(720deg) scale(1.2)';
        this.style.transition = 'transform 2s ease';
    });
    
    profilePic.addEventListener('mouseleave', function() {
        this.style.transform = 'rotate(0deg) scale(1)';
    });
    
    let clickCount = 0;
    
    profilePic.addEventListener('click', function() {
        clickCount++;
        
        // Play oink sound
        if (oinkAudio) {
            oinkAudio.currentTime = 0;
            oinkAudio.play();
        }
        
        // Make the profile picture "oink"
        this.style.animation = 'oink 0.3s ease';
        setTimeout(() => {
            this.style.animation = '';
        }, 300);
        
        if (clickCount >= 5) {
            revealSecretMessage();
            clickCount = 0;
        }
    });
    
    function revealSecretMessage() {
        const messageElement = document.createElement('div');
        messageElement.classList.add('secret-message');
        messageElement.style.position = 'fixed';
        messageElement.style.top = '50%';
        messageElement.style.left = '50%';
        messageElement.style.transform = 'translate(-50%, -50%)';
        messageElement.style.backgroundColor = 'rgba(255, 107, 107, 0.9)';
        messageElement.style.color = 'white';
        messageElement.style.padding = '20px';
        messageElement.style.borderRadius = '10px';
        messageElement.style.zIndex = '1000';
        messageElement.style.textAlign = 'center';
        messageElement.style.maxWidth = '80%';
        messageElement.style.boxShadow = '0 10px 30px rgba(0, 0, 0, 0.2)';
        
        messageElement.innerHTML = `
            <h3>SECRET GUTTER PIG FILES UNLOCKED!</h3>
            <p>Congratulations! You've discovered that our Gutter Pig has a collection of 47 pairs of stolen socks, each labeled with their owner's name.</p>
            <p>He also has a shrine to Anika hidden in his closet with candles and everything.</p>
            <button id="close-secret">Hide Evidence</button>
        `;
        
        document.body.appendChild(messageElement);
        
        document.getElementById('close-secret').addEventListener('click', function() {
            document.body.removeChild(messageElement);
        });
    }
    
    // Random quotes generator
    const quotes = [
        "I have a theory that if I collect enough foot sweat, I can clone my own Anika.",
        "My spirit animal? Definitely a pig. They're misunderstood, just like my obsession with toes.",
        "I'm not stalking Anika, I'm just studying her walking pattern for scientific purposes.",
        "Why do people shower daily? It removes the natural pheromones that attract potential mates.",
        "I've written a 200-page fanfiction where Anika and I raise pet pigs together in a mud mansion.",
        "I don't understand why the school made me stop bringing my foot-shaped pillow to class.",
        "I've calculated that Anika breathes approximately 23,040 times per day. I've memorized the pattern.",
        "My dating strategy is simple: the more they run, the more interested they are.",
        "I've been banned from three shoe stores for inappropriate behavior with the display models.",
        "I'm not crying, my eyes are just sweating because Anika walked by with her new boyfriend.",
        "My bedroom smells like feet? That's my collection of soccer cleats I found in the locker room.",
        "I think mud baths should replace water conservation in schools. Two birds, one stone.",
        "Anika once said 'ew' when I tried to hold her hand. That's basically third base, right?",
        "My dating profile says 'Will pay for feet pics' and I don't understand why I'm still single.",
        "I've named all my toes after Anika's fingers. We're practically holding hands all the time."
    ];
    
    const newQuoteBtn = document.getElementById('new-quote');
    const quoteContainer = document.querySelector('.quote-container');
    
    newQuoteBtn.addEventListener('click', function() {
        // Clear existing quotes
        quoteContainer.innerHTML = '';
        
        // Add shake effect to button
        this.style.animation = 'wobble 0.5s ease';
        setTimeout(() => {
            this.style.animation = '';
        }, 500);
        
        // Get 3 random quotes
        const selectedQuotes = [];
        while (selectedQuotes.length < 3) {
            const randomIndex = Math.floor(Math.random() * quotes.length);
            if (!selectedQuotes.includes(quotes[randomIndex])) {
                selectedQuotes.push(quotes[randomIndex]);
            }
        }
        
        // Add new quotes to container with animation
        selectedQuotes.forEach((quote, index) => {
            const quoteElem = document.createElement('p');
            quoteElem.className = 'quote';
            quoteElem.textContent = quote;
            quoteElem.style.opacity = '0';
            quoteElem.style.transform = 'translateY(20px)';
            quoteElem.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
            quoteContainer.appendChild(quoteElem);
            
            setTimeout(() => {
                quoteElem.style.opacity = '1';
                quoteElem.style.transform = 'translateY(0)';
            }, index * 200);
        });
    });
    
    // Foot meter animation
    const meterFill = document.getElementById('meter-fill');
    
    function animateMeter() {
        meterFill.style.width = '0%';
        
        setTimeout(() => {
            meterFill.style.width = '95%';
        }, 500);
    }
    
    // Run meter animation on page load and every 15 seconds
    animateMeter();
    setInterval(animateMeter, 15000);
    
    // Visit counter
    let visits = localStorage.getItem('gutterPigVisits') || 0;
    visits = parseInt(visits) + 1;
    localStorage.setItem('gutterPigVisits', visits);
    document.getElementById('visits').textContent = `Number of times he's been publicly shamed: ${visits}`;
    
    // Popup notification
    const popup = document.getElementById('popup');
    const closePopupBtn = document.getElementById('close-popup');
    
    setTimeout(() => {
        popup.style.top = '20px';
    }, 3000);
    
    closePopupBtn.addEventListener('click', function() {
        popup.style.top = '-100%';
    });
    
    // Section animations on scroll
    const sections = document.querySelectorAll('section');
    
    function checkScroll() {
        sections.forEach(section => {
            const sectionTop = section.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;
            
            if (sectionTop < windowHeight * 0.75) {
                section.style.opacity = '1';
                section.style.transform = 'translateY(0)';
            }
        });
    }
    
    // Initialize sections with starting styles
    sections.forEach(section => {
        section.style.opacity = '0';
        section.style.transform = 'translateY(30px)';
        section.style.transition = 'opacity 0.8s ease, transform 0.8s ease';
    });
    
    // Check section visibility initially and on scroll
    checkScroll();
    window.addEventListener('scroll', checkScroll);
    
    // Random pig sounds on page interaction
    document.addEventListener('click', function() {
        if (Math.random() < 0.1 && oinkAudio) {
            const pitchShift = 0.5 + Math.random();
            oinkAudio.playbackRate = pitchShift;
            
