import React, {useState, useEffect} from 'react'
import { Container, PostCard } from '../components/index'
import appwriteService from '../appwrite/service'

function AllPosts() {

    const [posts, setPosts] = useState([])

    useEffect(() => {
        appwriteService.getPosts([])
        .then((posts) => {
            if(posts) {
                setPosts(posts.documents)
            }
        })
    }, [])


    if(posts.length == 0) {
        return (
            <div className="flex min-h-96 w-full py-4 my-4 justify-center items-center">
                <h1 className="flex-col text-2xl  font-bold hover:text-gray-500 text-center">
                    No Available posts
                </h1>
            </div>
        )
    }


    return (
        <div className='w-full py-8'>
            <Container>
                <div className='flex flex-wrap justify-center'>
                    {posts.map((post) => (
                        <div key={post.$id} className='p-2 md:w-1/3 max-md:w-1/2 max-sm:w-auto'>
                            <PostCard {...post} />
                        </div>
                    ))}
                </div>
            </Container>
        </div>
    )
}

export default AllPosts