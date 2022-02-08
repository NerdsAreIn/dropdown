const dropdownAreas = Array.from(document.getElementsByClassName("li-div"));
const headers = Array.from(document.getElementsByClassName("header"));
const menus = Array.from(document.getElementsByClassName("menuDiv"));
const nav1 = document.getElementById("nav1");
const mobileWidth = window.matchMedia("(max-width: 450px)");

mobileWidth.addEventListener("change", handleHeaders);
window.addEventListener("load", handleHeaders);
mobileWidth.addEventListener("change", handleMenus);
window.addEventListener("load", handleMenus);

// mouseover also applies to child elements

// --FIXME: want to work out how to generate more navbar items and dropdown items:

/*function createNavItem(name, headerID, menuID ) {
    const navItem = document.createElement("div");
    navItem.innerHTML = `<div class="li-div"><li id="${headerID}" class="header"><a href="#">`
    + name + `<span class="arrow">&#8964;</span></a></li><div id="${menuID}" class="menuDiv">
    <div class="triangle"></div><ul class="dropdown">` 
    + populateDropdown(3, "One", "Two", "Three")
    + `</ul></div></div>`;
}

function populateDropdown(itemsNumber, firstItem, ...otheritems) {
    let items = [];
    items[0] = '<li>' + firstItem + '</li>';
    for (let i = 1; i < itemsNumber; i++) {
        const item = document.createElement("li");
        item.textContent = otheritems[i - 1];
        items.push(item);
    }
    items.forEach(item => nav1.)
}*/

function handleHeaders() {
    headers.forEach(header => {    
        if (mobileWidth.matches) {
            console.log("mobile!");
            console.log(window.innerWidth);
            header.addEventListener("click", headerHoverHandler, true); 
            header.firstElementChild.addEventListener("click", headerHoverHandler, true); 
            header.removeEventListener("mouseenter", headerHoverHandler, true);
            header.removeEventListener("mouseleave", headerHoverHandler, true);
        }
        else {
            console.log("desktop");
            console.log(window.innerWidth);
            header.addEventListener("mouseenter", headerHoverHandler, true);
            header.addEventListener("mouseleave", headerHoverHandler, true);
            header.firstElementChild.removeEventListener("click", headerHoverHandler, true);
            header.removeEventListener("click", headerHoverHandler, true); 
        }       
    });
}
function triangleHoverHandler() {    
    this.parentElement.previousElementSibling.classList.toggle("hovered");
}
function menuHoverHandler(e) {
    e.target.classList.toggle("hovered");
    e.target.previousElementSibling.firstElementChild.classList.toggle("hovered");
}
function headerHoverHandler(e) {
    e.target.parentElement.children[1].classList.toggle("hovered");
    e.target.firstElementChild.classList.toggle("hovered");
}

function handleMenus() {
    menus.forEach(menu => {
        if (mobileWidth.matches) {
            window.addEventListener("click", (e) => {
                if (e.target !== menu && e.target.className !== "header") {
                menu.classList.remove("hovered");
                menu.previousElementSibling.firstElementChild.classList.remove("hovered");
                }
            }, true);
            menu.children[1].children[0].removeEventListener("mouseover", triangleHoverHandler);
            menu.children[1].children[0].removeEventListener("mouseout", triangleHoverHandler);
            menu.children[1].children[0].addEventListener("click", triangleHoverHandler);
            menu.removeEventListener("mouseenter", menuHoverHandler, true);
            menu.removeEventListener("mouseleave", menuHoverHandler, true);
        }
        else {
            menu.children[1].children[0].addEventListener("mouseover", triangleHoverHandler);
            menu.children[1].children[0].addEventListener("mouseout", triangleHoverHandler);
            menu.children[1].children[0].removeEventListener("click", triangleHoverHandler);
            menu.addEventListener("mouseenter", menuHoverHandler, true);
            menu.addEventListener("mouseleave", menuHoverHandler, true);            
        }         
    });
}


