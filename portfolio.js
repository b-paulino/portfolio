document.getElementById("menu-btn").addEventListener("click", function() {
    let menu = document.getElementById("menu");
    if (menu.style.left === "0px") {
        menu.style.left = "-250px";
    } 
    else {
        menu.style.left = "0px";
    }
});

document.addEventListener("click", function(event) {
    let menu = document.getElementById("menu");
    let menuBtn = document.getElementById("menu-btn");
    if (menu.style.left === "0px" && !menu.contains(event.target) && event.target !== menuBtn) {
        menu.style.left = "-250px";
    }
});

document.addEventListener("keydown", function(event) {
    let menu = document.getElementById("menu");
    if (event.key === "Escape" && menu.style.left === "0px") {
        menu.style.left = "-250px";
    }
});