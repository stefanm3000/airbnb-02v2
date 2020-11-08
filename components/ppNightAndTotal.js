"use strict";

export function ppNightAndTotal(pricePerNight, priceTot) {
  let price = document.createElement("p");
  price.setAttribute("class", "price");

  let ppNight = document.createElement("span");
  ppNight.setAttribute("class", "pricePerNight");
  ppNight.innerHTML = ("$" + pricePerNight).bold() + " / night" + "<br>";

  let popup = document.createElement("button");
  popup.setAttribute("class", "popup");

  let totalPrice = document.createElement("span");
  totalPrice.setAttribute("class", "priceTotal");
  totalPrice.innerHTML = "$" + priceTot + " total";

  price.appendChild(ppNight);
  price.appendChild(popup);
  popup.appendChild(totalPrice);

  return price;
}
