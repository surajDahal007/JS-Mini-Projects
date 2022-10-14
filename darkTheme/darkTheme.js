let toggle = true;
function handleClick() {
    toggle = !toggle;
    var img = document.getElementById('img1');

    if (toggle) {
        img.src = 'halfMoon.jpg';
    }
    else {
        img.src = 'sun.jpg';
    }

    var element = document.body;
    element.classList.toggle("dark-mode");
};
