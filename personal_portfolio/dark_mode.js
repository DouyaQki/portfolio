if (localStorage.getItem('theme') === null) {
  localStorage.setItem('theme', 'light')
}

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

//* about and projects section
const $greenBox = document.querySelector('.green-box')
const $aboutMeText = document.querySelector('.about-me-text')

const $card = document.querySelectorAll('.card')

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

  if (localStorage.getItem('theme') === 'light' && $greenBox !== null) {
    $greenBox.classList.add('green-box-dark')
  }

  if ($card !== null && localStorage.getItem('theme') === 'dark') {
    $card.forEach((el) => el.classList.add('card-dark-mode'))
  }

  if (localStorage.getItem('theme') === 'light' && $aboutMeText !== null) {
    $aboutMeText.style.color = '#fafafa'
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

  if (localStorage.getItem('theme') === 'dark' && $greenBox !== null) {
    $greenBox.classList.remove('green-box-dark')
  }

  if ($card !== null && localStorage.getItem('theme') === 'light') {
    $card.forEach((el) => el.classList.remove('card-dark-mode'))
  }

  if (localStorage.getItem('theme') === 'dark' && $aboutMeText !== null) {
    $aboutMeText.style.color = '#808080'
  }

  localStorage.setItem('theme', 'light')
}

if ($greenBox !== null && localStorage.getItem('theme') === 'dark') {
  $greenBox.classList.add('green-box-dark')
}

if (localStorage.getItem('theme') === 'dark') {
  if (localStorage.getItem('theme') === 'dark' && $aboutMeText !== null) {
    $aboutMeText.style.color = '#fafafa'
  }

  darkMode()
} else {

  if (localStorage.getItem('theme') === 'light' && $aboutMeText !== null) {
    $aboutMeText.style.color = '#808080'
  }

  lightMode()
}

document.addEventListener('click', (e) => {
  const changeLights =
    e.target.className === 'dark-theme-btn' ||
    e.target.className === 'dark-mode-icons'

  if (changeLights && localStorage.getItem('theme') === 'light') {
    if ($card !== null) {
      $card.forEach((el) => el.classList.add('card-dark-mode'))
    }

    darkMode()
  } else if (changeLights && localStorage.getItem('theme') === 'dark') {
    if ($card !== null) {
      $card.forEach((el) => el.classList.remove('card-dark-mode'))
    }

    lightMode()
  }
})
