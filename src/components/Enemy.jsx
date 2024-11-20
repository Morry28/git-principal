import { useEffect, useState } from "react";

export default function Enemy({ d }) {
    const [health, setHealth] = useState(0);
    const [percentage, setPercentage] = useState(100);

    useEffect(() => {
        if(percentage <= 0){
            alert('You have defeated the enemy');
        }
        let healthOf = d.attributes.health;
        setHealth(healthOf);
        let percentageOf = (healthOf / 100) * 100;
        setPercentage(percentageOf);
    }, [d]);


    return (
        <div className='bg-SC h-fit p-6 flex items-center gap-4'>
            <div className="flex-col flex items-center">
                <h1 className="font-bold text-lg text-PM">Shinigami</h1>
                <img src={d.image} alt='Shinigami' className='w-48 h-48 p-2 rounded-md bg-AC' />
            </div>
            <div className="flex flex-col text-PM p-4 truncate">
                <p>Attack: {d.attributes.attack}</p>
                <p>Defence: {d.attributes.defence}</p>
                <p>Evade: {d.attributes.evade}</p>
                <p>Health: {d.attributes.health}</p>
            </div>
            <div className="w-full flex flex-col">
                <p className="text-PM text-lg ml-16">Health</p>
                <div className=" flex bg-TR">
                    <span className='h-16 bg-PM flex items-center' style={{width:`${percentage}%`}}>
                    <p className="abolute ml-16">{health}</p>
                    </span>
                </div>
            </div>
  
        </div>
    );
}