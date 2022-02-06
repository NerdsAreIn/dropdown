const dropdownAreas = Array.from(document.getElementsByClassName("li-div"));
const headers = Array.from(document.getElementsByClassName("header"));
//const numbersButton = document.getElementById("numbers-button");
const menus = Array.from(document.getElementsByClassName("menuDiv"));

headers.forEach(header => {
    header.addEventListener("mouseover", () => {
        header.parentElement.children[1].setAttribute("style", "display: block");
    }, true);
    header.addEventListener("mouseout", () => {
        header.parentElement.children[1].setAttribute("style", "display: none");
    }, true);
});

menus.forEach(menu => {
    menu.addEventListener("mouseenter", () => {
        menu.setAttribute("style", "display: block");
    }, true);
    menu.addEventListener("mouseout", () => {
        menu.setAttribute("style", "display: none");
    }, true);
});

dropdownAreas.map(area => {
    area.addEventListener("mouseenter", () => {
        area.classList.add("dropdown-present");
        //area.style.height = "auto";
    });    
    area.addEventListener("mouseleave", () => {
        area.classList.remove("dropdown-present");
    });
});
