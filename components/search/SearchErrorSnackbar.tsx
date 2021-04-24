import { VFC } from 'react'

interface Props {
  toggleSnackbar: (e: boolean) => void
}

const SearchErrorSnackbar: VFC<Props> = ({ toggleSnackbar }) => {
  const style = {
    position: 'absolute' as 'absolute',
    left: '50%',
    bottom: '-32px',
    transform: 'translateX(-50%)'
  }

  return (
    <div
      className="px-2 py-1 bg-gray-100 dark:bg-dark-black rounded shadow text-sm cursor-pointer"
      style={style}
      onClick={() => toggleSnackbar(false)}
    >
      <span className="text-red-500 font-semibold">Required Entry</span>
    </div>
  )
}

export default SearchErrorSnackbar
