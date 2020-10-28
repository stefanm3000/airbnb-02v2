"use strict"

import {createPropertyCard} from './createPropertyCard.js';

let container = document.getElementById('grid-container');

export function populateDivs(data) {
    
    for (let i = 0; i < data.properties.length; i++) {
        
        container.appendChild(createPropertyCard(data.properties, i));

     };
};