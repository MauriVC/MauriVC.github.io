<script setup lang="ts">
import { onBeforeUnmount, onMounted, ref } from 'vue'
import Icon from './Icon.vue'
import { personal } from '../data/portfolio'

const links = [
  { id: 'hero', label: 'inicio' },
  { id: 'sobre-mi', label: 'sobre-mi' },
  { id: 'experiencia', label: 'experiencia' },
  { id: 'proyectos', label: 'proyectos' },
  { id: 'habilidades', label: 'stack' },
  { id: 'educacion', label: 'educacion' },
  { id: 'contacto', label: 'contacto' },
]

const isDark = ref(false)
const menuOpen = ref(false)
const active = ref('hero')
const scrolled = ref(false)
let observer: IntersectionObserver | null = null
let cleanup: () => void = () => {}

onMounted(() => {
  isDark.value = document.documentElement.classList.contains('dark')

  observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) active.value = entry.target.id
      })
    },
    { rootMargin: '-45% 0px -50% 0px' },
  )
  links.forEach((link) => {
    const el = document.getElementById(link.id)
    if (el) observer?.observe(el)
  })

  const onScroll = () => {
    scrolled.value = window.scrollY > 12
  }
  window.addEventListener('scroll', onScroll, { passive: true })
  onScroll()
  cleanup = () => window.removeEventListener('scroll', onScroll)
})

function toggleTheme() {
  isDark.value = !isDark.value
  document.documentElement.classList.toggle('dark', isDark.value)
  try {
    localStorage.setItem('mv-theme', isDark.value ? 'dark' : 'light')
  } catch {
    /* sin acceso a localStorage */
  }
}

function goTo(id: string) {
  menuOpen.value = false
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
}

onBeforeUnmount(() => {
  observer?.disconnect()
  cleanup()
})
</script>

<template>
  <header
    class="fixed inset-x-0 top-0 z-50 border-b border-line bg-bg/90 backdrop-blur-md"
    :class="scrolled ? 'shadow-lg shadow-black/5' : ''"
  >
    <!-- Status line -->
    <div class="hidden border-b border-line-weak bg-panel sm:block">
      <div class="mx-auto flex h-8 max-w-6xl items-center justify-between px-4 font-mono text-[11px] text-muted-2 md:px-6">
        <div class="flex items-center gap-1.5">
          <span class="text-muted-2">mauricio</span>
          <span>@</span>
          <span class="text-muted-2">portafolio</span>
          <span>:</span>
          <span class="text-ink">~</span>
          <span class="text-muted-2">$</span>
        </div>
        <div class="flex items-center gap-4">
          <span class="hidden md:inline">TTY1 · 80×24</span>
          <span class="inline-flex items-center gap-1.5">
            <span class="h-1.5 w-1.5 rounded-full bg-strong" />
            ONLINE
          </span>
        </div>
      </div>
    </div>

    <!-- Barra de navegación -->
    <nav class="mx-auto flex h-14 max-w-6xl items-center justify-between gap-3 px-4 md:px-6">
      <a href="#hero" class="flex items-center gap-2 font-mono text-sm font-semibold text-ink" @click="goTo('hero')">
        <span class="text-muted-2">cd</span>
        <span class="hl px-1.5">~/{{ personal.shortName.split(' ')[0].toLowerCase() }}</span>
      </a>

      <div class="hidden items-center gap-0.5 lg:flex">
        <a
          v-for="link in links"
          :key="link.id"
          :href="`#${link.id}`"
          class="px-2 py-1.5 font-mono text-sm text-muted transition-colors hover:text-ink"
          :class="active === link.id ? 'hl text-sm' : ''"
          @click="goTo(link.id)"
        >
          ./{{ link.label }}
        </a>
      </div>

      <div class="flex items-center gap-2">
        <button
          type="button"
          :aria-label="isDark ? 'Activar modo claro' : 'Activar modo oscuro'"
          class="flex items-center gap-1.5 rounded border border-line bg-panel px-2.5 py-1.5 font-mono text-xs text-muted transition-colors hover:text-ink"
          @click="toggleTheme"
        >
          <Icon :name="isDark ? 'sun' : 'moon'" class="h-3.5 w-3.5" />
          <span class="hidden sm:inline">{{ isDark ? 'claro' : 'oscuro' }}</span>
        </button>

        <a
          href="#contacto"
          class="hidden items-center gap-1.5 rounded border border-line bg-panel px-3 py-1.5 font-mono text-xs text-ink transition-colors hover:bg-panel-hover md:flex"
          @click="goTo('contacto')"
        >
          $ ./contactar
        </a>

        <button
          type="button"
          aria-label="Abrir menú"
          class="grid h-8 w-8 place-items-center rounded border border-line bg-panel text-ink lg:hidden"
          @click="menuOpen = !menuOpen"
        >
          <Icon :name="menuOpen ? 'close' : 'menu'" class="h-4 w-4" />
        </button>
      </div>
    </nav>

    <!-- Menú móvil -->
    <Transition
      enter-active-class="transition duration-200 ease-out"
      enter-from-class="opacity-0 -translate-y-1"
      leave-active-class="transition duration-150 ease-in"
      leave-to-class="opacity-0 -translate-y-1"
    >
      <div v-if="menuOpen" class="border-t border-line bg-bg/95 backdrop-blur-md lg:hidden">
        <div class="mx-auto max-w-6xl space-y-1 px-4 py-3">
          <a
            v-for="link in links"
            :key="link.id"
            :href="`#${link.id}`"
            class="flex items-center gap-2 rounded px-3 py-2 font-mono text-sm text-muted"
            :class="active === link.id ? 'hl text-ink' : 'hover:bg-panel'"
            @click="goTo(link.id)"
          >
            <span class="text-muted-2">$</span> ./{{ link.label }}
          </a>
        </div>
      </div>
    </Transition>
  </header>
</template>
