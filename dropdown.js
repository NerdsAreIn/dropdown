const dropdownAreas = Array.from(document.getElementsByClassName("li-div"));
const headers = Array.from(document.getElementsByClassName("header"));
const menus = Array.from(document.getElementsByClassName("menuDiv"));
const nav1 = document.getElementById("nav1");

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

headers.forEach(header => {
    header.addEventListener("mouseover", () => {
        header.parentElement.children[1].setAttribute("style", "display: block");
        header.firstElementChild.className = "hovered";
    }, true);
    header.addEventListener("mouseout", () => {
        header.parentElement.children[1].setAttribute("style", "display: none");
        header.firstElementChild.classList.remove("hovered");
    }, true);
    header.addEventListener("click", () => {
        header.parentElement.children[1].classList.toggle("hovered");
        header.firstElementChild.classList.toggle("hovered");
    }, true);   
});

// --TODO: condense these into named functions, which can be repeated

menus.forEach(menu => {
        menu.children[1].children[0].onmouseenter = () => {
            menu.children[0].classList.add("hovered");
        };
        menu.children[1].children[0].onmouseleave = () => {
            menu.children[0].classList.remove("hovered");
        };
        menu.children[1].children[0].onclick = () => {
            menu.children[0].classList.toggle("hovered");
        };
        menu.addEventListener("mouseover", () => {
            menu.setAttribute("style", "display: block");
            menu.previousElementSibling.firstElementChild.classList.add("hovered");        
        }, true);
        menu.addEventListener("mouseout", () => {
            menu.setAttribute("style", "display: none");
            menu.previousElementSibling.firstElementChild.classList.remove("hovered");
        }, true);
        menu.addEventListener("click", (e) => {
            e.stopImmediatePropagation();
            e.target.classList.add("hovered");
        });
        window.addEventListener("click", (e) => {
                if (e.target !== menu && e.target.className !== "header") {
                menu.classList.remove("hovered");
                menu.previousElementSibling.firstElementChild.classList.remove("hovered");
            }
        }, true);
});


