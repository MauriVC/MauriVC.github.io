<script setup lang="ts">
import Icon from './Icon.vue'
import SectionHeading from './SectionHeading.vue'
import { education } from '../data/portfolio'
</script>

<template>
  <section id="educacion" class="scroll-mt-24 py-20 md:py-24">
    <div class="mx-auto max-w-6xl px-5 md:px-6">
      <SectionHeading
        eyebrow="cat ~/educacion.txt"
        title="Educación"
        subtitle="Formación académica: los fundamentos del sistema."
        icon="graduation-cap"
        align="left"
      />

      <div v-reveal="{ dir: 'up' }" class="mt-12 max-w-3xl">
        <div class="scanlines overflow-hidden rounded-lg border border-line bg-panel">
          <div class="flex items-center gap-2 border-b border-line-weak bg-panel px-4 py-2.5">
            <span class="h-3 w-3 rounded-full bg-[#ff5f56]" />
            <span class="h-3 w-3 rounded-full bg-[#ffbd2e]" />
            <span class="h-3 w-3 rounded-full bg-[#27c93f]" />
            <span class="ml-2 font-mono text-[11px] text-muted-2">$ ./grado.info --full</span>
            <span class="ml-auto font-mono text-[11px] text-muted-2">{{ education.year }}</span>
          </div>

          <div class="p-6 font-mono">
            <p class="text-sm">
              <span class="text-muted-2">$</span> echo <span class="text-ok">"</span>{{ education.degree }}<span class="text-ok">"</span> &gt; grado.txt
            </p>

            <div class="mt-4 flex flex-wrap items-center gap-3">
              <Icon name="graduation-cap" class="h-5 w-5 text-muted-2" />
              <h3 class="text-xl font-bold text-ink">
                <span class="hl px-1.5">{{ education.degree }}</span>
              </h3>
              <span class="rounded-sm border border-ok/40 bg-ok/10 px-2 py-0.5 text-[11px] text-ok">
                {{ education.badge }}
              </span>
            </div>

            <p class="mt-2 text-sm text-muted">{{ education.school }}</p>
            <p class="text-xs text-muted-2">{{ education.location }} · {{ education.year }}</p>

            <ul class="mt-5 space-y-2 border-t border-line-weak pt-4 text-sm">
              <li v-for="(detail, i) in education.details" :key="i" class="flex gap-2 text-muted">
                <span class="text-ok">+</span> {{ detail }}
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
