"use strict"

export function descriptionCard(i){

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

    return paragraph;
};