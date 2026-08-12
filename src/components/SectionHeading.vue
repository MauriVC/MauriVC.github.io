<script setup lang="ts">
import Icon from './Icon.vue'

withDefaults(
  defineProps<{
    eyebrow: string
    title: string
    subtitle?: string
    icon?: string
    align?: 'left' | 'center'
  }>(),
  { subtitle: '', icon: 'terminal', align: 'center' },
)
</script>

<template>
  <div class="max-w-2xl" :class="align === 'center' ? 'mx-auto text-center' : 'text-left'">
    <div
      v-reveal
      class="inline-flex items-center gap-2 border border-line bg-panel px-3 py-1 font-mono text-[11px] uppercase tracking-widest text-muted"
    >
      <Icon :name="icon" class="h-3.5 w-3.5 text-muted-2" />
      <span>
        <span class="text-muted-2"># </span>{{ eyebrow }}
      </span>
    </div>

    <h2
      v-reveal="{ dir: 'up', delay: 80 }"
      class="mt-4 font-mono text-2xl font-bold tracking-tight text-ink md:text-3xl"
    >
      <span class="hl px-1.5">{{ title }}</span>
    </h2>

    <p
      v-if="subtitle"
      v-reveal="{ dir: 'up', delay: 160 }"
      class="mt-4 font-mono text-sm leading-relaxed text-muted md:text-base"
    >
      {{ subtitle }}
    </p>
  </div>
</template>
