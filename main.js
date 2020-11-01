"use strict"

import {createSearchElements, filtering} from './components/search.js';
import {populateDivs} from './components/populateDivs.js';

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