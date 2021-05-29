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
    //IMG
    const logo = document.createElement("img");
    logo.classList.add("small-logo");
    logo.src = "/dist/imgs/sunCrop.png"
    const logoContainer = document.createElement("div");
    logoContainer.classList.add("small-logo-container");
    logoContainer.appendChild(logo);

    phoneBox.appendChild(logoContainer);
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
    const address = document.createElement("div");
    const addressTitle = document.createElement("div");
    const addressText = document.createElement("div");
    address.classList.add("address-container");
    addressTitle.classList.add("covid-title");
    addressTitle.style.marginTop = "1rem";
    addressTitle.textContent = "ADDRESS";
    addressText.classList.add("phone-num")
    addressText.style.marginBottom = "2rem";
    addressText.textContent = "We are located at 1005 Denman Street. There is street parking and a parkade nearby."

    address.appendChild(addressTitle);
    address.appendChild(addressText);
    contactGrid.appendChild(address);
    //MAP
    const mapContainer = document.createElement("div");
    mapContainer.classList.add("map-container");
    mapContainer.innerHTML = `<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2602.3178963020664!2d-123.14133044852406!3d49.28932087923068!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x548672262ca7d4db%3A0x2d9f59731e55be25!2s1005%20Denman%20St%2C%20Vancouver%2C%20BC%20V6G%202M9!5e0!3m2!1sen!2sca!4v1622263212427!5m2!1sen!2sca" width="100%" height="100%" frameborder="0" style="border:0;" allowfullscreen="" loading="lazy"></iframe>`;
    contactGrid.appendChild(mapContainer);

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
