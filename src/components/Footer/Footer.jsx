import React from 'react'
import {Logo} from '../index'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <div className=' bg-[#121212] flex justify-center items-center shadow-2xl shadow-white'>
      {/* bg-[rgb(212,83,83)] */}
        <div className='
         text-white w-full my-4 mx-16 flex flex-col gap-y-5 max-md:mx-8'>
           {/* bg-[#4b9f57] */}
            <div className='
             flex justify-between  max-[600px]:flex-col max-[600px]:gap-8'>

              <div className='max-[600px]:text-center'>
                <h3 className='text-2xl font-semibold inline'>BLOG </h3>
                <h3 className='bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-clip-text text-transparent text-2xl font-semibold inline'>SITE</h3>
              </div>

              <div>
                <p className='text-lg max-[600px]:text-center text-[#A1A1AA]'>Company</p>
                <ul>
                  <li className='max-[600px]:text-center hover:text-[#ABABAB]'>
                    <Link
                    to = "">
                      Features
                    </Link>
                  </li>
                  <li className='max-[600px]:text-center hover:text-[#ABABAB]'>
                    <Link
                    to = "/">
                      Pricing
                    </Link>
                  </li>
                  <li className='max-[600px]:text-center hover:text-[#ABABAB]'>
                    <Link
                    to = "/">
                      Affiliate Program
                    </Link>
                  </li>
                  <li className='max-[600px]:text-center hover:text-[#ABABAB]'>
                    <Link
                    to = "/">
                      Press Kit
                    </Link>
                  </li>
                </ul>
              </div>

              <div>
                <p className='text-lg max-[600px]:text-center text-[#A1A1AA]'>Support</p>
                <ul>
                  <li className='max-[600px]:text-center hover:text-[#ABABAB]'>
                    <Link
                    to = "/">
                      Account
                    </Link>
                  </li>
                  <li className='max-[600px]:text-center hover:text-[#ABABAB]'>
                    <Link
                    to = "/">
                      Help
                    </Link>
                  </li>
                  <li className='max-[600px]:text-center hover:text-[#ABABAB]'>
                    <Link
                    to = "/">
                      Contact Us
                    </Link>
                  </li>
                  <li className='max-[600px]:text-center hover:text-[#ABABAB]'>
                    <Link
                    to = "/">
                      Customer Support
                    </Link>
                  </li>
                </ul>
              </div>

              <div>
                <p className='text-lg max-[600px]:text-center text-[#A1A1AA]'>Legals</p>
                <ul>
                  <li className='max-[600px]:text-center hover:text-[#ABABAB]'>
                    <Link
                    to = "/">
                      Terms & Conditions
                    </Link>
                  </li>
                  <li className='max-[600px]:text-center hover:text-[#ABABAB]'>
                    <Link
                    to = "/">
                      Privacy Policy
                    </Link>
                  </li>
                  <li className='max-[600px]:text-center hover:text-[#ABABAB]'>
                    <Link
                    to = "/">
                      Licensing
                    </Link>
                  </li>
                </ul>
              </div>

            </div>
            {/* bg-[#977934] */}
            <div className='
             flex justify-center text-center my-2'>
              Copyright © 2024 BlogSite Technologies Pvt Ltd. All Rights Reserved.
            </div>

        </div>
    </div>
    
  )
}


export default Footer

