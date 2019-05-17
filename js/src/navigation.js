function init () {
  var hero = document.getElementsByClassName('hero')[0];
  var header = document.getElementsByTagName('header')[0];

  function isScrolledIntoView(el) {
    var elemTop = el.getBoundingClientRect().top;
    var elemBottom = el.getBoundingClientRect().bottom;

    // Partially visible elements return true:
    isVisible = elemTop < window.innerHeight && elemBottom >= 0;
    return isVisible;
  }

  var scrollEventHandler = function() {
      if (isScrolledIntoView(hero)) {
        header.classList.remove('header--bg');
      } else {
        header.classList.add('header--bg');
      }
  }

  window.onscroll = function() {
    scrollEventHandler()
  };


  // Mobile Nav
  var navTrigger = document.getElementsByClassName('nav-trigger')[0];
  var nav = document.getElementsByTagName('nav')[0];

  function navToggle(e) {
    var closed = (navTrigger.className.indexOf('close') > 0); 
    if(closed) {
      console.log("it is closed")
      navTrigger.className = 'nav-trigger open';
      nav.className = 'out';
    } else {
      console.log("it is open")
      navTrigger.className = 'nav-trigger close';
      nav.className = 'in';
    }
  }

  // Event Listening
  navTrigger.addEventListener('click', navToggle);
}

module.exports = init
