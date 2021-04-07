import { VFC } from 'react'
import ReactMarkdown from 'react-markdown'

import { PostDetails } from '../../../types/PostDetailsType'
import Markdown from '../../../styles/Markdown.module.css'

const PostDetailsContent: VFC<Pick<PostDetails, 'content'>> = ({ content }) => {
  return (
    <div className="mb-8">
      <ReactMarkdown className={Markdown.markdown}>{content}</ReactMarkdown>
    </div>
  )
}

export default PostDetailsContent
