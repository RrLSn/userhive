import React from 'react'

const Cards = (props) => {
  return (
    <div className='cards rounded-lg p-[2rem] m-[1rem]'>
        <h1 className='text-5xl font-[700] mb-[1.7rem]'>{props.title}</h1>
        <h2 className='mb-[2.7rem] text-[1.1rem]'>{props.desc}</h2>
        <p className='mb-[0.8rem]'>{props.listHeader}</p>
        <ul>
        <li className='list'>{props.li1}</li>
        <li className='list'>{props.li2}</li>
        <li className='list'>{props.li3}</li>
        <li className='list'>{props.li4}</li>
        </ul>
        <p className='text-2xl font-[700] my-[1.7rem]'>{props.price}</p>
        <div className='w-[100%] flex justify-center'><input type="button" value="Let's go" className='bg-[#5e5df0] w-[7rem] h-[2.5rem] rounded-full hover:bg-white hover:text-[#5e5df0] cursor-pointer' /></div>
    </div>
  )
}

export default Cards