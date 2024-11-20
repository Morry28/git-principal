import heroImg from '../assets/heroImg.gif';
import Button from '../UI/Button';
import { Routes, Route } from 'react-router-dom';
import App from '../pages/App';
import {search} from '../actions';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
function Hero() {
    const dispatch = useDispatch();

    useEffect(() => {

    const text = document.getElementById('textAreaHero');

    text.addEventListener('change',()=>{
    console.log('changed');
    console.log(document.getElementById('textAreaHero').value)
    dispatch(search(document.getElementById('textAreaHero').value));
})
    },[])

    return (
        <div className="bg-PM h-full flex md:flex-row flex-col p-10">

            <div className="flexh-full md:w-1/2 w-full">
                <div className="p-14 flex flex-col h-full justify-between">

                    <div className='flex flex-col gap-4 shadow-lg p-4'>
                        <h1 className="text-5xl font-bold text-SC logoText ">Only true open market of labour in currency of people</h1>
                        <p className="text-TR text-2xl truncate text-wrap w-2/3">For every problem in world there is someone with a BTC, connect, solve</p>
                    </div>

                    <div className='flex items-center gap-4 mt-28 shadow-xl p-4'>
                        <textarea id='textAreaHero' className="w-1/2 h-12 p-2 border border-SC bg-PM rounded-lg" placeholder="Search tasks"></textarea>
                        <Button text="Search" type="secondary" to="/market" />
                        <p className='text-TR'>1,846,524 gigs avalible</p>
                    </div>


                </div>

            </div>

            <div className="flex flex-col h-full w-1/2">
                <div className='flex mx-auto self-end'>
                    <img className='w-4/5 h-auto' src={heroImg} alt='hero' />
                </div>
            </div>

        </div>
    );
}

export default Hero;
