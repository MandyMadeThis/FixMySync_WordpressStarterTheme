/* global $ */

function init () {
  $('.modal-trigger').click(function () {
    $(this).closest('.modal').addClass('modal--visible').removeClass('modal--clicked')
  })

  $('.modal-close').click(function () {
    $(this).closest('.modal').removeClass('modal--visible').addClass('modal--clicked')
  })
}

module.exports = init
