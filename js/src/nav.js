/* global $ */

function toggleMobilenav () {
  $('.primaryNav-menuIcon').on('click', function () {
    $('.primaryNav').toggleClass('primaryNav--open')
  })
}

module.exports = toggleMobilenav
