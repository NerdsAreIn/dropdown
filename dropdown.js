const headers = document.querySelectorAll(".header");
const links = document.querySelectorAll(".header a");
const menus = Array.from(document.getElementsByClassName("menuDiv"));
const mobileWidth = window.matchMedia("(max-width: 800px)");
const underlines = document.querySelectorAll(".underline");

mobileWidth.addEventListener("change", collapseNav);
//window.addEventListener("load", handleHeaders);
//mobileWidth.addEventListener("change", handleMenus);
//window.addEventListener("load", handleMenus);

// mouseover also applies to child elements


document.addEventListener("mouseover", e => {
    console.log(e.target);
    let selectedLink;    
    if (e.target.matches(".header a")) {
        selectedLink = e.target;        
        selectedLink.classList.add("hovered"); 
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
            if (menu === currentMenu) return;
            else {
                menu.style.height = 0;    
                menu.classList.remove("active");                           
            }
        }); 
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
        })       
    }    
    if (e.target.closest(".menuDiv.active") === null && e.target.closest(".header") === null) {
        currentMenu = document.querySelector(".menuDiv.active");
        currentMenu.style.height = 0;
        links.forEach(link => {
            link.className = "";
            link.nextElementSibling.classList.remove("hovered");
        });
     }  
}, true);


function collapseNav(e) {
    if (mobileWidth.matches) {
        headers.forEach(header => {
            //e.stopImmediatePropagation();
            header.classList.add("off-screen");
        });
    }
    else {
        headers.forEach(header => {
            //e.stopImmediatePropagation();
            header.classList.remove("off-screen");
        });
    }
}



