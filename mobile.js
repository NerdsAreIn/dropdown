import headersImport from "./dropdown.js";

const mobileWidth = window.matchMedia("(max-width: 800px)");
const hamburger = document.getElementById("hamburger");
const curtain = document.getElementById("curtain");
const closeBtn = document.getElementById("closeBtn");
const curtainLinks = document.querySelectorAll(".curtainLink a");
const curtainDropdowns = document.querySelectorAll(".curtainMenu");

mobileWidth.addEventListener("change", collapseNav);
window.addEventListener("load", collapseNav);
hamburger.addEventListener("click", openCurtain);
closeBtn.addEventListener("click", closeCurtain);

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
    const curtainDropdown = curtainHeader.nextElementSibling;      
    const listItems = Array.from(curtainDropdown.children);        
    const dropdownHeight = listItems.length * 60;      
    curtainDropdown.classList.toggle("open");
    curtainDropdown.style.height = dropdownHeight + "px";  
    curtainDropdowns.forEach(dropdown => {
        if (dropdown !== curtainDropdown) {
            const inactiveLinks = dropdown.querySelectorAll("a");
            dropdown.style.height = 0;
            dropdown.classList.remove("open");
            toggleArrow(dropdown.previousElementSibling.firstElementChild.firstElementChild);            
            inactiveLinks.forEach(link => {
                link.classList.remove("clicked");
                link.parentElement.classList.remove("clicked");
            });
        }
    }); 
    const links = curtainDropdown.querySelectorAll("a");
    makeClicky(links);   
}

function makeClicky(links) {
    links.forEach(link => {
        link.addEventListener("click", (e) => {
            const selectedLink = e.target;
            selectedLink.classList.add("clicked");
            selectedLink.parentElement.classList.add("clicked"); 
            links.forEach(link => {
                if (link !== selectedLink) {
                    link.classList.remove("clicked");
                    link.parentElement.classList.remove("clicked");
                }
            });          
        });
    }); 
}

function collapseNav(e) {
    if (mobileWidth.matches) {
        headersImport.forEach(header => {           
            header.classList.add("off-screen");            
        });      
        setTimeout(() => hamburger.style.left = "50px", 300);      
    }
    else {
        headersImport.forEach(header => {           
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