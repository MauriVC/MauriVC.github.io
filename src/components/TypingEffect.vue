<script setup lang="ts">
import { onBeforeUnmount, onMounted, ref } from 'vue'

const props = defineProps<{ words: string[] }>()

const text = ref('')
let index = 0
let sub = 0
let deleting = false
let timer: number | undefined

function tick() {
  const word = props.words[index]
  sub = deleting ? sub - 1 : sub + 1
  text.value = word.substring(0, sub)

  let delay = deleting ? 45 : 95
  if (!deleting && sub === word.length) {
    delay = 1800
    deleting = true
  } else if (deleting && sub === 0) {
    deleting = false
    index = (index + 1) % props.words.length
    delay = 350
  }
  timer = window.setTimeout(tick, delay)
}

onMounted(tick)
onBeforeUnmount(() => clearTimeout(timer))
</script>

<template>
  <span class="font-mono font-medium">
    {{ text }}<span class="caret" />
  </span>
</template>
