export function watchHtmlMode(callback = () => {}) {
  const targetNode = document.documentElement
  const config = { attributes: true }

  const observerCallback = (mutationsList) => {
    for (const mutation of mutationsList) {
      if (mutation.attributeName === "theme-mode") {
        const themeMode = mutation.target.getAttribute("theme-mode") || 'light'
        if (themeMode) callback(themeMode)
      }
    }
  }

  const observer = new MutationObserver(observerCallback)
  observer.observe(targetNode, config)

  return observer
}