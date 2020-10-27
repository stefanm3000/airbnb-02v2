"use strict"

export function descriptionCard(i, data){

    let paragraph = document.createElement("p");
    paragraph.setAttribute('class', 'paragraph');
    
    let propertySize = document.createElement("span");
    propertySize.setAttribute('class', 'propSize');
    propertySize.innerHTML = (data.properties[i].propSize + (' · '))

    let placeLocation = document.createElement("span");
    placeLocation.setAttribute('class', 'location');
    placeLocation.innerHTML = (data.properties[i].location + ("<br>"))

    let placeDescription = document.createElement("span");
    placeDescription.setAttribute('class','place-description');
    placeDescription.innerHTML = data.properties[i].description;

    paragraph.appendChild(propertySize);
    paragraph.appendChild(placeLocation);
    paragraph.appendChild(placeDescription);

    return paragraph;
};