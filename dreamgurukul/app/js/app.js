var winHT = $(window).height();
var winWD = $(window).width();
var navHt = $("header").outerHeight();
if (winWD<= 1024){
  $('.section-first').css('margin-top', navHt);
}
const lenis = new Lenis({
  content: document.section,
  lerp:100,
  duration: 1.2,
  easing: (t) => (t === 1 ? 1 : 1 - Math.pow(2, -10 * t)),
  direction: "vertical",
  gestureDirection: "vertical",
  smooth: true,
  smoothWheel: true,
  smoothTouch: false,
  wheelMultiplier: 1.5,
  touchMultiplier: 20,
});

function raf(time) {
  lenis.raf(time);
  requestAnimationFrame(raf);
}
requestAnimationFrame(raf);

if (winWD <= 992) {     
 
  $(".nav-links a").on("click", function(){
    $(".nav-links").slideToggle();
    $(".menu-icon-mobile").removeClass("active");
  })

  $('.galleryImg').each(function() {
    var src = $(this).attr("data-src");
    $(this).attr("data-src", src.replace(/\.webp$/i, "-mob.webp"));
  });

}
$(".menu-icon-mobile").on("click", function(){
  $(".nav-links").slideToggle();
  $(".menu-icon-mobile").toggleClass("active");
});

if(winWD <= 768){
 

  $(".mob_enq_click, .frmclose").on("click" , function(){
    isBrochure = 0;
    isFloorplan = 0;
    $(".form-container").toggleClass("show");
  });
}

var nextbtn = "url(assets/images/next.svg),auto";
var prevbtn = "url(assets/images/prev.webp),auto";

$(window).on('scroll', function() {
  $(".lastrow").each(function() {
    if (isScrolledIntoView($(this))) {
      $('.lasta').addClass("center");
      $('.centertxt1').fadeIn();
    }
  });
});

$(document).ready(function () {
  //On Click
  $('.nav-links a').on("click", function(){
    if(!$(this).hasClass('extLink')) {
      var href = $(this).attr("rel");
      if(winWD <= 700)
        var gap = 45; // $(".header-wrapper").outerHeight(); //Navigation height
      else
        var gap = 96;
      
      $('html,body').animate({
        scrollTop: $("#"+href).offset().top - gap
      }, 1000);
    }
  });
        var childrenSelector = $(".nav-links a");
        var aChildren = $(".nav-links a"); // find the a children of the list items
        if(winWD <= 700)
          var gap = 55;// $(".header-wrapper").outerHeight(); //Navigation height
        else
          var gap = 100;
        var aArray = []; // create the empty aArray
        for (var i=0; i < childrenSelector.length; i++) {
          var aChild = aChildren[i];
          if (!$(aChild).hasClass('extLink')) {
            if ($(aChild).attr('rel')) {
              var ahref = $(aChild).attr('rel');
              aArray.push(ahref);
            }
          }
        }

$(".plans_img").colorbox({
  inline:true,
  fixed:true,
  width:(winWD<=992) ? '60%' : '70%',
  height:(winWD <= 992) ? '500' : '100',
  onComplete:function() {
    var rel = $(this).attr("data-image");
    $("#" + rel).smoothZoom({
      width: '100%',
      height: '100%',
      pan_BUTTONS_SHOW: "YES",
      pan_LIMIT_BOUNDARY: "YES",
      button_SIZE: 15,
      button_ALIGN: "bottom right",
      zoom_MAX: 350,
      border_TRANSPARENCY: 0,
    });
    $.colorbox.resize();
  }
});
      //On Scroll - Add class active to active tab
   $(window).scroll(function(){
    var windowPos = $(window).scrollTop(); // get the offset of the window from the top of page
    var windowHeight = $(window).height(); // get the height of the window
    var docHeight = $(document).height();
    for(i=0;i<aArray.length;i++){
      var theID = aArray[i];
      var divPos = $("#"+theID).offset().top; // get the offset of the div from the top of page
      var divHeight = $("#"+theID).outerHeight(); // get the height of the div in question
      if (windowPos >= (divPos - gap) && windowPos < ((divPos - gap) + divHeight)) {
        if (!$("a[rel='" + theID + "']").hasClass("active"))
        {
          // ga('set', 'page', '/'+theID);
          // ga('send', 'pageview');
          $("a[rel='" + theID + "']").addClass("active"); 
        }
      } 
      else 
      {
        $("a[rel='" + theID + "']").removeClass("active");
      }
    }
    //If document has scrolled to the end. Add active class to the last navigation menu
    if(windowPos + windowHeight == docHeight) {
      if (!$(".nav-links li:not(.extLink):last-child a").hasClass("active")) {
          var navActiveCurrent = $(".active").attr("rel");
          $("a[rel='" + navActiveCurrent + "']").removeClass("active");
          $(".nav-links li:not(.extLink):last-child a").addClass("active");
      }
    }
  });

      $('.instrument-slider').slick({
        arrows: true,
        autoplay:false,
        lazyLoad: 'ondemand',
        dots: false,
        autoplaySpeed: 5000,
        speed: 1000,
        centerMode:true,
        centerPadding:'230px',      
        prevArrow:'#inst-prev',
        nextArrow:'#inst-next',
        responsive: [
          {
            breakpoint:1025,
            settings:{
              // slidesToShow:2,
              centerPadding:'150px',
            }
          },
          {
            breakpoint: 993,
            settings: {
              arrows: true,
              autoplay:false,
              lazyLoad: 'ondemand',
              dots: false,
              autoplaySpeed: 5000,
              speed: 1000,
              centerMode:false,
              centerPadding:'0',
              prevArrow:'#inst-prev',
              nextArrow:'#inst-next',
            }
          },
        ]   
      });
      $('.specInfoSlider').slick({
        slidesToShow:3,
        // slidesToScroll:1,
        asNavFor:'.towe-a-slider',
        focusOnSelect:true,
        autoplay:false,
        vertical:true,
      })
      $('.specInfoSlider2').slick({
        slidesToShow:3,
        // slidesToScroll:1,
        asNavFor:'.towe-b-slider',
        focusOnSelect:true,
        autoplay:false,
        vertical:true,
      })
      // $('.locationIconWrapper').slick({
      //   slidesToShow:4,
      //   arrows:false,
      //   autoplay:true,
      //   responsive: [
      //     {
      //       breakpoint: 640,
      //       settings: {
      //         // rows:2,
      //         slidesToShow:1,
      //         // slidesPerRow: 1,
      //         // rows: 4
      //       }
      //     },
      //   ]
      // });
      $('.locMobSlider').slick({
        slidesToShow:1,
        arrows:true,
        prevArrow:'#locMobLeft',
        nextArrow:'#locMobRight',
      })

      $('.gallery-slider').slick({
        arrows: true,
        autoplay:true,
        lazyLoad: 'ondemand',
        dots: false,
        autoplaySpeed: 5000,
        speed: 1000,      
        prevArrow:'#gallery-prev',
        nextArrow:'#gallery-next',   
      });


      $('.tabs-wrapper a').on('click',function(){    
            var link = $(this).attr('rel');
            $('.tabs-wrap').hide();
            $('#'+link).fadeIn();
            $('.tabs-wrapper a').removeClass('tab-active');
            $(this).addClass('tab-active');
            $('.towe-a-slider, .towe-b-slider, .specInfoSlider, .specInfoSlider2').slick('refresh');
      });

      $('.towe-a-slider').slick({
        arrows: true,
        // autoplay:true,
        lazyLoad: 'ondemand',
        dots: false,
        autoplaySpeed: 5000,
        speed: 1000,
        asNavFor:'.specInfoSlider',      
        prevArrow:'#tower-a-prev',
        nextArrow:'#tower-a-next',   
      });

      $('.towe-b-slider').slick({
        arrows: true,
        autoplay:true,
        lazyLoad: 'ondemand',
        dots: false,
        autoplaySpeed: 5000,
        speed: 1000,  
        asNavFor:'.specInfoSlider2',    
        prevArrow:'#tower-b-prev',
        nextArrow:'#tower-b-next',   
      });

      $('.amenities-slider-1').slick({
        arrows: false,
        autoplay:true,
        lazyLoad: 'ondemand',
        dots: false,
        autoplaySpeed: 5000,
        speed: 1000,      
        asNavFor: '.amenities-slider-2',
        prevArrow:'#ame-prev',
        nextArrow:'#ame-next', 
        responsive: [{
                 breakpoint: 1025,
                 settings: {      
                   arrows: true,                              
                 },

               }
              ]  
      });

      $('.amenities-slider-2').slick({
        slidesToShow: 12,
        slidesToScroll: 1,
        // rows:10;
        arrows: false,
        autoplay:false,
        vertical: true,
        focusOnSelect: true,
        asNavFor: '.amenities-slider-1',
        lazyLoad: 'ondemand',
        dots: false,
        autoplaySpeed: 5000,
        speed: 1000,   
      });


      var $circular_content_slider_Element_beforeChange = $('.location-adv-slider');

		  $circular_content_slider_Element_beforeChange.on('init reInit beforeChange', function (event, slick, currentSlide, nextSlide) {
			if (currentSlide >=0) {
				$(".animated-circle").removeClass("animate-ball active_ball");
				$(".inactive-ball_bg").removeClass("active-ball_bg")
				$(".circle-0 .inactive-ball_bg").removeClass("active-ball_bg");
			}
			$(".circle-" + nextSlide).addClass("animate-ball active_ball");
			$(`.circle-${nextSlide} .inactive-ball_bg`).addClass("active-ball_bg");
	 
		});

    $('.circle-animation').slick({
      slidesToShow: 5,
      slidesToScroll: 1,
      vertical: true,
      focusOnSelect: true,
      asNavFor: '.location-adv-slider',
    });

      $('.location-adv-slider').slick({
        arrows: true,
        autoplay:false,
        slidesToShow: 1,
        lazyLoad: 'ondemand',
        asNavFor: '.circle-animation',
        dots: false,
        slidesToScroll: 1,
        autoplaySpeed: 5000,
        speed: 1000,      
        prevArrow:'#loc-prev',
        nextArrow:'#loc-next',   
      });


      if (winWD <= 992) { 
      //   $('.hideph').hide();
      //   $('.loc-adv').on("click", function(){
      //   $('.animate-div').css('height', 'unset');
      //   $('.locIconMobBox').css({'transform' : 'scale(1)', 'display' : 'grid'});
      //   $('.hideph').show();

      // });
  
      }

     



      jQuery(".phoneVal").on("keypress", function (evt) {
        var charCode = (evt.which) ? evt.which : evt.keyCode
        if (charCode > 31 && (charCode < 48 || charCode > 57))
            return false;
        return true;
    });
    jQuery(".phoneVal").on("keyup", function (event) {
        var mobval=parseInt(jQuery(".phoneVal").val().substr(0,2));
        var mobvalfirstdigit=parseInt(jQuery(".phoneVal").val().substr(0,1));
        if (mobval<60 && mobvalfirstdigit!=6 && mobvalfirstdigit!=7 && mobvalfirstdigit!=8 && mobvalfirstdigit!=9) {
            jQuery(".phoneVal").val("");
            return false;
        }
    });


      });

        if(winWD > 992){
          var get_custom_margin = winWD - $(".container").width();
          $(".amenity-wrapper").css("margin-left", (get_custom_margin / 2));
      }

      $(document).on("click",".open-form, .frmclose",function() {
        if ($(".form-container").is(':visible')) {
            $(".form-container").slideUp();
        } else {
            $(".form-container").slideToggle();
        }
    });
    $(document).on("click","#download-brochure",function() {
          $('#light').show();
          $('#fade').show();
          download_brochure = 1;
          // console.log(download_brochure);
    });
    $(window).scroll(function(){
      // console.log("before lazy2");
      $(".lazy").each(function(){
        if($(this).attr("data-src")){
          (this.tagName == "IMG" || this.tagName == "IFRAME") ? $(this).attr("src", $(this).data("src")) : $(this).css("background-image", "url("+$(this).data("src")+")");
          $(this).removeAttr("data-src");
        }
      });
      var windscroll = $(window).scrollTop();
      if (windscroll >= 50) {
        $("header").addClass("active");
      }
      else{
        $("header").removeClass("active");
      }
    });

    
