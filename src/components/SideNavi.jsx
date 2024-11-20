
import { useDispatch } from "react-redux";
import PaymentList from "../Blocks/PaymentList";
import GigList from "../Blocks/GigList";
function SideNavi() {
    const dispatch = useDispatch();



    return (
        <div className="side-navi h-ful w-96 bg-SC flex flex-col">

            <PaymentList />
            <GigList />

        </div>
    );
}

export default SideNavi;