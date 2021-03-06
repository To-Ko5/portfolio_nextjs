import { useState, FormEvent, ChangeEvent } from 'react'
import { useRouter } from 'next/router'

import Snackbar from './SearchErrorSnackbar'

const SearchForm = () => {
  const router = useRouter()
  const [keywords, setKeywords] = useState('')
  const [isSnackbar, toggleSnackbar] = useState(false)

  const changeKeywords = (e: ChangeEvent<HTMLInputElement>) => {
    toggleSnackbar(false)
    setKeywords(e.target.value)
  }

  const search = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (!keywords.trim()) {
      toggleSnackbar(true)
      return
    }
    router.push(`/search/${keywords}`)
    const searchButton = document.getElementById('search_button')
    const searchInput = document.getElementById('search_keywords')
    searchButton.blur()
    searchInput.blur()
  }

  const activeStyle = { color: '#1976d2' }
  const style = keywords ? activeStyle : { color: 'inherit' }

  return (
    <div className="relative">
      <form className="flex items-center" onSubmit={search}>
        <input
          type="text"
          name="search_keywords"
          id="search_keywords"
          placeholder="Search"
          value={keywords}
          onChange={changeKeywords}
          className="focus:ring-deep-blue focus:border-deep-blue w-full shadow-sm sm:text-sm border-gray-400 dark:bg-dark-black rounded mr-2"
        ></input>
        <button
          id="search_button"
          className="p-1 rounded-full focus:outline-none focus:ring-2 focus:ring-deep-blue hover:bg-opacity-20 hover:bg-gray-400 transition-colors"
          style={style}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-6 sm:w-8"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
        </button>
      </form>
      {isSnackbar && <Snackbar toggleSnackbar={(e) => toggleSnackbar(e)} />}
    </div>
  )
}

export default SearchForm
