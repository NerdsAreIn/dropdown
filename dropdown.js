const headers = Array.from(document.getElementsByClassName("header"));
const menus = Array.from(document.getElementsByClassName("menuDiv"));
const mobileWidth = window.matchMedia("(max-width: 450px)");

//mobileWidth.addEventListener("change", handleHeaders);
//window.addEventListener("load", handleHeaders);
//mobileWidth.addEventListener("change", handleMenus);
//window.addEventListener("load", handleMenus);

// mouseover also applies to child elements

/*function handleHeaders() {
    headers.forEach(header => {    
        if (mobileWidth.matches) {
            header.removeEventListener("mouseover", headerHoverHandler, true);
            header.removeEventListener("mouseout", headerHoverHandler, true);
        }
        else {
            header.addEventListener("mouseover", headerHoverHandler);
            header.addEventListener("mouseout", leaveHeaderHandler);
        }       
    });
}*/

//function menuHoverHandler(e) {
    //const listItems = Array.from(e.target.children);
    //const dropdownHeight = listItems.length * 50;
    //e.target.style.height = dropdownHeight + "px";
    //e.target.previousElementSibling.firstElementChild.className = "hovered";
//}

/*function leaveMenuHandler(e) {
    e.target.style.height = "0";
    e.target.previousElementSibling.firstElementChild.children[0].classList.remove("hovered");
}*/

/*function headerHoverHandler(e) {
    const listItems = Array.from(e.target.nextElementSibling.children);
    const dropdownHeight = listItems.length * 50;
    e.target.nextElementSibling.style.height = dropdownHeight + "px";
    e.target.firstElementChild.classList.add("hovered");
}*/

/*function leaveHeaderHandler(e) {
    e.target.firstElementChild.classList.remove("hovered");
}*/

document.addEventListener("mouseover", e => {
    let selectedLink;
    if (e.target.matches(".header a")) {
        selectedLink = e.target;
    }
    console.log({selectedLink});
    let currentMenu;
    if (selectedLink) {
        currentMenu = selectedLink.closest(".header").nextElementSibling;
        console.log({currentMenu});
        currentMenu.classList.add("active");
        menus.forEach(menu => {
            if (menu === currentMenu) return;
            else {
                menu.classList.remove("active");
                menu.style.height = 0;
            }
        }); 
        const listItems = Array.from(currentMenu.children);
        const dropdownHeight = listItems.length * 50;
        currentMenu.style.height = dropdownHeight + "px";        
        selectedLink.classList.add("hovered");        
    }   
    if (e.target.className)  
   
    console.log({currentMenu});
});

/*function handleMenus() {
    menus.forEach(menu => {
        if (mobileWidth.matches) {            
            menu.removeEventListener("mouseenter", menuHoverHandler, true);
            menu.removeEventListener("mouseleave", menuHoverHandler, true);
        }
        else {
            document.addEventListener("mouseover", e => {
                if (e.target === menu || e.target.className === "header") {                
                    menu.previousElementSibling.firstElementChild.children[1].classList.add("hovered");
                }
                else  menu.previousElementSibling.firstElementChild.children[1].classList.remove("hovered");
            }, true);
            menu.addEventListener("mouseenter", menuHoverHandler, true);
            menu.addEventListener("mouseleave", leaveMenuHandler, true);            
        }         
    });
}*/


