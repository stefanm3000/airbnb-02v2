export function numOfReviewsCase(){
    for (let i = 0; i < mainObj.properties.length; i++){
        
        if (mainObj.properties[i].numOfReviews === null) {
            document.getElementsByClassName('paren')[i].innerHTML = null;
         }; 
        if (mainObj.properties[i].numOfReviews === 0) {
            document.getElementsByClassName('material-icons')[i].style.visibility = "hidden";
            document.getElementsByClassName('ratingAvg')[i].innerHTML = ('No reviews yet');
            document.getElementsByClassName('paren')[i].style.visibility = "hidden";
        };
        if (mainObj.properties[i].numOfReviews === 1) {
            document.getElementsByClassName('ratingAvg')[i].innerHTML = ('1 review');
            document.getElementsByClassName('paren')[i].style.visibility = "hidden";
        };
        if (mainObj.properties[i].numOfReviews === 2) {
            document.getElementsByClassName('ratingAvg')[i].innerHTML = ('2 reviews');
            document.getElementsByClassName('paren')[i].style.visibility = "hidden";
        };
        if (mainObj.properties[i].rating === 0.00) {
            document.getElementsByClassName('ratingAvg')[i].innerHTML = "New";
        };
};
};