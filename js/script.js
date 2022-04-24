const closeOpenBtn = document.getElementById('menu-btn');
const menuBtn = document.getElementById('menu');

closeOpenBtn.addEventListener('click', () => {
    closeOpenBtn.classList.toggle('open');
    menuBtn.classList.toggle('flex');
    menuBtn.classList.toggle('hidden');
})