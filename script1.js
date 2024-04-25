let levels = [
    {
        "level": "1",
        "images": [
            "https://img.freepik.com/free-photo/christmas-lantern-with-fir-branch-decoration-snowy-table-defocused-background-generative-ai_1258-150778.jpg",
            "https://img.freepik.com/free-photo/christmas-lantern-with-fir-branch-decoration-snowy-table-defocused-background-generative-ai_1258-150778.jpg",
            "https://img.freepik.com/free-photo/christmas-lantern-with-fir-branch-decoration-snowy-table-defocused-background-generative-ai_1258-150778.jpg",
            "https://img.freepik.com/free-photo/christmas-lantern-with-fir-branch-decoration-snowy-table-defocused-background-generative-ai_1258-150778.jpg"
        ],
        "word": "Animal"
    },
    {
        "level": "2",
        "images": [
            "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c8/Altja_j%C3%B5gi_Lahemaal.jpg/1200px-Altja_j%C3%B5gi_Lahemaal.jpg",
            "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c8/Altja_j%C3%B5gi_Lahemaal.jpg/1200px-Altja_j%C3%B5gi_Lahemaal.jpg",
            "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c8/Altja_j%C3%B5gi_Lahemaal.jpg/1200px-Altja_j%C3%B5gi_Lahemaal.jpg",
            "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c8/Altja_j%C3%B5gi_Lahemaal.jpg/1200px-Altja_j%C3%B5gi_Lahemaal.jpg"
        ],
        "word": "Animal"
    }
]



let playerLife = []; // Player life as an array
const maxPlayerLife = 5; // Maximum player life

// Function to initialize player's life
function initializePlayerLife() {
    playerLife = Array.from({ length: maxPlayerLife }, (_, index) => index + 1);
}

// Function to update player's life display
function updatePlayerLifeDisplay() {
    const playerLifeSection = document.getElementById("player-life");
    playerLifeSection.innerHTML = ""; // Clear existing life display
    playerLife.forEach(() => {
        const img = document.createElement("img");
        img.src = `./images/heart.png`;
        img.className = "player-life"
        img.alt = "Heart";
        img.width = 100;
        img.height = 80;
        playerLifeSection.appendChild(img);
    });
}

initializePlayerLife(); // Initialize player's life
updatePlayerLifeDisplay(); // Update player's life display

const imageContainer = document.querySelector('.image-container');

// Assuming you want to load images for level 1
const currentLevel = levels.find(level => level.level === '1');
if (currentLevel) {
    currentLevel.images.forEach(imageUrl => {
        const img = document.createElement('img');
        img.src = imageUrl;
        img.alt = 'Image to guess';
        img.width = 400;
        img.height = 250;
        imageContainer.appendChild(img);
    });
}

const startingMinutes = 10;
let time = startingMinutes * 60;

const countdownEl = document.getElementById('countdown');
const col = document.getElementById('time');

setInterval(updateCountdown, 1000);

function updateCountdown() {
    const minutes = Math.floor(time / 60);
    let seconds = time % 60;
    seconds = seconds < 10 ? "0" + seconds : seconds;
    countdownEl.innerHTML = `${minutes}:${seconds}`;
    console.log(seconds);
    if (minutes === 2 && seconds === 50) {
        col.style.color = "red";
    }
   time--
    
}



