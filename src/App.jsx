import { useState, useEffect } from 'react'
import Blog from './components/Blog'
import blogService from './services/blogs'
import loginService from './services/login'
import Notification  from './components/Notification'
const App = () => {
  const [blogs, setBlogs] = useState([])
  const [errorMessage, setErrorMessage] = useState(null)
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
      console.log('i got the username')
      window.localStorage.setItem('loggedBlogAppUser',JSON.stringify(user))
      //setting user token here
      blogService.setToken(user.token)
      console.log('i set the username');
      setUser(user);
      setUsername("");
      setPassword("");
      console.log(user.name)
    } catch (exception) {
      setErrorMessage('Wrong credentials')
      setTimeout(() => {
        setErrorMessage(null)
      }, 5000)
    }
  }
  const handleLogout = () =>{
    window.localStorage.removeItem('loggedBlogAppUser')
    window.location.reload()
  }
  const blogListDiv = () => (
    <div>
      <h2>blogs</h2>
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

  const logout = () =>{
    return (
      <button onClick={handleLogout}>
        LogOut
      </button>
    )
  }

  return (
    <>
    <Notification message={errorMessage}/>
    {user===null ? loginForm() : (
      <div>
        <p>{user.name} has logged in</p>
        {logout()}
        {blogListDiv()}
      </div>
    )}
    </>
    
  )
}

export default App