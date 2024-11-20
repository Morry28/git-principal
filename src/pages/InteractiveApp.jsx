
import SideNavi from '../components/SideNavi';
import ContentList from '../components/ContentList';
import Fetcher from '../components/Fetcher';

function InteractiveApp(){

    return(
    <div className='flex bg-TR h-screen'>
        <Fetcher/>
        <SideNavi/>
        <ContentList/>
    </div>
)
}
export default InteractiveApp;