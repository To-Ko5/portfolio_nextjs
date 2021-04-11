const SearchForm = () => {
  return (
    <form>
      <input
        type="text"
        name="search_keywords"
        id="search_keywords"
        className="focus:ring-deep-blue focus:border-deep-blue w-full shadow-sm sm:text-sm border-gray-400 dark:bg-dark-black rounded"
      ></input>
    </form>
  )
}

export default SearchForm
