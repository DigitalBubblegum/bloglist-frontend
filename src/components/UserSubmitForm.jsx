const UserSubmitForm = ({title,author,url,likes, handleUserFormSubmission,handleTitle ,handleAuthor ,handleUrl ,handleLikes }) => {
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