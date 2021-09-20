let counter = 1;

setInterval(autoslide, 5000);

function autoslide() {
    let radiobtn = document.getElementById('radio' + counter);
    radiobtn.checked = true;
    counter++;
    if (counter > 4) {
        counter = 1
    }
}