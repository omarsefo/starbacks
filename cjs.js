function imgc(bb){
    document.getElementById("star").src = bb;
}
function chang(color){
    var circl =document.getElementById("cir");
    var span =document.querySelector('span');
    var a =document.getElementById('a');
    circl.style.background=color;
    span.style.color=color;
    a.style.background=color;
}
VanillaTilt.init(document.querySelector(".logo"), {
    max: 25,
    speed: 500
});