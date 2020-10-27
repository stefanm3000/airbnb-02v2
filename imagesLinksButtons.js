"use strict"

export function imagesLinksButtons(i){

    let a = document.createElement("div");
    
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
    a.appendChild(propertyLink);
    a.appendChild(likeButtonLink);

    return a;
};