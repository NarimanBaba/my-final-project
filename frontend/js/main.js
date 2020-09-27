// AOS.init();
//  $('.carousel').carousel({
//     interval: 3000
//  })
  
 
//  var slidecount = 0;
// var oldactiveitem = document.querySelector(".carousel-item.active");
// oldactiveitem.firstElementChild.classList.add("showzoom");
//   $('.carousel').on('slid.bs.carousel', function () {
//       if(slidecount != 0){
//         if(oldactiveitem.classList.contains("active")){
//             oldactiveitem = document.querySelector(".carousel-item.active")
//             slidecount = 1;
//         }
//       }
//       else{
//         oldactiveitem= document.querySelector(".carousel-item.active")
//     }
//         if( oldactiveitem.firstElementChild.classList.contains("showzoom")){
//             console.log(oldactiveitem.firstElementChild)
//           oldactiveitem.firstElementChild.classList.remove("showzoom") 
//           oldactiveitem.firstElementChild.classList.add("showzoom")
//         }
//     oldactiveitem.firstElementChild.classList.add("showzoom")
     
//   })
$(document).ready(function(){
    $(".owl-carousel").owlCarousel();
  });
$('.owl-carousel').owlCarousel({
    
    margin:50,
  
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:3
        }
    }
})