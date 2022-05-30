const $jlvLogo = document.querySelector('.nav-bar-logo img')
const $h2 = document.querySelector('h2')

const $navBar = document.querySelector('.nav-bar')
const $navBarLinks = document.querySelectorAll('.nav-bar-links a')
const $navBarIcons = document.querySelectorAll('.nav-bar-links a img')
const $designBasedOn = document.querySelector('.nav-bar-based-on')

let $after = document.querySelectorAll('.after-text')

const $moonBtn = document.querySelector('.dark-theme-btn')
const $moon = document.querySelector('.dark-mode-icons')
const $socialIcons = document.querySelectorAll('.social a img')

document.addEventListener('click', (e) => {
  const isDark = $moon.getAttribute('src') === 'assets/dark_mode/dark.png'

  const changeLights =
    e.target.className === 'dark-theme-btn' ||
    e.target.className === 'dark-mode-icons'

  if (changeLights) {
    $jlvLogo.classList.toggle('invert')
    document.body.classList.toggle('light-dark')
    $h2.classList.toggle('h2-dark-light')

    $navBar.classList.toggle('nav-bar-dark-light')
    $navBarLinks.forEach((el) => el.classList.toggle('after-color::after'))
    $navBarIcons.forEach((el) => el.classList.toggle('invert'))
    $socialIcons.forEach((el) => el.classList.toggle('invert'))
    $moonBtn.classList.toggle('light-dark')
    $designBasedOn.classList.toggle('text-dark-mode')

    if (isDark) {
      $moon.setAttribute('src', 'assets/dark_mode/light.png')
    } else {
      $moon.setAttribute('src', 'assets/dark_mode/dark.png')
    }
  }

  $after.forEach((el) => {
  console.log(el.classList.toggle('after-text-dark-mode'))
  })
})
