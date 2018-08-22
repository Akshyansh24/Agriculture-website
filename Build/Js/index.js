$('.owl-carousel').owlCarousel({
    loop:true,
    nav:false,
    autoplay:true,
    autoplayTimeout:2500,
    autoplayHoverPause:true,
    margin:20,
    nav:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:2
        },
        1000:{
            items:2
        }
    }
})


window.onscroll = function() {
    growShrinkLogo()
 };
 function growShrinkLogo() {
 
     var Logo_Image = document.getElementById("Logo_Image")
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100 ) {
        Logo_Image.style.height = '45px';
        Logo_Image.style.width = '148px';
        Logo_Image.style.marginTop = '10px';
        Logo_Image.style.paddingBottom = '5px';
        Logo_Image.style.transition = '0.9s';
    } else {
     Logo_Image.style.height = '54px';
     Logo_Image.style.width = '224px';
     Logo_Image.style.marginTop = '0px';
     Logo_Image.style.paddingBottom = '0px';
        
    }   
    
    var Logo_Image = document.getElementById("Logo_mobile_img")
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100 ) {
        Logo_Image.style.height = '45px';
        Logo_Image.style.width = '148px';
        Logo_Image.style.marginTop = '10px';
        Logo_Image.style.paddingBottom = '5px';
        Logo_Image.style.transition = '0.9s';
    } else {
     Logo_Image.style.height = '49px';
     Logo_Image.style.width = '204px';
     Logo_Image.style.marginTop = '5px';
     Logo_Image.style.paddingBottom = '5px';
        
    } 
    var myHeader = document.getElementById("myHeader")
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100 ) {
     myHeader.style.padding = '0px 0px';
     myHeader.style.transition = '0.9s';
     myHeader.style.borderBottomLeftRadius = '0px';
     myHeader.style.borderBottomRightRadius = '0px';
    } else {
     myHeader.style.padding = '10px 0px';
     myHeader.style.borderBottomLeftRadius = '40px';
     myHeader.style.borderBottomRightRadius = '40px';
        
    } 

    var scroll = document.getElementById("myp")
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100 ) {
        myp.style.display='block' 
        myp.style.transition = '0.3s';
        } else {
        myp.style.display='none';
        myp.style.transition = '0.3s';
        }
    };


// scroll js
var timeOut;
function scrollToTop() {
if (document.body.scrollTop!=0 || document.documentElement.scrollTop!=0){
window.scrollBy(0,-50);
timeOut=setTimeout('scrollToTop()',10);
}
else clearTimeout(timeOut);
}


 function openNav() {
    document.getElementById("mySidenav").style.width = "350px";
    document.body.style.backgroundColor = "rgba(0,0,0,0.4)";
}

function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
    document.body.style.backgroundColor = "white";
}function openNav() {
    document.getElementById("mySidenav").style.width = "350px";
    document.body.style.backgroundColor = "rgba(0,0,0,0.4)";
}

function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
    document.body.style.backgroundColor = "white";
}


var slideIndex = 0;
showSlides();

function showSlides() {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("dot");
    for (i = 0; i < slides.length; i++) {
       slides[i].style.display = "none";  
    }
    slideIndex++;
    if (slideIndex > slides.length) {slideIndex = 1}    
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex-1].style.display = "block";  
    dots[slideIndex-1].className += " active";
    setTimeout(showSlides, 1800); // Change image every 2 seconds
}

