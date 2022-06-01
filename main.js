window.addEventListener('scroll', onScroll)

onScroll()
function onScroll() {
  showNavOnScroll(),
  showBackToTopButtonOnScroll()

  activateMenuAtCurrentSection(home)
  // activateMenuAtCurrentSection(services)
}

function activeMenuAtCurrentSection(section) {
  //linha alvo
  const targetLine = scrollY + innerHeight / 2
  //verificar se a seção passou da linha
  // quais dasdos vou precisar?

  // o topo da seção
  const sectionTop = home.offsetTop

  // a altura da seção
  const sectionHeight = home.offsetHeight

  // o topo da seção chegou ou ultrapassou a linha alvo
  const sectionTopReachOrPassedTargetLine = targetLine >= sectionTop

  // informações dos dados e da lógica
  console.log(
    'O topo da seção chegou ou passou da linha?', sectionTopReachOrPassedTargetLine
  )

  //verificar se a base está abaico da linha alvo

  // quais dados vou precisar?

  //a seção termina onde?
  const sectionEndsAt = sectionTop + sectionHeight

  // o final da seção passou da linha alvo
  const sectionEndPassedTargetline = sectionEndsAt <= targetLine

  console.log('O fundo da seção passou da linha?', sectionEndPassedTargetline)

}

function showNavOnScroll() {
  if (scrollY > 0) {
    navigation.classList.add('scroll')
  } else {
    navigation.classList.remove('scroll')
  }
}

function showBackToTopButtonOnScroll() {
  if (scrollY > 500) {
    backToTopButton.classList.add('show')
  }else {
    backToTopButton.classList.remove('show')
  }
}

function openMenu() {
  document.body.classList.add('menu-expanded')
}

function closeMenu() {
  document.body.classList.remove('menu-expanded')
}

ScrollReveal({
  origin: 'top',
  distance: '30px',
  duration: 700,
}).reveal(`
  #home,
  #home img,
  #home .stats,
  #services,
  #services header,
  #services .card,
  #about,
  #about header,
  #about .content`)
