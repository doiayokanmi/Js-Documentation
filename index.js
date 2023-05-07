function goTo() {
    window.scrollTo(0, 0)
}

const button = document.querySelector('#menuDrop');

button.addEventListener('click', function() {
navSection.style.display = "block"
button.style.display = 'none'

});

const navLink = document.getElementById('closeMenu');
navLink.addEventListener('click', function() {
navSection.style.display = "none";
button.style.display = 'block'
});