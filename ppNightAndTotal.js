"use strict"

export function ppNightAndTotal(data, i, divGridAreas){
    
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