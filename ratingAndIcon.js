"use strict"

export function ratingAndIcon(i, data){
    let divGridAreas = document.createElement("div");
    divGridAreas.setAttribute('class', 'div-grid-areas');

    let propertyLink = document.createElement("a");
    propertyLink.setAttribute('class', 'propLink');

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
    propertyLink.appendChild(ratingDiv);

    document.getElementsByClassName('ratingAvg')[i].innerHTML = data.properties[i].rating.toFixed(2);
    document.getElementsByClassName('numberOfReviews')[i].innerHTML = ('(') + data.properties[i].numOfReviews + (')');

    if (data.properties[i].rating === 0.00) {
        document.getElementsByClassName('ratingAvg')[i].innerHTML = "New"};

    if (data.properties[i].numOfReviews === 0) {
        document.getElementsByClassName('material-icons')[i].style.visibility = "hidden";
        document.getElementsByClassName('ratingAvg')[i].innerHTML = ('No reviews yet');
        document.getElementsByClassName('paren')[i].style.visibility = "hidden";};

    if (data.properties[i].numOfReviews === null) {
        document.getElementsByClassName('paren')[i].style.visibility = "hidden";
        };

    if (data.properties[i].rating === 5.00 || 
        data.properties[i].rating === 4.00 ||
        data.properties[i].rating === 3.00 ||
        data.properties[i].rating === 2.00 ||
        data.properties[i].rating === 1.00) {
            document.getElementsByClassName('ratingAvg')[i].innerHTML = data.properties[i].rating.toFixed(1)
        };
    
    if (data.properties[i].numOfReviews === 1) {
        document.getElementsByClassName('ratingAvg')[i].innerHTML = ('1 review');
        document.getElementsByClassName('paren')[i].style.visibility = "hidden";
        };

    if (data.properties[i].numOfReviews === 2) {
        document.getElementsByClassName('ratingAvg')[i].innerHTML = ('2 reviews');
        document.getElementsByClassName('paren')[i].style.visibility = "hidden";
        };
};