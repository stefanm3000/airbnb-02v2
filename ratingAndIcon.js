"use strict"

export function ratingAndIcon(i, data){

    let ratingDiv = document.createElement("div");
    ratingDiv.setAttribute('class', 'rating-div');
    
    let icons = document.createElement("i");
    icons.setAttribute('class', 'material-icons my-icon');
    
    let averageRatingTwo = document.createElement("span");
    averageRatingTwo.setAttribute('class', 'ratingAvg');
    averageRatingTwo.innerHTML = data.properties[i].rating.toFixed(2);
    
    let paren = document.createElement("span");
    paren.setAttribute('class', 'paren');
    
    let reviewsNumber = document.createElement("span");
    reviewsNumber.setAttribute('class', 'numberOfReviews');
    reviewsNumber.innerHTML = ('(') + data.properties[i].numOfReviews + (')');

    if (data.properties[i].rating === 0.00) {
        averageRatingTwo.innerHTML = "New"};

    if (data.properties[i].numOfReviews === 0) {

        icons[i].style.visibility = "hidden";
        averageRatingTwo[i].innerHTML = ('No reviews yet');
        paren[i].style.visibility = "hidden";
    };

    if (data.properties[i].numOfReviews === null) {
        paren.style.visibility = "hidden";
        };

    if (data.properties[i].rating === 5.00 || 
        data.properties[i].rating === 4.00 ||
        data.properties[i].rating === 3.00 ||
        data.properties[i].rating === 2.00 ||
        data.properties[i].rating === 1.00) {
                averageRatingTwo.innerHTML = data.properties[i].rating.toFixed(1)
            };

        if (data.properties[i].numOfReviews === 1) {
            averageRatingTwo.innerHTML = ('1 review');
            paren.style.visibility = "hidden";
            };
    
        if (data.properties[i].numOfReviews === 2) {
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