import React from 'react'

const Approach = (props) => {
  return (
    <div className='w-[29rem] h-[18rem] p-[1rem] rounded-md hover:bg-[#2c2c30] cursor-pointer'>
        <div className='w-[4rem] h-[4rem] rounded-full bg-[#6968f7] my-[1rem]'><img src="{props.img}" alt="" /></div>
        <h2 className='text-[1.2rem] font-[800] mb-[1rem]'>{props.title}</h2>
        <p className='text-[#999999] font-[500]'>{props.desc}</p>
    </div>
  )
}

export default Approach