import React from 'react';

const SelectedPurchase = ({player,deleteData}) => {
    const handleRemove=()=>{
  deleteData(player)
    }
    return (

        <>
        <div className='rounded-2xl bg-gray-100 border border-gray-300 p-2.5 mt-4 flex justify-between items-center'>
           
           
            <div className='flex'>
            <div>
                <img className='w-[50px] h-[50px] rounded-xl' src={player.player_image} alt="" />
                </div>
                <div className='ml-3'>
                    <h3 className='font-semibold'>{player.name}</h3>
                    <p className='text-gray-500'>{player.batting_style}</p>
                </div>
            </div>
            <div>
                <img onClick={handleRemove} src="https://i.ibb.co.com/Qvrd9R8c/Frame.png" alt="" />
                </div>   
        </div>
       
        </>
        
    );
};

export default SelectedPurchase;