import { routes } from './routes'
import { Router } from 'omi-router'
import { tailwind } from '@/tailwind'
import '../app/globals.css'
import { currentPath } from '@/store'

// 为了被扫出来，不然样式丢失
// @ts-ignore
const classes = 'bg-success bg-danger bg-warning bg-info'

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

router.afterEach((route: { path: string }) => {
  currentPath.value = route.path
})
