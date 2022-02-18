const headers = document.querySelectorAll(".header");
const links = document.querySelectorAll(".header a");
const menus = Array.from(document.getElementsByClassName("menuDiv"));
const mobileWidth = window.matchMedia("(max-width: 800px)");
const underlines = document.querySelectorAll(".underline");
const hamburger = document.getElementById("hamburger");

mobileWidth.addEventListener("change", collapseNav);
window.addEventListener("load", collapseNav);

// mouseover also applies to child elements

document.addEventListener("mouseover", e => {
    let selectedLink;    
    let selectedLinkParent;
    if (e.target.matches(".header a")) {
        selectedLink = e.target;        
        selectedLink.className = "hovered"; 
        selectedLinkParent = selectedLink.closest(".header");
        selectedLinkParent.classList.add("active");        
        const selectedUnderline = selectedLink.nextElementSibling;
        selectedUnderline.classList.add("hovered");
        underlines.forEach(underline => {
            if (underline !== selectedUnderline) {
                underline.classList.remove("hovered");
                underline.previousElementSibling.classList.remove("hovered");
            }
        });        
    }
    let currentMenu;
    if (selectedLink) {
        if (selectedLink.closest(".header").nextElementSibling.matches(".menuDiv")) {
            currentMenu = selectedLink.closest(".header").nextElementSibling;  
            currentMenu.classList.add("active");      
        } 
        menus.forEach(menu => {
            if (menu === currentMenu) {
                const listItems = Array.from(currentMenu.children);        
                const dropdownHeight = listItems.length * 50;
                currentMenu.style.height = dropdownHeight + "px";    
                listItems.forEach(item => {            
                    item.addEventListener("mouseenter", e => {
                        item.style.paddingLeft = "30px";
                    });
                    item.addEventListener("mouseleave", e => {
                         item.style.paddingLeft = "0";
                    });
                });    
            }
            else {
                menu.style.height = 0;    
                menu.classList.remove("active");                           
            }
        });           
    }    
    if (e.target.closest(".menuDiv.active") === null && e.target.closest(".header.active") === null) {
        currentMenu = document.querySelector(".menuDiv.active");
        currentMenu.style.height = 0;
        headers.forEach(header => {
            header.classList.remove("active");
        });
        links.forEach(link => {
            link.className = "";
            link.nextElementSibling.classList.remove("hovered");
        });
     }  
}, true);


function collapseNav(e) {
    console.log(document.body.offsetWidth);
    if (mobileWidth.matches) {
        headers.forEach(header => {           
            header.classList.add("off-screen");
        });
        setTimeout(() => hamburger.style.left = "50px", 300);
    }
    else {
        headers.forEach(header => {           
            header.classList.remove("off-screen");
        });
        hamburger.style.left = "-150px";
    }
}



