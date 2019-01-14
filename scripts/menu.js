var menuDropped = 0;

function dropdownMenu() {
    if (menuDropped == 0) {
        document.getElementById("dropdownMenuContent").style.display = "block";
        menuDropped = 1;
    }
    else if (menuDropped == 1) {
        document.getElementById("dropdownMenuContent").style.display = "none";
        menuDropped = 0;
    }
}
