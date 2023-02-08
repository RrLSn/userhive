import { useState } from 'react'
import './App.css'
import Approach from './components/Approach'
import Footer from './components/Footer'
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

          <Approach/>
        </div>
      </section>

      <section className='w-[100vw] h-[125vh] bg-black py-[5rem]'>
        <h1 className='text-white text-7xl font-[700] text-center'>Let's get <span className='focusTexts'>moving</span></h1>

        <div className='w-[95vw] h-[34rem] bg-[#131415] m-auto'>
          <PricesCard/>
        </div>
        
        <Footer/>
      </section>
    </div>
  )
}

export default App
