<script setup lang="ts">
import EventCard from '../components/EventCard.vue'
import EventInfo from '../components/EventInfo.vue'
import type { Event } from '../types'
import { ref, onMounted } from 'vue'
import EventService from '../services/EventService'

const events = ref<Event[]>(null)

onMounted(() => {
  EventService.getEvents()
    .then((response) => {
      events.value = response.data
    })
    .catch((error) => {
      console.error('There was an error!', error)
    })
})
</script>

<template>
  <h1>Events For Good</h1>
  <!-- new element -->
  <div class="events">
    <div v-for="event in events" :key="event.id" class="event-container">
      <EventCard :event="event" />
      <EventInfo :event="event" />
    </div>
  </div>
</template>

<style scoped>
.events {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.event-container {
  margin-bottom: 20px;
  width: 250px;
}
</style>