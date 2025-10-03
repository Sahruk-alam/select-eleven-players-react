import React from 'react';
import SelectedPurchase from '../Selected/SelectedPurchase';

const Selected = ({purchase,deleteData,setToggle}) => {
    console.log(purchase)
    return (
        <div className='max-w-[1200px]  mx-auto '>
           {
            purchase.map(player=><SelectedPurchase deleteData={deleteData} player={player}> </SelectedPurchase> )
           }
           
           <button onClick={()=>setToggle(true)} className='btn text-white rounded-xl bg-green-700 mt-24 ml-11'>Add more</button>
        </div>
    );
};

export default Selected;