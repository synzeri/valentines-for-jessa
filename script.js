function selectOption(option) {
    if (option === 'yes') {
        flashRainbowColors(function() {
            document.getElementById('question').style.display = 'none';
            displayCatHeart();
        });
    } else if (option === 'no') {
        document.getElementById('no-button').innerText = 'You sure?'; 
        var yesButton = document.getElementById('yes-button');
        var currentFontSize = window.getComputedStyle(yesButton).getPropertyValue('font-size');
        var newSize = parseFloat(currentFontSize) * 2;
        yesButton.style.fontSize = newSize + 'px';
    } else {
        alert('Invalid option!');
    }
}

function flashRainbowColors(callback) {
    var colors = ['#066cbe', '#0e4691', '#0a7ecc', '#ee6cd2', '#cf5bac', '#cf46f1', '#e669d5'];
    var i = 0;
    var interval = setInterval(function() {
        document.body.style.backgroundColor = colors[i];
        i = (i + 1) % colors.length;
    }, 200);
    setTimeout(function() {
        clearInterval(interval);
        document.body.style.backgroundColor = '';
        if (callback) {
            callback();
        }
    }, 2000);
}

function displayCat() {
    var imageContainer = document.getElementById('image-container');
    var catImage = new Image();
    catImage.src = 'catgibflower.gif';
    catImage.alt = 'Cat';
    catImage.onload = function() {
        imageContainer.appendChild(catImage);
    };
}

function displayCatHeart() {
    var imageContainer = document.getElementById('image-container');
    imageContainer.innerHTML = '';

    var catHeartImage = new Image();
    catHeartImage.src = 'cathappyy.gif';
    catHeartImage.alt = 'Cat Heart';

    var text = document.createElement('p');
    text.innerText = 'Yayyy! gdgeriufesigesngdrnhriufnesuifesnfesunvdriugnbdrnhhsefesnesiugbesugesgfiesnsevndsriuvesgsebguesiessgdruisnviesnvesguldsgdshgnshesnhesngesilfnseiuveshgeshesh 💖💖💖💖💖';
    text.style.fontSize = '24px';
    text.style.marginTop = '15px';
    text.style.color = '#cf46f1';
    text.style.fontWeight = 'bold';

    catHeartImage.onload = function() {
        imageContainer.appendChild(catHeartImage);
        imageContainer.appendChild(text);

        document.getElementById('options').style.display = 'none';
    };
}

displayCat();