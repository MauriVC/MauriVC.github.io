<script setup lang="ts">
import Icon from './Icon.vue'
import SectionHeading from './SectionHeading.vue'
import { skillGroups } from '../data/portfolio'
</script>

<template>
  <section id="habilidades" class="scroll-mt-24 py-20 md:py-24">
    <div class="mx-auto max-w-6xl px-5 md:px-6">
      <SectionHeading
        eyebrow="tree ~/stack"
        title="Stack técnico"
        icon="terminal"
      />

      <div class="mt-14 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
        <div
          v-for="(group, gi) in skillGroups"
          :key="group.title"
          v-reveal="{ dir: 'up', delay: gi * 60 }"
          class="scanlines rounded-lg border border-line bg-panel"
        >
          <div class="flex items-center gap-2 border-b border-line-weak bg-panel px-4 py-2.5">
            <Icon :name="group.icon" class="h-3.5 w-3.5 text-muted-2" />
            <h3 class="font-mono text-sm font-semibold text-ink">{{ group.title }}</h3>
            <span class="ml-auto font-mono text-[11px] text-muted-2">./{{ group.title.toLowerCase().replace(/\s+/g, '-') }}/</span>
          </div>

          <ul class="divide-y divide-line-weak p-3 font-mono text-sm">
            <li
              v-for="skill in group.skills"
              :key="skill.name"
              class="skill-row flex items-center gap-2.5 rounded px-2 py-1.5 transition-colors hover:bg-panel-hover"
            >
              <span class="text-muted-2">├──</span>
              <img
                v-if="skill.icon"
                :src="skill.icon"
                :alt="skill.name"
                :title="skill.name"
                loading="lazy"
                :class="['skill-icon h-4 w-4', { 'skill-icon--invert': skill.mono }]"
              />
              <span class="text-muted">{{ skill.name }}</span>
            </li>
            <li class="flex items-center gap-2.5 px-2 py-1 text-muted-2">
              <span>└──</span> <span>README.md</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </section>
</template>
