document.addEventListener("DOMContentLoaded", () => {
    
    // --- JS Requirement 1: Live Time Counter ---
    function updateClock() {
        const clockElement = document.getElementById("liveClock");
        const now = new Date();
        
        let hours = now.getHours();
        let minutes = now.getMinutes();
        let seconds = now.getSeconds();
        let ampm = hours >= 12 ? 'PM' : 'AM';
        
        hours = hours % 12;
        hours = hours ? hours : 12;
        
        hours = hours < 10 ? '0' + hours : hours;
        minutes = minutes < 10 ? '0' + minutes : minutes;
        seconds = seconds < 10 ? '0' + seconds : seconds;
        
        clockElement.textContent = `${hours}:${minutes}:${seconds} ${ampm}`;
    }
    
    updateClock();
    setInterval(updateClock, 1000);


    // --- JS Requirement 2: Countdown Timer ---
    const currentYear = new Date().getFullYear();
    const eventDate = new Date(`January 1, ${currentYear + 1} 00:00:00`).getTime();
    
    function updateCountdown() {
        const countdownElement = document.getElementById("countdownTimer");
        const now = new Date().getTime();
        const distance = eventDate - now;
    
        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);
        
        countdownElement.textContent = 
            `${days} Days | ${hours < 10 ? '0'+hours : hours} Hrs | ${minutes < 10 ? '0'+minutes : minutes} Mins | ${seconds < 10 ? '0'+seconds : seconds} Secs`;
    }
    
    updateCountdown();
    setInterval(updateCountdown, 1000);


    // --- JS Requirement 3: Interactive Button (Dark Mode Toggle) ---
    const darkModeBtn = document.getElementById("darkModeToggle");
    const htmlElement = document.documentElement;

    darkModeBtn.addEventListener("click", () => {
        const currentTheme = htmlElement.getAttribute("data-theme");
        if (currentTheme === "light") {
            htmlElement.setAttribute("data-theme", "dark");
            darkModeBtn.textContent = "Toggle Light Mode";
        } else {
            htmlElement.setAttribute("data-theme", "light");
            darkModeBtn.textContent = "Toggle Dark Mode";
        }
    });


    // --- Additional JS Feature: Interactive FAQ Accordion ---
    const faqQuestions = document.querySelectorAll(".faq-question");

    faqQuestions.forEach(question => {
        question.addEventListener("click", function() {
            const answer = this.nextElementSibling;
            document.querySelectorAll(".faq-answer").forEach(otherAnswer => {
                if (otherAnswer !== answer) {
                    otherAnswer.classList.remove("active");
                }
            });
            answer.classList.toggle("active");
        });
    });
    document.getElementById("year").textContent = new Date().getFullYear();
});
// --- Jumpscare Feature ---
    const jumpscareContainer = document.getElementById("jumpscare-container");
    const jumpscareSound = document.getElementById("jumpscare-sound");
    
    // Target every button and link styled as a button on the page
    const triggerElements = document.querySelectorAll("button, .btn");

    triggerElements.forEach(element => {
        element.addEventListener("click", function() {
            // 1. Show the scary image
            jumpscareContainer.style.display = "flex";
            
            // 2. Reset and play the sound
            jumpscareSound.currentTime = 0; 
            jumpscareSound.play().catch(error => console.log("Browser blocked audio:", error));

            // 3. Hide the jumpscare and stop the audio after 1.5 seconds
            setTimeout(() => {
                jumpscareContainer.style.display = "none";
                jumpscareSound.pause();
            }, 700); // 1500 milliseconds = 1.5 seconds
        });
    });