"use strict"

export function imagesLinksButtons(link, imageUrl){

    let a = document.createElement("div");
    
    let propertyLink = document.createElement("a");
    propertyLink.setAttribute('class', 'propLink');
    propertyLink.setAttribute('href', link);

    let theImageUrl = document.createElement("img");
    theImageUrl.setAttribute('class', 'imageUrl place-photo');
    theImageUrl.setAttribute('src', imageUrl)
    
    let likeButtonLink = document.createElement("A");
    likeButtonLink.setAttribute('class', 'likeButtonLink');
    likeButtonLink.setAttribute('href', "https://www.airbnb.rs/login");

    let likeButton = document.createElement("button");
    likeButton.setAttribute('class','like-btn');

    let likeButtonImage = document.createElement("img");
    likeButtonImage.setAttribute('class', 'like-button-image');
    likeButtonImage.setAttribute('src', 'assets/images/pngegg.png')
    
    propertyLink.appendChild(theImageUrl);
    likeButtonLink.appendChild(likeButton);
    likeButton.appendChild(likeButtonImage);
    a.appendChild(propertyLink);
    a.appendChild(likeButtonLink);

    return a;

    

};