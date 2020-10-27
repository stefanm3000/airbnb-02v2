"use strict"

export function descriptionCard(data, i, divGridAreas){

    let paragraph = document.createElement("p");
    paragraph.setAttribute('class', 'paragraph');
    
    let propertySize = document.createElement("span");
    propertySize.setAttribute('class', 'propSize');

    let placeLocation = document.createElement("span");
    placeLocation.setAttribute('class', 'location');

    let placeDescription = document.createElement("span");
    placeDescription.setAttribute('class','place-description');

    paragraph.appendChild(propertySize);
    paragraph.appendChild(placeLocation);
    paragraph.appendChild(placeDescription);
    divGridAreas.appendChild(paragraph);

    document.getElementsByClassName('propSize')[i].innerHTML = data.properties[i].propSize + (' · ');
    document.getElementsByClassName('location')[i].innerHTML = data.properties[i].location + ("<br>");
    document.getElementsByClassName('place-description')[i].innerHTML = data.properties[i].description;
};