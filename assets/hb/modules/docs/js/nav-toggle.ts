(() => {
  const toggle = document.querySelector('.hb-docs-nav-toggle')
  const docs = document.querySelector('.hb-docs')
  if (!toggle || !docs) {
    return
  }

  const className = 'sidebar-off'

  toggle.addEventListener('click', () => {
    if (docs.classList.contains(className)) {
      docs.classList.remove(className)
    } else {
      docs.classList.add(className)
    }
  })
})()
