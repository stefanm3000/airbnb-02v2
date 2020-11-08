"use strict";

export function descriptionCard(size, location, description) {
  let paragraph = document.createElement("p");
  paragraph.setAttribute("class", "paragraph");

  let propertySize = document.createElement("span");
  propertySize.setAttribute("class", "propSize");
  propertySize.innerHTML = size + " · ";

  let placeLocation = document.createElement("span");
  placeLocation.setAttribute("class", "location");
  placeLocation.innerHTML = location + "<br>";

  let placeDescription = document.createElement("span");
  placeDescription.setAttribute("class", "place-description");
  placeDescription.innerHTML = description;

  paragraph.appendChild(propertySize);
  paragraph.appendChild(placeLocation);
  paragraph.appendChild(placeDescription);

  return paragraph;
}
