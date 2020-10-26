"use strict"

export function ppNightAndTotal(i, data){
    let divGridAreas = document.createElement("div");
    divGridAreas.setAttribute('class', 'div-grid-areas');
    let propertyLink = document.createElement("a");
    propertyLink.setAttribute('class', 'propLink');
            
    let price = document.createElement("p");
    price.setAttribute('class', 'price');

    let ppNight = document.createElement("span");
    ppNight.setAttribute('class', 'pricePerNight');

    let popup = document.createElement("button");
    popup.setAttribute('class', 'popup');

    let totalPrice = document.createElement("span");
    totalPrice.setAttribute('class', 'priceTotal');

    price.appendChild(ppNight);
    price.appendChild(popup);
    popup.appendChild(totalPrice);
    divGridAreas.appendChild(price);

    document.getElementsByClassName('pricePerNight')[i].innerHTML = (('\$') + data.properties[i].pricePerNight).bold() + (' / night') + ("<br>");
    document.getElementsByClassName('priceTotal')[i].innerHTML = ('\$') + data.properties[i].priceTotal + (' total');
};