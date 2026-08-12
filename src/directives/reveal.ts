import type { Directive, DirectiveBinding } from 'vue'

type RevealValue = { dir?: 'up' | 'down' | 'left' | 'right' | 'zoom'; delay?: number }

const transforms: Record<NonNullable<RevealValue['dir']>, string> = {
  up: 'translateY(30px)',
  down: 'translateY(-30px)',
  left: 'translateX(30px)',
  right: 'translateX(-30px)',
  zoom: 'scale(0.92)',
}

function mount(el: HTMLElement, binding: DirectiveBinding<RevealValue>) {
  const dir = binding.value?.dir ?? 'up'
  const delay = binding.value?.delay ?? 0

  el.classList.add('reveal')
  el.style.setProperty('--reveal-transform', transforms[dir])
  if (delay) el.style.transitionDelay = `${delay}ms`

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          el.classList.add('reveal-visible')
          observer.disconnect()
          if (el.style.transitionDelay) {
            window.setTimeout(() => {
              el.style.transitionDelay = ''
            }, 900)
          }
        }
      })
    },
    { threshold: 0.12, rootMargin: '0px 0px -40px 0px' },
  )

  observer.observe(el)
  ;(el as HTMLElement & { __revealObserver?: IntersectionObserver }).__revealObserver = observer
}

export const vReveal: Directive<HTMLElement, RevealValue> = {
  mounted: mount,
  unmounted(el) {
    ;(el as HTMLElement & { __revealObserver?: IntersectionObserver }).__revealObserver?.disconnect()
  },
}
