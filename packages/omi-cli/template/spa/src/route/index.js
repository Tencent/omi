import route from 'omi-router'
import routeList from './route'

export default function(omiElement) {
  for (let item of routeList) {
    route(item.path, params => {
      window.document.title = item.label
      omiElement.data.pageTitle = item.label
      omiElement.data.tag = item.tag
      omiElement.data.routeParams = params
      routeList.forEach(routeItem => (routeItem.selected = false))
      item.selected = true
    })
  }
  return routeList
}
