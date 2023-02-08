import React from 'react'

const Footer = () => {
  return (
    <div className='text-white my-[5rem] lg:mx-[3rem] ml-[3rem]'>
        <div className='flex h-[max-content] my-[1.5rem] gap-1'>
            <img src="/images/userhive_light.svg" alt="" className='w-[2.5rem]' />
            <h1 className='font-[700] text-[1.3rem]'>Userhive</h1>
        </div>
        <h1>Copyright © 2023 Userhive. All rights reserved.</h1>
    </div>
  )
}

export default Footer