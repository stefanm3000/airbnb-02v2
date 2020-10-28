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
        
        imagesLinksButtons(i, data.properties[i].link, data.properties[i].imageUrl);
        ratingAndIcon(i, data);
        descriptionCard(i, data);
        ppNightAndTotal(i, data);
        
        divGridAreas.appendChild(imagesLinksButtons(i, data.properties[i].link, data.properties[i].imageUrl));
        divGridAreas.appendChild(ratingAndIcon(i, data));
        divGridAreas.appendChild(descriptionCard(i, data));
        divGridAreas.appendChild(ppNightAndTotal(i, data));
        
        container.appendChild(divGridAreas);
     };
};