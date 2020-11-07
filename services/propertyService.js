"use strict"

import {filtering} from '../components/search.js';

async function getProperties(searchQuery='') {
    
        const response = await fetch('./properties.json');
      
        if (!response.ok) {
          const message = `An error has occured: ${response.status}`;
          throw new Error(message);
        }
        
        const properties = await response.json();

        return filtering(properties, searchQuery);

}
    

export default {
    getProperties
}