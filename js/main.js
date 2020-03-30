(function($) {
  "use strict";

  // TOP Menu Sticky
  $(window).on("scroll", function() {
    var scroll = $(window).scrollTop();
    if (scroll < 400) {
      $("#sticky-header").removeClass("sticky");
      $("#back-top").fadeIn(500);
    } else {
      $("#sticky-header").addClass("sticky");
      $("#back-top").fadeIn(500);
    }
  });

  // MD5 hash
  // var hexHash = SparkMD5.hash('Hi there');
  // https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50

  $(document).ready(function() {
    // mobile_menu
    var menu = $("ul#navigation");
    if (menu.length) {
      menu.slicknav({
        prependTo: ".mobile_menu",
        closedSymbol: "+",
        openedSymbol: "-"
      });
    }
    // blog-menu
    // $('ul#blog-menu').slicknav({
    //   prependTo: ".blog_menu"
    // });

    // review-active

    var slider = $(".slider_active");
    if (slider.length) {
      slider.owlCarousel({
        loop: true,
        margin: 0,
        items: 1,
        autoplay: true,
        navText: [
          '<i class="ti-angle-left"></i>',
          '<i class="ti-angle-right"></i>'
        ],
        nav: true,
        dots: false,
        autoplayHoverPause: true,
        autoplaySpeed: 800,
        responsive: {
          0: {
            items: 1,
            nav: false
          },
          767: {
            items: 1,
            nav: false
          },
          992: {
            items: 1,
            nav: false
          },
          1200: {
            items: 1,
            nav: false
          },
          1600: {
            items: 1,
            nav: true
          }
        }
      });
    }

    // review-active
    var testmonial = $(".testmonial_active");
    if (testmonial.length) {
      testmonial.owlCarousel({
        loop: true,
        margin: 0,
        autoplay: true,
        navText: [
          '<i class="ti-angle-left"></i>',
          '<i class="ti-angle-right"></i>'
        ],
        nav: true,
        dots: false,
        autoplayHoverPause: true,
        autoplaySpeed: 800,
        responsive: {
          0: {
            items: 1,
            dots: false,
            nav: false
          },
          767: {
            items: 1,
            dots: false,
            nav: false
          },
          992: {
            items: 1,
            nav: true
          },
          1200: {
            items: 1,
            nav: true
          },
          1500: {
            items: 1
          }
        }
      });
    }

    // review-active
    var candidate = $(".candidate_active");
    if (candidate.length) {
      candidate.owlCarousel({
        loop: true,
        margin: 30,
        autoplay: true,
        navText: [
          '<i class="ti-angle-left"></i>',
          '<i class="ti-angle-right"></i>'
        ],
        nav: true,
        dots: false,
        autoplayHoverPause: true,
        autoplaySpeed: 800,
        responsive: {
          0: {
            items: 1,
            dots: false,
            nav: false
          },
          767: {
            items: 3,
            dots: false,
            nav: false
          },
          992: {
            items: 4,
            nav: true
          },
          1200: {
            items: 4,
            nav: true
          },
          1500: {
            items: 4
          }
        }
      });
    }

    //for menu active class
    $(".portfolio-menu button").on("click", function(event) {
      $(this)
        .siblings(".active")
        .removeClass("active");
      $(this).addClass("active");
      event.preventDefault();
    });

    // blog-page

    //brand-active
    var brand = $(".brad_active");
    if (brand.length) {
      brand.owlCarousel({
        loop: true,
        autoplay: true,
        nav: false,
        dots: false,
        autoplayHoverPause: true,
        autoplaySpeed: 800,
        responsive: {
          0: {
            items: 2,
            nav: false
          },
          767: {
            items: 4
          },
          992: {
            items: 5
          }
        }
      });
    }

    // blog-dtails-page

    // Enable Nice Select
    if (document.getElementById("default-select")) {
      $("select").niceSelect();
    }

    //about-pro-active
    $(".details_active").owlCarousel({
      loop: true,
      margin: 0,
      items: 1,
      // autoplay:true,
      navText: [
        '<i class="ti-angle-left"></i>',
        '<i class="ti-angle-right"></i>'
      ],
      nav: true,
      dots: false,
      // autoplayHoverPause: true,
      // autoplaySpeed: 800,
      responsive: {
        0: {
          items: 1,
          nav: false
        },
        767: {
          items: 1,
          nav: false
        },
        992: {
          items: 1,
          nav: false
        },
        1200: {
          items: 1
        }
      }
    });
  });
  
})(jQuery);
