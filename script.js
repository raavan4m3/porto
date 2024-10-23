
const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true
});

var timeout;
function circleMousesquizz(){
    let xscale=1;
    let yscale=1;
    let xprev=0;
    let yprev=0;
    window.addEventListener("mousemove",function(dets){
        clearTimeout(timeout);
        xscale=gsap.utils.clamp(0.8,1.2,dets.clientX-xprev);
        yscale=gsap.utils.clamp(0.8,1.2,dets.clientY-yprev);

        xprev=dets.clientX;
        yprev=dets.clientY;
        circlemouseFollower(xscale,yscale)
        timeout=setTimeout(function(){
            document.querySelector("#abs").style.transform=`translate(${dets.clientX}px ,${dets.clientY}px) scale(1,1)`
        },100);
    })
}
circleMousesquizz();

function circlemouseFollower(xscale,yscale)
{
    window.addEventListener("mousemove", function (dets) {
        document.querySelector("#abs").style.transform=`translate(${dets.clientX}px ,${dets.clientY}px) scale(${xscale},${yscale})`
    })
}

function firstPage()
{
    let tl=gsap.timeline();
    tl.from("#nav", {
        y:-10,
        opacity:0,
        duration:1.5,
        ease:Expo.easeInOut
    })
    .to(".boundingelem", {
        y:0,
        delay:-1,
        duration:2,
        ease:Expo.easeInOut,
        stagger:0.2
    })
    .from("#homefooter", {
        y:-10,
        delay:-0.8,
        opacity:0,
        duration:1,
        ease:Expo.easeInOut
    })
}
firstPage();
circlemouseFollower();




document.querySelectorAll(".skills").forEach(function(elem){

    var rotate=0;
    var diffrotat=0;

    elem.addEventListener("mousemove", function (dets) {

        var diff=dets.clientY-elem.getBoundingClientRect().top;
        diffrotat=dets.clientX - rotate;
        rotate=dets.clientX;
        
        gsap.to(elem.querySelector("img"),{
            opacity:1,
            top:diff,
            left:dets.clientX,
            ease:Power3,
            rotate: gsap.utils.clamp(-20,20,diffrotat*2 )
        })
    });
})


document.querySelectorAll(".skills").forEach(function(elem){
    elem.addEventListener("mouseleave", function (dets) {
        gsap.to(elem.querySelector("img"),{
            opacity:0,
            duration:0.5,
            ease:Power1,
        })
    });
})