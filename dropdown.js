const headers = document.querySelectorAll(".header");
const links = document.querySelectorAll(".header a");
const menus = Array.from(document.getElementsByClassName("menuDiv"));
const mobileWidth = window.matchMedia("(max-width: 800px)");
const underlines = document.querySelectorAll(".underline");
const hamburger = document.getElementById("hamburger");
const curtain = document.getElementById("curtain");
const closeBtn = document.getElementById("closeBtn");
const curtainLinks = document.querySelectorAll(".curtainLink a");
const curtainDropdowns = document.querySelectorAll(".curtainMenu");

mobileWidth.addEventListener("change", collapseNav);
window.addEventListener("load", collapseNav);
hamburger.addEventListener("click", openCurtain);
closeBtn.addEventListener("click", closeCurtain);

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
    if (e.target.closest(".menuDiv.active") === null && e.target.closest(".header.active")
     === null) {
        if (document.querySelector(".menuDiv.active")) {
            currentMenu = document.querySelector(".menuDiv.active");
            currentMenu.style.height = 0;
        }
        headers.forEach(header => {
            header.classList.remove("active");
        });
        links.forEach(link => {
            link.className = "";
            link.nextElementSibling.classList.remove("hovered");
        });
     }  
}, true);

curtainLinks.forEach(link => {
    link.addEventListener("click", respondToClick);
});

function respondToClick(e) {
    let curtainLink = e.target;    
    curtainLink.classList.add("active")
    let curtainItem = curtainLink.parentElement.parentElement;
    curtainItem.classList.add("active");
    curtainLinks.forEach(link => {
        if (link !== curtainLink) {
            link.classList.remove("active");
            link.closest(".curtainItem").classList.remove("active");
        }
    });
    openDropdown(curtainItem);
    toggleArrow(curtainLink);   
}

function toggleArrow(link) {
    let arrow = link.firstElementChild;
    if (arrow.innerHTML == "⌄" && arrow.closest(".curtainItem.active")) { 
        arrow.innerHTML = "⌃";
        arrow.classList.add("up");
    }
    else if (arrow.innerHTML == "⌃") {
        arrow.innerHTML = "⌄";  
        arrow.classList.remove("up");  
    }
}

function openDropdown(curtainHeader) {  
    let curtainDropdown = curtainHeader.nextElementSibling;      
    const listItems = Array.from(curtainDropdown.children);        
    const dropdownHeight = listItems.length * 50;      
    curtainDropdown.classList.toggle("open");
    curtainDropdown.style.height = dropdownHeight + "px";  
    curtainDropdowns.forEach(dropdown => {
        if (dropdown !== curtainDropdown) {
            dropdown.style.height = 0;
            dropdown.classList.remove("open");
            toggleArrow(dropdown.previousElementSibling.firstElementChild.firstElementChild);
        }
    });  
}

function collapseNav(e) {
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
        curtain.className = "";   
    }
}

function openCurtain() {
    curtain.classList.add("mobile");
}

function closeCurtain() {    
    curtain.classList.remove("mobile");
}





