import {createTheThings} from './createthethings.js';
document.addEventListener("DOMContentLoaded", main());

function main(){

let mainObj = {};

fetch("properties.json")
    .then(function(resp) {
        return resp.json();
})
    .then(function(data) {
        mainObj = data;
        populateDivs();
    });

function populateDivs() {

    for (let i = 0; i < mainObj.properties.length; i++) {
    
        createTheThings();
    
        let averageRating = document.getElementsByClassName('ratingAvg');
        let propertyLink = document.getElementsByClassName('propLink');
        let theImageUrl = document.getElementsByClassName('imageUrl');
        let reviewsNumber = document.getElementsByClassName('numberOfReviews');
        let propertySize = document.getElementsByClassName('propSize');
        let placeLocation = document.getElementsByClassName('location');
        let ppNight = document.getElementsByClassName('pricePerNight');
        let totalPrice = document.getElementsByClassName('priceTotal');
        let placeDescription = document.getElementsByClassName('place-description');
        let likeButtonLink = document.getElementsByClassName('likeButtonLink');
        let likeButtonImage = document.getElementsByClassName('like-button-image');

        function imagesLinksButtons(){
            likeButtonLink[i].href = "https://www.airbnb.rs/login";
            likeButtonImage[i].src = "images/pngegg.png";
            theImageUrl[i].src = mainObj.properties[i].imageUrl;
            propertyLink[i].href = mainObj.properties[i].link;
        };
        
        function ratingAndIcon(){

            averageRating[i].innerHTML = mainObj.properties[i].rating.toFixed(2);
            reviewsNumber[i].innerHTML = ('(') + mainObj.properties[i].numOfReviews + (')');
        
            if (mainObj.properties[i].rating === 0.00) {
                document.getElementsByClassName('ratingAvg')[i].innerHTML = "New"};
        
            if (mainObj.properties[i].numOfReviews === 0) {
                document.getElementsByClassName('material-icons')[i].style.visibility = "hidden";
                document.getElementsByClassName('ratingAvg')[i].innerHTML = ('No reviews yet');
                document.getElementsByClassName('paren')[i].style.visibility = "hidden";};
        
            if (mainObj.properties[i].numOfReviews === null) {
                document.getElementsByClassName('paren')[i].style.visibility = "hidden";
                };
            if (mainObj.properties[i].rating === 5.00 || 
                mainObj.properties[i].rating === 4.00 ||
                mainObj.properties[i].rating === 3.00 ||
                mainObj.properties[i].rating === 2.00 ||
                mainObj.properties[i].rating === 1.00) {
                    averageRating[i].innerHTML = mainObj.properties[i].rating.toFixed(1)
                };
            
            if (mainObj.properties[i].numOfReviews === 1) {
                document.getElementsByClassName('ratingAvg')[i].innerHTML = ('1 review');
                document.getElementsByClassName('paren')[i].style.visibility = "hidden";
                };
        
            if (mainObj.properties[i].numOfReviews === 2) {
                document.getElementsByClassName('ratingAvg')[i].innerHTML = ('2 reviews');
                document.getElementsByClassName('paren')[i].style.visibility = "hidden";
                };
        };
        
        function descriptionCard(){

            propertySize[i].innerHTML = ("<br>") + mainObj.properties[i].propSize + (' · ');
            placeLocation[i].innerHTML = mainObj.properties[i].location;
            placeDescription[i].innerHTML = mainObj.properties[i].description;
        };
        
        function ppNightAndTotal(){

            ppNight[i].innerHTML = (('\$') + mainObj.properties[i].pricePerNight).bold() + (' / night') + ("<br>");
            totalPrice[i].innerHTML = ('\$') + mainObj.properties[i].priceTotal + (' total');
        };

        imagesLinksButtons();
        ratingAndIcon();
        descriptionCard();
        ppNightAndTotal();
     };
        
        
    };
}
