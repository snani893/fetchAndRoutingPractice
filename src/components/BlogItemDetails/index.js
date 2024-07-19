import {Component} from 'react'

import Loader from 'react-loader-spinner'

import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'

import './index.css'

class BlogItemDetails extends Component {
  state = {blogData: [], isLoading: true}

  componentDidMount() {
    this.getBlogData()
  }

  getBlogData = async () => {
    const {match} = this.props
    const {params} = match
    const {id} = params
    const response = await fetch(`https://apis.ccbp.in/blogs${id}`)
    const data = await response.json()
    const updatedData = {
      title: data.title,
      author: data.author,
      avatarUrl: data.avatar_url,
      imageUrl: data.image_url,
      content: data.content,
    }
    this.setState({blogData: updatedData, isLoading: false})
  }

  renderBlogData = () => {
    const {blogData} = this.state
    const {title, content, author, avatarUrl, imageUrl} = blogData

    return (
      <div className="blog-data-container">
        <p className="title">{title}</p>
        <div className="arrange">
          <img src={avatarUrl} alt="avatar img" className="avatar-image" />
          <p className="author-name">{author}</p>
        </div>
        <img src={imageUrl} alt="image-url" className="image-url" />
        <p className="content">{content}</p>
      </div>
    )
  }

  render() {
    const {isLoading} = this.state

    return (
      <div>
        {isLoading ? (
          <div data-testid="loader">
            <Loader type="TailSpin" color="#00bfff" height={50} width={50} />
          </div>
        ) : (
          this.renderBlogData()
        )}
      </div>
    )
  }
}
export default BlogItemDetails
