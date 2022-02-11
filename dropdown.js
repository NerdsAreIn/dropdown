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
            //header.addEventListener("click", headerHoverHandler, true); 
            //header.firstElementChild.addEventListener("click", headerHoverHandler, true); 
            header.removeEventListener("mouseover", headerHoverHandler, true);
            header.removeEventListener("mouseout", headerHoverHandler, true);
        }
        else {
            header.addEventListener("mouseover", headerHoverHandler);
            header.addEventListener("mouseout", leaveHeaderHandler);
            //header.firstElementChild.removeEventListener("click", headerHoverHandler, true);
            //header.removeEventListener("click", headerHoverHandler, true); 
        }       
    });
}

function menuHoverHandler(e) {
    //const listItems = Array.from(e.target.children);
    //const dropdownHeight = listItems.length * 50;
    //e.target.style.height = dropdownHeight + "px";
    e.target.previousElementSibling.firstElementChild.children[0].className = "hovered";
}

function leaveMenuHandler(e) {
    e.target.style.height = "0";
    e.target.previousElementSibling.firstElementChild.children[0].classList.remove("hovered");
}

function headerHoverHandler(e) {
    const listItems = Array.from(e.target.parentElement.nextElementSibling.children);
    const dropdownHeight = listItems.length * 50;
    e.target.parentElement.nextElementSibling.style.height = dropdownHeight + "px";
    e.target.firstElementChild.classList.add("hovered");
    //e.target.children[1].classList.add("hovered");
}

function leaveHeaderHandler(e) {
    //e.target.parentElement.nextElementSibling.style.height = "0";
    e.target.firstElementChild.classList.remove("hovered");
}

function handleMenus() {
    menus.forEach(menu => {
        if (mobileWidth.matches) {            
            menu.removeEventListener("mouseenter", menuHoverHandler, true);
            menu.removeEventListener("mouseleave", menuHoverHandler, true);
        }
        else {
            /*window.addEventListener("mouseover", (e) => {
                if (e.target === menu || e.target.className === "header") {                
                    menu.previousElementSibling.firstElementChild.children[1].classList.add("hovered");
                }
                else  menu.previousElementSibling.firstElementChild.children[1].classList.remove("hovered");
            }, true);*/
            menu.addEventListener("mouseenter", menuHoverHandler, true);
            menu.addEventListener("mouseleave", leaveMenuHandler, true);            
        }         
    });
}


