import {Component} from 'react'

import Loader from 'react-loader-spinner'

import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'

import BlogItem from '../BlogItem'

import './index.css'

class BlogList extends Component {
  state = {blogsList: [], isLoading: true}

  componentDidMount() {
    this.getBlogsList()
  }

  getBlogsList = async () => {
    const response = await fetch('https://apis.ccbp.in/blogs')
    const data = await response.json()
    const updatedData = data.map(eachList => ({
      id: eachList.id,
      title: eachList.title,
      topic: eachList.topic,
      imageUrl: eachList.image_url,
      avatarUrl: eachList.avatar_url,
      author: eachList.author,
    }))

    this.setState({blogsList: updatedData, isLoading: false})
  }

  render() {
    const {isLoading, blogsList} = this.state

    return (
      <div className="blogs-list-container">
        {isLoading ? (
          <div data-testid="loader">
            <Loader type="TailSpin" color="#00bfff" height={50} width={50} />
          </div>
        ) : (
          <ul>
            {blogsList.map(eachBlog => (
              <BlogItem key={eachBlog.id} blogDetails={eachBlog} />
            ))}
          </ul>
        )}
      </div>
    )
  }
}
export default BlogList
