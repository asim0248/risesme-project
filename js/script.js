(function($) {
    
    "use strict";
    function preloaderLoad() {
        if($('.preloader').length){
            $('.preloader').delay(200).fadeOut(300);
        }
        $(".preloader_disabler").on('click', function() {
            $("#preloader").hide();
        });
    }

    /* ----- Navbar Scroll To Fixed ----- */
    function navbarScrollfixed() {
        $('.navbar-scrolltofixed').scrollToFixed();
        var summaries = $('.summary');
        summaries.each(function(i) {
            var summary = $(summaries[i]);
            var next = summaries[i + 1];
            summary.scrollToFixed({
                marginTop: $('.navbar-scrolltofixed').outerHeight(true) + 10,
                limit: function() {
                    var limit = 0;
                    if (next) {
                        limit = $(next).offset().top - $(this).outerHeight(true) - 10;
                    } else {
                        limit = $('.footer').offset().top - $(this).outerHeight(true) - 10;
                    }
                    return limit;
                },
                zIndex: 999
            });
        });
    }

    /** Main Menu Custom Script Start **/
    $(document).on('ready', function() {
        $("#respMenu").aceResponsiveMenu({
            resizeWidth: '768', // Set the same in Media query
            animationSpeed: 'fast', //slow, medium, fast
            accoridonExpAll: false //Expands all the accordion menu on click
        });
    });    

    function mobileNavToggle() {
        if ($('#main-nav-bar .navbar-nav .sub-menu').length) {
            var subMenu = $('#main-nav-bar .navbar-nav .sub-menu');
            subMenu.parent('li').children('a').append(function () {
                return '<button class="sub-nav-toggler"> <span class="sr-only">Toggle navigation</span> <span class="icon-bar"></span> <span class="icon-bar"></span> <span class="icon-bar"></span> </button>';
            });
            var subNavToggler = $('#main-nav-bar .navbar-nav .sub-nav-toggler');
            subNavToggler.on('click', function () {
                var Self = $(this);
                Self.parent().parent().children('.sub-menu').slideToggle();
                return false;
            });

        };
    }

    /* ----- This code for menu ----- */
    $(window).on('scroll', function() {
        if ($('.scroll-to-top').length) {
            var strickyScrollPos = 100;
            if ($(window).scrollTop() > strickyScrollPos) {
                $('.scroll-to-top').fadeIn(500);
            } else if ($(this).scrollTop() <= strickyScrollPos) {
                $('.scroll-to-top').fadeOut(500);
            }
        };
        if ($('.stricky').length) {
            var headerScrollPos = $('.header-navigation').next().offset().top;
            var stricky = $('.stricky');
            if ($(window).scrollTop() > headerScrollPos) {
                stricky.removeClass('slideIn animated');
                stricky.addClass('stricky-fixed slideInDown animated');
            } else if ($(this).scrollTop() <= headerScrollPos) {
                stricky.removeClass('stricky-fixed slideInDown animated');
                stricky.addClass('slideIn animated');
            }
        };
    });

    // custom sticky
// var $menu = $('.nav-innerpage-style');
// var scrollTrigger = 70; 

// $(window).on('scroll', function () {
//     var scrollTop = $(window).scrollTop();

//     if (scrollTop >= scrollTrigger) {
//         if (!$menu.hasClass('active')) {
//             $menu.addClass('active');
//         }
//     } else {
//         if ($menu.hasClass('active')) {
//             $menu.removeClass('active');
//         }
//     }
// });


var $menu = $('.nav-innerpage-style');

// Header ke baad wala first section pick karo
var $nextSection = $('section').filter(function () {
    return $(this).offset().top > $menu.offset().top;
}).first();

var menuOffsetTop = $menu.offset().top;

$(window).on('scroll', function () {
    var scrollTop = $(window).scrollTop();

    if (scrollTop >= menuOffsetTop) {

        if (!$menu.hasClass('active')) {
            // Header active
            $menu.addClass('active');

            // jerk-set add to next section
            $nextSection.addClass('jerk-set');
        }

    } else {

        if ($menu.hasClass('active')) {
            // Header active hatana
            $menu.removeClass('active');

            // jerk-set class remove
            $nextSection.removeClass('jerk-set');
        }
    }
});


    
    $(".mouse_scroll").on('click', function() {
        $('html, body').animate({
            scrollTop: $("#feature-property, #property-city").offset().top
        }, 1000);
    });
    /** Main Menu Custom Script End **/

    /* ----- Blog innerpage sidebar according ----- */
    $(document).on('ready', function() {
        $('.collapse').on('show.bs.collapse', function () {
            $(this).siblings('.card-header').addClass('active');
        });
        $('.collapse').on('hide.bs.collapse', function () {
            $(this).siblings('.card-header').removeClass('active');
        });
        
    });
    var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
    var tooltipList = tooltipTriggerList.map(function(tooltipTriggerEl) {
      return new bootstrap.Tooltip(tooltipTriggerEl)
    })

    /* ----- Menu Cart Button Dropdown ----- */
    $(document).on('ready', function() {
        // Loop through each nav item
        $('.cart_btn').children('ul.cart').children('li').each(function(indexCount){
            // loop through each dropdown, count children and apply a animation delay based on their index value
            $(this).children('ul.dropdown_content').children('li').each(function(index){
                // Turn the index value into a reasonable animation delay
                var delay = 0.1 + index*0.03;
                // Apply the animation delay
                $(this).css("animation-delay", delay + "s")
            });
        });
    });

    /* ----- Mobile Nav ----- */
    document.addEventListener('DOMContentLoaded', () => {
      new Mmenu("#menu", {
        navbar: {
        title: "Menu"
      },
      searchfield: {
        add: false,
        addTo: "#contacts"
      },
      offCanvas: {
        position: "left-front"
      }},
      {});        
    });

    /* ----- Custom Search Dropdown Script Start ----- */
    var showSuggestions = function() {
      $( ".advance-search-field form.form-search .box-search" ).each(function() {
        $( "form.form-search .box-search input" ).on('focus', (function() {
          $(this).closest('.boxed').children('.overlay').css({
            opacity: '1',
            display: 'block'
          });
          $(this).parent('.box-search').children('.search-suggestions').css({
            opacity: '1',
            visibility: 'visible',
            top: '70px'
          });
        }));
        $( "form.form-search .box-search input" ).on('blur', (function() {
          $(this).closest('.boxed').children('.overlay').css({
            opacity: '0',
            display: 'block'
          });
          $(this).parent('.box-search').children('.search-suggestions').css({
            opacity: '0',
            visibility: 'hidden',
            top: '100px'
          });
        }));
      });
    };
    $(function() {
      showSuggestions();
    });
    /* ----- Custom Search Dropdown Script End ----- */
    

    /* ----- Price Range Slider Desktop Style ----- */
    $(document).on('ready', function() {
        $(".slider-range").slider({
            range: true,
            min: 0,
            max: 100000,
            values: [ 20, 70987 ],
            slide: function( event, ui ) {
                $( ".amount"  ).val( ui.values[ 0 ] );
                $( ".amount2"  ).val( ui.values[ 1 ] );
            }
        });
        $(".amount").change(function() {
            $(".slider-range").slider('values',0,$(this).val());
        });
        $(".amount2").change(function() {
            $(".slider-range").slider('values',1,$(this).val());
        });
    });


    /* ----- MagnificPopup ----- */
    if (($(".popup-img").length > 0) || ($(".popup-iframe").length > 0) || ($(".popup-img-single").length > 0)) {
        $(".popup-img").magnificPopup({
            type:"image",
            gallery: {
                enabled: true,
            }
        });
        $(".popup-img-single").magnificPopup({
            type:"image",
            gallery: {
                enabled: false,
            }
        });
        $('.popup-iframe').magnificPopup({
            disableOn: 700,
            type: 'iframe',
            preloader: false,
            fixedContentPos: false
        });
        $('.popup-youtube, .popup-vimeo, .popup-gmaps').magnificPopup({
            disableOn: 700,
            type: 'iframe',
            mainClass: 'mfp-fade',
            removalDelay: 160,
            preloader: false,
            fixedContentPos: false
        });
    };

    /*** ====  Right Side Hidden Sidebar Start ==== ***/
    //Side Content Toggle
    if($('.filter-btn-right').length){
      //Show Form
      $('.filter-btn-right').on('click', function(e) {
        e.preventDefault();
        $('body').addClass('signin-hidden-sidebar-content');
      });
      //Hide Form
      $('.sidebar-close-icon,.hiddenbar-body-ovelay').on('click', function(e) {
        e.preventDefault();
        $('body').removeClass('signin-hidden-sidebar-content');
      });
    }
    if($('.filter-btn-left').length){
      //Show Form
      $('.filter-btn-left').on('click', function(e) {
        e.preventDefault();
        $('body').addClass('menu-hidden-sidebar-content');
      });
      //Hide Form
      $('.sidebar-close-icon,.hiddenbar-body-ovelay').on('click', function(e) {
        e.preventDefault();
        $('body').removeClass('menu-hidden-sidebar-content');
      });
    }
    /*** ====  Right Side Hidden Sidebar END ==== ***/

    /*** ====  Perspective Hover Animation Code Start ==== ***/
    var perspectiveHover = function() {
      var $animate_content               = $('.animate_content'),
          $animate_thumb          = $('.animate_thumb'),
          xAngle              = 0,
          yAngle              = 0,
          zValue              = 0,
          xSensitivity        = 15,
          ySensitivity        = 25,
          restAnimSpeed       = 300,
          perspective         = 500;

      $animate_content.on('mousemove', function(element) {
          var $item = $(this),
              // Get cursor coordinates
              XRel = element.pageX - $item.offset().left,
              YRel = element.pageY - $item.offset().top,
              width = $item.width();

          // Build angle val from container width and cursor value
          xAngle = (0.5 - (YRel / width)) * xSensitivity;
          yAngle = -(0.5 - (XRel / width)) * ySensitivity;

          // Container isn't manipulated, only child elements within
          updateElement($item.children($animate_thumb));
      }); 
      // Move element around
      function updateElement(modifyLayer) {
          modifyLayer.css({
              'transform': 'perspective('+ perspective + 'px) translateZ(' + zValue + 'px) rotateX(' + xAngle + 'deg) rotateY(' + yAngle + 'deg)',
              'transition': 'none'
          });
      }
      // Reset element to default state
      $animate_content.on('mouseleave', function() {
          modifyLayer = $(this).children($animate_thumb);
          modifyLayer.css({
              'transform': 'perspective(' + perspective + 'px) translateZ(0) rotateX(0) rotateY(0)',
              'transition': 'transform ' + restAnimSpeed + 'ms linear'
          });
      });
    };
    perspectiveHover();
    /*** ====  Perspective Hover Animation Code End ==== ***/

    // Custom Shop item add Option increase decrease home 3
    $(function() {
      (function quantityProducts() {
        var $quantityArrowMinus = $(".quantity-arrow-minus");
        var $quantityArrowPlus = $(".quantity-arrow-plus");
        var $quantityNum = $(".quantity-num");
        $quantityArrowMinus.click(quantityMinus);
        $quantityArrowPlus.click(quantityPlus);
        function quantityMinus() {
          if ($quantityNum.val() > 1) {
            $quantityNum.val(+$quantityNum.val() - 1);
          }
        }
        function quantityPlus() {
          $quantityNum.val(+$quantityNum.val() + 1);
        }
      })();
    });
    $(function() {
      (function quantityProducts() {
        var $quantityArrowMinus = $(".quantity-arrow-minus2");
        var $quantityArrowPlus = $(".quantity-arrow-plus2");
        var $quantityNum = $(".quantity-num2");
        $quantityArrowMinus.click(quantityMinus);
        $quantityArrowPlus.click(quantityPlus);
        function quantityMinus() {
          if ($quantityNum.val() > 1) {
            $quantityNum.val(+$quantityNum.val() - 1);
          }
        }
        function quantityPlus() {
          $quantityNum.val(+$quantityNum.val() + 1);
        }
      })();
    });
    $(function() {
      (function quantityProducts() {
        var $quantityArrowMinus = $(".quantity-arrow-minus3");
        var $quantityArrowPlus = $(".quantity-arrow-plus3");
        var $quantityNum = $(".quantity-num3");
        $quantityArrowMinus.click(quantityMinus);
        $quantityArrowPlus.click(quantityPlus);
        function quantityMinus() {
          if ($quantityNum.val() > 1) {
            $quantityNum.val(+$quantityNum.val() - 1);
          }
        }
        function quantityPlus() {
          $quantityNum.val(+$quantityNum.val() + 1);
        }
      })();
    });

    /* ----- Scroll To top ----- */
    function scrollToTop() {
        var btn = $('.scrollToHome');
        $(window).on('scroll', function () {
            if ($(window).scrollTop() > 300) {
                btn.addClass('show');
            } else {
                btn.removeClass('show');
            }
        });
        btn.on('click', function (e) {
            e.preventDefault();
            $('html, body').animate({
                scrollTop: 0
            }, '300');
        });
    }
    
    /* ----- Mega Dropdown Content ----- */
    $(document).on('ready', function(){
        $(".drop_btn").on('click',function(){
            $(".drop_content").toggle();
        });
        $(".drop_btn2").on('click',function(){
            $(".drop_content2").toggle();
        });
        $(".drop_btn3").on('click',function(){
            $(".drop_content3").toggle();
        }); 
        $(".drop_btn4").on('click',function(){
            $(".drop_content4").toggle();
        });        
    });

    /*----------- Addclass Remove Class for Home 2 Accordion ----------*/
    (function( $ ) {
      $(".accordion-style1 .accordion-item, .accordion-style1.style2 .accordion-item, .accordion-style2 .accordion-item").on("click",function() {
        $(this).toggleClass( "active", 1000)
      });
    })(jQuery);


/* ======
   When document is ready, do
   ====== */
    $(document).on('ready', function() {
        // add your functions
        navbarScrollfixed();
        scrollToTop();
        mobileNavToggle();
    });
    
/* ======
   When document is loading, do
   ====== */
    // window on Load function
    $(window).on('load', function() {
        // add your functions
        preloaderLoad();
    });
    // window on Scroll function
    $(window).on('scroll', function() {
        // add your functions
    });


})(window.jQuery);


// custom script
document.addEventListener('DOMContentLoaded', function () {
  const radioInputs = document.querySelectorAll('.radio-input');
  const selectedValueElement = document.getElementById('selected-value');

  // Stop if elements are missing
  if (!radioInputs.length || !selectedValueElement) return;

  function updateSelection() {
    let selectedOption = 'None';

    radioInputs.forEach(input => {
      if (input.checked) {
        const labelText = document.querySelector(`label[for="${input.id}"] .radio-text`);
        if (labelText) selectedOption = labelText.textContent;
      }
    });

    selectedValueElement.textContent = selectedOption;

    document.querySelectorAll('.radio-label').forEach(label => {
      label.style.transform = 'translateY(0)';
    });

    const checkedLabel = document.querySelector('.radio-input:checked + .radio-label');
    if (checkedLabel) {
      checkedLabel.style.transform = 'translateY(-5px)';
    }
  }

  radioInputs.forEach(input => {
    input.addEventListener('change', updateSelection);

    input.addEventListener('click', function () {
      const label = document.querySelector(`label[for="${this.id}"]`);
      if (!label) return;

      label.style.transform = 'translateY(-2px)';

      setTimeout(() => {
        if (this.checked) {
          label.style.transform = 'translateY(-5px)';
        } else {
          label.style.transform = 'translateY(0)';
        }
      }, 150);
    });
  });

  document.addEventListener('keydown', function (event) {
    const currentIndex = Array.from(radioInputs).findIndex(input => input.checked);
    let nextIndex;

    if (event.key === 'ArrowRight' || event.key === 'ArrowDown') {
      event.preventDefault();
      nextIndex = currentIndex < radioInputs.length - 1 ? currentIndex + 1 : 0;
    } else if (event.key === 'ArrowLeft' || event.key === 'ArrowUp') {
      event.preventDefault();
      nextIndex = currentIndex > 0 ? currentIndex - 1 : radioInputs.length - 1;
    }

    if (nextIndex !== undefined) {
      radioInputs[nextIndex].checked = true;
      updateSelection();
      radioInputs[nextIndex].focus();
    }
  });

  updateSelection();
});


function togglePassword() {
  const password = document.getElementById("passwordField");
  const icon = document.querySelector(".toggle-eye i");

  if (password.type === "password") {
    password.type = "text";
    icon.classList.remove("fa-eye");
    icon.classList.add("fa-eye-slash");
  } else {
    password.type = "password";
    icon.classList.remove("fa-eye-slash");
    icon.classList.add("fa-eye");
  }
}
function confirmtogglePassword() {
  const confirmpassword = document.getElementById("confirmpasswordField");
  const confirmeyeicon = document.querySelector(".confirm-toggle-eye i");

  if (confirmpassword.type === "password") {
    confirmpassword.type = "text";
    confirmeyeicon.classList.remove("fa-eye");
    confirmeyeicon.classList.add("fa-eye-slash");
  } else {
    confirmpassword.type = "password";
    confirmeyeicon.classList.remove("fa-eye-slash");
    confirmeyeicon.classList.add("fa-eye");
  }
}

document.addEventListener('DOMContentLoaded', function () {
  const radioInputs = document.querySelectorAll('.radio-input');
  const selectedValueElement = document.getElementById('selected-value');

  // Function to update the displayed selection
  function updateSelection() {
    let selectedOption = 'None';

    radioInputs.forEach(input => {
      if (input.checked) {
        selectedOption = document.querySelector(`label[for="${input.id}"] .radio-text`).textContent;
      }
    });

    selectedValueElement.textContent = selectedOption;

    // Add visual feedback for selection
    document.querySelectorAll('.radio-label').forEach(label => {
      label.style.transform = 'translateY(0)';
    });

    const checkedLabel = document.querySelector('.radio-input:checked + .radio-label');
    if (checkedLabel) {
      checkedLabel.style.transform = 'translateY(-5px)';
    }
  }

  // Add event listeners to all radio inputs
  radioInputs.forEach(input => {
    input.addEventListener('change', updateSelection);

    // Add click feedback
    input.addEventListener('click', function () {
      // Add a subtle animation on click
      const label = document.querySelector(`label[for="${this.id}"]`);
      label.style.transform = 'translateY(-2px)';

      setTimeout(() => {
        if (this.checked) {
          label.style.transform = 'translateY(-5px)';
        } else {
          label.style.transform = 'translateY(0)';
        }
      }, 150);
    });
  });

  // Add keyboard navigation support
  document.addEventListener('keydown', function (event) {
    const currentIndex = Array.from(radioInputs).findIndex(input => input.checked);
    let nextIndex;

    if (event.key === 'ArrowRight' || event.key === 'ArrowDown') {
      event.preventDefault();
      nextIndex = currentIndex < radioInputs.length - 1 ? currentIndex + 1 : 0;
    } else if (event.key === 'ArrowLeft' || event.key === 'ArrowUp') {
      event.preventDefault();
      nextIndex = currentIndex > 0 ? currentIndex - 1 : radioInputs.length - 1;
    }

    if (nextIndex !== undefined) {
      radioInputs[nextIndex].checked = true;
      updateSelection();
      radioInputs[nextIndex].focus();
    }
  });

  // Initialize with no selection
  updateSelection();
});
