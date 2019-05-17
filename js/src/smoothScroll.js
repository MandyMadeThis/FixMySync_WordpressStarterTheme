/* global $ */

module.exports = function () {
  $('body').on('click', '.smoothScroll', function (e) {
    var headerHeight = $('.siteHeader:visible').height()
    e.preventDefault()
    $('html,body').animate({
      scrollTop: $(this.hash).offset().top - headerHeight
    }, 600)
  })
}

