import { useState, useEffect } from 'react'
import Blog from './components/Blog'
import blogService from './services/blogs'
import loginService from './services/login'
import Notification  from './components/Notification'
import UserSubmitForm from './components/UserSubmitForm'
import Togglable from './components/Togglable'
const App = () => {
  const [blogs, setBlogs] = useState([])
  const [errorMessage, setErrorMessage] = useState(null)
  const [notificationMessage, setNotificationMessage] = useState(null)
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [user,setUser] = useState(null)
  //effects
    useEffect(() => {
    blogService.getAll().then(blogs =>
      setBlogs( blogs )
    )  
  }, [])

  useEffect(() => {
    const loggedUserJSON = window.localStorage.getItem('loggedBlogAppUser')
    if (loggedUserJSON) {
      const user = JSON.parse(loggedUserJSON)
      setUser(user)
      blogService.setToken(user.token)
    }
  }, [])
  //helper functions 
  const handleLogin = async (event) => {
    event.preventDefault()
    try {
      const user = await loginService.login({
        username, password,
      })
      console.log(user.name)
      console.log('i got the username')
      window.localStorage.setItem('loggedBlogAppUser',JSON.stringify(user))
      console.log('i got the name')
      //setting user token here
      blogService.setToken(user.token)
      console.log('i set the username');
      setUser(user);
      setUsername("");
      setPassword("");
      console.log(user.name)
      console.log(user)
    } catch (exception) {
      setErrorMessage('Wrong credentials')
      setTimeout(() => {
        setErrorMessage(null)
      }, 5000)
    }
  }
  const handleLogout = () =>{
    window.localStorage.clear()
    window.location.reload()
  }
  //Exercise 5.3
  const handleUserFormSubmission = async(blogObject) =>{
    console.log('form submission')
    console.log(blogObject)
    setNotificationMessage(`${blogObject.title} by author ${blogObject.author} added to the blog`)
    setTimeout(() => {
        setNotificationMessage(null)
      }, 5000)
    const returnedBlog = await blogService.create(blogObject)
    console.log(returnedBlog)
    returnedBlog.user = user;
    setBlogs(blogs.concat(returnedBlog))
  }
  const blogListDiv = () => (
    <div>
      {blogs.map(blog =>
        <Blog key={blog.id} blog={blog} />
      )}
    </div>
  )
  //exercise 5.1 
  const loginForm = () =>(
    <form onSubmit={handleLogin}>
        <div>
          username
          <input
            type="text"
            value={username}
            name="Username"
            onChange={({ target }) => setUsername(target.value)}
          />
        </div>
        <div>
          password
          <input
            type="password"
            value={password}
            name="password"
            onChange={({ target }) => setPassword(target.value)}
          />
        </div>
        <button type='submit'>login</button>
      </form>
  )
    //exercise 5.2
  const logout = () =>{
    return (
      <button onClick={handleLogout}>
        LogOut
      </button>
    )
  }

  return (
    <>
    <Notification errorMessage={errorMessage} notificationMessage = {notificationMessage} />
    {user===null ? loginForm() : (
      <>
        <div>
        <h2>blogs</h2>
        <p>{user.name} has logged in</p>
        {logout()}
        <Togglable buttonLabel = 'Add blog'>
          <UserSubmitForm createBlog = {handleUserFormSubmission} userId = {user.id}/>
        </Togglable>
        
        {blogListDiv()}
        </div>
      </>
    )}
    </>
    
  )
}

export default App