var box = document.querySelector('#card');
var btn = document.querySelector('button');
let p = document.querySelector('p');

var flag = 0;

btn.addEventListener('click', function () {
    if (flag == 0) {
        p.innerHTML = 'Friends';
        p.style.color = 'green';
        btn.innerHTML = 'Remove Friend';
        flag = 1;
    }
    else {
        p.innerHTML = 'Stranger';
        p.style.color = 'red';
        btn.innerHTML = 'Add Friend';
        flag = 0;
    }
});