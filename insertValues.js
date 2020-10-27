export function insertValues(i, data){
        document.getElementsByClassName('likeButtonLink')[i].href = "https://www.airbnb.rs/login";
        document.getElementsByClassName('like-button-image')[i].src = "images/pngegg.png";
        document.getElementsByClassName('imageUrl')[i].src = data.properties[i].imageUrl;
        document.getElementsByClassName('propLink')[i].href = data.properties[i].link;



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



    document.getElementsByClassName('propSize')[i].innerHTML = data.properties[i].propSize + (' · ');
    document.getElementsByClassName('location')[i].innerHTML = data.properties[i].location + ("<br>");
    document.getElementsByClassName('place-description')[i].innerHTML = data.properties[i].description;
    


    document.getElementsByClassName('pricePerNight')[i].innerHTML = (('\$') + data.properties[i].pricePerNight).bold() + (' / night') + ("<br>");
    document.getElementsByClassName('priceTotal')[i].innerHTML = ('\$') + data.properties[i].priceTotal + (' total');
}