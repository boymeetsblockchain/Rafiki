import mint from "../assets/mint1.png"
import{FaArrowRight,FaArrowLeft,FaPlay} from "react-icons/fa"
import { useState } from "react"
function Hero() {
    const[value,setValue]= useState(1)

    const handleCount =()=>{
        setValue(value +1 )
    }
  return (
    <div className="flex flex-col justify-center  text-center items-center mx-auto rounded-lg text-white h-full max-w-[400px]
    lg:h-[700px] lg:w-[420px] px-10 py-2 bg-[#262626] my-4">
       <div className="mint mb-10">
        <img src={mint} alt="" className="h-60  mt-12 lg:-mt-16"/>
       </div>
       <div className="minted">
         <h1 className="text-2xl lg:text-4xl  font-bold my-2">0/5555</h1>
         <p>MINTED</p>
          <p className="mb-6 leading-9 font-bold mt-10">PRICE 1 CANTO</p>
       </div>
       <div className="mint-form flex items-center justify-center mb-10">
         <div className="rounded-full h-6 w-6 bg-white mr-3">
          
         </div>
          <input type="number" onChange={handleCount} value={value} className='bg-[#3c3c3c] py-2 text-center  font-bold text-xl px-2 lg:px-4 rounded-md'/>
          <div className="ml-4">
            <FaPlay fill="white" onClick={handleCount} className='cursor-pointer'/>
          </div>
       </div>
       <div className="connect mb-10">
        <h1 className="text-2xl font-bold mb-5 lg:mb-10 ">MINT 1 CANTO</h1>
        <button className='bg-[#3c3c3c] rounded-md w-full  px-8 py-1 lg:py-2 lg:px-10  font-bold text-center inline-block text-sm lg:text-2xl'>CONNECT FIRST</button>
       </div>
    </div>
  )
}

export default Hero