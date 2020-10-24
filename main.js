"use strict"

import {populateDivs} from './populateDivs.js';
document.addEventListener('DOMContentLoaded', main);

export let mainObj = {};


function main(){
fetch("properties.json")
    .then(function(resp) {
        return resp.json();
})
    .then(function(data) {
        mainObj = data;
        populateDivs();
    });
}




