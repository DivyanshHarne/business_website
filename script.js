var arrow = document.querySelector("#cursor")
var blurArrow  = document.querySelector("#cursor-blur")

document.addEventListener("mousemove", (dets)=>{
  arrow.style.left = (dets.x-10)+'px';
  arrow.style.top = (dets.y-10)+'px';
  blurArrow.style.left = dets.x-125+'px';
  blurArrow.style.top = dets.y-125+'px';
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
        scrub:2,
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