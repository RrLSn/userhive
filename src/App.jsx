import { useState } from 'react'
import './App.css'
import Approach from './components/Approach'
import Footer from './components/Footer'
import PricesCard from './components/PricesCard'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="w-[100vw]">
      <section className='w-[100%] lg:h-[95vh] h-[430vh] bg-[#131415] text-white px-[2rem] py-[7rem]'>
        <h1 className='lg:text-7xl text-4xl font-[700] lg:w-[70rem] w-[24rem]'>A <span className='focusText'>turn-key</span> approach to continuous user discovery</h1>
        <p className='text-[#999999] lg:text-[1.2rem] my-[2rem]'>You've got a lot to take on, so we take user research off your plate.</p>

        <div>
          <h3 className='text-[#999999] text-[1.8rem] my-[2rem] font-[700]'>How we work</h3>

          <Approach/>
        </div>
      </section>

      <section className='w-[100%] lg:h-[125vh] h-[max-content] bg-black py-[5rem]'>
        <h1 className='text-white lg:text-7xl text-4xl font-[700] text-center'>Let's get <span className='focusTexts'>moving</span></h1>

        <div className='w-[95vw] lg:h-[34rem] h-[max-content] bg-[#131415] m-auto'>
          <PricesCard/>
        </div>
        
        <Footer/>
      </section>
    </div>
  )
}

export default App
