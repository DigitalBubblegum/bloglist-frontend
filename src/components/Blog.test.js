import React from 'react'
import '@testing-library/jest-dom'
import { render,screen } from '@testing-library/react'
import Blog from './Blog'

describe('<Blog/>', () => {
  test('should renders the blog\'s title and author, but does not render its URL or number of likes by default.', () => {
    let blog = {
      title: 'testing a blog',
      author: 'me',
      url: 'lolol.com',
      likes: 0,
      user: '6512ae33d29f3dc8dc0e5c40',
    }
    let useID = 123
    const { container } = render(<Blog blog={blog} useID={useID}/>)
    const div = container.querySelector('.basicBlogView')
    expect(div).toHaveTextContent('testing a blog')
    expect(div).toHaveTextContent('me')
    const doesRenderUrl = screen.queryByText('lolol.com')
    screen.debug(doesRenderUrl)
    expect(doesRenderUrl).toBeNull()
    const doesRenderLikes = screen.queryByText('0')
    expect(doesRenderLikes).toBeNull()
  })
})