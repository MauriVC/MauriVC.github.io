<script setup lang="ts">
import Icon from './Icon.vue'
import SectionHeading from './SectionHeading.vue'
import { certifications } from '../data/portfolio'
</script>

<template>
  <section id="certificaciones" class="scroll-mt-24 border-y border-line-weak bg-panel py-20 md:py-24">
    <div class="mx-auto max-w-6xl px-5 md:px-6">
      <SectionHeading
        eyebrow="ls ~/certificaciones"
        title="Certificaciones"
        subtitle="Comando verificado: certificados por validación remota."
        icon="award"
      />

      <div class="mt-14 grid grid-cols-1 gap-5 md:grid-cols-3">
        <div
          v-for="(cert, index) in certifications"
          :key="cert.title"
          v-reveal="{ dir: 'up', delay: index * 80 }"
          class="scanlines flex flex-col rounded-lg border border-line bg-bg"
        >
          <div class="flex items-center gap-2 border-b border-line-weak bg-panel px-4 py-2.5">
            <Icon name="award" class="h-3.5 w-3.5 text-muted-2" />
            <span class="font-mono text-[11px] text-muted-2">cert_{{ String(index + 1).padStart(2, '0') }}.crt</span>
            <span v-if="cert.highlight" class="ml-auto rounded-sm bg-accent px-1.5 py-0.5 font-mono text-[10px] text-accent-ink">
              ★ verificado
            </span>
          </div>

          <div class="flex flex-1 flex-col p-5">
            <p class="font-mono text-xs text-muted-2">
              <span class="text-muted-2">$</span> cat {{ '~/certs/cert_' + String(index + 1).padStart(2, '0') + '.crt' }}
            </p>

            <h3 class="mt-3 font-mono text-base font-bold leading-snug text-ink">{{ cert.title }}</h3>
            <p class="mt-1 font-mono text-xs text-muted-2">emitido por: {{ cert.institution }}</p>

            <p class="mt-3 font-sans text-sm leading-relaxed text-muted">{{ cert.description }}</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
