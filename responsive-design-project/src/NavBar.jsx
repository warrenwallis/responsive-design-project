import { useEffect, useState } from "react";

const NavBar = () => {
    const [showNav, setShowNav] = useState(false);

    useEffect(()=> {
        window.addEventListener('resize', ()=>setShowNav(false))
    },[])

    return (
        <div className="flex justify-center bg-violet-100 mb-16">
            <nav className="w-full max-w-6xl mx-16 py-6 flex items-center justify-between">
                <div className="flex items-center">
                    <img 
                        className="w-36 mr-4"
                        src="https://static-task-assets.react-formula.com/899963.png"
                    />
                    hasher
                </div>
                <div className="hidden md:flex items-center text-2xl">
                    <div className="mx-3">Home</div>
                    <div className="mx-3">About</div>
                    <div className="mx-3">Contact</div>
                    <i className="fa-solid fa-magnifying-glass ml-6 text-red-600"></i>
                </div>
                {showNav ? ( 
                    <div className="bg-violet-800 flex flex-col text-violet-100 absolute top-0 right-0 h-80 w-64 rounded-bl-lg md:hidden">
                        <button
                            className="text-right" 
                            onClick={() => setShowNav(false)}>
                            <i className="fa-solid fa-circle-xmark m-4"></i>
                        </button>
                        <div className="flex flex-col justify-between h-full pt-4 pb-10 px-4 text-3xl">
                            <div className="mx-3">Home</div>
                            <div className="mx-3">About</div>
                            <div className="mx-3">Contact</div>
                        </div>
                    </div>
                    ) : ( 
                    <button
                        className="md:hidden"
                        onClick={() => setShowNav(true)}
                    >
                        <i className="fa-solid fa-bars"></i>
                    </button>)
                }
            </nav>
        </div>
    );
};

export default NavBar;