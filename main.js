"use strict"

import {populateDivs} from './populateDivs.js';

document.addEventListener('DOMContentLoaded', main);

let mainobj;

function main(){
fetch("properties.json")
    .then(function(resp) {
        return resp.json();
})
    .then(function(data) {
        mainobj = data;
        populateDivs(data.properties);
    });
};


let container = document.getElementById('grid-container');

const searchBar = document.getElementById('searchBar');

searchBar.addEventListener('keyup', (x) => {
    const searchString = x.target.value.toLowerCase();

    const filteredProperties = mainobj.properties.filter((property) => {
        return (
            property.description.toLowerCase().includes(searchString)
        );
    });
    container.innerHTML = '';
    populateDivs(filteredProperties);
});
