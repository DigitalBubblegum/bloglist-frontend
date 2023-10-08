import Togglable from '../components/Togglable'
import BlogInfo from '../components/BlogInfo'
const Blog = ({ blog, useID }) => {
  const blogStyle = {
    paddingTop: 10,
    paddingLeft: 2,
    border: 'solid',
    borderWidth: 1,
    marginBottom: 5
  }
  return(
    <div style={blogStyle} className = 'basicBlogView'>
      {/* {blog.title} <br/>{blog.author} <br/> {blog.user.name} <br/> {blog.user.id} */}
      {blog.title} <br/>{blog.author}
      <Togglable buttonLabel = 'view'>
        <BlogInfo blog= {blog} addedBy = {blog.user.name} id = {blog.user.id} useId = {useID}/>
      </Togglable>
    </div>
  )
}
export default Blog