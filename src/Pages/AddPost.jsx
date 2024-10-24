import React from 'react'
import { Container, PostForm } from '../components/index'
function AddPost() {
  return (
    <div className='min-h-96 py-8'>
        <Container>
            <PostForm /> 
        </Container>
    </div>
  )
}

export default AddPost