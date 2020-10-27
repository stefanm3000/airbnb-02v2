"use strict"

import {imagesLinksButtons} from './imagesLinksButtons.js';
import {ratingAndIcon} from './ratingAndIcon.js';
import {descriptionCard} from './descriptionCard.js';
import {ppNightAndTotal} from './ppNightAndTotal.js';

export function populateDivs(data, i) {

    for (let i = 0; i < data.properties.length; i++) {

        let divGridAreas = document.createElement("div");
        divGridAreas.setAttribute('class', 'div-grid-areas');

        imagesLinksButtons(data, i, divGridAreas);
        ratingAndIcon(data, i, divGridAreas);
        descriptionCard(data, i, divGridAreas);
        ppNightAndTotal(data, i, divGridAreas);
     };
};