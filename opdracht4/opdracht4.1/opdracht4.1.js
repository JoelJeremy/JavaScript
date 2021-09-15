var mijnauto = {
    kleur: "yellow",
    merk: "mercedes",
    snelheid: 0,

    gas: function () {
        this.snelheid +=5;
        console.log(this.snelheid);
    },
    toeteren: function () {
        console.log("toet")
    }
}
console.log(mijnauto.kleur);
mijnauto.gas()
mijnauto.gas()
mijnauto.gas()
mijnauto.gas()
mijnauto.toeteren()


