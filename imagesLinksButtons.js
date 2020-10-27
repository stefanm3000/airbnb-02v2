"use strict"

let container = document.getElementById('grid-container');

export function imagesLinksButtons(data, i, divGridAreas){

    let propertyLink = document.createElement("a");
    propertyLink.setAttribute('class', 'propLink');

    let theImageUrl = document.createElement("img");
    theImageUrl.setAttribute('class', 'imageUrl place-photo');
    
    let likeButtonLink = document.createElement("A");
    likeButtonLink.setAttribute('class', 'likeButtonLink');

    let likeButton = document.createElement("button");
    likeButton.setAttribute('class','like-btn');

    let likeButtonImage = document.createElement("img");
    likeButtonImage.setAttribute('class', 'like-button-image');
    
    propertyLink.appendChild(theImageUrl);
    likeButtonLink.appendChild(likeButton);
    likeButton.appendChild(likeButtonImage);
    divGridAreas.appendChild(propertyLink);
    divGridAreas.appendChild(likeButtonLink);
    container.appendChild(divGridAreas);

    document.getElementsByClassName('likeButtonLink')[i].href = "https://www.airbnb.rs/login";
    document.getElementsByClassName('like-button-image')[i].src = "images/pngegg.png";
    document.getElementsByClassName('imageUrl')[i].src = data.properties[i].imageUrl;
    document.getElementsByClassName('propLink')[i].href = data.properties[i].link;
};