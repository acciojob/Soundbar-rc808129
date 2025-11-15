let currentSound; // Yeh variable current playing sound ko track karega

function playSound(sound) {
    if (currentSound) {
        currentSound.pause(); // Agar koi sound already play ho raha ho, toh usse stop kar do
    }
    currentSound = new Audio(`sounds/${sound}.mp3`); // Audio file ka path
    currentSound.play(); // Sound play karna
}

function stopSound() {
    if (currentSound) {
        currentSound.pause(); // Sound ko stop karna
        currentSound.currentTime = 0; // Sound ko reset karna
    }
}