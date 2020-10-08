import {numOfReviewsCase} from './functionOne.js';

let mainObj = {};

fetch("properties.json")
    .then(function(resp) {
        return resp.json();
})
    .then(function(data) {
        mainObj = data;
        populateDivs();
        numOfReviewsCase();
    });

function populateDivs() {

    
    for (let i = 0; i < mainObj.properties.length; i++) {

        let divGridAreas = document.createElement("div");
        let propertyLink = document.createElement("a");
        let theImageUrl = document.createElement("img");
        let ratingDiv = document.createElement("div");
        let paragraph = document.createElement("p");
        let span = document.createElement("span");
        let icons = document.createElement("i");
        let averageRatingTwo = document.createElement("span");
        let paren = document.createElement("span");
        let reviewsNumber = document.createElement("span");
        let propertySize = document.createElement("span");
        let placeLocation = document.createElement("span");
        let br = document.createElement("br");
        let placeDescription = document.createElement("span");
        let price = document.createElement("p");
        let bold = document.createElement("span");
        let ppNight = document.createElement("span");
        let popup = document.createElement("button");
        let totalPrice = document.createElement("span");
        let likeButtonLink = document.createElement("A");
        let likeButton = document.createElement("button");
        let likeButtonImage = document.createElement("img");
        let container = document.getElementById('grid-container');
        let diverino = document.createElement('div');
        
        divGridAreas.setAttribute('class', 'div-grid-areas');
        propertyLink.setAttribute('class', 'propLink');
        theImageUrl.setAttribute('class', 'imageUrl place-photo');
        ratingDiv.setAttribute('class', 'rating-div');
        paragraph.setAttribute('class', 'paragraph');
        span.setAttribute('class','span');
        icons.setAttribute('class', 'material-icons my-icon');
        averageRatingTwo.setAttribute('class', 'ratingAvg');
        paren.setAttribute('class', 'paren');
        reviewsNumber.setAttribute('class', 'numberOfReviews');
        propertySize.setAttribute('class', 'propSize');
        placeLocation.setAttribute('class', 'location');
        placeDescription.setAttribute('class','place-description');
        price.setAttribute('class', 'price');
        bold.setAttribute('class', 'bold');
        ppNight.setAttribute('class', 'pricePerNight');
        popup.setAttribute('class', 'popup');
        totalPrice.setAttribute('class', 'priceTotal');
        likeButtonLink.setAttribute('class', 'likeButtonLink');
        likeButton.setAttribute('class','like-btn');
        likeButtonImage.setAttribute('class', 'like-button-image');
        diverino.setAttribute('class','justAnotherDiv');
        icons.innerHTML = "star";
        
        span.appendChild(icons);
        paragraph.appendChild(span);
        paragraph.appendChild(averageRatingTwo);
        paragraph.appendChild(paren);
        ratingDiv.appendChild(paragraph);
        propertyLink.appendChild(ratingDiv);
        propertyLink.appendChild(theImageUrl);
        divGridAreas.appendChild(propertyLink);
        divGridAreas.appendChild(price);
        container.appendChild(divGridAreas);
        paren.appendChild(reviewsNumber);
        propertyLink.appendChild(paragraph);
        paragraph.appendChild(propertySize);
        paragraph.appendChild(placeLocation);
        paragraph.appendChild(br);
        paragraph.appendChild(placeDescription);
        divGridAreas.appendChild(price);
        price.appendChild(bold);
        price.appendChild(ppNight);
        price.appendChild(popup);
        popup.appendChild(totalPrice);
        price.appendChild(likeButtonLink);
        likeButtonLink.appendChild(likeButton);
        likeButton.appendChild(likeButtonImage);
        container.appendChild(divGridAreas);
    }
    

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
   

    for (let i = 0; i < mainObj.properties.length; i++){

        averageRating[i].innerHTML = mainObj.properties[i].rating.toFixed(2);
        propertyLink[i].href = mainObj.properties[i].link;
        theImageUrl[i].src = mainObj.properties[i].imageUrl;
        reviewsNumber[i].innerHTML = ('(') + mainObj.properties[i].numOfReviews + (')');
        propertySize[i].innerHTML = ("<br>") + mainObj.properties[i].propSize + (' · ');
        placeLocation[i].innerHTML = mainObj.properties[i].location;
        ppNight[i].innerHTML = (('\$') + mainObj.properties[i].pricePerNight).bold() + (' / night') + ("<br>");
        totalPrice[i].innerHTML = ('\$') + mainObj.properties[i].priceTotal + (' total');
        placeDescription[i].innerHTML = mainObj.properties[i].description;
        likeButtonLink[i].href = "https://www.airbnb.rs/login";
        likeButtonImage[i].src = "images/pngegg.png";
        
        if (mainObj.properties[i].rating === 5.00 || 
            mainObj.properties[i].rating === 4.00 ||
            mainObj.properties[i].rating === 3.00 ||
            mainObj.properties[i].rating === 2.00 ||
            mainObj.properties[i].rating === 1.00) {
                averageRating[i].innerHTML = mainObj.properties[i].rating.toFixed(1)
            };
    };
};

