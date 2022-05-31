if (localStorage.getItem('theme') === null)
  localStorage.setItem('theme', 'light')

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

//* DARK-MODE

function darkMode() {
  const isDark = $moon.getAttribute('src') === 'assets/dark_mode/dark.png'

  $jlvLogo.classList.add('invert')
  document.body.classList.add('light-dark')
  $h2.classList.add('h2-dark-light')

  $navBar.classList.add('nav-bar-dark-light')
  $navBarLinks.forEach((el) => el.classList.add('after-color::after'))
  $navBarIcons.forEach((el) => el.classList.add('invert'))
  $socialIcons.forEach((el) => el.classList.add('invert'))
  $designBasedOn.classList.add('text-dark-mode')

  $after.forEach((el) => {
    el.classList.add('after-text-dark-mode')
  })

  $moonBtn.classList.remove('light-dark') //* it changes the background-color

  if (isDark) {
    $moon.setAttribute('src', 'assets/dark_mode/light.png')
  }

  localStorage.setItem('theme', 'dark')
}

function lightMode() {
  const isLight = $moon.getAttribute('src') === 'assets/dark_mode/light.png'

  $jlvLogo.classList.remove('invert')
  document.body.classList.remove('light-dark')
  $h2.classList.remove('h2-dark-light')

  $navBar.classList.remove('nav-bar-dark-light')
  $navBarLinks.forEach((el) => el.classList.remove('after-color::after'))
  $navBarIcons.forEach((el) => el.classList.remove('invert'))
  $socialIcons.forEach((el) => el.classList.remove('invert'))
  $designBasedOn.classList.remove('text-dark-mode')

  $after.forEach((el) => {
    el.classList.remove('after-text-dark-mode')
  })

  $moonBtn.classList.add('light-dark') //* it changes the background-color

  if (isLight) {
    $moon.setAttribute('src', 'assets/dark_mode/dark.png')
  }

  localStorage.setItem('theme', 'light')
}

if (localStorage.getItem('theme') === 'dark') {
  darkMode()
} else {
  lightMode()
}

document.addEventListener('click', (e) => {
  const changeLights =
    e.target.className === 'dark-theme-btn' ||
    e.target.className === 'dark-mode-icons'

  if (changeLights && localStorage.getItem('theme') === 'light') {
    darkMode()
  } else if (changeLights && localStorage.getItem('theme') === 'dark') {
    lightMode()
  }
})
