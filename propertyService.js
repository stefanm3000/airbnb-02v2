"use strict"

import {populateDivs} from './components/populateDivs.js';
import {filtering} from './components/search.js';

export default function getProperties(searchQuery){
    
        fetch("properties.json")
        .then(function(resp) {
            return resp.json();
    })
        .then(function(data) {
        data = filtering(data, searchQuery);
        populateDivs(data);
        });
}