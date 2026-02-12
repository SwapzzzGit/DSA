let btn = document.querySelector('#bottom button');
let growth = document.querySelector('#growth');
let percent = document.querySelector('#percent h5');

btn.addEventListener('click', function () {

    let width = 0;
    let id = setInterval(() => {
        width++;
        percent.innerText = width + '%';
        growth.style.width = width + '%';
    }, 50)
    setTimeout(() => {
        btn.style.opacity = 0.8;
        btn.innerHTML = 'Downloaded';
        clearInterval(id);
    }, 5000);
});