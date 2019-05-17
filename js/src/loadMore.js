/* global $ */

function init () {
  $('.loadMore').click(function (event) {
    event.preventDefault()
    var count = $('.loadMore-target').children().length
    var search = $(this).data('search')
    var tag = $(this).data('tag')
    var ppp = $(this).data('ppp')

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
      success: function (posts) {
        $('.js-sandbox').html(posts)
        var results = $('.js-sandbox').children().length
        if (results > ppp) {
          $('.js-sandbox').children().last().remove()
        }
        $('.loadMore-target').append($('.js-sandbox').html())
        if (results <= ppp) {
          $('.loadMore').hide()
        }
      }
    })
  })
}

module.exports = init
