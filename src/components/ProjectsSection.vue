<script setup lang="ts">
import Icon from './Icon.vue'
import SectionHeading from './SectionHeading.vue'
import { projects } from '../data/portfolio'
</script>

<template>
  <section id="proyectos" class="scroll-mt-24 py-20 md:py-24">
    <div class="mx-auto max-w-6xl px-5 md:px-6">
      <SectionHeading
        eyebrow="cat ./proyectos"
        title="Proyectos"
        subtitle="ls -la: lo que he construido y los problemas que he resuelto."
        icon="terminal"
      />

      <div class="mt-14 grid grid-cols-1 gap-6 md:grid-cols-2">
        <article
          v-for="(project, index) in projects"
          :key="project.id"
          v-reveal="{ dir: index % 2 === 0 ? 'up' : 'left', delay: 80 }"
          class="scanlines group overflow-hidden rounded-lg border border-line bg-panel"
        >
          <!-- Barra de título -->
          <div class="flex items-center gap-2 border-b border-line-weak bg-panel px-4 py-2.5">
            <span class="h-3 w-3 rounded-full bg-[#ff5f56]" />
            <span class="h-3 w-3 rounded-full bg-[#ffbd2e]" />
            <span class="h-3 w-3 rounded-full bg-[#27c93f]" />
            <span class="ml-2 font-mono text-[11px] text-muted-2">~/proyectos/{{ project.id }}</span>
            <span class="ml-auto font-mono text-[11px] text-muted-2">{{ project.year }}</span>
          </div>

          <!-- Cuerpo -->
          <div class="relative p-5">
            <p class="font-mono text-xs text-muted-2">
              <span class="text-muted-2">$</span> ./{{ project.id }} --desc
            </p>

            <h3 class="mt-2 font-mono text-xl font-bold text-ink">
              <span class="hl px-1.5">{{ project.number }}</span> {{ project.title }}
            </h3>
            <p v-if="project.subtitle" class="mt-1 font-mono text-xs text-muted">{{ project.subtitle }}</p>

            <p class="mt-4 font-sans text-sm leading-relaxed text-muted">
              {{ project.description }}
            </p>

            <div class="mt-4 flex flex-wrap gap-1.5">
              <span
                v-for="tag in project.tags"
                :key="tag"
                class="rounded-sm border border-line bg-panel px-2 py-0.5 font-mono text-[11px] text-muted-2"
              >
                {{ tag }}
              </span>
            </div>

            <div class="mt-5 flex items-center gap-3 border-t border-line-weak pt-4">
              <span v-if="project.private" class="inline-flex items-center gap-1.5 font-mono text-xs text-muted-2">
                <Icon name="lock" class="h-3.5 w-3.5" />
                repositorio privado
              </span>
              <a
                v-if="project.github"
                :href="project.github"
                target="_blank"
                rel="noopener"
                class="inline-flex items-center gap-1.5 font-mono text-xs text-ink transition-colors hover:bg-panel-hover hover:underline"
              >
                <Icon name="github" class="h-3.5 w-3.5" />
                $ git clone
              </a>
              <a
                v-if="project.site"
                :href="project.site"
                target="_blank"
                rel="noopener"
                class="inline-flex items-center gap-1.5 font-mono text-xs text-ink transition-colors hover:bg-panel-hover hover:underline"
              >
                <Icon name="external-link" class="h-3.5 w-3.5" />
                $ open {{ project.site.replace('https://', '') }}
              </a>
            </div>
          </div>
        </article>
      </div>
    </div>
  </section>
</template>
