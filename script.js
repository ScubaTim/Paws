//////////HAMBURGER AND DOTS FOR MOBILE///////////

    function openSideMenu() {
        document.getElementById("side-menu").style.width = "25vw";
    }

    function closeSideMenu() {
        document.getElementById("side-menu").style.width = "0px";
    }

    function openSideMenu2() {
        document.getElementById("side-menu2").style.width = "25vw";
    }

    function closeSideMenu2() {
        document.getElementById("side-menu2").style.width = "0px";
    }

/////////END OF HAMBURGER & DOT///////////////////




///////////IMAGE SLIDER/////////////////////

let bannerStatus = 1;
let bannerTimer = 4000;
let arrowRight = document.getElementById("#arrow-right");
let arrowLeft = document.getElementById("#arrow-left");
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


    //arrow
    function slideLeft() {
        bannerStatus[current - 1];
        current--;
    }
    arrowLeft.addEventListener("click", function() {
        if(current === 0) {
            current = 5;
        }
    });


function bannerLoop() {
if (bannerStatus === 1) {
    document.getElementById("imgban2").style.opacity = "0";

    setTimeout(function() {
        document.getElementById("imgban1").style.right = "0px";
        document.getElementById("imgban1").style.zIndex = "1000";
        
        document.getElementById("imgban2").style.right = "-1400px";
        document.getElementById("imgban2").style.zIndex = "1200";

        document.getElementById("imgban5").style.right = "1400";
        document.getElementById("imgban5").style.zIndex = "900";

    }, 500);

    setTimeout(function() {
        document.getElementById("imgban2").style.opacity = "1";
    }, 1000);

    bannerStatus = 2;
}


else if(bannerStatus === 2) {
    document.getElementById("imgban3").style.opacity = "0";

    setTimeout(function() {
        document.getElementById("imgban2").style.right = "0px";
        document.getElementById("imgban2").style.zIndex = "1000";
        
        document.getElementById("imgban3").style.right = "-1400px";
        document.getElementById("imgban3").style.zIndex = "1200";

        document.getElementById("imgban1").style.right = "1400";
        document.getElementById("imgban1").style.zIndex = "900";

    }, 500);

    setTimeout(function() {
        document.getElementById("imgban3").style.opacity = "1";
    }, 1000);

    bannerStatus = 3;
}


else if(bannerStatus === 3) {
    document.getElementById("imgban4").style.opacity = "0";

    setTimeout(function() {
        document.getElementById("imgban3").style.right = "0px";
        document.getElementById("imgban3").style.zIndex = "1000";
        
        document.getElementById("imgban4").style.right = "-1400px";
        document.getElementById("imgban4").style.zIndex = "1200";

        document.getElementById("imgban2").style.right = "1400";
        document.getElementById("imgban2").style.zIndex = "900";
    }, 500);

    setTimeout(function() {
        document.getElementById("imgban4").style.opacity = "1";
    }, 1000);

    bannerStatus = 4;
}


else if(bannerStatus === 4) {
    document.getElementById("imgban5").style.opacity = "0";

    setTimeout(function() {
        document.getElementById("imgban4").style.right = "0px";
        document.getElementById("imgban4").style.zIndex = "1000";
        
        document.getElementById("imgban5").style.right = "-1400px";
        document.getElementById("imgban5").style.zIndex = "1200";

        document.getElementById("imgban3").style.right = "1400";
        document.getElementById("imgban3").style.zIndex = "900";

    }, 500);

    setTimeout(function() {
        document.getElementById("imgban5").style.opacity = "1";
    }, 1000);

    bannerStatus = 5;
}


else {
    document.getElementById("imgban1").style.opacity = "0";

    setTimeout(function() {
        document.getElementById("imgban5").style.right = "0px";
        document.getElementById("imgban5").style.zIndex = "1000";
        
        document.getElementById("imgban1").style.right = "-1400px";
        document.getElementById("imgban1").style.zIndex = "1200";

        document.getElementById("imgban4").style.right = "1400";
        document.getElementById("imgban4").style.zIndex = "900";
    }, 500);

    setTimeout(function() {
        document.getElementById("imgban1").style.opacity = "1";
    }, 1000);

    bannerStatus = 1;
}

}

//////////END OF IMAGE SLIDER///////////////





////////NAVBAR ONSCROLL////////////

let navOnScroll = document.getElementById("navul");
let header = document.getElementById("header")
let navOnScrollHeight = navOnScroll.offsetHeight;
let headerHeight = header.offsetHeight;



function stickyNav() {
    if(window.pageYOffset > headerHeight) {
        navOnScroll.style.position = "fixed";
        navOnScroll.style.top = 0;

    }
}
window.addEventListener("scroll", stickyNav);