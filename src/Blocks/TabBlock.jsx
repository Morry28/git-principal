import { forwardRef, useEffect, useState } from 'react';

const TabBlock = forwardRef(({ d, index, counts, sendPoints }, ref) => {
    const [localCounts, setLocalCounts] = useState(0);

    const increment = () => {
        setLocalCounts(n => n + 1);
    };

    useEffect(() => {
        console.log("RERENDERED");
    }, []);

    return (
        <div key={index} id='countTab' className="bg-SC rounded-lg grid-item h-fit p-6 flex flex-col items-center gap-2">
            <p>{d.type}</p>
            <img src={d.image} alt={d.type} className='w-24 h-24 p-2 rounded-md bg-PM' />
            <p>Attack: {d.attributes.attack}</p>
            <p>Defence: {d.attributes.defence}</p>
            <p>Evade: {d.attributes.evade}</p>
            <p className='mt-6'>Hired: {localCounts}</p>
            <button className='p-4 bg-PM text-SC hover:bg-AC' onClick={increment}>Hire</button>
        </div>
    );
});

export default TabBlock;