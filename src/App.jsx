import './App.css'
import navImg from './assets/logo.png'
import dollarImg from './assets/DoubleDollar.png'
import '../public/player.json'
import Available from './component/AvailablePlayers/Available'
import Selected from './component/SelectedPlayer/Selected'
import { Suspense, useState } from 'react'

const fetchPlayers=async()=>{
const res=await fetch('/player.json')
return res.json();
}
const playersPromise=fetchPlayers();
function App() {
  
  const [toggle,setToggle]=useState(true)
  const [availableBalance,setAvailableBalance]=useState(600000)
  const [purchase,setPurchase]=useState([])

  return (
    <>
    {/* nav bar section     */}
    <div className="navbar max-w-[1200px] mx-auto">
  <div className="flex-1">
    <a className="btn btn-ghost text-xl"><img className='text-white' src={navImg} alt="" /></a>
  </div>
  <div className="flex">
    <span className='mr-2 font-semibold'>{availableBalance}</span>
    <span className='mr-2'>Coin</span>
    <img src={dollarImg} alt="" />
    
  </div>
</div>
{/* available bar */}
<div className='max-w-[1200px] mx-auto mt-5 flex justify-between items-center'>
  <h2 className='font-bold text-2xl'>{toggle? "Available Players":`Selected Player (${purchase.length}/6)`}</h2>
  <div >
    <button onClick={()=>setToggle(true)} className={`border-1 px-3 py-1  rounded-l-lg border-r-0 border-gray-300 font-semibold 
      ${toggle===true?'bg-[#E7FE29]':''}`}>Available</button>
    <button onClick={()=>setToggle(false)} className={`border-1 px-3 py-1  rounded-r-lg border-l-0 border-gray-300 text-[#13131380]
      ${toggle===false?'bg-[#E7FE29]':''}`}>Selected <span>({purchase.length})</span></button>
  </div>
</div>
{
 toggle===true? <Suspense fallback={<span className="loading justify-center loading-spinner loading-xl"></span>}>
  <Available purchase={purchase} setPurchase={setPurchase} availableBalance={availableBalance} 
  setAvailableBalance={setAvailableBalance}
   playersPromise={playersPromise}></Available>
</Suspense> : <Selected purchase={purchase}></Selected>
}



    </>
  )
}

export default App
