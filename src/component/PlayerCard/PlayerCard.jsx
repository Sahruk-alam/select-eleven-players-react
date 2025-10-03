import React, { useState } from "react";
import groupImg from "../../assets/Group.png";
import vector from "../../assets/Vector.png";
import { toast } from "react-toastify";
const PlayerCard = ({ player, setAvailableBalance, availableBalance,setPurchase,purchase }) => {
  const [Selected, setSelected] = useState(false);
// console.log('player data',player)
  const handleSelected = (parameter) => {
    if(availableBalance<parameter.price.split(",").join("")){
      toast('No coins avaiable')
      return;
    }
    if(purchase.length===6){
      toast('Already 6 player done');
      return;
    }
      setSelected(true);
      setAvailableBalance(availableBalance - parseInt(parameter.price.split(",").join("")));
      setPurchase([...purchase,parameter])
      toast('Player purchase')
  };
  return (
    <div>
      <div key={player.id} className="card border border-gray-200 shadow-sm">
        <figure className="p-3">
          <img
            className="rounded-2xl object-cover"
            src={player.player_image}
            alt="Shoes"
          />
        </figure>
        <div className="card-body ">
          <div className="flex gap-2">
            <img className="h-5" src={groupImg} alt="" />
            <h2 className="card-title ">{player.name}</h2>
          </div>
          <div className="flex justify-between">
            <div className="flex gap-2 items-center ">
              <img className=" h-4 " src={vector} alt="" />
              <h3 className="text-gray-500">{player.country}</h3>
            </div>
            <button className="bg-gray-200 p-1.5 rounded-md">
              {player.playing_role}
            </button>
          </div>
          <hr className="border-gray-300 my-2" />
          <h3 className="font-bold">Rating {player.rating}</h3>
          <div className="flex justify-between">
            <h3 className="font-semibold">{player.batting_style}</h3>
            <h3 className="text-gray-500">{player.bowling_style}</h3>
          </div>
          <div className="flex justify-between">
            <h3 className="font-semibold">Price :$ {player.price} </h3>
            <button
              disabled={Selected}
              onClick={() => {handleSelected(player)}}
              className={`border border-gray-300 px-1.5 rounded-md text-[14px] 
              ${Selected ? "bg-gray-400 cursor-not-allowed" : "hover:bg-gray-300"}`}>
              {Selected ? "Selected" : "Choose Player"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlayerCard;
