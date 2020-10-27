"use strict"

export function ppNightAndTotal(i, data){
    
    let price = document.createElement("p");
    price.setAttribute('class', 'price');

    let ppNight = document.createElement("span");
    ppNight.setAttribute('class', 'pricePerNight');
    ppNight.innerHTML = (('\$') + data.properties[i].pricePerNight).bold() + (' / night') + ("<br>");

    let popup = document.createElement("button");
    popup.setAttribute('class', 'popup');

    let totalPrice = document.createElement("span");
    totalPrice.setAttribute('class', 'priceTotal');
    totalPrice.innerHTML = ('\$') + data.properties[i].priceTotal + (' total');

    price.appendChild(ppNight);
    price.appendChild(popup);
    popup.appendChild(totalPrice);
    return price;
};