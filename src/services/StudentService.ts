import axios from 'axios'

const apiClient = axios.create({
  baseURL: 'https://dv-student-backend-2019.appspot.com',
  withCredentials: false,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json'
  }
})

// Mock data as fallback in case API fails
const mockStudents = [
  { name: 'John', surname: 'Doe', gpa: 3.8 },
  { name: 'Jane', surname: 'Smith', gpa: 3.9 },
  { name: 'Mike', surname: 'Johnson', gpa: 3.7 },
  { name: 'Sarah', surname: 'Williams', gpa: 4.0 }
]

export default {
  getStudents() {
    return apiClient.get('/students')
      .catch(() => {
        console.log('Using mock data since API is not available')
        // Return a promise that resolves with mock data
        return Promise.resolve({ data: mockStudents })
      })
  }
}