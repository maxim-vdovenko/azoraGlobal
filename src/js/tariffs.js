const tariffs = {}

tariffs.init = () => {
  
  $('body').on('click', '.tariffs__countries li', e => {
    const th = $(e.currentTarget)
    const ind = th.index()

    th.parent().find('li').removeClass('active')
    th.addClass('active')

    $('.tariffs__cont-box').removeClass('active')
    $('.tariffs__cont-box').eq(ind).addClass('active')
  })
}
