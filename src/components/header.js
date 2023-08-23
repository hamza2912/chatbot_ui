import React from "react";
import {isMobile} from 'react-device-detect';
// import { useHistory } from 'react-router-dom';


function Header() {

    const [showNav, setshowNav] = React.useState(false);
    const [showdropdown, setshowdropdown] = React.useState(false);
    // let history = useHistory();

    React.useEffect(() => {
        if(!isMobile){
            setshowNav(true);
        }
    }, []);
    
    return (

        <header class="bg-blue-400 lg:py-10 py-6 lg:px-16 px-6 flex flex-row justify-between items-center">
            <div class="w-2/5 flex justify-start">
                <div class="logo">
                    <a href="/">
                        {/* <img src="images/logo/logo.png" alt="Logo" /> */}
                        <h1 className="text-2xl text-white font-semibold">Actontaxiscabs</h1> 
                    </a>
                </div>
            </div>
            {!showNav ? 
                <i className="fa-bars fa-solid text-lg text-white lg:hidden z-50" onClick={()=>setshowNav(!showNav)}></i> :
                <i className="fa-times fa-solid text-lg lg:hidden z-50" onClick={()=>setshowNav(!showNav)}></i>}
            {showNav ?
                <div class="lg:w-3/5 w-full lg:relative absolute lg:bg-transparent bg-white flex lg:flex-row flex-col justify-between items-center lg:h-auto h-screen font-semibold lg:text-white text-black top-0 left-0 py-12 lg:py-0 fade-in">
                    <a href="/about">ABOUT</a>
                    <a href="/services">SERVICES</a>
                    {isMobile ?
                        <>
                        <a href="/cars">CARS</a>
                        <a href="/cabs">CABS</a>
                        <a href="/mini_cabs">MINI CABS</a>
                        </>
                    : <div class="relative cursor-pointer">
                        <a onClick={()=>setshowdropdown(!showdropdown)} >CARS FLEET</a>
                        {showdropdown ? 
                        <div class='absolute w-24 flex flex-col py-4 px-2 top-5 left-0 shadow-lg fade-in'>
                            <a href="/cars">CARS</a>
                            <a href="/cabs">CABS</a>
                            <a href="/mini_cabs">MINI CABS</a>
                        </div>: null}
                    </div>}
                    <a href="/airports">AIRPORTS</a>
                    <a href="/train_stations">TRAIN STATIONS</a>
                    <a href="/contact">CONTACT</a>
                </div> : null}
        </header>

    );
}

export default Header;
