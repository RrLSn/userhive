import React from 'react'
import Approachinfo from './Approachinfo'

const Approach = () => {
    const approachArr = [
        {
            img : "",
            title : "Continuous discovery",
            desc : "We do users interviews with your customers or prospectives each week, so your team get constant input to their decisions. If a new question pops up, you will start getting answers from customers in less than a week."
        },
        {
            img : "",
            title : "Partnership",
            desc : "We don't deliver a report and walk away. We work hand in hand with your team, meeting regularly to understand the newest changes in direction and burning questions that need answering."
        },
        {
            img : "",
            title : "No hurdles",
            desc : "Know how much it'll cost before you even email us. Pay with your credit card, or we can send an invoice. Pause the engagement with as little as an email. We want it to be as easy as possible to work with us."
        },
        {
            img : "",
            title : "Build customer empathy",
            desc : "Empathy with your customers doesn't happen in a day. Our work creates an ever-deepening understanding of your customers within your product teams. We produce artefacts that your teams will refer to and share again and again."
        }
    ]
  return (
    <div className='flex gap-3 mr-[2rem] text-white'>
        {approachArr.map ((ApproachE) => 
        (<Approachinfo
            img = {ApproachE.img}
            title2 = {ApproachE.title}
            desc2 = {ApproachE.desc}
          />
        ))}
    </div>
  )
}

export default Approach