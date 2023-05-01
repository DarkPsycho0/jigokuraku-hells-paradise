const buttons = document.querySelectorAll('.button');
const image = document.querySelectorAll('.image');

buttons.forEach((button, index) => {
    button.addEventListener('click', () => {
        disableSelectedButton();

        selectButton(button);

        hideActiveImage();

        showBackgroundImage(index);
    })
})

function showBackgroundImage(index) {
    image[index].classList.add('active');
}

function selectButton(button) {
    button.classList.add('select');
}

function hideActiveImage() {
    const activeImage = document.querySelector('.active');
    activeImage.classList.remove('active');
}

function disableSelectedButton() {
    const selectedButton = document.querySelector('.select');
    selectedButton.classList.remove('select');
}