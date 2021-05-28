function createContact(){
    const contact = document.createElement("div");
    contact.classList.add("contact");

    const spacer = document.createElement("div");
    spacer.classList.add("spacer2");

    const contactUs = document.createElement("div");
    contactUs.classList.add("contact-us");
    contactUs.textContent = "CONTACT US";

    const contactGrid = document.createElement("div");
    contactGrid.classList.add("contact-grid");
    //COVID BOX
    const covidTitle = document.createElement("div");
    const covidBox = document.createElement("div");
    const covidText = document.createElement("div");
    covidTitle.classList.add("covid-title");
    covidTitle.textContent = "COVID-19";
    covidBox.classList.add("covid");
    covidText.textContent = "Due to the recent Covid-19 pandemic, our services are constantly changing based on local health orders. Due to this, we cannot currently take reservations. We will continue to operate our kitchen regardless of dine-in options, which allows you to continue placing pickup or delivery orders. Take care and we hope to see you soon."
    covidBox.appendChild(covidTitle);
    covidBox.appendChild(covidText);
    contactGrid.appendChild(covidBox);
    //PHONE BOX
    const phoneBox = document.createElement("div");
    phoneBox.classList.add("phone");
    const phoneContainer = document.createElement("div");
    phoneContainer.classList.add("conts");
    
    const phoneBoxTitle = document.createElement("div");
    phoneBoxTitle.classList.add("phone-title");
    const phoneNum = document.createElement("div");
    phoneNum.classList.add("phone-num");
    phoneBoxTitle.textContent = "PHONE NUMBER";
    phoneNum.textContent = "Please call us during our opening hours, which are listed below, at: +1 (604) 399-3939";

    phoneContainer.appendChild(phoneBoxTitle);
    phoneContainer.appendChild(phoneNum);
    phoneBox.appendChild(phoneContainer);
        //HOURS
    //phoneBox.appendChild(spacer);
    const hoursTitle = document.createElement("div");
    hoursTitle.classList.add("phone-title");
    const hoursContainer = document.createElement("div");
    hoursContainer.classList.add("conts");

    hoursTitle.textContent = "HOURS";
    const hoursText1 = document.createElement("div");
    hoursText1.classList.add("hours-text");
    hoursText1.textContent = "MON-THURS: 12PM - 12AM";
    const hoursText2 = document.createElement("div");
    hoursText2.classList.add("hours-text");
    hoursText2.textContent = "FRI-SUN: 11PM - 2AM";



    hoursContainer.appendChild(hoursTitle);
    hoursContainer.appendChild(hoursText1);
    hoursContainer.appendChild(hoursText2);
    phoneBox.appendChild(hoursContainer);

    contactGrid.appendChild(phoneBox);
    //ADDRESS

    //


    contact.appendChild(contactUs);
    contact.appendChild(contactGrid);
    return contact;
}


function loadContact(){
    const main = document.getElementById("main");
    main.textContent = "";
    main.appendChild(createContact());
}

export default loadContact;

/* 
<div contact flex>
    <div contact TITLE>
    <div contact grid col(2): 1fr 2fr row(3): 1fr 1fr 2fr>
        <div covid box span 2 col >
        <div phone + hours box span 2 row>
        <div address>
        <div map>
    </div>
</div
 */