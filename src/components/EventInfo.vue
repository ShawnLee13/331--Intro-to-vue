<script setup lang="ts">
import type { Event } from '../types'

defineProps<{
  event: Event
}>()
</script>

<template>
  <div class="event-info">
    <div class="category">{{ event.category }}</div>
    <div class="organizer">{{ event.organizer }}</div>
  </div>
</template>

<style scoped>
.event-info {
  text-align: right;
}

.category,
.organizer {
  font-size: 14px; /* 设置相同的字体大小 */
  margin: 5px 0;
}
</style>