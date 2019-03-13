class CallToAction {
    constructor(element){
        console.log(element);
        this.element = element;
        this.content = this.element.querySelector(".content");
        this.action = this.element.querySelector(".action");
        
        const w = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
        const h = Math.max(document.documentElement.clientHeight, window.innerHeight || 0);
        if (w >= 500 && h >= 500) this.animate.bind(this)();
    }
    animate(){
        let child = this.content.children;
        let anim = new TimelineLite();
        let from = {opacity: 0};
        anim.from(child[0], 1, from)
            .from(child[1], 1, from)
            .from(child[2], 1, from)
            .from(child[3], 1, from)
            .from(this.action, 1, from)
    }
}

let cta = document.querySelector(".cta");
console.log(cta);

cta = new CallToAction(cta);