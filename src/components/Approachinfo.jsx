import React from 'react'

const Approachinfo = (props) => {
  return (
    <div className='lg:w-[29rem] w-[23rem] h-[18rem] p-[1rem] rounded-md hover:bg-[#2c2c30] cursor-pointer text-white'>
        <div className='w-[4rem] h-[4rem] rounded-full bg-[#6968f7] my-[1rem]'><img src="" alt="" /></div>
        <h2 className='text-[1.2rem] font-[800] mb-[1rem]'>{props.title2}</h2>
        <p className='text-[#999999] font-[500]'>{props.desc2}</p>
    </div>
  )
}

export default Approachinfo