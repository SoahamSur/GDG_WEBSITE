const card1 = document.getElementById('card1');
const card2 = document.getElementById('card2');
const card3 = document.getElementById('card3');

// Set initial positions, sizes, and tilts based on screen width
function setInitialPositions() {
    let screenWidth = window.innerWidth;

    // Adjust positions based on screen size
    if (screenWidth >= 1200) {
        card1.style.left = '17.5%';
        card2.style.left = '37.5%';
        card3.style.left = '57.5%';
    } else if (screenWidth >= 768) {
        card1.style.left = '17.5%';
        card2.style.left = '37.5%';
        card3.style.left = '57.5%';
    } else {
        // For mobile, adjust positions
        card1.style.left = '-12.5%';
        card2.style.left = '20%';
        card3.style.left = '52.5%';
    }

    // Set initial transforms
    card1.style.transform = 'rotate(-10deg) scale(0.9)'; // Left tilt, smaller
    card2.style.transform = 'rotate(0deg) scale(1)';     // Center, larger
    card3.style.transform = 'rotate(10deg) scale(0.9)';  // Right tilt, smaller
}

// Function to shuffle cards
function shuffleCards() {
    setTimeout(() => {
        swapPositions(card1, card2);
    }, 1000);  // First swap after 1 second

    setTimeout(() => {
        swapPositions(card2, card3);
    }, 2000);  // Second swap after 2 seconds

    setTimeout(() => {
        swapPositions(card3, card1);
    }, 3000);  // Third swap after 3 seconds
}

// Swap card positions and update tilt and size
function swapPositions(cardA, cardB) {
    let temp = cardA.style.left;
    cardA.style.left = cardB.style.left;
    cardB.style.left = temp;

    // Update tilt and size after swapping
    updateTiltAndSize(cardA);
    updateTiltAndSize(cardB);
}

// Update tilt and size based on new position
function updateTiltAndSize(card) {
    let screenWidth = window.innerWidth;
    let leftPosition = parseInt(card.style.left);

    // Adjust based on screen size
    if (screenWidth >= 767) {
        if (leftPosition <= 35) {
            card.style.transform = 'rotate(-5deg) scale(0.9)';  // Tilt left, smaller
        } else if (leftPosition >= 50) {
            card.style.transform = 'rotate(5deg) scale(0.9)';   // Tilt right, smaller
        } else {
            card.style.transform = 'rotate(0deg) scale(1) translateY(-20px)';  // Center, larger
        }
    } else {
        if (leftPosition <= 10) {
            card.style.transform = 'rotate(-5deg) scale(0.9)';  // Tilt left, smaller
        } else if (leftPosition >= 30) {
            card.style.transform = 'rotate(5deg) scale(0.9)';   // Tilt right, smaller
        } else {
            card.style.transform = 'rotate(0deg) scale(1) translateY(-20px)';  // Center, larger
        }
    }
}

// Initialize and start shuffling
setInitialPositions();
setTimeout(shuffleCards, 0);  // Start shuffling after 0 second

// Shuffle every 4 seconds (same speed as before)
setInterval(shuffleCards, 4000);  // Shuffle interval is still 4 seconds

// Update positions when resizing the window
window.addEventListener('resize', setInitialPositions);
