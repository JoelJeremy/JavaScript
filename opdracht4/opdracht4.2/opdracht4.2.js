var plaatjes = [1,2,3,4,5];
var teller = 1;
var slideholder = document.getElementById("slideholder");

slideholder.style.backgroundImage = "url('images4/auto2.jpg')";

slideholder.addEventListener("click", function () {
    slideholder.style.backgroundImage = "url('images4/foto"+ getfoto() +".jpg')";
});

function getfoto() {
    if (teller >= plaatjes.length) {
        teller = 1;
    }
    else{
        teller++;
    }
    console.log(teller);
    return teller;

}