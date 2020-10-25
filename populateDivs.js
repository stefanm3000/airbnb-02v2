"use strict"

export function populateDivs(data) {

    let container = document.getElementById('grid-container');

    for (let i = 0; i < data.properties.length; i++) {

        let divGridAreas = document.createElement("div");
        divGridAreas.setAttribute('class', 'div-grid-areas');

        let propertyLink = document.createElement("a");
        propertyLink.setAttribute('class', 'propLink');

        function imagesLinksButtons(){

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
        
        function ratingAndIcon(){

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
        
        function descriptionCard(){

            let paragraph = document.createElement("p");
            paragraph.setAttribute('class', 'paragraph');
            
            let propertySize = document.createElement("span");
            propertySize.setAttribute('class', 'propSize');

            let placeLocation = document.createElement("span");
            placeLocation.setAttribute('class', 'location');

            let placeDescription = document.createElement("span");
            placeDescription.setAttribute('class','place-description');
        
            propertyLink.appendChild(paragraph);
            paragraph.appendChild(propertySize);
            paragraph.appendChild(placeLocation);
            paragraph.appendChild(placeDescription);
        
            document.getElementsByClassName('propSize')[i].innerHTML = data.properties[i].propSize + (' · ');
            document.getElementsByClassName('location')[i].innerHTML = data.properties[i].location + ("<br>");
            document.getElementsByClassName('place-description')[i].innerHTML = data.properties[i].description;
        };
        
        function ppNightAndTotal(){
            
            let price = document.createElement("p");
            price.setAttribute('class', 'price');

            let ppNight = document.createElement("span");
            ppNight.setAttribute('class', 'pricePerNight');

            let popup = document.createElement("button");
            popup.setAttribute('class', 'popup');

            let totalPrice = document.createElement("span");
            totalPrice.setAttribute('class', 'priceTotal');
        
            price.appendChild(ppNight);
            price.appendChild(popup);
            popup.appendChild(totalPrice);
            divGridAreas.appendChild(price);
        
            document.getElementsByClassName('pricePerNight')[i].innerHTML = (('\$') + data.properties[i].pricePerNight).bold() + (' / night') + ("<br>");
            document.getElementsByClassName('priceTotal')[i].innerHTML = ('\$') + data.properties[i].priceTotal + (' total');
        };
        
        imagesLinksButtons();
        ratingAndIcon();
        descriptionCard();
        ppNightAndTotal();
     };
};