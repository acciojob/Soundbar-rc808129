let currentSound; // Yeh variable current playing sound ko track karega

function playSound(sound) {
    // Agar koi sound already play ho raha hai, toh pehle usse stop & remove kar do
    if (currentSound) {
        currentSound.pause();
        currentSound.currentTime = 0;
        currentSound.remove(); // DOM se remove
    }

    // Naya audio element create karna
    currentSound = document.createElement("audio");
    currentSound.src = `sounds/${sound}.mp3`;
    currentSound.autoplay = true;
    currentSound.setAttribute("id", "active-audio"); // Optional (Cypress me helpful)

    // DOM me add karna (IMPORTANT)
    document.body.appendChild(currentSound);
}

function stopSound() {
    if (currentSound) {
        currentSound.pause();
        currentSound.currentTime = 0;
        currentSound.remove(); // DOM se remove bhi kar do
        currentSound = null;
    }
}
