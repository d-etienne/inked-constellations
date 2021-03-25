var slideIdx = 0;
showSlides();

function showSlides() {
    var i;
    var slides = document.getElementsByClassName("slide");
    for (i = 0; i < slides.length; i++){
        slides[i].style.display = "none";
    }

    slideIdx++;
    if(slideIdx > slides.length) {slideIdx = 1}
    slides[slideIdx - 1].style.display = "block";
    setTimeout(showSlides, 4000);
}