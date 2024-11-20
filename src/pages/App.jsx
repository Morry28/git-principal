import Header from '../components/HeaderTab';
import { Routes, Route } from 'react-router-dom';
import MainPage from './MainPage';
import InteractiveApp from './InteractiveApp';
import Playground from './Playground';  
import Interview from './Interview';


function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route index path="/" element={<MainPage />} />
        <Route path="/market" element={<InteractiveApp />} />
        <Route path="/playground" element={<Playground />} />
        <Route path="/interview" element={<Interview />} />
      </Routes>

    </>
  )
}

export default App;
