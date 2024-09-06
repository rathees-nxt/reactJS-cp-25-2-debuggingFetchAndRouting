import {Component} from 'react'
import Loader from 'react-loader-spinner'
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'

import BlogItem from '../BlogItem'

import './index.css'

class BlogList extends Component {
  state = {isLoading: true, blogsData: []}

  componentDidMount() {
    this.getBlogsData()
  }

  // async function should have await in it
  getBlogsData = async () => {
    // spelling is wrong for fetch
    const response = await fetch('https://apis.ccbp.in/blogs')
    // we need to call response.json() to get the json format
    const data = await response.json()
    console.log(data)
    const formattedData = data.map(eachItem => ({
      id: eachItem.id,
      title: eachItem.title,
      imageUrl: eachItem.image_url,
      avatarUrl: eachItem.avatar_url,
      author: eachItem.author,
      topic: eachItem.topic,
    }))
    // blog data should be updated in the state
    this.setState({blogsData: formattedData, isLoading: false})
  }

  render() {
    const {blogsData, isLoading} = this.state
    // blog data should be rendered after the updation of state
    this.getBlogsData()

    return (
      <div className="blogs-list-container">
        {/* data-testid attribute value should be loader */}
        {isLoading ? (
          <div data-testid="loader">
            <Loader type="TailSpin" color="#00bfff" height={50} width={50} />
          </div>
        ) : (
          <ul className="blogs-list">
            {blogsData.map(eachBlogItem => (
              <BlogItem key={eachBlogItem.id} blogItemDetails={eachBlogItem} />
            ))}
            {/* list of item should have unique id */}
          </ul>
        )}
      </div>
    )
  }
}

export default BlogList
