<script setup lang="ts">
import SectionHeading from './SectionHeading.vue'
import { experience } from '../data/portfolio'
</script>

<template>
  <section id="experiencia" class="scroll-mt-24 border-y border-line-weak bg-panel py-20 md:py-24">
    <div class="mx-auto max-w-6xl px-5 md:px-6">
      <SectionHeading
        eyebrow="cat ~/experiencia.log"
        title="Experiencia"
        subtitle="Log de roles y responsabilidades."
        icon="briefcase"
        align="left"
      />

      <div class="mt-12 space-y-8">
        <article
          v-for="(job, index) in experience"
          :key="job.company"
          v-reveal="{ dir: index % 2 === 0 ? 'right' : 'left' }"
          class="scanlines overflow-hidden rounded-lg border border-line bg-bg"
        >
          <div class="flex items-center gap-2 border-b border-line-weak bg-panel px-4 py-2.5">
            <span class="h-3 w-3 rounded-full bg-[#ff5f56]" />
            <span class="h-3 w-3 rounded-full bg-[#ffbd2e]" />
            <span class="h-3 w-3 rounded-full bg-[#27c93f]" />
            <span class="ml-2 font-mono text-[11px] text-muted-2">$ history | grep {{ job.role.toLowerCase().split(' ')[0] }}</span>
          </div>

          <div class="p-6">
            <div class="flex flex-wrap items-baseline justify-between gap-2">
              <h3 class="font-mono text-lg font-bold text-ink">
                <span class="hl px-1.5">$</span> {{ job.role }}
              </h3>
              <p class="font-mono text-xs text-muted-2">@ {{ job.company }}</p>
            </div>

            <p class="mt-1 font-mono text-xs text-muted-2">cwd: {{ job.location }}</p>

            <p class="mt-4 font-sans text-sm leading-relaxed text-muted">{{ job.summary }}</p>

            <ul class="mt-4 space-y-2 border-l border-line-weak pl-4 font-mono text-sm">
              <li v-for="(point, i) in job.points" :key="i" class="flex gap-2 text-muted">
                <span class="text-ok">+</span>
                <span>{{ point }}</span>
              </li>
            </ul>

            <div class="mt-5 flex flex-wrap gap-1.5 border-t border-line-weak pt-4">
              <span
                v-for="tag in job.tags"
                :key="tag"
                class="rounded-sm border border-line bg-panel px-2 py-0.5 font-mono text-[11px] text-muted-2"
              >
                {{ tag }}
              </span>
            </div>
          </div>
        </article>
      </div>
    </div>
  </section>
</template>
