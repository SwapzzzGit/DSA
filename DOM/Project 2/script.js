var box = document.querySelector('#box');
var btn = document.querySelector('button');

btn.addEventListener('click', function () {
    var num1 = Math.floor(Math.random() * 256);
    var num2 = Math.floor(Math.random() * 256);
    var num3 = Math.floor(Math.random() * 256);

    box.style.backgroundColor = `rgb(${num1},${num2},${num3})`
})