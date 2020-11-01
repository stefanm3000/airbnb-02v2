"use strict"

import {imagesLinksButtons} from './imagesLinksButtons.js';
import {ratingAndIcon} from './ratingAndIcon.js';
import {descriptionCard} from './descriptionCard.js';
import {ppNightAndTotal} from './ppNightAndTotal.js';

export function createPropertyCard(property){
    
        let divGridAreas = document.createElement("div");
        divGridAreas.setAttribute('class', 'div-grid-areas');

        divGridAreas.appendChild(imagesLinksButtons(property.link, property.imageUrl));
        divGridAreas.appendChild(ratingAndIcon(property.rating, property.numOfReviews));
        divGridAreas.appendChild(descriptionCard(property.propSize, property.location, property.description));
        divGridAreas.appendChild(ppNightAndTotal(property.pricePerNight, property.priceTotal));

        return divGridAreas;
}