"use strict"

import {imagesLinksButtons} from './imagesLinksButtons.js';
import {ratingAndIcon} from './ratingAndIcon.js';
import {descriptionCard} from './descriptionCard.js';
import {ppNightAndTotal} from './ppNightAndTotal.js';

export function createPropertyCard(properties){
    
        let divGridAreas = document.createElement("div");
        divGridAreas.setAttribute('class', 'div-grid-areas');

        divGridAreas.appendChild(imagesLinksButtons(properties.link, properties.imageUrl));
        divGridAreas.appendChild(ratingAndIcon(properties.rating, properties.numOfReviews));
        divGridAreas.appendChild(descriptionCard(properties.propSize, properties.location, properties.description));
        divGridAreas.appendChild(ppNightAndTotal(properties.pricePerNight, properties.priceTotal));

        return divGridAreas;
}