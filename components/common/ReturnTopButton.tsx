const ReturnTopButton = () => {
  return (
    <button className="fixed bottom-3.5 right-3.5 w-14 h-14 p-2 text-center rounded-full bg-gray-50 dark:bg-dark-black shadow-lg outline-none border-0">
      <span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          className=""
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
