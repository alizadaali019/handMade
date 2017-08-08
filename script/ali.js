$(document).ready(function() {
 
  $(".owl-carousel").owlCarousel({
    nav:true,
    loop:true,
      responsive : {
    0 : {
        items:2
    },
    480 : {
        items:3        
    },
    768 : {
        items:4
    }
}
      
  });
  $(".lazim").click(function(){
   $(".login").stop().slideToggle();
})
$(".pay").hover(function(){
   $(".paint").stop().slideToggle();
})
$(".paint").hover(function(){
   $(".paint").stop().slideToggle();
})
$(".art").hover(function(){
   $(".artists").stop().slideToggle();
})
$(".artists").hover(function(){
   $(".artists").stop().slideToggle();
})
// $(".all-art").hover(function(){
//   $(this).css("z-index",1300);
//   $(".modal").css({"display":"block"})
// });
// $(".modal").hover(function(){
//   $(".all-art").slideUp();
//     $(".modal").css("display","none");
// })
$(".big").hover(function(){
   $(".all-art").stop().slideToggle()
    // .css({
    //   'position' : 'absolute'
    // })
})
$(".bars").click(function(){
   $(".section").stop().slideToggle();
})
$(".set").click(function(){
   $(".option").stop().slideToggle();
})
$(".all-art").hover(function(){
   $(".all-art").stop().slideToggle();
})
  $(window).scroll(function(){
    if($(window).scrollTop()>190){
      $(".menu").addClass("navFixed")
      $(".all-art").addClass("menuFixed")
      $('.all-art').css({"top":'80px'});
      
    }else{
      $(".all-art").removeClass("menuFIxed")
      $(".menu").removeClass("navFixed")
      $('.all-art').css({"top":'250px'});
      
    }
  })
  //  $(window).scroll(function(){
  //   if($(this).scrollTop()>190){
  //     $(".all-art").css("margin-top","75px");
  //   }else{
  //     $(".all-art").css("margin-top","0");
  //   }
  // })
   
  // $(".all").click(function(e){
  //   if(!e.target.closest(".slide-down")&&!e.target.closest("#header")){
  //     //$(".slide-down").removeClass();
  //    $(".slide-down").css("display","none");
  //   }else{
  //          $(".slide-down").css("display","block");
  //   }
  // })
  
  $(".slide-down").closest();
  $(".slide-down ul li").click(function(){
    var slideIndex = $(this).text();
    var sd=$(".item-l").empty();
    $(".item-l").html(slideIndex);
  })

 $(".item-l").click(function(){
  
   
        $(".down-l").toggleClass("fa-angle-up");
        $(".down-l").toggleClass("fa-angle-down");

        $(".slide-down").stop().slideToggle();
    });
});
$(function() {
  $(".expand").on( "click", function() {
    // $(this).next().slideToggle(200);
    $expand = $(this).find(">:first-child");
    
    if($expand.text() == "+") {
      $expand.text("-");
    } else {
      $expand.text("+");
    }
  });
});

