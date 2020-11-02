"use strict"

import { populateDivs } from '../components/populateDivs.js';
import {filtering} from '../components/search.js';

async function getProperties(searchQuery='') {

        const response = await fetch('../properties.json');
        const propertiesjson = await response.json();
        return filtering(propertiesjson, searchQuery)
      
}

export default {
    getProperties
}