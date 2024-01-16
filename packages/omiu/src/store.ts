import { signal } from 'omi'

export const showPage = signal(true)

export const activeTab = signal('overview')

export const contentMenu = signal<{ menus: { id: string | null; text: string | null }[]; active: string }>({
  menus: [
    {
      id: 'basic',
      text: 'Theme22',
    },
    {
      id: 'shades',
      text: 'Shades',
    },
    {
      id: 'background',
      text: 'Background',
    },
    {
      id: 'text',
      text: 'Text',
    },
    {
      id: 'section-related-resources',
      text: 'Related resources',
    },
  ],
  active: 'basic',
})

export const menuShow = signal(window.innerWidth > 1024)

window.addEventListener('resize', () => {
  menuShow.value = window.innerWidth > 1024
})

window.addEventListener('click', () => {
  if (window.innerWidth < 1024) {
    menuShow.value = false
  }
})

window.addEventListener('touchstart', () => {
  if (window.innerWidth < 1024) {
    menuShow.value = false
  }
})

export const currentPath = signal(location.hash.replace('#', ''))
