"use strict"

import {populateDivs} from './components/populateDivs.js';
//import {populateDivs} from './components/populateDivs.js';
import {createSearchElements} from './components/search.js';
import propertyService from './services/propertyService.js';

document.addEventListener('DOMContentLoaded', main);


function main(){

    
    function searchWrap(searchQuery=''){
        
        propertyService.getProperties(searchQuery);
        
    }

    searchWrap();
    createSearchElements(searchWrap);
    

};