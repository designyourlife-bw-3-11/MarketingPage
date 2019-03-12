class Spotlight {
    constructor(element){
        this.element = element;
        this.content = element.querySelector(".content");
        this.children = Array.from(this.content.children);
        this.content.style.overflow = "hidden";
        this.contentHeight = window.getComputedStyle(this.content).height;
        this.content.style.display = "none";

        this.trigger = this.element.getBoundingClientRect();
        this.trigger = this.trigger.y - 200;
        console.log(this.trigger);

        

        let animateRemoveReset = () => {
            if (window.scrollY> this.trigger){
                this.slideIn();
                window.removeEventListener("scroll", func);

                window.addEventListener("resize", () => {
                    // resets sizes eliminates a bug where animations end views that happened in mobile view persisted through resize
                    this.element.style = null;
                    this.content.style = null;
                    this.children.forEach(child => child.style = null);
                });
            }
        }

        window.addEventListener("scroll", animateRemoveReset);
    }

    slideIn(){
        console.log("in Slide");
        let from = {width: 0, opacity: 0, height: this.contentHeight};
        this.content.style.display = null;
        let anim = new TimelineLite();
        anim.from(this.content, 1.3, from)
            .from(this.content.children[0], .5, {opacity: 0})
            .from(this.content.children[1], .5, {opacity: 0});
    }
}

let spotlights = document.querySelectorAll(".spotlight").forEach(spotlight => new Spotlight(spotlight))