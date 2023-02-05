import React from 'react'

const PricesCard = ({head, subHead, ul, li1, li2, li3, li4, price}) => {
  return (
    <div className='h-[20rem] text-white p-[2rem]'>
      <h1>{head}</h1>
      <p>{subHead}</p>
      <ul>{ul}</ul>
      <l1>{li1}</l1>
      <l1>{li2}</l1>
      <l1>{li3}</l1>
      <l1>{li4}</l1>
      <h2>{price}</h2>
      <input type="button" value="Let's go" className='cursor-pointer' />
    </div>
  )
}

export default PricesCard