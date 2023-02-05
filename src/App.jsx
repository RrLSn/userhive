import { useState } from 'react'
import './App.css'
import Approach from './components/Approach'
import PricesCard from './components/PricesCard'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="header">
      <section className='w-[100vw] h-[95vh] bg-[#131415] text-white px-[2rem] py-[7rem]'>
        <h1 className='text-7xl font-[700] w-[70rem]'>A <span className='focusText'>turn-key</span> approach to continuous user discovery</h1>
        <p className='text-[#999999] text-[1.2rem] my-[2rem]'>You've got a lot to take on, so we take user research off your plate.</p>

        <div>
          <h3 className='text-[#999999] text-[1.8rem] my-[2rem] font-[700]'>How we work</h3>

          <div className='flex gap-3 mr-[2rem]'>
            <Approach title='Continuous discovery'
            desc='We do users interviews with your customers or prospectives each week, so your team get constant input to their decisions. If a new question pops up, you will start getting answers from customers in less than a week.'/>

            <Approach title='Partnership'
            desc="We don't deliver a report and walk away. We work hand in hand with your team, meeting regularly to understand the newest changes in direction and burning questions that need answering."/>

            <Approach title='No hurdles'
            desc="Know how much it'll cost before you even email us. Pay with your credit card, or we can send an invoice. Pause the engagement with as little as an email. We want it to be as easy as possible to work with us."/>

            <Approach title='Build customer empathy'
            desc="Empathy with your customers doesn't happen in a day. Our work creates an ever-deepening understanding of your customers within your product teams. We produce artefacts that your teams will refer to and share again and again."/>
          </div>
        </div>
      </section>

      <section className='w-[100vw] h-[100vh] bg-black py-[5rem]'>
        <h1 className='text-white text-7xl font-[700] text-center'>Let's get <span className='focusTexts'>moving</span></h1>

        <div className='w-[93vw] h-[30rem] bg-[#131415] m-auto my-[7rem] grid grid-cols-3'>
          <PricesCard
          head="Small"
          subHead="Best for partnering with a single product team"
          ul="4 User insight packages each month"
          li1="interviews with 4 users"
          li2="Expert analysis of each interview"
          li3="Monthly team call to review and consolidate understanding"
          li4="Summary shared as an interview snapshot"
          price="€1199 per month"
          />

          <PricesCard
          head="Small"
          subHead="Best for partnering with a single product team"
          ul="4 User insight packages each month"
          li1="interviews with 4 users"
          li2="Expert analysis of each interview"
          li3="Monthly team call to review and consolidate understanding"
          li4="Summary shared as an interview snapshot"
          price="€1199 per month"
          />

          <PricesCard
          head="Large"
          subHead="Looking for even more of the good stuff?"
          ul="We can work on a custom engagement, just reach out."
          />
        </div>
      </section>
    </div>
  )
}

export default App
