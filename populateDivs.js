"use strict"

let container = document.getElementById('grid-container');

import {imagesLinksButtons} from './imagesLinksButtons.js';
import {ratingAndIcon} from './ratingAndIcon.js';
import {descriptionCard} from './descriptionCard.js';
import {ppNightAndTotal} from './ppNightAndTotal.js';

export function populateDivs(data) {
    
    for (let i = 0; i < data.properties.length; i++) {
        
        let divGridAreas = document.createElement("div");
        divGridAreas.setAttribute('class', 'div-grid-areas');
        
        imagesLinksButtons(data.properties[i].link, data.properties[i].imageUrl);
        ratingAndIcon(data.properties[i].rating, data.properties[i].numOfReviews);
        descriptionCard(data.properties[i].propSize, data.properties[i].location, data.properties[i].description);
        ppNightAndTotal(data.properties[i].pricePerNight, data.properties[i].priceTotal);
        
        divGridAreas.appendChild(imagesLinksButtons(data.properties[i].link, data.properties[i].imageUrl));
        divGridAreas.appendChild(ratingAndIcon(data.properties[i].rating, data.properties[i].numOfReviews));
        divGridAreas.appendChild(descriptionCard(data.properties[i].propSize, data.properties[i].location, data.properties[i].description));
        divGridAreas.appendChild(ppNightAndTotal(data.properties[i].pricePerNight, data.properties[i].priceTotal));
        
        container.appendChild(divGridAreas);
     };
};