const PostCard = ({ id, post }) => {
  console.log(post)
  return (
    <div>
      {id},{post.title}
    </div>
  )
}

export default PostCard
