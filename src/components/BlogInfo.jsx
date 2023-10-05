import blogService from '../services/blogs'
import { useState } from "react";
const BlogInfo =({blog,addedBy,id}) =>{
    const [likes, setLikes] = useState(blog.likes)
  const likesUpdater = async() =>{
    blog.likes += 1
    const response = await blogService.update(blog,blog.id)
    console.log(response)
    console.log('click')
    setLikes(response.likes)
    // window.location.reload()
  }
  const removeItem = async () => {
    let confirm = window.prompt(`are you sure you want to delete ${blog.title} by ${blog.author} type yes to confirm`)
    if(confirm.toLocaleLowerCase() === 'yes'){
        console.log('deleted')
        await blogService.remove(blog.id)
        window.location.reload()
    } else if (confirm.toLocaleLowerCase() === 'no'){
        console.log('clicked no')
    } else {
       window.alert('invalid input try again')
    }
  }
    if(id===JSON.parse(window.localStorage.getItem('loggedBlogAppUser')).id){
        return (
    <div>
       {blog.url}<br/>
       {likes} <button onClick={likesUpdater}>like</button><br/>
        {addedBy}<br/>
        <button className = "deletion" onClick={removeItem}>delete</button>
    </div>
    )
    } else {
        return (
    <div>
       {blog.url}<br/>
       {likes} <button onClick={likesUpdater}>like</button><br/>
        {addedBy}<br/>
        {/* <button className = "deletion" onClick={removeItem}>delete</button> */}
    </div>
    )
    }
}

export default BlogInfo