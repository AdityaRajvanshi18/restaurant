import loadHome from "./home";
import loadMenu from "./menu";
import loadContact from "./menu";

function createHeader(){
    const header = document.createElement("div");
    header.classList.add("header");
    //TITLE
    const title = document.createElement("div");
    title.classList.add("title");
    title.textContent="CAFE DU SOLEIL";
    header.appendChild(title);
    //NAV
    const navContainer = document.createElement("div");
    navContainer.classList.add("nav-container"); 
    //HOME
    const home = document.createElement("div");
    home.classList.add("nav");
    home.textContent = "HOME";
    home.addEventListener("click", (e) => {
        console.log(e);
        if (e.target.classList.contains("active")) return;
        setActiveButton(home);
        loadHome();
    })
    
    //MENU
    const menu = document.createElement("div");
    menu.classList.add("nav");
    menu.textContent = "MENU";
    menu.addEventListener("click", (e) => {
        console.log(e);
        if (e.target.classList.contains("active")) return;
        setActiveButton(menu);
        loadMenu();
    })
    
    //CONTACT
    const contact = document.createElement("div");
    contact.classList.add("nav");
    contact.style.marginRight = 0;
    contact.textContent = "CONTACT";
    contact.addEventListener("click", (e) => {
        console.log(e);
        if (e.target.classList.contains("active")) return;
        setActiveButton(contact);
        loadContact();
    })
    

    navContainer.appendChild(home);
    navContainer.appendChild(menu);
    navContainer.appendChild(contact);

    header.appendChild(navContainer);

    return header;
}

function createMain(){
    const main = document.createElement("main");
    main.classList.add("main");
    main.setAttribute("id", "main");
    return main;
}

function setActiveButton(item){
    const items = document.querySelectorAll(".nav");

    items.forEach((item) =>{
        if (item !== this){
            item.classList.remove("active");
        }
    });

    item.classList.add("active");

}


function initializeWebsite(){
    const content = document.getElementById("content");
    content.appendChild(createHeader());
    const outerBorder = document.createElement("div");
    outerBorder.classList.add("outer-border");
    const innerBorder = document.createElement("div");
    innerBorder.classList.add("inner-border");

    
    innerBorder.appendChild(createMain());
    outerBorder.appendChild(innerBorder);
    content.appendChild(outerBorder);
    

    //content.appendChild(createMain());
    console.log(content);
    loadHome();
}

export default initializeWebsite;