var slideIdx = 0;

// calls the function showSlides
showSlides();

// defines the function showSlides
function showSlides() {
    var i;
    // chooses all elements with the class name slide
    // and creates them into a collection
    var slides = document.getElementsByClassName("slide");
    // goes through each element in slides and sets their 
    // display to none
    for (i = 0; i < slides.length; i++){
        slides[i].style.display = "none";
    }
    // increments the slide index
    slideIdx++;
    // resets the slide index if it would overflow
    if(slideIdx > slides.length) {slideIdx = 1}
    // sets 1  -  the slide index display to block
    slides[slideIdx - 1].style.display = "block";
    // display the slide for 4 seconds
    setTimeout(showSlides, 4000);
}