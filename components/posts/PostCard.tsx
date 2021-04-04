import Image from 'next/image'

const PostCard = ({ id, post }) => {
  // tslint:disable-next-line: prefer-template
  const imageSrc = 'https://' + post.image.fields.file.url
  const imageAlt = post.image.fields.title as string
  const imageWidth = post.image.fields.file.details.image.width as number
  const imageHeight = post.image.fields.file.details.image.height as number
  console.log(post)
  return (
    <div>
      {id},
      <div className="w-3/12">
        <Image
          src={imageSrc}
          alt={imageAlt}
          width={imageWidth}
          height={imageHeight}
        />
      </div>
    </div>
  )
}

export default PostCard
