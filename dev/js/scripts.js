import { gsap } from "gsap" 
import { GSDevTools } from "gsap/GSDevTools";
import { DrawSVGPlugin } from "gsap/DrawSVGPlugin" 
import { CustomEase } from "gsap/CustomEase"
import { TextPlugin } from "gsap/TextPlugin";
 
gsap.registerPlugin(GSDevTools, DrawSVGPlugin, CustomEase, TextPlugin);

CustomEase.create("myEase", "M0,0 C0.084,0.61 0.416,1.084 0.482,1.138 0.558,1.2 0.812,0.422 1,0")

const mainTL = gsap.timeline();

function Shapes(){
    const tl = gsap.timeline()
    tl.from("#vector-113", {duration: .1, scale: 5})
    .from("#vector-1",{duration: .75, drawSVG: "0%"}, "same")
    .from("#vector-2",{duration: .75, drawSVG: "0%"}, "-=70%")
    .from("#vector-3",{duration: .75, drawSVG: "0%"}, "-=70%")
    .from("#vector-4",{duration: .75, drawSVG: "0%"}, "-=70%")
    .from("#vector-5",{duration: .75, drawSVG: "0%"}, "-=70%")
    .from("#vector-6",{duration: .75, drawSVG: "0%"}, "-=70%")
    .from("#vector-7",{duration: .75, drawSVG: "0%"}, "-=70%")
    .from("#vector-8",{duration: .75, drawSVG: "0%"}, "-=70%")
    .from("#vector-9",{duration: .75, drawSVG: "0%"}, "-=70%")
    .from("#vector-10",{duration: .75, drawSVG: "0%"}, "-=70%")
    .from("#vector-11",{duration: .75, drawSVG: "0%"}, "-=70%")
    .from("#vector-12",{duration: .75, drawSVG: "0%"}, "-=70%")
    .from("#vector-13",{duration: .75, drawSVG: "0%"}, "-=70%")
    .from("#vector-14",{duration: .75, drawSVG: "0%"}, "-=70%")
    .from("#vector-15",{duration: .75, drawSVG: "0%"}, "-=70%")
    .from("#vector-16",{duration: .75, drawSVG: "0%"}, "-=70%")
    .from("#vector-17",{duration: .75, drawSVG: "0%"}, "-=70%")
    .from("#vector-18",{duration: .75, drawSVG: "0%"}, "-=70%")
    .from("#LONGWOOD", {duration: 3, x:+-700, alpha:0})
    .from("#GARDENS", {duration: 3, x:-+700, alpha:0})

    return tl
}

function load(){
    const tl = gsap.timeline()
    tl.from("#loading",{duration:11, drawSVG: "0%"})

}



function Spin(){
    const tl = gsap.timeline()
    tl.from("#form",{duration:7, rotation:"360", alpha:4, transformOrigin:'center', ease:"myEase"})

}


console.log('hello');

mainTL.add(Shapes())
.add(Spin())
.add(load())

GSDevTools.create();
