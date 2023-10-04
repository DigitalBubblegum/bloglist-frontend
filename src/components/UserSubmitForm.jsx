import { useState } from "react";
// const UserSubmitForm = ({handleUserFormSubmission, title,author,url,likes,handleTitle,handleAuthor,handleUrl,handleLikes}) => {
    const UserSubmitForm = ({createBlog, userId}) => {
    //states
    const [title, setTitle] = useState('')
    const [author, setAuthor] = useState('')
    const [url, setUrl] = useState('')
    const [likes,setLikes] = useState('')
//handlers
const handleTitle = (event) =>{
    console.log(event.target.value);
    setTitle(event.target.value)
  }
  const handleAuthor = (event) =>{
    console.log(event.target.value);
    setAuthor(event.target.value)
  }
  const handleUrl = (event) =>{
    console.log(event.target.value);
    setUrl(event.target.value)
  }
  const handleLikes = (event) =>{
    console.log(event.target.value);
    setLikes(event.target.value)
  }
  const handleUserFormSubmission = (event) =>{
    event.preventDefault()
    createBlog({
      title: title ,
      author: author,
      url: url,
      likes:likes,
      user: userId,
    })
    setTitle('')
    setAuthor('')
    setUrl('')
    setLikes('')

  }
    return (
        <div>
            <form onSubmit={handleUserFormSubmission}>
                <label>Title</label>
                <input type = "text" value = {title} name="Title" onChange={handleTitle}></input>
                <br/>
                <label>Author</label>
                <input type = "text" value = {author} name="Author" onChange={handleAuthor}></input>
                <br/>
                <label>url</label>
                <input type = "text" value = {url} name="URL"onChange={handleUrl}></input>
                <br/>
                <label>likes</label>
                <input type = "text" value ={likes} name="Likes" onChange={handleLikes}></input>
                <br/>
                <button>Save</button>
            </form>
        </div>
    )
}

export default UserSubmitForm