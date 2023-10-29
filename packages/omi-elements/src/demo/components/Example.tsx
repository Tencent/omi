import React, { ReactNode, useEffect, useRef } from 'react'

interface ExampleProps {
  children: ReactNode
  path: string
}

const Example: React.FC<ExampleProps> = ({ children, path }) => {
  const listenerNotAdded = useRef(true)
  const exampleRef = useRef<HTMLDivElement>(null)
  let resizeTimeout: ReturnType<typeof setTimeout>

  const postHeight = () => {
    window.parent.postMessage({ height: exampleRef.current?.scrollHeight, path: path }, '*')
  }

  const resizeObserver = new ResizeObserver(() => {
    clearTimeout(resizeTimeout)

    resizeTimeout = setTimeout(() => {
      postHeight()
    }, 5)
  })

  const handleDarkMode = (event: MessageEvent) => {
    const html = document.querySelector('html') as HTMLHtmlElement
    event.data.darkmode ? html.classList.add('dark') : html.classList.remove('dark')
  }

  const receiveMessage = (event: MessageEvent) => {
    if (event.data.darkmode !== undefined) {
      handleDarkMode(event)
      return
    }
    postHeight()
  }

  useEffect(() => {
    postHeight()

    document.body.classList.add('overflow-hidden')
    resizeObserver.observe(exampleRef.current as HTMLDivElement)

    return () => {
      clearTimeout(resizeTimeout)

      document.body.classList.remove('overflow-hidden')
      resizeObserver.disconnect()
    }
  }, [])

  useEffect(() => {
    if (listenerNotAdded.current) {
      window.addEventListener('message', (event) => receiveMessage(event))
      listenerNotAdded.current = false
    }
    return () => {
      window.removeEventListener('message', (event) => receiveMessage(event))
    }
  }, [])

  return <div ref={exampleRef}>{children}</div>
}

export default Example
