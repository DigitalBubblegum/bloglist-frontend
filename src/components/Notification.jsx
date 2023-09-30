const Notification = ({ message }) => {
  if (message === null) {
    return null
  }

  if(message === 'Wrong credentials'){
    return (
    <div className='error'>
      {message}
    </div>
  )
  }
}
export default Notification