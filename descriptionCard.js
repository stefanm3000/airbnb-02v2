"use strict"

export function descriptionCard(i, data){
    let divGridAreas = document.createElement("div");
    divGridAreas.setAttribute('class', 'div-grid-areas');
    let propertyLink = document.createElement("a");
    propertyLink.setAttribute('class', 'propLink');

    let paragraph = document.createElement("p");
    paragraph.setAttribute('class', 'paragraph');
    
    let propertySize = document.createElement("span");
    propertySize.setAttribute('class', 'propSize');

    let placeLocation = document.createElement("span");
    placeLocation.setAttribute('class', 'location');

    let placeDescription = document.createElement("span");
    placeDescription.setAttribute('class','place-description');

    propertyLink.appendChild(paragraph);
    paragraph.appendChild(propertySize);
    paragraph.appendChild(placeLocation);
    paragraph.appendChild(placeDescription);

    document.getElementsByClassName('propSize')[i].innerHTML = data.properties[i].propSize + (' · ');
    document.getElementsByClassName('location')[i].innerHTML = data.properties[i].location + ("<br>");
    document.getElementsByClassName('place-description')[i].innerHTML = data.properties[i].description;
};