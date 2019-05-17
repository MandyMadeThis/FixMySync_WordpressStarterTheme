/* global $ */

function init () {
  toggleFilterBlock()
  toggleFilterItemNames()
  clearFilters()
}

function toggleFilterBlock () {
  $('.filterBlock').on('click', '.filterBlock-title', function () {
    $('.filterBlock').toggleClass('filterBlock--open')
  })
}

function toggleFilterItemNames () {
  $('.filterBlock-filterItem').on('click', function () {
    $('.filterBlock-filterItem').removeClass('filterBlock-filterItem--filtered')
    $(this).addClass('filterBlock-filterItem--filtered')
    $(this).closest('.filterBlock').find('.filterBlock-clearContainer').addClass('filterBlock-clearContainer--open')  
  })
}

function clearFilters () {
  $('.filterBlock-clearAll').on('click', function () {
      $(this).closest('.filterBlock').find('.filterBlock-filterItem').removeClass('filterBlock-filterItem--filtered')
      $(this).closest('.filterBlock-clearContainer').removeClass('filterBlock-clearContainer--open')
  })
}

module.exports = init
