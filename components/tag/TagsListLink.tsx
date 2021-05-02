import Link from 'next/link'

const TagsListLink = ({ id, name }) => {
  return (
    <div>
      <Link href={`/tag/${id}`}>
        <a className="block py-2 px-4 hover:bg-opacity-20 hover:bg-gray-400">
          {name}
        </a>
      </Link>
    </div>
  )
}

export default TagsListLink
