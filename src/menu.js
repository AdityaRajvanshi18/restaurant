function createMenu(){
    const menu = document.createElement("div");
    menu.classList.add("menu");
    const spacer = document.createElement("div");
    spacer.classList.add("spacer");
    //TAPAS
    menu.appendChild(createMenuCourse("TAPAS"));
    menu.appendChild(createMenuImg("/dist/imgs/tapas.jpg"))
    /* menu.appendChild(createMenuItem(
        "",
        "$10.00",
        ""
    )); */
    menu.appendChild(createMenuItem(
        "Grilled Shrimp",
        "$6.00",
        "Butter garlic sauce, served with baguette."
    ));
    menu.appendChild(createMenuItem(
        "Pate de Campagne",
        "$6.00",
        "Creamy pate seasoned with fresh herbs, served with baguette."
    ));
    menu.appendChild(createMenuItem(
        "Brie & Walnuts",
        "$6.00",
        "From local cheese and nut farms, served with baguette."
    ));
    menu.appendChild(createMenuItem(
        "Potato Gratin",
        "$6.00",
        "Thinly sliced potatoes in creamy cheese sauce, served with baguette."
    ));
    //SALADS
    menu.appendChild(createMenuCourse("SALADS"));
    menu.appendChild(createMenuImg("/dist/imgs/salad.jpg"))
    menu.appendChild(createMenuItem(
        "Kale Caeser Salad",
        "$11.00",
        "Baby kale, grated parmesan, dried cranberries, hand crafted croutons, hand crafted Caesar dressing."
    ));
    menu.appendChild(createMenuItem(
        "Salad Niçoise",
        "$12.00",
        "Albacore tuna, tomato, boiled from fresh egg, Kalamata olives, anchovies, bell pepper, red onion and spring mix salad."
    ));
    menu.appendChild(createMenuItem(
        "Goat Cheese Salad",
        "$12.00",
        "Mixed greens, walnuts & crispy bacon bits tossed in an olive oil dressing and topped with three seared goat cheese medallions."
    ));
    menu.appendChild(createMenuItem(
        "Shrimp & Avocado Summer Salad",
        "$13.00",
        "Albacore tuna, tomato, boiled from fresh egg, Kalamata olives, anchovies, bell pepper, red onion and spring mix salad."
    ));
    //SOUP
    menu.appendChild(spacer);
    menu.appendChild(createMenuCourse("FRESH HOMEMADE SOUP"));
    menu.appendChild(createMenuImg("/dist/imgs/soup.jpg"));
    menu.appendChild(createMenuItem(
        "Clams Chowder Soup",
        "$10.00",
        "White wine, celery, onion, garlic, clams, heavy cream and potatoes."
    ));
    menu.appendChild(createMenuItem(
        "Lobster Bisque",
        "$11.00",
        "Fresh lobster, heavy cream, white wine, celery, tomato, garlic."
    ));
    menu.appendChild(createMenuItem(
        "Chicken Vegetable Soup",
        "$9.00",
        "Chicken, carrots, celery, fennel, onion, baby spinach, olive oil."
    ));
    //ENTREES
    menu.appendChild(createMenuCourse("ENTREES"));
    menu.appendChild(createMenuImg("/dist/imgs/entrees.jpg"));
    menu.appendChild(createMenuItem(
        "Coq Au Vin",
        "$18.00",
        "Cage free chicken braised in red wine sauce with onion, bacon, thyme, mushrooms, tomato and carrots."
    ));
    menu.appendChild(createMenuItem(
        "Meatball Pasta",
        "$14.00",
        "Organic meatballs made with ground beef, parsley, onion, and garlic. Served with our homemade tomato sauce and fresh pasta."
    ));
    menu.appendChild(createMenuItem(
        "Eggplant & Spinach Lasagna",
        "$14.00",
        "Homemade lasagna with bechamel and tomato sauce, eggplant, spinach, ricotta, pesto, bell pepper and parmesan."
    ));
    menu.appendChild(createMenuItem(
        "Boeuf Bourguignon",
        "$18.00",
        "Beef stew braised in red wine sauce with onions, mushrroms, carrots, garlic and thyme."
    ));
    menu.appendChild(createMenuItem(
        "Tuna Carpaccio",
        "$18.00",
        "Fresh tuna, served thinly sliced and rare atop mashed potatoes, olive oil, tomato and bell pepper, thyme & lemon zest."
    ));

    menu.appendChild(createMenuCourse("PEI MUSSELS"));
    menu.appendChild(createMenuImg("/dist/imgs/mussels.webp"));
    menu.appendChild(createMenuItem(
        "Garlic Mussels",
        "$12.50",
        "Celery, onion, butter, parsely, creamy garlic."
    ));
    menu.appendChild(createMenuItem(
        "Curry Mussels",
        "$12.50",
        "Carrot, celery, apple, onion, curry creamy sauce."
    ));
    menu.appendChild(createMenuItem(
        "Mussles 'Marseillaise'",
        "$12.50",
        "Tomato, fresh basil, fennel, cream, French Pastis"
    ));

    menu.appendChild(createMenuCourse("DESSERTS"));
    menu.appendChild(createMenuImg("/dist/imgs/creme.jpeg"));
    menu.appendChild(createMenuItem(
        "Creme Brulee",
        "$7.00",
        "Glassy caramelized sugar atop a rich and creamy custard."
    ));
    menu.appendChild(createMenuItem(
        "Chocolate Mousse",
        "$7.00",
        "Decadent and creamy chocolate topped with strawberries and whipped cream." 
    ));
    menu.appendChild(createMenuItem(
        "Fresh Pineapple Carpaccio",
        "$7.00",
        "Fresh and sweet pineapple served with pecans and maple syrup." 
    ));
    menu.appendChild(createMenuItem(
        "The French Bread 'Pain Perdu'",
        "$7.00",
        "Artisan bread, sliced and soaked in egg before being pan fried." 
    ));
    menu.appendChild(createMenuItem(
        "Crepe Suzette",
        "$7.00",
        "Paper thin crepes with a sauce of caramelized sugar, butter, tangerine juice, lemon zest and Grand Marnier." 
    ));
    menu.appendChild(spacer);
    return menu;
}

function createMenuCourse(name){
    const course = document.createElement("div");
    course.classList.add("course");
    course.textContent = name;
    return course;
}

function createMenuImg(src){
    const img = document.createElement("img");
    const imgBox = document.createElement("div");
    imgBox.classList.add("img-container");
    img.classList.add("food-img");
    img.src = src;
    imgBox.appendChild(img);
    return imgBox;
}

function createMenuItem(name, price, description){
    const menuItem = document.createElement("div");
    menuItem.classList.add("menu-item");

    const dishName = document.createElement("div");
    dishName.textContent = name;

    const dishPrice = document.createElement("div");
    dishPrice.classList.add("price");
    dishPrice.textContent = price;

    const dishDesc = document.createElement("div");
    dishDesc.textContent = description;
    dishDesc.classList.add("desc");

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