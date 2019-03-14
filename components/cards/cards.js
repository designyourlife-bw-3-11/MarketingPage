class Cards {
    constructor(element) {
        this.element = element;
        this.cards = this.element.querySelectorAll(".card");
    }
    moveIn(){
        console.log("new card moving in")
    }
    moveOut(){
        console.log("old card moving out")

    }
    continuousMove(){

    }
}

new Cards(document.querySelector(".cards"));