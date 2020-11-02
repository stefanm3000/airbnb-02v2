"use strict"

import {createSearchElements} from './components/search.js';

import getProperties from './propertyService.js';

document.addEventListener('DOMContentLoaded', main);


function main(){
    
    function searchWrap(searchQuery=''){

        getProperties(searchQuery);

    }

    searchWrap();
    createSearchElements(searchWrap)

};