(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
"use strict";

require('./src/nav')();

require('./src/smoothScroll')();

require('./src/filterBlock')();

require('./src/loadMore')();

require('./src/modal')();

require('./src/skipLinkFocusFix')();

require('./src/navigation')();

},{"./src/filterBlock":2,"./src/loadMore":3,"./src/modal":4,"./src/nav":5,"./src/navigation":6,"./src/skipLinkFocusFix":7,"./src/smoothScroll":8}],2:[function(require,module,exports){
"use strict";

/* global $ */
function init() {
  toggleFilterBlock();
  toggleFilterItemNames();
  clearFilters();
}

function toggleFilterBlock() {
  $('.filterBlock').on('click', '.filterBlock-title', function () {
    $('.filterBlock').toggleClass('filterBlock--open');
  });
}

function toggleFilterItemNames() {
  $('.filterBlock-filterItem').on('click', function () {
    $('.filterBlock-filterItem').removeClass('filterBlock-filterItem--filtered');
    $(this).addClass('filterBlock-filterItem--filtered');
    $(this).closest('.filterBlock').find('.filterBlock-clearContainer').addClass('filterBlock-clearContainer--open');
  });
}

function clearFilters() {
  $('.filterBlock-clearAll').on('click', function () {
    $(this).closest('.filterBlock').find('.filterBlock-filterItem').removeClass('filterBlock-filterItem--filtered');
    $(this).closest('.filterBlock-clearContainer').removeClass('filterBlock-clearContainer--open');
  });
}

module.exports = init;

},{}],3:[function(require,module,exports){
"use strict";

/* global $ */
function init() {
  $('.loadMore').click(function (event) {
    event.preventDefault();
    var count = $('.loadMore-target').children().length;
    var search = $(this).data('search');
    var tag = $(this).data('tag');
    var ppp = $(this).data('ppp');
    $.ajax({
      type: 'POST',
      url: '/wp-admin/admin-ajax.php',
      data: {
        action: 'load_more',
        offset: count,
        type: $(this).data('type'),
        tag: tag,
        search: search,
        ppp: ppp
      },
      success: function success(posts) {
        $('.js-sandbox').html(posts);
        var results = $('.js-sandbox').children().length;

        if (results > ppp) {
          $('.js-sandbox').children().last().remove();
        }

        $('.loadMore-target').append($('.js-sandbox').html());

        if (results <= ppp) {
          $('.loadMore').hide();
        }
      }
    });
  });
}

module.exports = init;

},{}],4:[function(require,module,exports){
"use strict";

/* global $ */
function init() {
  $('.modal-trigger').click(function () {
    $(this).closest('.modal').addClass('modal--visible').removeClass('modal--clicked');
  });
  $('.modal-close').click(function () {
    $(this).closest('.modal').removeClass('modal--visible').addClass('modal--clicked');
  });
}

module.exports = init;

},{}],5:[function(require,module,exports){
"use strict";

/* global $ */
function toggleMobilenav() {
  $('.primaryNav-menuIcon').on('click', function () {
    $('.primaryNav').toggleClass('primaryNav--open');
  });
}

module.exports = toggleMobilenav;

},{}],6:[function(require,module,exports){
"use strict";

function init() {
  var hero = document.getElementsByClassName('hero')[0];
  var header = document.getElementsByTagName('header')[0];

  function isScrolledIntoView(el) {
    var elemTop = el.getBoundingClientRect().top;
    var elemBottom = el.getBoundingClientRect().bottom; // Partially visible elements return true:

    isVisible = elemTop < window.innerHeight && elemBottom >= 0;
    return isVisible;
  }

  var scrollEventHandler = function scrollEventHandler() {
    if (isScrolledIntoView(hero)) {
      header.classList.remove('header--bg');
    } else {
      header.classList.add('header--bg');
    }
  };

  window.onscroll = function () {
    scrollEventHandler();
  }; // Mobile Nav


  var navTrigger = document.getElementsByClassName('nav-trigger')[0];
  var nav = document.getElementsByTagName('nav')[0];

  function navToggle(e) {
    var closed = navTrigger.className.indexOf('close') > 0;

    if (closed) {
      console.log("it is closed");
      navTrigger.className = 'nav-trigger open';
      nav.className = 'out';
    } else {
      console.log("it is open");
      navTrigger.className = 'nav-trigger close';
      nav.className = 'in';
    }
  } // Event Listening


  navTrigger.addEventListener('click', navToggle);
}

module.exports = init;

},{}],7:[function(require,module,exports){
"use strict";

module.exports = function () {
  var isIe = /(trident|msie)/i.test(navigator.userAgent);

  if (isIe && document.getElementById && window.addEventListener) {
    window.addEventListener('hashchange', function () {
      var id = location.hash.substring(1),
          element;

      if (!/^[A-z0-9_-]+$/.test(id)) {
        return;
      }

      element = document.getElementById(id);

      if (element) {
        if (!/^(?:a|select|input|button|textarea)$/i.test(element.tagName)) {
          element.tabIndex = -1;
        }

        element.focus();
      }
    }, false);
  }
};

},{}],8:[function(require,module,exports){
"use strict";

/* global $ */
module.exports = function () {
  $('body').on('click', '.smoothScroll', function (e) {
    var headerHeight = $('.siteHeader:visible').height();
    e.preventDefault();
    $('html,body').animate({
      scrollTop: $(this.hash).offset().top - headerHeight
    }, 600);
  });
};

},{}]},{},[1]);

//# sourceMappingURL=app.js.map
