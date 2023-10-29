import { ButtonsPage } from './pages/components/buttons/ButtonsPage'
import { CollapsePage } from './pages/components/collapse/CollapsePage'
import AvatarPage from './pages/components/avatar/AvatarPage'
import { RatingPage } from './pages/components/rating/RatingPage'
import { SpinnersPage } from './pages/components/spinners/SpinnersPage'
import AccordionPage from './pages/components/accordion/AccordionPage'
import ButtonGroupPage from './pages/components/button-group/ButtonGroupPage'
import BadgesPage from './pages/components/badges/BadgesPage'
import LinkPage from './pages/components/link/LinkPage'
import CardsPage from './pages/components/cards/CardsPage'
import ListGroupPage from './pages/components/list-group/ListGroupPage'
import ModalPage from './pages/components/modal/ModalPage'
import ParagraphsPage from './pages/components/paragraphs/ParagraphsPage'
import PlaceholdersPage from './pages/components/placeholders/PlaceholdersPage'
import ProgressPage from './pages/components/progress/ProgressPage'
import ScrollBackToTopButtonPage from './pages/components/scroll-back-to-top-button/ScrollBackToTopButtonPage'
import SocialButtonsPage from './pages/components/social-buttons/SocialButtonsPage'
import TimelinePage from './pages/components/timeline/TimelinePage'
/* next import */

interface Pages {
  name: string
  path: string
}

interface PagesSection {
  section: string
  pages: Pages[]
}

const componentsPages: Pages[] = [
  { name: 'buttons', path: '/components/buttons' },
  { name: 'collapse', path: '/components/collapse' },
  { name: 'rating', path: '/components/rating' },
  { name: 'spinners', path: '/components/spinners' },
  { name: 'avatar', path: '/components/avatar' },
  { name: 'badge', path: '/components/badges' },
  { name: 'link', path: '/components/link' },
  { name: 'accordion', path: '/components/accordion' },
  { name: 'button-group', path: '/components/button-group' },
  { name: 'cards', path: '/components/cards' },
  { name: 'list-group', path: '/components/list-group' },
  { name: 'modal', path: '/components/modal' },
  { name: 'paragraphs', path: '/components/paragraphs' },
  { name: 'placeholders', path: '/components/placeholders' },
  { name: 'progress', path: '/components/progress' },
  { name: 'scroll-back-to-top-button', path: '/components/scroll-back-to-top-button' },
  { name: 'social-buttons', path: '/components/social-buttons' },
  { name: 'timeline', path: '/components/timeline' },
  /* next name and path */
]

// list of pages with sections
const demoPages: PagesSection[] = [
  {
    section: 'components',
    pages: componentsPages,
  },
]

export default demoPages
