(function($) {
  "use strict"; // Start of use strict

  var easyzoom_api = null;

  // Revolusion slider error function    
  function revslider_showDoubleJqueryError(sliderID) {
    var errorMessage = "Revolution Slider Error: You have some jquery.js library include that comes after the revolution files js include.";
    errorMessage += "<br> This includes make eliminates the revolution slider libraries, and make it not work.";
    errorMessage += "<br><br> To fix it you can:<br>&nbsp;&nbsp;&nbsp; 1. In the Slider Settings -> Troubleshooting set option:  <strong><b>Put JS Includes To Body</b></strong> option to true.";
    errorMessage += "<br>&nbsp;&nbsp;&nbsp; 2. Find the double jquery.js include and remove it.";
    errorMessage = "<span style='font-size:16px;color:#BC0C06;'>" + errorMessage + "</span>";
    jQuery(sliderID).show().html(errorMessage);
  }

  /* ---------------------------------------------
   Woocommerce Quantily
   --------------------------------------------- */
  function linda_woo_quantily() {
    // Product quantity plug
    $('body').on('click', '.quantity .quantity-plus', function() {
      var obj_qty = $(this).closest('.quantity').find('input.qty'),
        val_qty = parseInt(obj_qty.val(), 0),
        min_qty = parseInt(obj_qty.data('min'), 0),
        max_qty = parseInt(obj_qty.data('max'), 0),
        step_qty = parseInt(obj_qty.data('step'), 0);
      val_qty = val_qty + step_qty;
      if (max_qty && val_qty > max_qty) {
        val_qty = max_qty;
      }
      obj_qty.val(val_qty);
      obj_qty.trigger("change");
      return false;
    });

    // Product quantity minus
    $('body').on('click', '.quantity .quantity-minus', function() {
      var obj_qty = $(this).closest('.quantity').find('input.qty'),
        val_qty = parseInt(obj_qty.val(), 0),
        min_qty = parseInt(obj_qty.data('min'), 0),
        max_qty = parseInt(obj_qty.data('max'), 0),
        step_qty = parseInt(obj_qty.data('step'), 0);
      val_qty = val_qty - step_qty;
      if (min_qty && val_qty < min_qty) {
        val_qty = min_qty;
      }
      if (!min_qty && val_qty < 0) {
        val_qty = 0;
      }
      obj_qty.val(val_qty);
      obj_qty.trigger("change");
      return false;
    });
  }

  /* ---------------------------------------------
   MENU REPONSIIVE
   --------------------------------------------- */
  function linda_init_menu_reposive() {
    var kt_is_mobile = (Modernizr.touch) ? true : false;
    if (kt_is_mobile === true) {

      $(document).on('click', '.linda-nav .menu-item-has-children > a', function(e) {

        var licurrent = $(this).closest('li');
        var liItem = $('.linda-nav .menu-item-has-children');

        // Check menu has sub menu
        if (!licurrent.hasClass('show-submenu')) {

          liItem.removeClass('show-submenu');
          licurrent.parents().each(function() {

            if ($(this).hasClass('menu-item-has-children')) {
              $(this).addClass('show-submenu');
            }

            if ($(this).hasClass('main-menu')) {
              return false;
            }
          })

          // Show sub menu
          licurrent.addClass('show-submenu');

          // Close all child submenu if parent submenu is closed
          if (!licurrent.hasClass('show-submenu')) {
            licurrent.find('li').removeClass('show-submenu');
          }

          return false;
          e.preventDefault();
        } else {
          // Toggle sub menu
          var href = $this.attr('href');
          if ($.trim(href) == '' || $.trim(href) == '#') {
            licurrent.toggleClass('show-submenu');
          } else {
            window.location = href;
          }
        }
        e.stopPropagation();
      });

      // On click show sub menu
      $(document).on('click', function(e) {
        var target = $(e.target);
        if (!target.closest('.show-submenu').length || !target.closest('.linda-nav').length) {
          $('.show-submenu').removeClass('show-submenu');
        }
      });
      // On Desktop
    } else {
      // Mouse hover open menu
      $(document).on('mousemove', '.linda-nav .menu-item-has-children', function() {
        $(this).addClass('show-submenu');
        if ($(this).closest('.linda-nav').hasClass('main-menu')) {
          $('body').addClass('is-show-menu');
        }
      })

      // Mouse out close menu
      $(document).on('mouseout', '.linda-nav .menu-item-has-children', function() {
        $(this).removeClass('show-submenu');
        $('body').removeClass('is-show-menu');
      })
    }
  }

  // Check reolution for menu
  function linda_clone_main_menu() {
    if ($('#header .clone-main-menu').length > 0 && $('#box-mobile-menu').length > 0) {
      $("#header .clone-main-menu").clone().appendTo("#box-mobile-menu .box-inner");
      $('#box-mobile-menu').find('.clone-main-menu').removeAttr('id');
    }
  }

  /* ---------------------------------------------
  Resize mega menu
  --------------------------------------------- */
  function linda_resizeMegamenu() {
    var window_size = jQuery('body').innerWidth();
    window_size += linda_get_scrollbar_width();

    // Check window size
    if (window_size > 767) {
      if ($('#header .main-menu-wapper').length > 0) {
        var container = $('#header .main-menu-wapper');
        if (container != 'undefined') {
          var container_width = 0;
          container_width = container.innerWidth();
          var container_offset = container.offset();
          setTimeout(function() {
            $('.main-menu .item-megamenu').each(function(index, element) {

              // Set css of mega menu
              $(element).children('.megamenu').css({
                'max-width': container_width + 'px'
              });
              $(element).children('.megamenu').css({
                'width': container_width + 'px'
              });

              // KENTPRO
              var sub_menu_width = $(element).children('.megamenu').outerWidth();
              var item_width = $(element).outerWidth();
              $(element).children('.megamenu').css({
                'left': '-' + (sub_menu_width / 2 - item_width / 2) + 'px'
              });
              if ($('#header').hasClass('style6')) {

                var container_left = $('#header .logo').offset().left;
                console.log(container_offset.left);
              } else {
                var container_left = container_offset.left;
              }

              // Calculate device width
              var container_right = (container_left + container_width);
              var item_left = $(element).offset().left;
              var overflow_left = (sub_menu_width / 2 > (item_left - container_left));
              var overflow_right = ((sub_menu_width / 2 + item_left) > container_right);
              if (overflow_left) {
                var left = (item_left - container_left);
                $(element).children('.megamenu').css({
                  'left': -left + 'px'
                });
              }

              if (overflow_right && !overflow_left) {
                var left = (item_left - container_left);
                left = left - (container_width - sub_menu_width);
                $(element).children('.megamenu').css({
                  'left': -left + 'px'
                });
              }
            })
          }, 100);
        }
      }
    }
  }

  // Set scrollbar width
  function linda_get_scrollbar_width() {
    var $inner = jQuery('<div style="width: 100%; height:200px;">test</div>'),
      $outer = jQuery('<div style="width:200px;height:150px; position: absolute; top: 0; left: 0; visibility: hidden; overflow:hidden;"></div>').append($inner),
      inner = $inner[0],
      outer = $outer[0];
    jQuery('body').append(outer);
    var width1 = inner.offsetWidth;
    $outer.css('overflow', 'scroll');
    var width2 = outer.clientWidth;
    $outer.remove();
    return (width1 - width2);
  }

  // Set sticky menu when scroll screen
  function linda_sticky_menu() {
    var window_size = jQuery('body').innerWidth();
    window_size += linda_get_scrollbar_width();
    if (window_size > 991) {
      if ($('.header-sticky').length > 0) {
        $('.header-sticky').sticky({
          topSpacing: 0
        });
      }
    } else {
      if ($('.header-sticky').length > 0) {
        $('.header-sticky').unstick();
      }
    }
  }

  /**==============================
  Auto width Vertical menu
  ===============================**/
  function linda_auto_width_vertical_menu() {
    var full_width = parseInt($('.vertical-wapper').innerWidth(), 0);
    var menu_width = parseInt($('.verticalmenu-content').actual('width'), 0);
    var w = (full_width - menu_width);
    $('.verticalmenu-content').find('.megamenu').each(function() {
      $(this).css('max-width', w + 'px');
    });
  }

  /* ---------------------------------------------
  Init popup
  --------------------------------------------- */
  function init_popup() {
    // Check mobile width  
    if (linda_fontend_global_script.linda_enable_popup_newsletter_mobile == 'no') {
      if ($(window).width() + linda_get_scrollbar_width() < 768) {
        return false;
      }
    }

    // Disabled popup by user
    var disabled_popup_by_user = getCookie('linda_disabled_popup_by_user');
    if (disabled_popup_by_user == 'true') {} else {
      if ($('body').hasClass('home') && linda_fontend_global_script.linda_enable_popup_newsletter && linda_fontend_global_script.linda_enable_popup_newsletter == 'yes') {
        setTimeout(function() {
          $('#popup-newsletter').modal({
            keyboard: false
          })
        }, linda_fontend_global_script.linda_popup_delay_time);
      }
    }
  }

  // Set cookie
  function setCookie(cname, cvalue, exdays) {
    var d = new Date();
    d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
    var expires = "expires=" + d.toUTCString();
    document.cookie = cname + "=" + cvalue + "; " + expires;
  }

  // Get cookie
  function getCookie(cname) {
    var name = cname + "=";
    var ca = document.cookie.split(';');
    for (var i = 0; i < ca.length; i++) {
      var c = ca[i];
      while (c.charAt(0) == ' ') {
        c = c.substring(1);
      }
      if (c.indexOf(name) == 0) {
        return c.substring(name.length, c.length);
      }
    }
    return "";
  }

  //EQUAL ELEM
  function better_equal_elems() {
    setTimeout(function() {
      $('.equal-container').each(function() {
        var $this = $(this);
        if ($this.find('.equal-elem').length) {
          $this.find('.equal-elem').css({
            'height': 'auto'
          });

          // Set equal elem
          var elem_height = 0;
          $this.find('.equal-elem').each(function() {
            var this_elem_h = $(this).height();
            if (elem_height < this_elem_h) {
              elem_height = this_elem_h;
            }
          });
          $this.find('.equal-elem').height(elem_height);
        }
      });
    }, 3000);
  }

  /* ---------------------------------------------
   TAB EFFECT
   --------------------------------------------- */
  function linda_tab_fade_effect() {
    // Effect click
    $(document).on('click', '.linda-tabs .tabs-link a', function() {

      var tab_id = $(this).attr('href');
      var tab_animated = $(this).data('animate');

      tab_animated = (tab_animated == undefined || tab_animated == "") ? '' : tab_animated;
      if (tab_animated == "") {
        return false;
      }

      // Find tab is active
      $(tab_id).find('.product-list-grid  .product-item, .owl-item.active ').each(function(i) {
        var t = $(this);
        var style = $(this).attr("style");
        style = (style == undefined) ? '' : style;
        var delay = i * 400;

        // Set style 
        t.attr("style", style +
          ";-webkit-animation-delay:" + delay + "ms;" + "-moz-animation-delay:" + delay + "ms;" + "-o-animation-delay:" + delay + "ms;" + "animation-delay:" + delay + "ms;"
        ).addClass(tab_animated + ' animated').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function() {
          t.removeClass(tab_animated + ' animated');
          t.attr("style", style);
        });
      })
    })
  }

  // Carousel init
  function linda_innit_carousel() {
    $(".owl-carousel").each(function(index, el) {
      var config = $(this).data();
      config.navText = ['<span class="flaticon-arrows-4"></span>', '<span class="flaticon-arrows-3"></span>'];
      config.smartSpeed = "800";

      // Set rtk
      if ($('body').hasClass('rtl')) {
        config.rtl = true;
      }

      var owl = $(this);
      owl.owlCarousel(config);
    });
  }

  /* ---------------------------------------------
  Scripts initialization
  --------------------------------------------- */
  $(window).load(function() {
    linda_innit_carousel();
    linda_clone_main_menu();
  });

  /* ---------------------------------------------
  Scripts resize
  --------------------------------------------- */
  $(window).on("resize", function() {
    linda_init_menu_reposive();
    linda_resizeMegamenu();
    linda_sticky_menu();
  });

  /* ---------------------------------------------
  Scripts scroll
  --------------------------------------------- */
  $(window).scroll(function() {
    // Show hide scrolltop button
    if ($(window).scrollTop() < 170 || $(window).scrollTop() == 0) {
      $('.scroll_top').fadeOut(500);
    } else {
      $('.scroll_top').fadeIn(500);
    }
    //Resize Background div in feature products Section
    if ($('.section-featured-products').length) {
      var section_height = $('.section-featured-products').innerHeight();
      $('.section-featured-products .backgrounded').css('height', section_height - 73);
    }
  });

  /* ---------------------------------------------
   Scripts ready
   --------------------------------------------- */
  $(document).ready(function() {
    // Call functions
    linda_sticky_menu();
    linda_init_menu_reposive();
    linda_resizeMegamenu();
    linda_woo_quantily();
    linda_tab_fade_effect();

    //Prevent scrolling top
    $('a[href="#"]').on('click', function($e) {
      $e.preventDefault();
    });
    //Prevent scrolling top

    /*Open search form */
    $(document).on('click', '.search-icon', function() {
      $(this).toggleClass('open');
      $(this).closest('.header').find('.block-search').toggleClass('open');
      return false;
    })

    /*Open search form */
    $(document).on('click', '.search-icon-mobile', function() {
      $(this).toggleClass('open');
      $(this).closest('.header').find('.block-search').toggleClass('open');
      return false;
    })

    // View grid list product
    $(document).on('click', '.display-mode', function() {
      var mode = $(this).data('mode');
      var current_url = window.location.href;
      current_url = current_url.replace("#", "");
      var data = {
        action: 'fronted_set_products_view_style',
        security: linda_ajax_fontend.security,
        mode: mode
      };
      $.post(linda_ajax_fontend.ajaxurl, data, function(response) {
        window.location.replace(current_url);
      })
      return false;
    });

    /*Close widget */
    $(document).on('click', '.widgettitle .arow', function() {
      $(this).closest('.widget').toggleClass('widget-close');
    })

    // Category product
    $(document).on('click', '.widget_product_categories li .arow', function() {
      var paerent = $(this).closest('li');
      var t = $(this);
      paerent.toggleClass('open');
      if (paerent.children('ul').length > 0) {
        $(this).closest('li').children('ul').slideToggle();
        return false;
      }
    });
    // Slider ranger
    if ($('#slider-range').length > 0) {
      $("#slider-range").slider({
        range: true,
        min: 0,
        max: 500,
        values: [75, 300],
        slide: function(event, ui) {
          $("#slider_range_value_left").html("$" + ui.values[0]);
          $("#slider_range_value_right").html("$" + ui.values[1]);
        }
      });
      // Set slider value
      $("#slider_range_value_left").html("$" + $("#slider-range").slider("values", 0));
      $("#slider_range_value_right").html("$" + $("#slider-range").slider("values", 1));
    }

    // Image zoom      
    if ($('.easyzoom').length > 0) {
      var $easyzoom = $('.easyzoom').easyZoom();
      // Setup thumbnails example
      easyzoom_api = $easyzoom.filter('.easyzoom--with-thumbnails').data('easyZoom');
      $('.thumbnails').on('click', 'a', function(e) {
        $(this).closest('.thumbnails').find('a').each(function() {
          $(this).removeClass('active');
        })
        $(this).addClass('active');
        $(".linda-easyzoom").find('.zoom img').attr({
          'srcset': ''
        });
        var $this = $(this);
        e.preventDefault();
        // Use EasyZoom's `swap` method
        easyzoom_api.swap($this.data('standard'), $this.attr('href'));
      });
      // Find Attributes
      var default_zoom = $(".linda-easyzoom").find('.zoom').attr('href');
      var default_image = $(".linda-easyzoom").find('.zoom img').attr('src');
      $(document).on('found_variation', 'form.variations_form', function(event, variation) {
        var new_zoom = variation.image_link ? variation.image_link : default_zoom;
        var new_image = variation.image_src ? variation.image_src : default_zoom;
        easyzoom_api.swap(new_image, new_zoom);
      }).on('reset_image', function(event) {
        easyzoom_api.swap(default_image, default_zoom);
      });
    }

    // BOX MOBILE MENU
    $(document).on('click', '.mobile-navigation', function() {
      $('#box-mobile-menu').addClass('open');
      return false;
    });

    // Close box menu
    $(document).on('click', '#box-mobile-menu .close-menu', function() {
      $('#box-mobile-menu').removeClass('open');
      return false;
    });

    // Scroll top
    $(document).on('click', '.scroll_top', function() {
      $('body,html').animate({
        scrollTop: 0
      }, 700);
      return false;
    });

    // Tabs & accordition
    $(document).on('click', '.collapsible-tab li', function() {
      var paerent = $(this).closest('li');
      var t = $(this);
      paerent.toggleClass('open');
      if (paerent.children('.content').length > 0) {
        $(this).closest('li').children('.content').slideToggle();
        return false;
      }
    });

    if ($('.shop-page').length > 0) {
      $("#img_01").elevateZoom({
        gallery: 'gal1',
        cursor: 'pointer',
        galleryActiveClass: 'active',
        imageCrossfade: true
      });

      //pass the images to Magnific Popup
      $("#img_01").on("click", function(e) {
        var $this = $(this);
        var items = [];
        $('#gal1').find('a').each(function() {
          var src = $(this).attr('data-zoom-image');
          items.push({
            src: src
          });
        });
        $this.magnificPopup({
          items: items,
          gallery: {
            enabled: true, // set to true to enable gallery
            preload: [0, 2],
            navigateByImgClick: true,
            arrowMarkup: '<button title="%title%" type="button" class="mfp-arrow mfp-arrow-%dir%"></button>', // markup of an arrow button
            tPrev: 'Previous (Left arrow key)', // title for left button
            tNext: 'Next (Right arrow key)', // title for right button
            tCounter: '<span class="mfp-counter">%curr% of %total%</span>' // markup of counter
          },
          image: {
            markup: '<div class="mfp-figure">' +
              '<div class="mfp-close"></div>' +
              '<div class="mfp-img"></div>' +
              '<div class="mfp-bottom-bar">' +
              '<div class="mfp-title"></div>' +
              '<div class="mfp-counter"></div>' +
              '</div>' +
              '</div>', // Popup HTML markup. `.mfp-img` div will be replaced with img tag, `.mfp-close` by close button
            cursor: 'mfp-zoom-out-cur', // Class that adds zoom cursor, will be added to body. Set to null to disable zoom out cursor.
            verticalFit: true, // Fits image in area vertically
            tError: '<a href="%url%">The image</a> could not be loaded.' // Error message
          },
          type: 'image' // this is default type
        });
      });
    }

    // Check cross sells
    if ($('.cross-sells').length > 0) {
      populateCountries("country", "state");
    }

    // Edit country and state
    if ($('.edit_address_div').length > 0) {
      populateCountries("addr_country", "addr_state");
    }

    // Edit address
    $('.edit_address_btn').on('click', function() {
      $('.edit_address_div').fadeToggle();
    })

    var setREVStartSize = function() {
      try {
        var e = new Object,
          i = jQuery(window).width(),
          t = 9999,
          r = 0,
          n = 0,
          l = 0,
          f = 0,
          s = 0,
          h = 0;
        e.c = jQuery('#rev_slider_1_1');
        e.gridwidth = [1170];
        e.gridheight = [700];

        e.sliderLayout = "fullwidth";
        if (e.responsiveLevels && (jQuery.each(e.responsiveLevels, function(e, f) {
            f > i && (t = r = f, l = e), i > f && f > r && (r = f, n = e)
          }), t > r && (l = n)), f = e.gridheight[l] || e.gridheight[0] || e.gridheight, s = e.gridwidth[l] || e.gridwidth[0] || e.gridwidth, h = i / s, h = h > 1 ? 1 : h, f = Math.round(h * f), "fullscreen" == e.sliderLayout) {
          var u = (e.c.width(), jQuery(window).height());
          if (void 0 != e.fullScreenOffsetContainer) {
            var c = e.fullScreenOffsetContainer.split(",");
            if (c) jQuery.each(c, function(e, i) {
              u = jQuery(i).length > 0 ? u - jQuery(i).outerHeight(!0) : u
            }), e.fullScreenOffset.split("%").length > 1 && void 0 != e.fullScreenOffset && e.fullScreenOffset.length > 0 ? u -= jQuery(window).height() * parseInt(e.fullScreenOffset, 0) / 100 : void 0 != e.fullScreenOffset && e.fullScreenOffset.length > 0 && (u -= parseInt(e.fullScreenOffset, 0))
          }
          f = u
        } else void 0 != e.minHeight && f < e.minHeight && (f = e.minHeight);
        e.c.closest(".rev_slider_wrapper").css({
          height: f
        })

      } catch (d) {
        console.log("Failure at Presize of Slider:" + d)
      }
    };

    setREVStartSize();

    var tpj = jQuery;

    // Configure revolution slider
    var revapi1;
    if (tpj("#rev_slider_1_1").revolution == undefined) {
      revslider_showDoubleJqueryError("#rev_slider_1_1");
    } else {
      revapi1 = tpj("#rev_slider_1_1").show().revolution({
        sliderType: "standard",
        sliderLayout: "fullwidth",
        dottedOverlay: "none",
        delay: 6000,
        navigation: {
          keyboardNavigation: "off",
          keyboard_direction: "horizontal",
          mouseScrollNavigation: "off",
          mouseScrollReverse: "default",
          onHoverStop: "on",
          arrows: {
            style: "custom",
            enable: true,
            hide_onmobile: false,
            hide_onleave: true,
            hide_delay: 200,
            hide_delay_mobile: 1200,
            tmp: '',
            left: {
              h_align: "left",
              v_align: "center",
              h_offset: 80,
              v_offset: 0
            },
            right: {
              h_align: "right",
              v_align: "center",
              h_offset: 80,
              v_offset: 0
            }
          },
          bullets: {
            enable: true,
            hide_onmobile: false,
            style: "custom",
            hide_onleave: false,
            direction: "horizontal",
            h_align: "left",
            v_align: "bottom",
            h_offset: 390,
            v_offset: 70,
            space: 14,
            tmp: ''
          },
          touch: {
            touchenabled: 'on',
            swipe_threshold: 75,
            swipe_min_touches: 1,
            swipe_direction: 'horizontal',
            drag_block_vertical: true

          }
        },
        visibilityLevels: [1240, 1024, 778, 480],
        gridwidth: 1170,
        gridheight: 700,
        lazyType: "none",
        shadow: 0,
        spinner: "spinner0",
        stopLoop: "off",
        stopAfterLoops: -1,
        stopAtSlide: -1,
        shuffle: "off",
        autoHeight: "off",
        hideThumbsOnMobile: "off",
        hideSliderAtLimit: 0,
        hideCaptionAtLimit: 0,
        hideAllCaptionAtLilmit: 0,
        debugMode: false,
        fallbacks: {
          simplifyAll: "off",
          nextSlideOnWindowFocus: "on",
          disableFocusListener: true,
        }
      });
    }
  });

  // Reinit some important things after ajax
  $(document).ajaxComplete(function(event, xhr, settings) {});

})(jQuery); // End of use strict