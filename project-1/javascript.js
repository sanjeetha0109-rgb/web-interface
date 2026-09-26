let count = 0;

function increase() {
    count++;
    show();
}

function decrease() {
    count--;
    show();
}

function reset() {
    count = 0;
    show();
}

function show() {
    document.getElementById("count").innerText = count;
}