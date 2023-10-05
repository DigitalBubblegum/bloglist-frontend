import blogService from '../services/blogs'
import { useState } from "react";
const BlogInfo =({blog,addedBy}) =>{
    const [likes, setLikes] = useState(blog.likes)
  const likesUpdater = async() =>{
    blog.likes += 1
    const response = await blogService.update(blog,blog.id)
    console.log(response)
    console.log('click')
    setLikes(response.likes)
    // window.location.reload()
  }
    return (
    <div>
       {blog.url}<br/>
       {likes} <button onClick={likesUpdater}>like</button><br/>
        {addedBy}<br/>
    </div>
    )
}

export default BlogInfo