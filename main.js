"use strict"

import {createSearchElements, filtering} from './search.js';
import {populateDivs} from './populateDivs.js';

document.addEventListener('DOMContentLoaded', main);


function main(){
    
    function searchWrap(searchQuery=''){

        fetch("properties.json")
            .then(function(resp) {
                return resp.json();
        })
            .then(function(data) {
            populateDivs(filtering(data, searchQuery));
            });
    }

    searchWrap();
    createSearchElements(searchWrap)
};