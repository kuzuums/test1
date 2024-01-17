function showSlide(slideNumber) {
    document.getElementById("slide1").style.display = "none";
    document.getElementById("slide2").style.display = "none";
    document.getElementById("slide3").style.display = "none";
    document.getElementById("slide" + slideNumber).style.display = "block";
}
