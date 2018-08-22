$('.owl-carousel').owlCarousel({
    loop:true,
    nav:false,
    autoplay:true,
    autoplayTimeout:1500,
    autoplayHoverPause:true,
    margin:15,
    nav:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:4
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
        Logo_Image.style.transition = '0.2s';
    } else {
     Logo_Image.style.height = '74px';
     Logo_Image.style.width = '284px';
     Logo_Image.style.marginTop = '0px';
     Logo_Image.style.paddingBottom = '0px';
        
    }   

    var myHeader = document.getElementById("myHeader")
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100 ) {
     myHeader.style.padding = '0px 0px';
     myHeader.style.transition = '0.2s';
    } else {
     myHeader.style.padding = '10px 0px';
        
    }   
 };

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