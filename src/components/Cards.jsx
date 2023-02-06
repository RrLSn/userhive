import React from 'react'

const Cards = (props) => {
  return (
    <div className=' w-[32rem] cards rounded-lg p-[2.5rem]'>
        <h1 className='text-5xl font-[700] mb-[2rem]'>{props.title}</h1>
        <p className='mb-[3rem] text-[1.1rem]'>{props.desc}</p>
        <p className='mb-[0.7rem]'>{props.listHeader}</p>
        <ul>
        <li className='list'>{props.li1}</li>
        <li className='list'>{props.li2}</li>
        <li className='list'>{props.li3}</li>
        <li className='list'>{props.li4}</li>
        </ul>
        <p className='text-2xl font-[700] my-[2rem]'>{props.price}</p>
        <input type="button" value="Let's go" className='bg-[#5e5df0] w-[7rem] h-[2.5rem] rounded-full mx-[10rem]' />
    </div>
  )
}

export default Cards