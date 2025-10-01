import './App.css'
import navImg from './assets/logo.png'
import dollarImg from './assets/DoubleDollar.png'
import '../public/player.json'
import Available from './component/AvailablePlayers/Available'
import Selected from './component/SelectedPlayer/Selected'
import { Suspense } from 'react'

const fetchPlayers=async()=>{
const res=await fetch('/player.json')
return res.json();
}
function App() {
  const playersPromise=fetchPlayers();
  return (
    <>
    <div className="navbar max-w-[1200px] mx-auto">
  <div class="flex-1">
    <a class="btn btn-ghost text-xl"><img className='text-white' src={navImg} alt="" /></a>
  </div>
  <div class="flex">
    <span className='mr-2'>6000000</span>
    <span className='mr-2'>Coin</span>
    <img src={dollarImg} alt="" />
    
  </div>
</div>


<Suspense fallback={<span className="loading loading-spinner loading-xl"></span>}>
  <Available playersPromise={playersPromise}></Available>
</Suspense>

{/* <Selected></Selected> */}
    </>
  )
}

export default App
