let btn = document.getElementById("btn");
btn.addEventListener("click", (e) => {
    let nav = document.querySelector(".mob-nav-list");
    if(nav.style.display == "none") {
        nav.style.display = "block";
        btn.innerHTML = "<i class='fas fa-times fa-2x'></i>";
    }
    else {
        nav.style.display = "none";
        btn.innerHTML = "<i class='fas fa-bars fa-2x'></i>"
    }
    e.preventDefault();
});