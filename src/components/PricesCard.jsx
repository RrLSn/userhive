import React from 'react'
import Cards from './Cards'

const PricesCard = () => {
  const priceArr = [
    {
      title: "Small",
      desc: "Best for partnering with a single product team",
      listHeader: "4 User insight packages each month",
      li1: "interviews with 4 users",
      li2: "Expert analysis of each interview",
      li3: "Monthly team call to review and consolidate understanding",
      li4: "Summary shared as an interview snapshot",
      price: "€1199 per month"
    },
    {
      title: "Medium",
      desc: "Best for partnering with a multiple product teams",
      listHeader: "8 User insight packages each month",
      li1: "interviews with 8 users",
      li2: "Expert analysis of each interview",
      li3: "Monthly team call to review and consolidate understanding",
      li4: "Summary shared as an interview snapshot",
      price: "€2149 per month"  
    },
    {
      title: "Large",
      desc: "Looking for even more of the good stuff?",
      listHeader: "We can work on a custom engagement, just reach out.",
    }
  ]
  return (
    <div  className='text-white h-[100%] lg:flex my-[7rem] justify-between cardsList'>
        {priceArr.map ((priceCard) => 
        (<Cards 
          title = {priceCard.title} 
          desc = {priceCard.desc}
          listHeader = {priceCard.listHeader}
          li1 = {priceCard.li1}
          li2 = {priceCard.li2}
          li3 = {priceCard.li3}
          li4 = {priceCard.li4}
          price = {priceCard.price}
          />
        ))}
    </div>
  )
}

export default PricesCard