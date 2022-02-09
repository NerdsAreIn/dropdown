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
            header.addEventListener("mouseover", headerHoverHandler);
            header.addEventListener("mouseout", headerHoverHandler);
            header.firstElementChild.removeEventListener("click", headerHoverHandler, true);
            header.removeEventListener("click", headerHoverHandler, true); 
        }       
    });
}
/*function triangleHoverHandler() {    
    this.parentElement.previousElementSibling.classList.toggle("hovered");
}*/
function menuHoverHandler(e) {
    e.target.classList.toggle("hovered");
    e.target.previousElementSibling.firstElementChild.classList.toggle("hovered");
}
function headerHoverHandler(e) {
    const listItems = Array.from(e.target.parentElement.nextElementSibling.children);
    console.log({listItems});
    console.log(e.target.parentElement.nextElementSibling);
    const dropdownHeight = listItems.length * 50;
    console.log({dropdownHeight});
    e.target.parentElement.nextElementSibling.style.height = dropdownHeight + "px";
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
            //menu.children[1].children[0].removeEventListener("mouseover", triangleHoverHandler);
           // menu.children[1].children[0].removeEventListener("mouseout", triangleHoverHandler);
           // menu.children[1].children[0].addEventListener("click", triangleHoverHandler);
            menu.removeEventListener("mouseenter", menuHoverHandler, true);
            menu.removeEventListener("mouseleave", menuHoverHandler, true);
        }
        else {
           // menu.children[1].children[0].addEventListener("mouseover", triangleHoverHandler);
           // menu.children[1].children[0].addEventListener("mouseout", triangleHoverHandler);
           // menu.children[1].children[0].removeEventListener("click", triangleHoverHandler);
            menu.addEventListener("mouseenter", menuHoverHandler, true);
            menu.addEventListener("mouseleave", menuHoverHandler, true);            
        }         
    });
}


