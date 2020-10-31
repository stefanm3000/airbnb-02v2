"use strict"

import {populateDivs} from './populateDivs.js';

export function createSearchElements(){
    
    const searchWrapper = document.getElementsByClassName('searchWrapper');
    const searchBar = document.createElement('input');

    searchBar.setAttribute('type', 'text');
    searchBar.setAttribute('id', 'searchBar');
    searchBar.setAttribute('placeholder', 'Search by description here')

    searchWrapper[0].appendChild(searchBar);
}

export function search(data){
    
    let container = document.getElementById('grid-container');

    const searchBar = document.getElementById('searchBar');

    searchBar.addEventListener('keyup', (x) => {
        const searchString = x.target.value.toLowerCase();

        const filteredProperties = data.properties.filter((property) => {
            return (
                property.description.toLowerCase().includes(searchString)
            );
        });
        container.innerHTML = '';
        populateDivs(filteredProperties);

        if (filteredProperties.length == false) {
            alert('There are no properties with that description')
        }
    });
}