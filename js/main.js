// gsap.registerPlugin(ScrollTrigger);

function init(){
    
// gsap.to("#intro img", {duration:1, opacity:0 });
// gsap.to("#intro img", {
//      opacity:0 
//     ,scrollTrigger: {
//         trigger: "#intro",
//         start: "100px top",
//         end: "bottom center",
//         scrub: true,
//         markers: true,


//     }});


    gsap.set("#project02", {scrollTrigger: {
        trigger: "#project02",
        start: "top bottom-=150px",
        end: "bottom center-=150px",
        toggleClass: "active",
        // markers: true,
        markers: {
            startColor: "black", 
            endColor: "orange", 
            fontSize: "18px", 
            // fontWeight: "bold", 
            indent: 200,
            startMarker: 'start manu',
            endMarker: 'end manu',
            
            
        },
        labels: {
            start: 'startLabel',
            middle: 'middleLabel',
            end: 'endLabel',
          },

    }})


} // end init

window.addEventListener('load', function(){
    init();
});
