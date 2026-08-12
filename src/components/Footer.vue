<script setup lang="ts">
import { onMounted, onBeforeUnmount, ref } from 'vue'
import Icon from './Icon.vue'
import { personal } from '../data/portfolio'

const showTop = ref(false)
let onScroll = () => {}

onMounted(() => {
  onScroll = () => {
    showTop.value = window.scrollY > 600
  }
  window.addEventListener('scroll', onScroll, { passive: true })
})
onBeforeUnmount(() => window.removeEventListener('scroll', onScroll))

function scrollTop() {
  window.scrollTo({ top: 0, behavior: 'smooth' })
}
</script>

<template>
  <footer class="border-t border-line bg-panel py-8">
    <div class="mx-auto flex max-w-6xl flex-col items-center gap-5 px-5 md:flex-row md:justify-between md:px-6">
      <p class="font-mono text-xs text-muted-2">
        <span class="text-muted-2">mauricio@portafolio</span><span class="text-ink">:</span><span class="text-accent-strong">~</span><span class="text-muted-2">$</span>
        <span class="text-ink">exit</span>
      </p>

      <p class="text-center font-mono text-[11px] text-muted-2">
        © {{ new Date().getFullYear() }} {{ personal.name }} · compilado con Vue 3 + Tailwind CSS
      </p>

      <div class="flex items-center gap-2">
        <a
          v-for="social in [
            { href: personal.github, icon: 'github', label: 'GitHub' },
            { href: personal.linkedin, icon: 'linkedin', label: 'LinkedIn' },
            { href: personal.phoneHref, icon: 'whatsapp', label: 'WhatsApp' },
          ]"
          :key="social.label"
          :href="social.href"
          target="_blank"
          rel="noopener"
          :aria-label="social.label"
          class="grid h-8 w-8 place-items-center rounded-sm border border-line bg-bg text-muted transition-colors hover:bg-panel-hover hover:text-ink"
        >
          <Icon :name="social.icon" class="h-3.5 w-3.5" />
        </a>
      </div>
    </div>
  </footer>

  <!-- Botón volver arriba -->
  <Transition
    enter-active-class="transition duration-200 ease-out"
    enter-from-class="opacity-0 translate-y-2"
    leave-active-class="transition duration-150 ease-in"
    leave-to-class="opacity-0 translate-y-2"
  >
    <button
      v-if="showTop"
      type="button"
      aria-label="Volver arriba"
      class="fixed bottom-6 right-6 z-50 grid h-11 w-11 place-items-center rounded-sm border border-strong bg-strong font-mono text-bg shadow-lg transition-transform hover:scale-110"
      @click="scrollTop"
    >
      <Icon name="arrow-up" class="h-5 w-5" />
    </button>
  </Transition>
</template>
