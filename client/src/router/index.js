import { createRouter, createWebHistory } from 'vue-router'
import { EventDashboard, ListEvents, CreateEvent, EventDetails } from '../views'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: EventDashboard
  },
  {
    path: '/list-events',
    name: 'List Events',
    component: ListEvents
  },
  {
    path: '/create-event',
    name: 'Create Event',
    component: CreateEvent
  },
  {
    path: '/event/:id',
    name: 'Event Details',
    component: EventDetails
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router;
