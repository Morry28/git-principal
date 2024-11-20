import { createContext, useCallback, useContext, useEffect, useMemo, useRef, useState } from 'react';

const data = {
  GET: { getServer: 'this is exmaple of doc', getAllServers: 'this is more powefull', getFucked: 'yeah..' },
  POST: { changes: "server cgages" },
  PUT: { YAML: 'put yaml up in your ass' },
  DELETE: { deleteServer: 'with suib also' }
}

export default function Interview() {
  const categories = useMemo(() => {
    return Object.keys(data)
  },[])


  return (<>
    <div className='flex w-full'>
      <div className='flex flex-col bg-gray-500 w-1/6 h-screen'>
        <div>
          <h1>Docs REST API</h1>
        </div>
        {
          categories.map((item, key) => (
            <div className='flex flex-col gap-4 border-b border-gray-800 text-white'>
              <details className='flex flex-col' >
                <summary className='cursor-pointer p-2 bg-gray-600'>{item}</summary>
                <div className='flex flex-col items-start pl-16 w-full gap-2 py-4'>
                {
                  Object.keys(data[item]).map((i,key)=><button className='hover:text-gray-900'>{"> "}{i}</button>)
                }
                </div>
              </details>
            </div>
          ))
        }


      </div>
      <div className='flex flex-col'>

      </div>
    </div>



  </>)
}

