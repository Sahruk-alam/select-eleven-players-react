import React, { use } from 'react';
import PlayerCard from '../PlayerCard/PlayerCard';
const Available = ({playersPromise,setAvailableBalance,availableBalance,
  setPurchase,purchase}) => {
    const playersData=use(playersPromise)
    // console.log(playersData)
     
    return (
     
        <div className='max-w-[1200px] grid grid-cols-1 md:grid-cols-3 gap-4 mx-auto p-4 mt-5'>
          {
            playersData.map(player=> <PlayerCard purchase={purchase} setPurchase={setPurchase} availableBalance={availableBalance} setAvailableBalance={setAvailableBalance} player={player} ></PlayerCard>
              )
          }  
  
        </div>
    );
};

export default Available;