"use strict"

import {imagesLinksButtons} from './imagesLinksButtons.js';
import {ratingAndIcon} from './ratingAndIcon.js';
import {descriptionCard} from './descriptionCard.js';
import {ppNightAndTotal} from './ppNightAndTotal.js';


export function createPropertyCard(properties, i){
    
        let divGridAreas = document.createElement("div");
        divGridAreas.setAttribute('class', 'div-grid-areas');

        divGridAreas.appendChild(imagesLinksButtons(properties[i].link, properties[i].imageUrl));
        divGridAreas.appendChild(ratingAndIcon(properties[i].rating, properties[i].numOfReviews));
        divGridAreas.appendChild(descriptionCard(properties[i].propSize, properties[i].location, properties[i].description));
        divGridAreas.appendChild(ppNightAndTotal(properties[i].pricePerNight, properties[i].priceTotal));

        return divGridAreas;
}