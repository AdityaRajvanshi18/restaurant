function createHome(){
    const home = document.createElement("div");
    home.classList.add("home");

    const logo = document.createElement("img");
    const imgContainer = document.createElement("div");
    logo.classList.add("logo");
    logo.src = "imgs/sun2Crop2.png";
    logo.alt = "Cafe du Soleil logo";
    imgContainer.classList.add("img-container");
    imgContainer.appendChild(logo);

    home.appendChild(createTagLine("FRENCH STYLE"));
    home.appendChild(createTagLine("BAR AND BISTRO"));
    home.appendChild(imgContainer);
    home.appendChild(createTagLine("OPEN"));
    const timeNoMarginBot = createTimeLine("MON-THURS: 12PM - 12AM");
    timeNoMarginBot.style.marginBottom = 0; 
    home.appendChild(timeNoMarginBot);
    
    home.appendChild(createTimeLine("FRI-SUN: 11PM - 2AM"));

    return home;
}

function createTagLine(text){
    const line = document.createElement("div");
    line.classList.add("tag-line");
    line.textContent = text;
    return line;
}

function createTimeLine(text){
    const timeLine = document.createElement("div");
    timeLine.classList.add("time-line");
    timeLine.textContent = text;
    
    return timeLine;
}


function loadHome(){
    const main = document.getElementById("main");
    main.textContent = "";
    main.appendChild(createHome());
}

export default loadHome;