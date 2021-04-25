import { useEffect, useState } from 'react'

const ReturnTopButton = () => {
  const [isButtonActive, setIsButtonActive] = useState(false)

  const returnTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }

  useEffect(() => {
    window.addEventListener('scroll', scrollWindow)
    return () => {
      window.removeEventListener('scroll', scrollWindow)
    }
  }, [])

  const scrollWindow = () => {
    const top = 100
    let scroll = 0
    scroll = window.scrollY
    if (top <= scroll) {
      setIsButtonActive(true)
    } else {
      setIsButtonActive(false)
    }
  }

  const normalStyle = {
    opacity: 0,
    transition: '0.3s',
    pointerEvents: 'none'
  }
  const activeStyle = {
    opacity: 1,
    transition: '0.3s'
  }
  const style = isButtonActive ? activeStyle : normalStyle

  return (
    <button
      className="fixed bottom-3.5 right-3.5 w-14 h-14 focus:outline-none p-2 text-center rounded-full bg-gray-50 dark:bg-dark-black shadow-lg outline-none border-0"
      style={style}
      onClick={returnTop}
    >
      <span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M5 15l7-7 7 7"
          />
        </svg>
      </span>
    </button>
  )
}

export default ReturnTopButton
