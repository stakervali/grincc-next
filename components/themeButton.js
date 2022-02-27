import React, {useEffect,useState} from 'react';

export default function ThemeButton(props) {

    const [isDarkActive,setIsDarkActive] = useState(false);
    const [icon,setIcon] = useState(null);

    const lightIcon = ( <svg   className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
    </svg>);

    const darkIcon = (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" viewBox="0 0 20 20" fill="#570df8">
            <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
        </svg>
    )

    useEffect(()=>{
        if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
            setIsDarkActive(true);
        } else {

            setIsDarkActive(false);
        }
    },[]);

    useEffect(()=>{
        if(isDarkActive){
            setIcon(darkIcon);
            document.documentElement.classList.add('dark');
        }else{
            setIcon(lightIcon);
            document.documentElement.classList.remove('dark');
        }

    },[isDarkActive])

    const handleClick = ()=>{
        setIsDarkActive(!isDarkActive);
    }

    return (


        <div onClick={handleClick}
            className="w-8 h-8 my-auto dark:bg-black  bg-yellow   rounded-full flex-shrink-0">
            {icon}
        </div>
    );
}





