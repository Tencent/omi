import { routes } from './routes'
import { Router } from 'omi-router'
import { tailwind } from '@/tailwind'

const router = new Router({
  routes,
  css: [
    tailwind,
    `
  .fade-leave-to,
  .fade-enter-from {
    opacity: 0;
    transform: translateX(15px);
  }
  
  .fade-leave-active,
  .fade-enter-active {
    transition: all 300ms ease-in;
  }
  
  o-tabs:not(:defined) > * {
    display: none;
  }
  `,
  ],
  renderTo: '#app',
})
