<script setup lang="ts">
import Icon from './Icon.vue'
import SectionHeading from './SectionHeading.vue'
import { personal, contact } from '../data/portfolio'
</script>

<template>
  <section id="contacto" class="scroll-mt-24 py-20 md:py-28">
    <div class="mx-auto max-w-6xl px-5 md:px-6">
      <SectionHeading
        eyebrow="cat ~/contacto.sh"
        title="Contacto"
        subtitle="Canal abierto: envía un mensaje al proceso."
        icon="mail"
      />

      <div class="mt-14 grid grid-cols-1 gap-10 lg:grid-cols-2">
        <!-- Terminal de contacto -->
        <div v-reveal="{ dir: 'right' }">
          <div class="scanlines overflow-hidden rounded-lg border border-line bg-panel">
            <div class="flex items-center gap-2 border-b border-line-weak bg-panel px-4 py-2.5">
              <span class="h-3 w-3 rounded-full bg-[#ff5f56]" />
              <span class="h-3 w-3 rounded-full bg-[#ffbd2e]" />
              <span class="h-3 w-3 rounded-full bg-[#27c93f]" />
              <span class="mx-auto font-mono text-[11px] text-muted-2">~/contacto --channels</span>
            </div>

            <div class="p-5 font-mono text-sm">
              <p>
                <span class="text-muted-2">mauricio@portafolio</span><span class="text-ink">:</span><span class="text-accent-strong">~</span><span class="text-muted-2">$</span>
                <span class="text-ink">whois mauricio</span>
              </p>
              <p class="mt-2 pl-4 text-xs text-muted-2">name: Carlos Mauricio Viveros Claure</p>
              <p class="pl-4 text-xs text-muted-2">location: Santa Cruz de la Sierra, Bolivia</p>
              <p class="pl-4 text-xs text-ok">status: open to work</p>

              <div class="mt-5 space-y-2 border-t border-line-weak pt-4">
                <p class="text-xs text-muted-2">$ chmod +x contactar && ./contactar --all</p>
                <div v-for="item in contact" :key="item.label">
                  <a
                    v-if="item.href"
                    :href="item.href"
                    target="_blank"
                    rel="noopener"
                    class="group flex items-center gap-2.5 rounded px-2 py-1.5 text-muted transition-colors hover:bg-panel-hover hover:text-ink"
                  >
                    <Icon :name="item.icon" class="h-4 w-4 text-muted-2" />
                    <span class="text-muted-2">$ open</span>
                    <span class="underline decoration-line underline-offset-4">{{ item.value }}</span>
                  </a>
                  <p v-else class="flex items-center gap-2.5 px-2 py-1.5 text-muted">
                    <Icon :name="item.icon" class="h-4 w-4 text-muted-2" />
                    <span class="text-muted-2">$ pwd</span>
                    <span>{{ item.value }}</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- CTA -->
        <div v-reveal="{ dir: 'left', delay: 120 }" class="flex flex-col justify-center">
          <div class="scanlines rounded-lg border border-line bg-panel p-8 text-center">
            <p class="font-mono text-sm text-muted-2">
              <span class="text-muted-2">$</span> mail -s <span class="text-ok">"Hola Mauricio"</span> {{ personal.email }}
            </p>

            <h3 class="mt-6 font-mono text-2xl font-bold text-ink">
              ¿Trabajamos<span class="hl px-1.5">juntos</span>?
            </h3>

            <p class="mx-auto mt-3 max-w-sm font-sans text-sm leading-relaxed text-muted">
              Respondo rápido por cualquier canal. Si tienes un proyecto en mente, mándame un mensaje y lo convertimos en una línea de comando exitosa.
            </p>

            <a
              :href="`mailto:${personal.email}`"
              class="mt-7 inline-flex items-center gap-2 border border-strong bg-strong px-6 py-3 font-mono text-sm text-bg transition-colors hover:opacity-90"
            >
              <Icon name="mail" class="h-4 w-4" />
              $ ./enviar-mensaje
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
