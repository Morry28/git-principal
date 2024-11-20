import { useSelector, useDispatch } from "react-redux";
function GigList() {
    const dispatch = useDispatch();
    const gigs = useSelector(state => state.gigOptions)
    const prefGigs = useSelector(state => state.addGigs)

    const toggleClick = (item) => {
        document.getElementById(item).classList.toggle('active')
        dispatch({ type: 'ADD_GIGS', payload: item });


    }
    return (<>
        <div className="flex flex-col h-96 border border-TR rounded-xl m-2">
            <h1 className="mx-auto my-4 text-AC font-semibold">Gig Types</h1>
            <div id="gigBubles" className="h-fit flex flex-wrap w-full p-4 overflow-scroll">
                {gigs && gigs.map((item, index) => {
                    return (
                        <button key={index} id={item} onClick={() => toggleClick(item)} className="flex items-center justify-center bg-TR text-white rounded-full h-fit p-3 m-2 hover:bg-PM  hover:text-SC">{item}</button>
                    )
                })}
            </div>
        </div>
        <div className="w-full h-fit flex flex-wrap">
            {prefGigs && prefGigs.map((item, index) => {
                return (
                    <p key={index} className="bg-PM text-SC  rounded-full h-fit p-2 m-1">{item}</p>
                )
            })}

        </div>
    </>)
}
export default GigList;