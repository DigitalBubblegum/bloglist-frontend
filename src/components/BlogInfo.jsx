const BlogInfo =({url,likes,addedBy}) =>{
    return (
    <div>
       {url}<br/>
       {likes} <button>like</button><br/>
        {addedBy}<br/>
    </div>
    )
}

export default BlogInfo