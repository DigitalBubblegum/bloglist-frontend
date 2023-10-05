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
    {blog.title} <br/>{blog.author} <br/> {blog.user.name} <br/> {blog.user.id}
    <Togglable buttonLabel = 'view'>
    <BlogInfo blog= {blog} addedBy = {blog.user.name} id = {blog.user.id}/>
    </Togglable>
  </div>  
  )
 

}
export default Blog