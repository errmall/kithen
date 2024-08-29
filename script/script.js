'use sctict';

const hamburger = document.querySelector('.hamburger');
const menuLink = document.querySelectorAll('.menu_link');
const menu = document.querySelector('.menu')

hamburger.addEventListener('click', function() {
    hamburger.classList.toggle('active');
    menu.classList.toggle('open');
})

for(let i = 0; i < menuLink.length; i++) {
    menuLink[i].addEventListener('click', function() {
        menu.classList.add('open');
    })
}



document.querySelector('.gallery_btn').addEventListener('click', function() {
    document.querySelector('.gallery_long').classList.toggle('hidden');
})