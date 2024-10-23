// import React from 'react'
// import appwriteService from '../appwrite/service'
// import {Link} from'react-router-dom'

// function PostCard({$id, title, featuredImage}) {
  

//   return (
//     <Link to={`/post/${$id}`} >
//         <div className='w-full bg-white rounded-xl p-4 text-black'>
//             <div className='w-full justify-center mb-4'>
//                 <img src={appwriteService.getFilePreview(featuredImage)} alt={title} className='rounded-xl'/>
//             </div>
//             <h2
//             className='text-xl font-bold'>
//                 {title}
//             </h2>
//         </div>
//     </Link>
//   )
// }

// export default PostCard

import React from 'react';
import appwriteService from '../appwrite/service';
import { Link } from 'react-router-dom';

function PostCard({ $id, title, featuredImage }) {
  return (
    <Link to={`/post/${$id}`} className='w-full'>
      <div className='w-full bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-shadow duration-300 transform hover:scale-105'>
        <div className='w-full  justify-center mb-4 '>
          <img
            src={appwriteService.getFilePreview(featuredImage)}
            alt={title}
            className='rounded-xl object-cover w-full h-48'
          />
        </div>
        <h2 className='text-2xl font-semibold text-gray-800 mb-2'>
          {title}
        </h2>
      </div>
    </Link>
  );
}

export default PostCard;
