<script setup lang="ts">
import Icon from './Icon.vue'
import TypingEffect from './TypingEffect.vue'
import { personal } from '../data/portfolio'
</script>

<template>
  <section id="hero" class="relative overflow-hidden pb-16 pt-28">
    <!-- Fondo terminal -->
    <div class="pointer-events-none absolute inset-0 -z-10">
      <div class="absolute inset-0 opacity-[0.04] [background-image:linear-gradient(var(--ink)_1px,transparent_1px),linear-gradient(90deg,var(--ink)_1px,transparent_1px)] [background-size:44px_44px]" />
      <div class="absolute inset-0 [mask-image:radial-gradient(ellipse_at_center,black_30%,transparent_75%)]" />
    </div>

    <div class="mx-auto grid w-full max-w-6xl grid-cols-1 items-center gap-12 px-5 md:px-6 lg:grid-cols-2">
      <!-- Texto -->
      <div class="lg:order-1">
        <div v-reveal="{ dir: 'up' }" class="inline-flex items-center gap-2 border border-line bg-panel px-3 py-1.5 font-mono text-xs text-muted">
          <span class="h-2 w-2 rounded-full bg-ok animate-pulse-dot" />
          <span class="text-muted-2">$</span> status: <span class="text-ink">disponible</span> <span class="text-muted-2">·</span> <span class="text-ink">full stack</span>
        </div>

        <p v-reveal="{ dir: 'up', delay: 60 }" class="mt-6 font-mono text-sm text-muted-2">
          <span class="text-muted-2">~/mauricio</span> $ whoami
        </p>

        <h1 v-reveal="{ dir: 'up', delay: 100 }" class="mt-2 font-mono text-3xl font-bold leading-[1.12] tracking-tight text-ink sm:text-4xl lg:text-[2.75rem]">
          {{ personal.firstName }}<br />
          <span class="hl px-2">{{ personal.lastName }}</span>
        </h1>

        <p v-reveal="{ dir: 'up', delay: 160 }" class="mt-6 font-mono text-base text-muted sm:text-lg">
          <span class="text-muted-2">$</span> echo <span class="text-ok">"</span>Soy <TypingEffect :words="personal.roles" /><span class="text-ok">"</span>
        </p>

        <p v-reveal="{ dir: 'up', delay: 240 }" class="mt-5 max-w-lg font-sans text-base leading-relaxed text-muted md:text-lg">
          {{ personal.tagline }}
        </p>

        <div v-reveal="{ dir: 'up', delay: 320 }" class="mt-8 flex flex-wrap items-center gap-3">
          <a
            href="#proyectos"
            class="group inline-flex items-center gap-2 border border-strong bg-strong px-5 py-2.5 font-mono text-sm text-bg transition-colors hover:opacity-90"
          >
            <span class="text-muted-2">$</span> ls ./proyectos
            <Icon name="arrow-right" class="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
          </a>
          <a
            :href="personal.cvUrl"
            :download="personal.cvFileName"
            class="inline-flex items-center gap-2 border border-line bg-panel px-5 py-2.5 font-mono text-sm text-ink transition-colors hover:bg-panel-hover"
          >
            <Icon name="download" class="h-4 w-4 text-muted-2" />
            curl -O CV.pdf
          </a>
          <a
            href="#contacto"
            class="inline-flex items-center gap-2 px-3 py-2.5 font-mono text-sm text-muted transition-colors hover:text-ink"
          >
            <span class="text-muted-2">$</span> mail --to mauricio
          </a>
        </div>

        <!-- Stats -->
        <div v-reveal="{ dir: 'up', delay: 400 }" class="mt-12 grid max-w-lg grid-cols-3 gap-4 border-t border-line pt-6">
          <div class="font-mono">
            <p class="text-xl font-bold text-ink md:text-2xl">EMI</p>
            <p class="mt-1 text-xs text-muted-2">Ing. de Sistemas</p>
          </div>
          <div class="font-mono">
            <p class="text-xl font-bold text-ink md:text-2xl">2+</p>
            <p class="mt-1 text-xs text-muted-2">años de experiencia</p>
          </div>
          <div class="font-mono">
            <p class="text-xl font-bold text-ink md:text-2xl">04</p>
            <p class="mt-1 text-xs text-muted-2">proyectos destacados</p>
          </div>
        </div>
      </div>

      <!-- Ventana de terminal -->
      <div v-reveal="{ dir: 'right', delay: 150 }" class="flex justify-center lg:order-2">
        <div class="w-full max-w-md">
          <div class="scanlines overflow-hidden rounded-lg border border-line bg-panel shadow-2xl shadow-black/10">
            <!-- Barra de título -->
            <div class="flex items-center gap-2 border-b border-line-weak bg-panel px-4 py-2.5">
              <span class="h-3 w-3 rounded-full bg-[#ff5f56]" />
              <span class="h-3 w-3 rounded-full bg-[#ffbd2e]" />
              <span class="h-3 w-3 rounded-full bg-[#27c93f]" />
              <span class="mx-auto font-mono text-[11px] text-muted-2">mauricio@portafolio: ~</span>
            </div>

            <!-- Contenido -->
            <div class="relative space-y-3 p-5 font-mono text-[13px] leading-relaxed">
              <p>
                <span class="text-muted-2">mauricio@portafolio</span><span class="text-ink">:</span><span class="text-accent-strong">~</span><span class="text-muted-2">$</span>
                <span class="text-ink">whoami</span>
              </p>
              <p class="pl-4 text-ink">{{ personal.name }}</p>

              <p>
                <span class="text-muted-2">mauricio@portafolio</span><span class="text-ink">:</span><span class="text-accent-strong">~</span><span class="text-muted-2">$</span>
                <span class="text-ink">cat ~/rol.txt</span>
              </p>
              <p class="pl-4 text-ink">{{ personal.headline }}</p>

              <p>
                <span class="text-muted-2">mauricio@portafolio</span><span class="text-ink">:</span><span class="text-accent-strong">~</span><span class="text-muted-2">$</span>
                <span class="text-ink">ls ./proyectos</span>
              </p>
              <p class="pl-4">
                <span class="text-accent-strong">sorteos/</span>&nbsp; <span class="text-accent-strong">inventario/</span>&nbsp;
                <span class="text-accent-strong">eventos/</span>&nbsp; <span class="text-accent-strong">landing-page/</span>
              </p>

              <p class="flex items-center gap-1">
                <span class="text-muted-2">mauricio@portafolio</span><span class="text-ink">:</span><span class="text-accent-strong">~</span><span class="text-muted-2">$</span>
                <span class="text-ink">tail -f ~/estado</span>
              </p>
              <p class="flex items-center gap-2 pl-4 text-ok">
                <span class="h-2 w-2 rounded-full bg-ok animate-pulse-dot" />
                abierto a oportunidades full stack
                <span class="caret" />
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
