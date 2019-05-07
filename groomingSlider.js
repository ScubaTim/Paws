
let groomingBannerStatus = 1;
let groomingBannerTimer = 4000;
let current = 0;


window.onload = function() {
bannerLoop();
}


let startGroomingBannerLoop = setInterval(function() {
bannerLoop();
}, groomingBannerTimer);

  //stops loop when mouse enters field
  document.getElementById("grooming-main-banner").onmouseenter = function () {
    clearInterval(startGroomingBannerLoop);
  }
      //restarts the loop when mouse leaves
  document.getElementById("grooming-main-banner").onmouseleave = function () {
    startGroomingBannerLoop = setInterval(function() {
      bannerLoop()}, groomingBannerTimer);
    }


function bannerLoop() {
if (groomingBannerStatus === 1) {
  document.getElementById("grooming-img-ban2").style.opacity = "0";
  setTimeout(function() {
    document.getElementById("grooming-img-ban1").style.right = "0px";
    document.getElementById("grooming-img-ban1").style.zIndex = "5000";
    
    document.getElementById("grooming-img-ban2").style.right = "-1400px";
    document.getElementById("grooming-img-ban2").style.zIndex = "1200";
    document.getElementById("grooming-img-ban5").style.right = "1400";
    document.getElementById("grooming-img-ban5").style.zIndex = "900";
  }, 500);
  setTimeout(function() {
    document.getElementById("grooming-img-ban2").style.opacity = "1";
  }, 1000);
  groomingBannerStatus = 2;
}
else if(groomingBannerStatus === 2) {
  document.getElementById("grooming-img-ban3").style.opacity = "0";
  setTimeout(function() {
    document.getElementById("grooming-img-ban2").style.right = "0px";
    document.getElementById("grooming-img-ban2").style.zIndex = "5000";
    
    document.getElementById("grooming-img-ban3").style.right = "-1400px";
    document.getElementById("grooming-img-ban3").style.zIndex = "1200";
    document.getElementById("grooming-img-ban1").style.right = "1400";
    document.getElementById("grooming-img-ban1").style.zIndex = "900";
  }, 500);
  setTimeout(function() {
    document.getElementById("grooming-img-ban3").style.opacity = "1";
  }, 1000);
  groomingBannerStatus = 3;
}
else if(groomingBannerStatus === 3) {
  document.getElementById("grooming-img-ban4").style.opacity = "0";
  setTimeout(function() {
    document.getElementById("grooming-img-ban3").style.right = "0px";
    document.getElementById("grooming-img-ban3").style.zIndex = "5000";
    
    document.getElementById("grooming-img-ban4").style.right = "-1400px";
    document.getElementById("grooming-img-ban4").style.zIndex = "1200";
    document.getElementById("grooming-img-ban2").style.right = "1400";
    document.getElementById("grooming-img-ban2").style.zIndex = "900";
  }, 500);
  setTimeout(function() {
    document.getElementById("grooming-img-ban4").style.opacity = "1";
  }, 1000);
  groomingBannerStatus = 4;
}
else if(groomingBannerStatus === 4) {
  document.getElementById("grooming-img-ban5").style.opacity = "0";
  setTimeout(function() {
    document.getElementById("grooming-img-ban4").style.right = "0px";
    document.getElementById("grooming-img-ban4").style.zIndex = "5000";
    
    document.getElementById("grooming-img-ban5").style.right = "-1400px";
    document.getElementById("grooming-img-ban5").style.zIndex = "1200";
    document.getElementById("grooming-img-ban3").style.right = "1400";
    document.getElementById("grooming-img-ban3").style.zIndex = "900";
  }, 500);
  setTimeout(function() {
    document.getElementById("grooming-img-ban5").style.opacity = "1";
  }, 1000);
  groomingBannerStatus = 5;
}
else {
  document.getElementById("grooming-img-ban1").style.opacity = "0";
  setTimeout(function() {
    document.getElementById("grooming-img-ban5").style.right = "0px";
    document.getElementById("grooming-img-ban5").style.zIndex = "5000";
    
    document.getElementById("grooming-img-ban1").style.right = "-1400px";
    document.getElementById("grooming-img-ban1").style.zIndex = "1200";
    document.getElementById("grooming-img-ban4").style.right = "1400";
    document.getElementById("grooming-img-ban4").style.zIndex = "900";
  }, 500);
  setTimeout(function() {
    document.getElementById("grooming-img-ban1").style.opacity = "1";
  }, 1000);
  groomingBannerStatus = 1;
}
}
//////////END OF IMAGE SLIDER///////////////
