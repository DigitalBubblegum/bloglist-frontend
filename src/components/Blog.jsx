import Togglable from '../components/Togglable'
import BlogInfo from '../components/BlogInfo'
const Blog = ({ blog }) => {
  const blogStyle = {
    paddingTop: 10,
    paddingLeft: 2,
    border: 'solid',
    borderWidth: 1,
    marginBottom: 5
  }
  return(
     <div style={blogStyle}>
    {blog.title} <br/>{blog.author}
    <Togglable buttonLabel = 'view'>
    <BlogInfo url = {blog.url} likes = {blog.likes} addedBy = {blog.user.name}/>
    </Togglable>
  </div>  
  )
 

}
export default Blog