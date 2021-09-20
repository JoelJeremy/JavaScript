pics = document.getElementById("pics")
createPicsHolders ();
createCarImages ();

function createPicsHolders() {
    for (var i = 0; i < 9; i++) {
        pictureHolder = document.createElement("div");
        pictureHolder.className = "picture-holder";
        pictureHolder.id = "picture-holder" + i;
        pics.appendChild(pictureHolder);
    }
}

function createCarImages() {
    pictureHolders = document.getElementsByClassName("picture-holder")
    for (var i = 0; i < pictureHolders.length; i++) {

        favoriet = document.createElement("div");
        favoriet.className = "favoriet";
        favoriet.id = "favoriet" + (i+1);

        mercedes = document.createElement("img");
        mercedes.src = "../opdracht5/images5/foto"+(i+1)+".jpg";
        mercedes.id = (i+1);
        mercedes.addEventListener("click", function () {
            makefavourite(this.id);
        });
        pictureHolders[i].appendChild(favoriet);
        pictureHolders[i].appendChild(mercedes);
    }
}

function makefavourite(id) {
    console.log("make favourite foto" + id)
    unlike =  document.getElementsByClassName("favoriet");

    for ( var i=0; i < unlike.length; i++) {
        unlike[i].style.backgroundImage = "none";
    }
    favoriet = document.getElementById("favoriet" + id );
    favoriet.style.backgroundImage = "url('../opdracht5/images5/heart.jpg')";
}