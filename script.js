// Select elements

const dogDiv = document.getElementById('dogDiv');
const dogImage = document.getElementById('dogImage');
const likeButton = document.getElementById('like');
const dislikeButton = document.getElementById('dislike');

// Create elements
const like = document.createElement('p');
const dislike = document.createElement('p');

function getDogPic() {
    fetch('https://dog.ceo/api/breeds/image/random')
        .then(response => response.json())
        .then(data => image(data.message));
}

function disableButtons() {
    likeButton.disabled = true;
    dislikeButton.disabled = true;
    setTimeout(function(){likeButton.disabled = false;},3000);
    setTimeout(function(){dislikeButton.disabled = false;},3000);
}

function likeImage() {
    dogImage.src = 'Smiling-Leo.gif';
    localStorage.setItem('like', parseInt(localStorage.getItem('like')) + 1);
    like.textContent = 'Likes: ' + localStorage.getItem('like');
    disableButtons();
    setTimeout(getDogPic, 3000);
};

function dislikeImage() {
    dogImage.src = 'spongebob.gif';
    localStorage.setItem('dislike', parseInt(localStorage.getItem('dislike')) + 1);
    dislike.textContent = 'Dislikes: ' + localStorage.getItem('dislike');
    disableButtons();
    setTimeout(getDogPic, 2000);
};

function image(imageUrl) {
    dogImage.src = imageUrl;
    console.log(dogImage.src);
    dogImage.style.width = '400px';
    dogImage.style.height = '400px';
    dogImage.classList.add('rounded-lg');
    dogDiv.appendChild(dogImage);
}

function makeImageAppearOnLoad() {
    if (localStorage.getItem('like') === '0' || localStorage.getItem('dislike') === '0' || dogImage.src.includes('index.html')) {
        like.textContent = 'Likes: ' + localStorage.getItem('like');
        dislike.textContent = 'Dislikes: ' + localStorage.getItem('dislike');
        getDogPic();
    }
    if (localStorage.getItem('like') === null) {
        like.textContent = 0;
        localStorage.setItem('like', 0);
    }
    if (localStorage.getItem('dislike') === null) {
        dislike.textContent = 0;
        localStorage.setItem('dislike', 0);
    }

    dogDiv.appendChild(like);
    dogDiv.appendChild(dislike);
}

makeImageAppearOnLoad();