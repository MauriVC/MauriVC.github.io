<script setup lang="ts">
import Icon from './Icon.vue'
import SectionHeading from './SectionHeading.vue'
import { about } from '../data/portfolio'
</script>

<template>
  <section id="sobre-mi" class="scroll-mt-24 border-y border-line-weak bg-panel py-20 md:py-24">
    <div class="mx-auto max-w-6xl px-5 md:px-6">
      <SectionHeading
        eyebrow="cat ~/sobre-mi.txt"
        title="Sobre mí"
        subtitle="head -n 2: quién está detrás del prompt."
        icon="user"
        align="left"
      />

      <div class="mt-12 grid grid-cols-1 gap-10 lg:grid-cols-5">
        <!-- Descripción -->
        <div v-reveal="{ dir: 'right' }" class="space-y-5 lg:col-span-3">
          <p v-for="(paragraph, i) in about.paragraphs" :key="i" class="font-sans text-base leading-relaxed text-muted">
            <span class="font-mono text-sm text-muted-2">$ cat ~/perfil{{ i + 1 }}.txt</span>
            <span class="mt-2 block">{{ paragraph }}</span>
          </p>

          <div class="space-y-1.5 border-t border-line pt-4 font-mono text-sm">
            <p
              v-for="(aptitude, i) in about.aptitudes"
              :key="i"
              class="flex items-start gap-2 text-muted"
            >
              <span class="text-ok">✓</span> {{ aptitude }}
            </p>
          </div>
        </div>

        <!-- Terminal: info rápida -->
        <div v-reveal="{ dir: 'left', delay: 120 }" class="lg:col-span-2">
          <div class="scanlines overflow-hidden rounded-lg border border-line bg-bg">
            <div class="flex items-center gap-2 border-b border-line-weak bg-panel px-4 py-2.5">
              <span class="h-3 w-3 rounded-full bg-[#ff5f56]" />
              <span class="h-3 w-3 rounded-full bg-[#ffbd2e]" />
              <span class="h-3 w-3 rounded-full bg-[#27c93f]" />
              <span class="mx-auto font-mono text-[11px] text-muted-2">~/info --verbose</span>
            </div>

            <div class="p-5 font-mono text-sm">
              <p><span class="text-muted-2">$</span> grep -E <span class="text-ok">'clave|valor'</span> ~/datos</p>

              <dl class="mt-3 divide-y divide-line-weak">
                <div v-for="fact in about.quickFacts" :key="fact.label" class="flex items-center justify-between gap-4 py-2.5">
                  <dt class="flex items-center gap-2 text-xs text-muted-2">
                    <Icon :name="fact.icon" class="h-3.5 w-3.5" />
                    {{ fact.label.toLowerCase() }}:
                  </dt>
                  <dd class="text-right text-xs text-ink">
                    <a v-if="fact.href" :href="fact.href" target="_blank" rel="noopener" class="underline decoration-line underline-offset-4 transition-colors hover:text-ok">
                      {{ fact.value }}
                    </a>
                    <span v-else>{{ fact.value }}</span>
                  </dd>
                </div>
              </dl>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
