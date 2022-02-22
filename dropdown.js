const headers = document.querySelectorAll(".header");
const links = document.querySelectorAll(".header a");
const menus = Array.from(document.getElementsByClassName("menuDiv"));
const mobileWidth = window.matchMedia("(max-width: 800px)");
const underlines = document.querySelectorAll(".underline");
const hamburger = document.getElementById("hamburger");
const curtain = document.getElementById("curtain");
const closeBtn = document.getElementById("closeBtn");
const curtainLinks = document.querySelectorAll(".curtainLink a");

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
    console.log({curtainLink});
    curtainLink.classList.add("active")
    let curtainItem = curtainLink.parentElement.parentElement;
    curtainItem.classList.add("active");
    console.log({curtainItem});
    curtainLinks.forEach(link => {
        if (link !== curtainLink) {
            link.classList.remove("active");
            link.closest(".curtainItem").classList.remove("active");
        }
    });
    openDropdown(curtainItem);        
}

function openDropdown(curtainHeader) {  
    console.log({curtainHeader});
    let curtainDropdown = curtainHeader.nextElementSibling;  
    console.log({curtainDropdown});
    const listItems = Array.from(curtainDropdown.children);        
    const dropdownHeight = listItems.length * 50;
    console.log({dropdownHeight});
    curtainHeader.style.marginBottom = dropdownHeight;
    curtainDropdown.classList.toggle("open");
    curtainDropdown.style.height = dropdownHeight + "px";  
}

function collapseNav(e) {
    if (mobileWidth.matches) {
        headers.forEach(header => {           
            header.classList.add("off-screen");            
        });
        const time = 300;
        setTimeout(() => hamburger.style.left = "50px", time);      
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
    console.log("clicked");
    curtain.classList.remove("mobile");
}

hamburger.addEventListener("click", openCurtain);
closeBtn.addEventListener("click", closeCurtain);



