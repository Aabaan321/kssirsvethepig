// Wait for the document to fully load
document.addEventListener('DOMContentLoaded', function() {
    // Profile picture spin on hover
    const profilePic = document.getElementById('profile-pic');
    
    profilePic.addEventListener('mouseenter', function() {
        this.style.transform = 'rotate(360deg) scale(1.2)';
        this.style.transition = 'transform 1s ease';
    });
    
    profilePic.addEventListener('mouseleave', function() {
        this.style.transform = 'rotate(0deg) scale(1)';
    });
    
    // Random quotes generator
    const quotes = [
        "I once told Anika I collect pig figurines just to impress her.",
        "My dream date is walking barefoot in mud puddles.",
        "I write poetry about feet in my secret journal.",
        "One day I'll marry Anika and we'll have pet pigs.",
        "I practice my pig snorts when no one is watching.",
        "My favorite movie is Babe, but not for the reasons you'd think.",
        "I've tried to impress boys with my mud wrestling skills.",
        "Anika once looked at me in class and I nearly fainted.",
        "I have a secret collection of socks that I never wear."
    ];
    
    const newQuoteBtn = document.getElementById('new-quote');
    const quoteContainer = document.querySelector('.quote-container');
    
    newQuoteBtn.addEventListener('click', function() {
        // Clear existing quotes
        quoteContainer.innerHTML = '';
        
        // Get 3 random quotes
        const selectedQuotes = [];
        while (selectedQuotes.length < 3) {
            const randomIndex = Math.floor(Math.random() * quotes.length);
            if (!selectedQuotes.includes(quotes[randomIndex])) {
                selectedQuotes.push(quotes[randomIndex]);
            }
        }
        
        // Add new quotes to container
        selectedQuotes.forEach(quote => {
            const quoteElem = document.createElement('p');
            quoteElem.textContent = quote;
            quoteContainer.appendChild(quoteElem);
        });
    });
    
    // Visit counter
    let visits = localStorage.getItem('gutterPigVisits') || 0;
    visits = parseInt(visits) + 1;
    localStorage.setItem('gutterPigVisits', visits);
    document.getElementById('visits').textContent = `Total Visits: ${visits}`;
    
    // Easter egg - oink sound when clicking the profile
    profilePic.addEventListener('click', function() {
        const audio = new Audio('https://www.soundjay.com/animals/sounds/pig-oink-1.mp3');
        audio.play();
        
        // Make the page temporarily go "pig mode"
        document.body.style.backgroundColor = 'pink';
        setTimeout(() => {
            document.body.style.backgroundColor = '';
        }, 1000);
    });
});
