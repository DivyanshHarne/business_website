var arrow = document.querySelector("#cursor")
var blurArrow  = document.querySelector("#cursor-blur")

document.addEventListener("mousemove", (dets)=>{
  arrow.style.left = dets.x+'px';
  arrow.style.top = dets.y+'px';
  blurArrow.style.left = dets.x-125+'px';
  blurArrow.style.top = dets.y-125+'px';
})

var h4all = document.querySelectorAll("#nav h4");
h4all.forEach((elem)=>{
    elem.addEventListener("mouseenter", ()=>{
        arrow.style.scale = 3;
        arrow.style.border = "1px solid #fff";
        arrow.style.backgroundColor = "transparent";
        // arrow.style.transition = "0.5s"
    })
})
var h4all = document.querySelectorAll("#nav h4");
h4all.forEach((elem)=>{
    elem.addEventListener("mouseleave", ()=>{
        arrow.style.scale = 1;
        arrow.style.border = "1px solid #95c11e";
        arrow.style.backgroundColor = "#95c11e";
    })
})


gsap.to("#nav", {
    backgroundColor: "#000",
    duration: 0.5,
    height: "110px",
    scrollTrigger:{
        trigger: "#nav", 
        scroller: "body",
        // markers: true,
        start: "top -11%",
        end: "top -11%",
        scrub:1,
    }
});

gsap.to("#main",{
    backgroundColor: "#000", 
    scrollTrigger:{
        trigger:"#main",
        Scroller: "body",
        start: "top -25%",
        end: "top -70%",
        scrub:2,
    }
})