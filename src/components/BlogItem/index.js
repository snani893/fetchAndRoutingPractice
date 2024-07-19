import {Link} from 'react-router-dom'

import './index.css'

const BlogItem = props => {
  const {eachBlog} = props
  const {id, imageUrl, avatarUrl, author, topic, title} = eachBlog

  return (
    <li className="item">
      <Link to={`/blogs/${id}`} className="link-container">
        <div className="item-container">
          <img src={imageUrl} alt={`item${id}`} className="image-url" />
          <div className="arrange">
            <p className="topic">{topic}</p>
            <p className="title">{title}</p>
            <div className="author-name-img">
              <img className="author-img" src={avatarUrl} alt={`image${id}`} />
              <p className="author-name">{author}</p>
            </div>
          </div>
        </div>
      </Link>
    </li>
  )
}
export default BlogItem
