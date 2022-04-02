const parcel = {
  box: '.parcel__side-box',
  sendMenu: '.parcel__sendMenu',
  points: '.parcel__points',
  courier: '.parcel__courier'
}

parcel.init = () => {
  $('body').on('click', parcel.sendMenu + ' li', e => {
    const th = $(e.currentTarget)
    const ind = th.index()

    th.parent().find('li').removeClass('active')
    th.addClass('active')

    if (ind) {
      th.parents(parcel.box).find(parcel.points).removeClass('active')
      th.parents(parcel.box).find(parcel.courier).addClass('active')
    } else {
      th.parents(parcel.box).find(parcel.points).addClass('active')
      th.parents(parcel.box).find(parcel.courier).removeClass('active')
    }
  })
}
