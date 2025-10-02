import React, { use } from 'react';
import groupImg from '../../assets/Group.png'
import vector from '../../assets/Vector.png'
const Available = ({playersPromise}) => {
    const playersData=use(playersPromise)
    console.log(playersData)
    return (
        <div className='max-w-[1200px] grid grid-cols-1 md:grid-cols-3 gap-4 mx-auto p-4 mt-5'>
          {
            playersData.map(player=> 
              <div key={player.id} className="card border border-gray-200 shadow-sm">
  <figure className='p-3'>
    <img className='rounded-2xl object-cover'
      src={player.player_image}
      alt="Shoes" />
  </figure>
  <div className="card-body ">
    <div className='flex gap-2'>
      <img className='h-5' src={groupImg} alt="" />
      <h2 className="card-title ">{player.name}</h2>
    </div>
  <div className='flex justify-between'>
  <div className='flex gap-2 items-center '>
    <img className=' h-4 ' src={vector} alt="" />
    <h3 className='text-gray-500'>{player.country}</h3>
  </div>
  <button className='bg-gray-200 p-1.5 rounded-md'>{player.playing_role}</button>
  </div>
    <hr className="border-gray-300 my-2" />
    <h3 className='font-bold'>Rating {player.rating}</h3>
    <div className='flex justify-between'>
      <h3 className='font-semibold'>{player.batting_style}</h3>
      <h3 className='text-gray-500'>{player.bowling_style}</h3>
    </div>
    <div className='flex justify-between'>
      <h3 className='font-semibold'>Price :$ {player.price} </h3>
      <button className='border border-gray-300 px-1.5 rounded-md
      hover:bg-gray-300 text-[14px]'>Choose Player</button>
    </div>
  </div>
</div> )
          }  
  
        </div>
    );
};

export default Available;