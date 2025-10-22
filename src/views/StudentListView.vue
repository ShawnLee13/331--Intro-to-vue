<script setup lang="ts">
import { ref, onMounted } from 'vue'
import type { Student } from '../types'
import StudentService from '../services/StudentService'

const students = ref<Student[]>(null)

onMounted(() => {
  StudentService.getStudents()
    .then((response) => {
      students.value = response.data
    })
    .catch((error) => {
      console.error('There was an error loading students!', error)
    })
})
</script>

<template>
  <h1>Student Information</h1>
  <div class="students">
    <div v-for="(student, index) in students" :key="index" class="student-card">
      <h3>{{ student.name }} {{ student.surname }}</h3>
      <p>GPA: {{ student.gpa }}</p>
    </div>
  </div>
</template>

<style scoped>
.students {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
}

.student-card {
  background-color: #f5f5f5;
  padding: 20px;
  border-radius: 8px;
  width: 250px;
  text-align: center;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.student-card h3 {
  margin: 0 0 10px 0;
  color: #333;
}

.student-card p {
  margin: 0;
  color: #666;
  font-size: 18px;
  font-weight: bold;
}
</style>