import React from 'react';
import SelectedPurchase from '../Selected/SelectedPurchase';

const Selected = ({purchase}) => {
    console.log(purchase)
    return (
        <div className='max-w-[1200px]  mx-auto '>
           {
            purchase.map(player=><SelectedPurchase player={player}> </SelectedPurchase> )
           }
           
        </div>
    );
};

export default Selected;