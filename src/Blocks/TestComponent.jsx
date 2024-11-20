import { useContext, useEffect, useMemo, useState } from "react"
import { ValueContext } from "../pages/Interview";

export default function TestComponent({getItems}) {
const [ state, setState] = useState([]);
const value = useContext(ValueContext);

    useEffect(() => {

        setState(prev => [...prev, getItems()]);
        console.log('TestComponent rerendered');
    }, [getItems])
  return (
    <div className="flex flex-col">
        {state}
        <p>{value.name}</p>
        <p>{value.age}</p>
        <p>{value.email}</p>

      
    </div>
  )
}