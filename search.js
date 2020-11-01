"use strict"

export function createSearchElements(y){
    
        const searchWrapper = document.getElementsByClassName('searchWrapper');
        const searchBar = document.createElement('input');
        const container = document.getElementById('grid-container');

        searchBar.setAttribute('type', 'text');
        searchBar.setAttribute('id', 'searchBar');
        searchBar.setAttribute('placeholder', 'Search by description here')

        searchWrapper[0].appendChild(searchBar);

        searchBar.addEventListener('keyup', (x) => {
            
                const searchString = x.target.value.toLowerCase();

                container.innerHTML = '';
                y(searchString);
            })
        
}

export function filtering(data, searchQuery=''){

    const filteredProperties = data.properties.filter((property) => {
        return (
            property.description.toLowerCase().includes(searchQuery) ||
            property.location.toLowerCase().includes(searchQuery) ||
            property.propSize.toLowerCase().includes(searchQuery)
            );
    })
        
    return filteredProperties;
}