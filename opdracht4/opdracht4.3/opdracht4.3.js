/*-- ogen --*/
var ogen = [1,2,3];
var teller = 1;
var slideholder1 = document.getElementById("slideholder1");
slideholder1.style.backgroundImage = "url('images4.3/ogen1.jpg')";
slideholder1.addEventListener("click", function () {
    slideholder1.style.backgroundImage = "url('images4.3/ogen"+ getOgen() +".jpg')";
});
function getOgen() {
    if (teller >= ogen.length) {
        teller = 1;
    }
    else{
        teller++;
    }
    return teller;
}

/*-- neus --*/
var neus = [1,2,3];
var teller = 1;
var slideholder2 = document.getElementById("slideholder2");
slideholder2.style.backgroundImage = "url('images4.3/neus1.jpg')";
slideholder2.addEventListener("click", function () {
    slideholder2.style.backgroundImage = "url('images4.3/neus"+ getfoto() +".jpg')";
});
function getfoto() {
    if (teller >= neus.length) {
        teller = 1;
    }
    else{
        teller++;
    }
    return teller;
}

/*--mond --*/
var mond = [1,2,3];
var teller = 1;
var slideholder3 = document.getElementById("slideholder3");
slideholder3.style.backgroundImage = "url('images4.3/mond1.jpg')";
slideholder3.addEventListener("click", function () {
    slideholder3.style.backgroundImage = "url('images4.3/mond"+ getfoto() +".jpg')";
});
function getfoto() {
    if (teller >= mond.length) {
        teller = 1;
    }
    else{
        teller++;
    }
    return teller;
}