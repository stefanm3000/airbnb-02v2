"use strict"

import {populateDivs} from './populateDivs.js';
import {createSearchElements, search} from './search.js'

document.addEventListener('DOMContentLoaded', main);

function main(){
fetch("properties.json")
    .then(function(resp) {
        return resp.json();
})
    .then(function(data) {
        createSearchElements();
        populateDivs(data.properties);
        search(data);
    });
};