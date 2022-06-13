const modal = {
  bl: '.modal',
  block: '.modal__block',
  cont: '.modal__cont',
  close: '.modal-close',
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
    modal.openFn(e)
  })

  $('body').on('click', modal.close, e => {
    modal.closeFn(e)
  })

  $('body').on('click', e => {
    if ($(e.target).closest(modal.bl).length && !$(e.target).closest(modal.cont).length) {
      modal.closeFn(e)
    }
  })

  $('body').on('click', '.modal__address-close', e => {
    const block = $(e.currentTarget).parents('.modal__address')
    block.fadeOut(250, () => {
      block.remove()
    })
  })
}

modal.openFn = e => {
  const id = $(e.currentTarget).attr('data-id')

  $(modal.bl + '.open').removeClass('open').fadeOut(modal.time.close)
  $('#' + id).addClass('open').fadeIn(modal.time.open)

  if (!$('.modalFon').length) {
    $('<div class="modalFon"></div>').appendTo('body')
    setTimeout(() => {
      $('.modalFon').addClass('active')
    }, 1)
  }
}

modal.closeFn = e => {
  const th = $(e.currentTarget)
  $('.modalFon').removeClass('active')

  if (th.parents(modal.bl).length) {
    
    th.parents(modal.bl).removeClass('open').fadeOut(modal.time.close, () => {
      if (!$(modal.bl + '.open').length) {
        $('.modalFon').remove()
      }
    })
  } else {
    
    $(modal.bl + '.open').removeClass('open').fadeOut(modal.time.close, () => {
      $('.modalFon').remove()
    })
  }
}
