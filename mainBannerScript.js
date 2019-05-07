
let bannerStatus = 1;
let bannerTimer = 4000;
let current = 0;


window.onload = function() {
bannerLoop();
}


let startBannerLoop = setInterval(function() {
bannerLoop();
}, bannerTimer);

  //stops loop when mouse enters field
  document.getElementById("main-banner").onmouseenter = function () {
    clearInterval(startBannerLoop);
  }
      //restarts the loop when mouse leaves
  document.getElementById("main-banner").onmouseleave = function () {
    startBannerLoop = setInterval(function() {
      bannerLoop()}, bannerTimer);
    }


function bannerLoop() {
if (bannerStatus === 1) {
  document.getElementById("img-ban2").style.opacity = "0";
  setTimeout(function() {
    document.getElementById("img-ban1").style.right = "0px";
    document.getElementById("img-ban1").style.zIndex = "5000";
    
    document.getElementById("img-ban2").style.right = "-1400px";
    document.getElementById("img-ban2").style.zIndex = "1200";
    document.getElementById("img-ban5").style.right = "1400";
    document.getElementById("img-ban5").style.zIndex = "900";
  }, 500);
  setTimeout(function() {
    document.getElementById("img-ban2").style.opacity = "1";
  }, 1000);
  bannerStatus = 2;
}
else if(bannerStatus === 2) {
  document.getElementById("img-ban3").style.opacity = "0";
  setTimeout(function() {
    document.getElementById("img-ban2").style.right = "0px";
    document.getElementById("img-ban2").style.zIndex = "5000";
    
    document.getElementById("img-ban3").style.right = "-1400px";
    document.getElementById("img-ban3").style.zIndex = "1200";
    document.getElementById("img-ban1").style.right = "1400";
    document.getElementById("img-ban1").style.zIndex = "900";
  }, 500);
  setTimeout(function() {
    document.getElementById("img-ban3").style.opacity = "1";
  }, 1000);
  bannerStatus = 3;
}
else if(bannerStatus === 3) {
  document.getElementById("img-ban4").style.opacity = "0";
  setTimeout(function() {
    document.getElementById("img-ban3").style.right = "0px";
    document.getElementById("img-ban3").style.zIndex = "5000";
    
    document.getElementById("img-ban4").style.right = "-1400px";
    document.getElementById("img-ban4").style.zIndex = "1200";
    document.getElementById("img-ban2").style.right = "1400";
    document.getElementById("img-ban2").style.zIndex = "900";
  }, 500);
  setTimeout(function() {
    document.getElementById("img-ban4").style.opacity = "1";
  }, 1000);
  bannerStatus = 4;
}
else if(bannerStatus === 4) {
  document.getElementById("img-ban5").style.opacity = "0";
  setTimeout(function() {
    document.getElementById("img-ban4").style.right = "0px";
    document.getElementById("img-ban4").style.zIndex = "5000";
    
    document.getElementById("img-ban5").style.right = "-1400px";
    document.getElementById("img-ban5").style.zIndex = "1200";
    document.getElementById("img-ban3").style.right = "1400";
    document.getElementById("img-ban3").style.zIndex = "900";
  }, 500);
  setTimeout(function() {
    document.getElementById("img-ban5").style.opacity = "1";
  }, 1000);
  bannerStatus = 5;
}
else {
  document.getElementById("img-ban1").style.opacity = "0";
  setTimeout(function() {
    document.getElementById("img-ban5").style.right = "0px";
    document.getElementById("img-ban5").style.zIndex = "5000";
    
    document.getElementById("img-ban1").style.right = "-1400px";
    document.getElementById("img-ban1").style.zIndex = "1200";
    document.getElementById("img-ban4").style.right = "1400";
    document.getElementById("img-ban4").style.zIndex = "900";
  }, 500);
  setTimeout(function() {
    document.getElementById("img-ban1").style.opacity = "1";
  }, 1000);
  bannerStatus = 1;
}
}
//////////END OF IMAGE SLIDER///////////////







