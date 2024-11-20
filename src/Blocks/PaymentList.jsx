import { useSelector, useDispatch } from "react-redux";
function PaymentList() {
    const dispatch = useDispatch();
    const currencies = useSelector(state => state.currencyOptions)
    const prefCurrencies = useSelector(state => state.addPref)

    const toggleClick = (item) => {
        document.getElementById(item).classList.toggle('active')
        dispatch({ type: 'ADD_PREF', payload: item });


    }
    return (<>
        <div className="flex flex-col h-fit border border-TR rounded-xl m-2 ">
            <h1 className="mx-auto my-4 text-AC font-semibold">Payment Types</h1>
            <div id="payBubles" className="h-fit flex flex-wrap w-full p-4 overflow-scroll">
                {currencies && currencies.map((item, index) => {
                    return (
                        <button key={index} id={item} onClick={() => toggleClick(item)} className="flex items-center justify-center bg-TR text-white rounded-full h-fit p-3 m-2 hover:bg-PM hover:text-SC">{item}</button>
                    )
                })}
            </div>
        </div>
        <div className="w-full border border-TR h-fit flex flex-wrap">
            {prefCurrencies && prefCurrencies.map((item, index) => {
                return (
                    <p key={index} className="bg-PM text-SC  rounded-full h-fit p-2 m-1">{item}</p>
                )
            })}

        </div>
    </>)
}
export default PaymentList;