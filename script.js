// script.js

// Function to handle button click events
function selectOption(option) {
    // Check which option was clicked
    if (option === 'yes') {
        // Flash rainbow colors
        flashRainbowColors(function() {
            document.getElementById('question').style.display = 'none'; // Hide the question
            displayCatHeart(); // Display the cat-heart.gif
        });
    } else if (option === 'no') {
        // Change text on the "No" button to "You sure?"
        document.getElementById('no-button').innerText = 'You sure?'; 
        // Increase font size of "Yes" button
        var yesButton = document.getElementById('yes-button');
        var currentFontSize = window.getComputedStyle(yesButton).getPropertyValue('font-size');
        var newSize = parseFloat(currentFontSize) * 2; // Increase font size by  * 2px
        yesButton.style.fontSize = newSize + 'px';
    } else {
        // If neither "Yes" nor "No" was clicked, show an alert message
        alert('Invalid option!');
    }
}

// Function to flash rainbow colors and then execute a callback function
function flashRainbowColors(callback) {
    var colors = ['#066cbe', '#0e4691', '#0a7ecc', '#ee6cd2', '#cf5bac', '#cf46f1', '#e669d5'];
    var i = 0;
    var interval = setInterval(function() {
        document.body.style.backgroundColor = colors[i];
        i = (i + 1) % colors.length;
    }, 200); // Change color every 200 milliseconds
    setTimeout(function() {
        clearInterval(interval);
        document.body.style.backgroundColor = ''; // Reset background color
        if (callback) {
            callback();
        }
    }, 2000); // Flash colors for 2 seconds
}

// Function to display the cat.gif initially
function displayCat() {
    // Get the container where the image will be displayed
    var imageContainer = document.getElementById('image-container');
    // Create a new Image element for the cat
    var catImage = new Image();
    // Set the source (file path) for the cat image
    catImage.src = 'catgibflower.gif'; // Assuming the cat image is named "cat.gif"
    // Set alternative text for the image (for accessibility)
    catImage.alt = 'Cat';
    // When the cat image is fully loaded, add it to the image container
    catImage.onload = function() {
        imageContainer.appendChild(catImage);
    };
}

// Function to display the cat-heart.gif
function displayCatHeart() {
    var imageContainer = document.getElementById('image-container');
    imageContainer.innerHTML = '';

    // Create a new Image element for the cat-heart
    var catHeartImage = new Image();
    catHeartImage.src = 'cathappyy.gif';
    catHeartImage.alt = 'Cat Heart';

    // Create text element
    var text = document.createElement('p');
    text.innerText = 'Yayyy! gdgeriufesigesngdrnhriufnesuifesnfesunvdriugnbdrnhhsefesnesiugbesugesgfiesnsevndsriuvesgsebguesiessgdruisnviesnvesguldsgdshgnshesnhesngesilfnseiuveshgeshesh 💖💖💖💖💖';
    text.style.fontSize = '24px';
    text.style.marginTop = '15px';
    text.style.color = '#cf46f1';
    text.style.fontWeight = 'bold';

    // When image loads, add image and text
    catHeartImage.onload = function() {
        imageContainer.appendChild(catHeartImage);
        imageContainer.appendChild(text);

        // Hide the options container
        document.getElementById('options').style.display = 'none';
    };
}

// Display the cat.gif initially
displayCat();