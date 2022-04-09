const parcel = {
  howSend: {
    box: '.parcel__side-box',
    menu: '.parcel__sendMenu',
    points: '.parcel__points',
    courier: '.parcel__courier'
  },
  table: {
    inputBox: '.parcel__table-input',
    inputNumbers: '.parcel__table-input-value.input-numbers',
    buttonTop: '.parcel__table-input-top',
    buttonBottom: '.parcel__table-input-bottom'
  }
}

parcel.init = () => {
  parcel.howSendFn()
  parcel.tableFn()
}

parcel.howSendFn = () => {
  const menuButton = parcel.howSend.menu + ' li'
  const box = parcel.howSend.box
  const points = parcel.howSend.points
  const courier = parcel.howSend.courier
 
  $('body').on('click', menuButton, e => {
    const th = $(e.currentTarget)
    const ind = th.index()

    th.parent().find('li').removeClass('active')
    th.addClass('active')

    if (ind) {
      th.parents(box).find(points).removeClass('active')
      th.parents(box).find(courier).addClass('active')
    } else {
      th.parents(box).find(points).addClass('active')
      th.parents(box).find(courier).removeClass('active')
    }
  })
}

parcel.tableFn = () => {
  const box = parcel.table.inputBox
  const numbers = parcel.table.inputNumbers
  const top = parcel.table.buttonTop
  const bottom = parcel.table.buttonBottom

  $('body').on('click', top, e => {
    const th = $(e.currentTarget)
    const val = Number(th.parents(box).find(numbers).val())
    th.parents(box).find(numbers).val(val + 1)
  })

  $('body').on('click', bottom, e => {
    const th = $(e.currentTarget)
    const val = Number(th.parents(box).find(numbers).val())

    if (val > 1) {
      th.parents(box).find(numbers).val(val - 1)
    } else {
      th.parents(box).find(numbers).val('')
    }
  })
}
