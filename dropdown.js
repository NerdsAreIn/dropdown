const dropdownAreas = Array.from(document.getElementsByClassName("li-div"));
const headers = Array.from(document.getElementsByClassName("header"));
const menus = Array.from(document.getElementsByClassName("menuDiv"));

// mouseover also applies to child elements

headers.forEach(header => {
    header.addEventListener("mouseover", () => {
        header.parentElement.children[1].setAttribute("style", "display: block");
        header.firstElementChild.className = "hovered";
    }, true);
    header.addEventListener("mouseout", () => {
        header.parentElement.children[1].setAttribute("style", "display: none");
        header.firstElementChild.classList.remove("hovered");
    }, true);
});

menus.forEach(menu => {
        menu.children[1].children[0].onmouseenter = () => {
            menu.children[0].classList.add("hovered");
        };
        menu.children[1].children[0].onmouseleave = () => {
            menu.children[0].classList.remove("hovered");
        };
        menu.addEventListener("mouseover", () => {
        menu.setAttribute("style", "display: block");
        menu.previousElementSibling.firstElementChild.classList.add("hovered");        
    }, true);
    menu.addEventListener("mouseout", () => {
        menu.setAttribute("style", "display: none");
        menu.previousElementSibling.firstElementChild.classList.remove("hovered");
    }, true);
});

