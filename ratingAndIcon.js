"use strict"

export function ratingAndIcon(rating, reviewsNumero){

    let ratingDiv = document.createElement("div");
    ratingDiv.setAttribute('class', 'rating-div');
    
    let icons = document.createElement("i");
    icons.setAttribute('class', 'material-icons my-icon');
    
    let averageRatingTwo = document.createElement("span");
    averageRatingTwo.setAttribute('class', 'ratingAvg');
    averageRatingTwo.innerHTML = rating.toFixed(2);
    
    let paren = document.createElement("span");
    paren.setAttribute('class', 'paren');
    
    let reviewsNumber = document.createElement("span");
    reviewsNumber.setAttribute('class', 'numberOfReviews');
    reviewsNumber.innerHTML = ('(') + reviewsNumero + (')');

    if (rating === 0.00) {
        averageRatingTwo.innerHTML = "New"
        };

    if (reviewsNumero === 0) {
        icons.style.visibility = "hidden";
        averageRatingTwo.innerHTML = ('No reviews yet');
        paren.style.visibility = "hidden";
        };

    if (reviewsNumero === null) {
        paren.style.visibility = "hidden";
        };

    if (rating === 5.00 || 
        rating === 4.00 ||
        rating === 3.00 ||
        rating === 2.00 ||
        rating === 1.00) {
             averageRatingTwo.innerHTML = rating.toFixed(1)
        };

    if (reviewsNumero === 1) {
        averageRatingTwo.innerHTML = ('1 review');
        paren.style.visibility = "hidden";
        };

    if (reviewsNumero === 2) {
        averageRatingTwo.innerHTML = ('2 reviews');
        paren.style.visibility = "hidden";
        };

    icons.innerHTML = "star";

    paren.appendChild(reviewsNumber);
    ratingDiv.appendChild(icons);
    ratingDiv.appendChild(averageRatingTwo);
    ratingDiv.appendChild(paren);
    
    return ratingDiv;
};