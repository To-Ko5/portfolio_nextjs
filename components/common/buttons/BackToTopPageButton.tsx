import Link from 'next/link'
const BackToTopPageButton = () => {
  return (
    <div className="mt-16">
      <Link href="/">
        <a className="p-2 border border-gray-400 rounded text-gray-400">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="4-5 w-4 mr-1 mb-1 inline"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M10 19l-7-7m0 0l7-7m-7 7h18"
            />
          </svg>
          TOP
        </a>
      </Link>
    </div>
  )
}

export default BackToTopPageButton
