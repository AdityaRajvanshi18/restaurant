function createMenu(){
    const menu = document.createElement("div");
    menu.classList.add("menu");
    menu.appendChild(createMenuItem(
        "Grilled Shrimp",
        "$6.00",
        "Served with baguette"
    ));
    return menu;
}

function createMenuItem(name, price, description){
    const menuItem = document.createElement("div");
    menuItem.classList.add("menu-item");

    const dishName = document.createElement("div");
    dishName.textContent = name;

    const dishPrice = document.createElement("div");
    dishPrice.textContent = price;

    const dishDesc = document.createElement("div");
    dishDesc.textContent = description;

    menuItem.appendChild(dishName);
    menuItem.appendChild(dishPrice);
    menuItem.appendChild(dishDesc);

    return menuItem;
}

function loadMenu(){
    const main = document.getElementById("main");
    main.textContent = "";
    main.appendChild(createMenu());
}

export default loadMenu;