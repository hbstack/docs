(() => {
  const activeParent = (child: HTMLElement) => {
    const parent = child.parentElement?.closest('.hb-docs-nav-links-group') as HTMLElement
    if (parent == null) {
      return
    }

    parent.querySelector('.collapse')?.classList.add('show')
    const heading = parent.querySelector('.hb-docs-nav-heading') as HTMLElement
    heading.classList.add('active')
    heading.querySelector('.hb-docs-nav-item-toggle')?.setAttribute('aria-expanded', 'true')
    activeParent(parent)
  }

  const active = (link: HTMLElement) => {
    link.classList.add('active')
    activeParent(link)
  }

  const link = document.querySelector(`.hb-docs-nav-links a[href="${location.pathname}"]`) as HTMLElement
  if (link == null) {
    return
  }

  active(link)
  document.addEventListener('DOMContentLoaded', () => {
    const nav = document.querySelector('.hb-docs-nav')
    nav?.scrollTo(0, link.offsetTop / 2)

    document.querySelectorAll('.hb-docs-nav-links-group .collapse').forEach((el) => {
      el.addEventListener('hide.bs.collapse', event => {
        if (event.target !== el) {
          return
        }

        nav?.scrollTo(0, el.offsetTop / 2)
      }, false)
    })
  })
})()
