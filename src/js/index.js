document.addEventListener('DOMContentLoaded', () => {
  card.init()
  headerPopup.init()
  tariffs.init()
  select.init()
  parcel.init()
})


const screen = {
  xl: 1180,
  lg: 890,
  md: 768,
  sm: 640,
  xs: 500
}


const os = {
  class: 'ios'
}

os.init = () => {
  if (os.detect() === 'MacOS' || os.detect() === 'iOS') {
    $('body').addClass(os.class)
  }
}

os.detect = () => { 
  const platform = navigator.platform.toLowerCase(),
      iosPlatforms = ['iphone', 'ipad', 'ipod', 'ipod touch']

  if (platform.includes('mac')) return 'MacOS'
  if (iosPlatforms.includes(platform)) return 'iOS'
  if (platform.includes('win')) return 'Windows'
  if (/android/.test(navigator.userAgent.toLowerCase())) return 'Android'
  if (/linux/.test(platform)) return 'Linux'

  return 'unknown'
}


const select = {
  bl: '.select',
}

select.init = () => {
  if ($(select.bl).length) {
    $(select.bl + ' select').styler({
      selectSearch: false
    })
  }
}


const headerPopup = {
  bl: '.header__popup',
  title: '.header__popup-title',
  list: '.header__popup-list'
}

headerPopup.init = () => {
  if ($(headerPopup.bl).length) {

    $('body').on('click', e => {
      if($(e.target).closest(headerPopup.bl).length) return
      $(headerPopup.bl).removeClass('active')
    })

    $('body').on('click', headerPopup.title, () => {
      if ($(headerPopup.bl).hasClass('active')) {
        $(headerPopup.bl).removeClass('active')
      } else {
        $(headerPopup.bl).addClass('active')
      }
    })

    $('body').on('click', headerPopup.list + ' a', () => {
      $(headerPopup.bl).removeClass('active')
    })
  }
}


const card = {
  init: () => {
    new Inputmask('9{1,}', {
      placeholder: ' ',
      showMaskOnHover: false,
      showMaskOnFocus: false
    }).mask('.input-numbers')

    new Inputmask('99 999 99 99', {
      placeholder: ' ',
      showMaskOnHover: false,
      showMaskOnFocus: false
    }).mask('.input-phone')

    new Inputmask('9999 9999 9999 9999', {
        placeholder: ' ',
        showMaskOnHover: false,
        showMaskOnFocus: false
    }).mask('.input-card')
  
    new Inputmask('99 / 99', {
        placeholder: ' ',
        showMaskOnHover: false,
        showMaskOnFocus: false,
        alias: "datetime",
        inputFormat: "mm/yy",
        greedy: false
    }).mask('.input-date')
  
    new Inputmask('999', {
        placeholder: ' ',
        showMaskOnHover: false,
        showMaskOnFocus: false
    }).mask('.input-cvv');
  }
}
