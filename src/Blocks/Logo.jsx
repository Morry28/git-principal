
import logo from '../assets/logo.png';
import { Link } from 'react-router-dom';

function Logo({name}){
    return(
        <Link to='/' className="flex items-center h-full gap-4" >
            <img src={logo} alt="logo" className="w-12 h-fit"/>
            <h1 className='text-PM font-semibold text-2xl logoText'>{name}</h1>

        </Link>
    )
}
export default Logo;