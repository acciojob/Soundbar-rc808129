//your JS code here. If required.
let currentSound;

function playSound(sound) {
    if (currentSound) {
        currentSound.pause(); // Agar koi sound play ho raha hai, toh usse stop kar do
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