import { useMemo, useRef, useEffect, useState, createRef } from 'react';
import TabBlock from '../Blocks/TabBlock';
import shinigami from '../assets/shinigami.png';
import samurai from '../assets/samurai.png';
import ninja from '../assets/ninja.png';
import monk from '../assets/monk.png';
import Enemy from '../components/Enemy';
import Action from '../components/Action';

export default function Playground() {
    const data = useMemo(() => {
        return [
            { type: 'Samurai', image: samurai, attributes: { attack: 7, defence: 5, evade: 3, health:20 } },
            { type: 'Ninja', image: ninja, attributes: { attack: 6, defence: 2, evade: 8,health:15 } },
            { type: 'Monk', image: monk, attributes: { attack: 5, defence: 3, evade: 6,health:20 } },
        ];
    }, []);
    const enemy = useMemo(() => {
        return [
            { type: 'Shinigami', image: shinigami, attributes: { attack: 90, defence: 70, evade: 50, health:100} },
        ];
    }, []);

    const references = useRef(data.map(() => createRef()));
    const [points, setPoints] = useState(Array(data.length).fill(null));

    useEffect(() => {
        console.log("Ref values:");
        console.log(references.current);
    }, []);

    const sendPoints = (counts, index) => {
        const targetIndex = parseInt(references.current[index].current.value, 10);
        if (!isNaN(targetIndex) && targetIndex >= 0 && targetIndex < data.length) {
            setPoints(points => {
                const newPoints = [...points];
                newPoints[targetIndex] += counts;
                return newPoints;
            });
        }
    };

    return (
        <>
            <div className='w-full h-fit bg-PM'>
                <div>
                    {enemy.map((e, index) => (
                        <Enemy d={e} key={index} />
                    ))}
                </div>
            </div>
            <div className="grid md:grid-cols-[repeat(4,minmax(150px,500px))] grid-cols-1 gap-x-6 gap-y-12 p-10 bg-PM text-PM">
                {
                    data.map((d, index) => (
                        <TabBlock
                            key={index}
                            ref={references.current[index]}
                            d={d}
                            index={index}
                            counts={points[index]}
                            increment={(counts) => sendPoints(counts, index)}
                        />
                    ))
                }
            </div>
            <Action enemy={enemy} points={points}/>
        </>
    );
}