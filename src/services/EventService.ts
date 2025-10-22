import axios from 'axios'

const apiClient = axios.create({
  baseURL: 'https://my-json-server.typicode.com/username/repo',
  withCredentials: false,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json'
  }
})

// Mock data as fallback in case API fails
const mockEvents = [
  {
    id: 5928101,
    category: 'animal welfare',
    title: 'Cat Adoption Day',
    description: 'Find your new feline friend at this event.',
    location: 'Meow Town',
    date: 'January 28, 2022',
    time: '12:00',
    petsAllowed: true,
    organizer: 'Kat Laydee'
  },
  {
    id: 4582797,
    category: 'food',
    title: 'Community Gardening',
    description: 'Join us as we tend to the community edible plants.',
    location: 'Flora City',
    date: 'March 14, 2022',
    time: '10:00',
    petsAllowed: true,
    organizer: 'Fern Pollin'
  },
  {
    id: 8419988,
    category: 'sustainability',
    title: 'Beach Cleanup',
    description: 'Help pick up trash along the shore.',
    location: 'Playa Del Carmen',
    date: 'July 22, 2022',
    time: '11:00',
    petsAllowed: false,
    organizer: 'Carey Wales'
  }
]

export default {
  getEvents() {
    return apiClient.get('/events')
      .catch(() => {
        console.log('Using mock data since API is not available')
        // Return a promise that resolves with mock data
        return Promise.resolve({ data: mockEvents })
      })
  }
}