const SearchForm = () => {
  return (
    <form className="flex items-center">
      <input
        type="text"
        name="search_keywords"
        id="search_keywords"
        className="focus:ring-deep-blue focus:border-deep-blue w-full shadow-sm sm:text-sm border-gray-400 dark:bg-dark-black rounded mr-2"
      ></input>
      <button className="p-1 rounded-full focus:outline-none focus:ring-2 focus:ring-deep-blue">
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
  )
}

export default SearchForm
