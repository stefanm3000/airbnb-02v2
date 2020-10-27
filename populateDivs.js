"use strict"

let container = document.getElementById('grid-container');

import {imagesLinksButtons} from './imagesLinksButtons.js';
import {ratingAndIcon} from './ratingAndIcon.js';
import {descriptionCard} from './descriptionCard.js';
import {ppNightAndTotal} from './ppNightAndTotal.js';
import {insertValues} from './insertValues.js';

export function populateDivs(data) {
    

    for (let i = 0; i < data.properties.length; i++) {
        
        let divGridAreas = document.createElement("div");
        divGridAreas.setAttribute('class', 'div-grid-areas');
        
        imagesLinksButtons(i);
        ratingAndIcon(i);
        descriptionCard(i);
        ppNightAndTotal(i);
        
        divGridAreas.appendChild(imagesLinksButtons(i));
        divGridAreas.appendChild(ratingAndIcon(i));
        divGridAreas.appendChild(descriptionCard(i));
        divGridAreas.appendChild(ppNightAndTotal(i));
        container.appendChild(divGridAreas);
        
        insertValues(i, data);
     };
};