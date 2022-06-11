const modal = {
  bl: '.modal',
  block: '.modal__block',
  cont: '.modal__cont',
  close: '.modal__close',
  button: '.modal-button',
  time: {
    open: 250,
    close: 250
  }
}

modal.init = () => {

  if ($(modal.bl + '.open').length) {
    $(modal.bl + '.open').fadeIn(0)
    $('<div class="modalFon active"></div>').appendTo('body')
  }
  
  $('body').on('click', modal.button, e => {
    modal.openFn($(e.currentTarget))
  })

  $('body').on('click', modal.close, () => {
    modal.closeFn()
  })

  $('body').on('click', e => {
    if ($(e.target).closest(modal.bl).length && !$(e.target).closest(modal.cont).length) {
      modal.closeFn()
    }
  })
}

modal.openFn = e => {
  const id = e.attr('data-id')
  $('#' + id).addClass('open').fadeIn(modal.time.open)

  $('<div class="modalFon"></div>').appendTo('body')

  setTimeout(() => {
    $('.modalFon').addClass('active')
  }, 1)
}

modal.closeFn = () => {
  $('.modalFon').removeClass('active')
  $(modal.bl + '.open').removeClass('open').fadeOut(modal.time.close, () => {
    $('.modalFon').remove()
  })
}
