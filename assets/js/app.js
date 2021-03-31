document.addEventListener('DOMContentLoaded', () => {
  let toggler = document.querySelector('.navbar__toggler'),
    mobileNavbar = document.querySelector('.navbar__mobile'),
    layer = document.querySelector('.layer__navbar')
  toggler.addEventListener('click', (e) => {
    e.preventDefault()

    if (mobileNavbar.classList.contains('show')) {
      mobileNavbar.classList.remove('show')
      layer.classList.add('active')
    } else {
      mobileNavbar.classList.add('show')
      layer.classList.add('active')
    }

    document.body.classList.add('body__')
  })

  toggler.addEventListener('blur', (e) => {
    e.preventDefault()

    if (mobileNavbar.classList.contains('show')) {
      mobileNavbar.classList.remove('show')
      layer.classList.remove('active')
    } else {
      mobileNavbar.classList.add('show')
      layer.classList.add('active')
    }
    document.body.classList.remove('body__')
  })
})
