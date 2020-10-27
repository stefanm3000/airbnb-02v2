"use strict"

export function ratingAndIcon(i){

    let ratingDiv = document.createElement("div");
    ratingDiv.setAttribute('class', 'rating-div');
    
    let icons = document.createElement("i");
    icons.setAttribute('class', 'material-icons my-icon');
    
    let averageRatingTwo = document.createElement("span");
    averageRatingTwo.setAttribute('class', 'ratingAvg');
    
    let paren = document.createElement("span");
    paren.setAttribute('class', 'paren');
    
    let reviewsNumber = document.createElement("span");
    reviewsNumber.setAttribute('class', 'numberOfReviews');
    
    icons.innerHTML = "star";

    paren.appendChild(reviewsNumber);
    ratingDiv.appendChild(icons);
    ratingDiv.appendChild(averageRatingTwo);
    ratingDiv.appendChild(paren);

    

    return ratingDiv;
};