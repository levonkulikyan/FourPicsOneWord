let levels = [
    {
        "level": "1",
        "images": [
            "https://i.pinimg.com/736x/7e/38/39/7e3839bdb5c27c1abc3efc6c0835f07d.jpg",
            "https://i.pinimg.com/564x/5f/31/98/5f31989c5168a9616c6ed501948289ea.jpg",
            "https://i.pinimg.com/564x/22/c2/63/22c26383bd2cd70e8c3e0585c9234e7e.jpg",
            "https://i.pinimg.com/564x/c0/5d/85/c05d85607e98610775d8e4e40bed4918.jpg"
        ],
        "word": "travel"
    },
    {
        "level": "2",
        "images": [
            "https://i.pinimg.com/236x/47/fe/02/47fe02e530ca8bbba53139dfd8ebe50a.jpg",
            "https://i.pinimg.com/236x/5c/b3/b9/5cb3b980bb74270b59f8be1a292cf4c3.jpg",
            "https://i.pinimg.com/236x/f2/21/12/f221128c489618a328cdcc8fb572f5b7.jpg",
            "https://i.pinimg.com/236x/57/00/ae/5700ae0fce745d44ab5780bbf2795a32.jpg"
        ],
        "word": "music"
    },
    {
        "level": "3",
        "images": [
            "https://i.pinimg.com/564x/59/26/f6/5926f670fdf145cd1f36e49cc5bb67c7.jpg",
            "https://i.pinimg.com/236x/56/74/20/56742005ece6d8039de2332e6af0696c.jpg",
            "https://i.pinimg.com/236x/f5/22/7e/f5227e2d7ea8fcf9a3fd4b47bfdd720e.jpg",
            "https://i.pinimg.com/736x/35/9e/bf/359ebfb07ec847d5d3709370250042f1.jpg"
        ],
        "word": "weather"
    },
    {
        "level": "4",
        "images": [
            "https://images.unsplash.com/photo-1477884213360-7e9d7dcc1e48?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            "https://images.unsplash.com/photo-1546182990-dffeafbe841d?q=80&w=2059&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            "https://images.unsplash.com/photo-1477884213360-7e9d7dcc1e48?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            "https://images.unsplash.com/photo-1546182990-dffeafbe841d?q=80&w=2059&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        ],
        "word": "Animal"
    }
]


// Function to update countdown timer
// Function to update countdown timer
function updateCountdown() {
    if (totalSeconds <= 0) {
        clearInterval(intervalId);
        countdownEl.innerHTML = '0:00';
        document.getElementById('inputs').innerHTML = '';
        showModal();
        return;
    }
    const minutes = Math.floor(totalSeconds / 60);
    let seconds = totalSeconds % 60;
    seconds = seconds < 10 ? "0" + seconds : seconds;
    countdownEl.innerHTML = `${minutes}:${seconds}`;
    totalSeconds--;
}

// Function to show the modal
function showModal() {
    const modal = document.getElementById("myModal");
    modal.style.display = "block";
    document.querySelector("body").style.cursor = "pointer";adf
    // Close the modal when the user clicks on the close button
    const closeModalBtn = document.querySelector(".close");
    closeModalBtn.addEventListener("click", function () {
        modal.style.display = "none";
    });

    // Close the modal when the user clicks anywhere outside of it
    window.addEventListener("click", function (event) {
        if (event.target === modal) {
            modal.style.display = "none";
        }
    });
}


function levelResult() {
    let currentMinute = Number(countdownEl.innerHTML.split(":")[0]);
    let currentSecond = Number(countdownEl.innerHTML.split(":")[1]);

    const guessTime = levelResultSeconds - ((currentMinute * 60) + currentSecond);
    levelResultSeconds = (currentMinute * 60) + currentSecond;
    console.log(guessTime);

    const minutes = Math.floor(guessTime / 60);
    const remainingSeconds = guessTime % 60;
    const formattedMinutes = minutes;
    const formattedSeconds = remainingSeconds < 10 ? '0' + remainingSeconds : remainingSeconds;

    if (minutes > 0) {

        return `Level${startLevel + 1} guessed in ${formattedMinutes} minutes and ${formattedSeconds} seconds`

        // console.log(`Level ${startLevel+1} guessed in ${formattedMinutes} minutes and ${formattedSeconds} seconds`);
    } else {
        // console.log(`Level ${startLevel+1} guessed in ${formattedSeconds} seconds`);
        return `Level${startLevel + 1} guessed in ${formattedSeconds} seconds`
    }
}

// Function to update player life display
function updatePlayerLifeDisplay(lifes) {
    const playerLifeSection = document.getElementById("player-life");
    playerLifeSection.innerHTML = ''; // Clear previous hearts
    for (let i = 0; i < lifes; ++i) {
        const img = document.createElement("img");
        img.className = "player-hearts"
        img.src = "./images/giphy.gif";
        img.alt = "Heart";
        img.width = 80;
        img.height = 60;
        playerLifeSection.appendChild(img);
    }

    if (lifes === 0) {
        clearInterval(intervalId);
        countdownEl.innerHTML = '0:00';
     
        resultModal.innerHTML = "" //Clear results
        const gameOverMessageheader = document.createElement('h1');
        const gameOverMessage = document.createElement('p');
        const homeLink = document.createElement('a');
        const playAgain = document.createElement('a');
        gameOverMessageheader.textContent = "Game Over!";
        gameOverMessageheader.className = "modal-h1";
        gameOverMessage.textContent = "Better luck next time!";
        gameOverMessage.className = "modal-p";

        homeLink.textContent = "Home"
        homeLink.href = "./index.html"
        homeLink.className = "modal-link"

        playAgain.textContent = "Play Again"
        playAgain.href = "./main.html"
        playAgain.className = "modal-link"

        resultModal.appendChild(gameOverMessageheader);
        resultModal.appendChild(gameOverMessage);
        resultModal.appendChild(playAgain);
        resultModal.appendChild(homeLink);
        resultModal.style.backgroundColor = "#be2b2bb9";
        document.querySelector("body").style = "blur(3rem)";
        showModal();
        return;
    }
}

// Function to display the current level
let concatenatedString = "";

function displayLevel(levelIndex) {
    const currentLevel = levels[levelIndex];
    let inputLength = currentLevel.word.length;

    // Clear existing inputs
    document.getElementById('inputs').innerHTML = '';

    currentLevel.images.forEach(imageUrl => {
        const img = document.createElement('img');
        img.src = imageUrl;
        img.alt = 'Image to guess';
        imageContainer.appendChild(img);
     

    });

    for (let i = 0; i < inputLength; ++i) {
        const input = document.createElement("input");
        input.className = "answer-input";
        input.type = "text";
        input.id = "answer-input" + i;
        input.maxLength = 1;
        input.autocomplete = "off";
        document.getElementById('inputs').appendChild(input);
        document.getElementById('inputs').classList.add('loaded');


        // Add event listener for 'input' event
        input.addEventListener('input', function () {
            if (this.value.length === this.maxLength) {
                // Find the next input field
                const nextInput = document.getElementById('answer-input' + (i + 1));
                if (nextInput) {
                    // If found, focus on it
                    nextInput.focus();
                }
            }

            // Update concatenatedString after each input
            concatenatedString = "";
            for (let j = 0; j < inputLength; j++) {
                const inputField = document.getElementById('answer-input' + j);
                concatenatedString += inputField.value;
            }
            console.log(concatenatedString);

            // Call checkAnswer with concatenatedString
            checkAnswer(concatenatedString);
        });

        input.addEventListener('keydown', function (event) {
            if (event.keyCode === 8 && this.value.length === 0) {
                // Backspace key pressed and input value is empty
                // Find the previous input field
                const prevInput = document.getElementById('answer-input' + (i - 1));
                if (prevInput) {
                    // If found, focus on it
                    prevInput.focus();
                }
            }
        });
    }

    // Focus on the first input field after creating the inputs
    document.getElementById('answer-input0').focus();
}



function checkAnswer(concatenatedString) {

    const currentLevel = levels[startLevel];
    const enteredValue = concatenatedString.toLowerCase();
    if (enteredValue.length === currentLevel.word.length) {
        if (enteredValue === currentLevel.word.toLowerCase()) {
            // Clear previous images
            imageContainer.innerHTML = '';

            const p = document.createElement('p');
            //Function result
            p.textContent = levelResult();
            document.querySelector(".modal-content").appendChild(p);

            // Proceed to the next level if available
            if (startLevel < totalLevels - 1) {
                startLevel++;
               
                    displayLevel(startLevel);
             
               
            } else {
                // Notify the user that they have completed all levels
                clearInterval(intervalId);
                countdownEl.innerHTML = '0:00';
                document.getElementById('inputs').innerHTML = '';
                resultModal.style.backgroundImage = "url('./images/celebration.gif')";
                showModal();
                return;
            }
            // Clear the input field
            document.querySelectorAll('.answer-input').forEach(input => input.value = '');
        } else {
            // Notify the user of incorrect answer (you may want to handle this differently)
            --playersLife;
            updatePlayerLifeDisplay(playersLife)
            // You can also add other error handling logic here
        }
    }
}

let totalLevels = levels.length;
let startLevel = 0;

const startingMinutes = 10;
let totalSeconds = startingMinutes * 60;
let levelResultSeconds = startingMinutes * 60;
const countdownEl = document.getElementById('countdown');

let playersLife = 5;
const imageContainer = document.querySelector('.image-container');
const input = document.querySelector('input');
const resultModal = document.querySelector(".modal-content")
// Start the game
const intervalId = setInterval(updateCountdown, 1000); // Start countdown timer


updatePlayerLifeDisplay(playersLife); // Display initial player life
// Display the first level
displayLevel(startLevel);

