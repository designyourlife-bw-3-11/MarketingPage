class Spotlight {
    constructor(element){
        this.element = element;
        this.content = element.querySelector(".content");
        this.children = Array.from(this.content.children);
        this.content.style.overflow = "hidden";
        this.contentHeight = window.getComputedStyle(this.content).height;
        this.content.style.display = "none";

        let iosFix = () => {
            if (!!navigator.platform && /iPad|iPhone|iPod/.test(navigator.platform)) {
                /* 
                    IOS does not like background attachment fixed.
                    
                    a better fix would be to add a fullscreen div with a fixed position and set
                    overflow to hidden on the spotlight element.. thassa TODO:
                */
                this.element.style.backgroundAttachment = "scroll";
                this.element.style.backgroundSize = "auto 100%";
            }
        }

        iosFix();

        this.trigger = this.element.getBoundingClientRect();
        this.trigger = this.trigger.y - 200;
        console.log(this.trigger);

        

        let animateRemoveReset = () => {
            if (window.scrollY > this.trigger){
                this.slideIn();
                window.removeEventListener("scroll", animateRemoveReset);

                window.addEventListener("resize", () => {
                    // resets sizes eliminates a bug where animations end views that happened in mobile view persisted through resize
                    console.log("reset")
                    this.element.style = null;
                    this.content.style = null;
                    this.children.forEach(child => child.style = null);
                    iosFix();
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