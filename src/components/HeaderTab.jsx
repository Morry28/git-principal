import { useSelector } from 'react-redux';
import Logo from '../Blocks/Logo';
import SignIn from '../Blocks/SignIn';
function Header (){
    const logged = useSelector(state => state.isLogged);
    return(
    <div className="flex w-full h-24 bg-SC justify-between">
        <div className=" p-4 w-1/3  h-full ">
            <Logo name="OpenMarket"/>
        </div>

        <div className='flex items-center justify-end p-4 w-1/3 h-full '>
        {logged? (<p className='text-TR'>Welcome {logged}</p>):<SignIn/>}
            
        </div>
        
    </div>
    )
}
export default Header;