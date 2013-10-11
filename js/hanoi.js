var navbar = document.getElementById("tnavbar");
var container = document.getElementById("tcontainer");
var bannertitle = document.getElementById("banner-title");
var bannersubtitle = document.getElementById("banner-subtitle");

window.smoothScrollTo = (function () {
  var scrollTimer, start, factor;
  
  return function (target, duration) {
    var offset = window.pageYOffset,
        delta  = target - window.pageYOffset;
    duration = duration || 1000;
    start = Date.now();
    factor = 0;
    
    if( scrollTimer ) {
      clearInterval(scrollTimer);
    }
    
    function step() {
      var y;
      factor = (Date.now() - start) / duration;
      if( factor >= 1 ) {
        clearInterval(scrollTimer);
        factor = 1;
      } 
      y = factor * delta + offset;
      window.scrollBy(0, y - window.pageYOffset);
    }
    
    scrollTimer = setInterval(step, 10);
    return scrollTimer;
  };
}());

setTimeout(function(){
    navbar.className += " tnavbar-show";
    container.className += " tcontainer-show";  
    if (window.pageYOffset < 120) {
        setTimeout(function(){bannertitle.className += " banner-title-show";}, 1100);
        setTimeout(function(){bannersubtitle.className += " banner-subtitle-show";}, 1500);
    }
},100);

window.onscroll = trigScroll;
var bannerTitleTimer = null;

function trigScroll() {
    var offsetY;
    if(window.pageYOffset >= 120) {
        bannertitle.className = "banner-title";
        bannersubtitle.className = "banner-subtitle";
    } else {
        bannertitle.className += " banner-title-show";
        bannersubtitle.className += " banner-subtitle-show";
    }
};

window.onload=function(){
    setTimeout(function(){
        scrollTo(0,-1);
    },0);
}

var hoankiem = document.getElementById("hoan-kiem");
var vanmieu = document.getElementById("van-mieu");
var phoco = document.getElementById("pho-co");

hoankiem.onclick = function() { locationActive("hoan-kiem"); };
vanmieu.onclick = function() { locationActive("van-mieu"); };
phoco.onclick = function() { locationActive("pho-co"); };

function locationActive(id) {
    hoankiem.className = "grayscale";
    vanmieu.className = "grayscale";
    phoco.className = "grayscale";
    document.getElementById(id).className += " normal-color";
    document.getElementById("description").className += " description-hide";
    setTimeout(function(){
        var data = document.getElementById("data-" + id).innerHTML;
        document.getElementById("description").className = "description";
        document.getElementById("description").innerHTML = data;
    }, 200)
}

locationActive("hoan-kiem");

var pho = document.getElementById("pho");
var buncha = document.getElementById("bun-cha");
var banhcuon = document.getElementById("banh-cuon");
var chaca = document.getElementById("cha-ca");
var com = document.getElementById("com");

pho.onclick = function() { foodActive("pho"); };
buncha.onclick = function() { foodActive("bun-cha"); };
banhcuon.onclick = function() { foodActive("banh-cuon"); };
chaca.onclick = function() { foodActive("cha-ca"); };
com.onclick = function() { foodActive("com"); };

function foodActive(id) {
    pho.className = "grayscale";
    buncha.className = "grayscale";
    banhcuon.className = "grayscale";
    chaca.className = "grayscale";
    com.className = "grayscale";
    document.getElementById(id).className += " normal-color";
    document.getElementById("food-description").className += " description-hide";
    setTimeout(function(){
        var data = document.getElementById("data-" + id).innerHTML;
        document.getElementById("food-description").className = "description";
        document.getElementById("food-description").innerHTML = data;
    }, 200)
}

foodActive("pho");