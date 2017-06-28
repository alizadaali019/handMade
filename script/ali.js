$(document).ready(function(){
  $(".owl-carousel").owlCarousel({
      items:1,
      autoplay:true,
      loop:true,
      autoplayTimeout:2000,
      pagination:true,
      nav:true,
      navText:[
         "<i class='fa fa-long-arrow-right'></i>",
         "<i class='fa fa-long-arrow-left'></i>"
      ]
  });
});

	jQuery(document).ready(function(){
		jQuery('ul.sf-menu').superfish();
	});

	$(function(){
		$('#menu').slicknav({
            prependTo:'#demo1'
        });
	});