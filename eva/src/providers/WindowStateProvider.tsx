import React, { useEffect, useState } from 'react';

const defaultWindowState = {
    isSmallScreen: window.innerWidth < 900
}

export const WindowStateProviderContext = React.createContext(defaultWindowState);

export function WindowStateProviderProvider(props: any) {
    const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth < 900);
    
    let WindowStateContext = {
        isSmallScreen: isSmallScreen
    }

	useEffect(() => {
        window.addEventListener("resize", () => {
            const isSmallScreenAuxiliar = window.innerWidth < 900;
            if (isSmallScreenAuxiliar !== isSmallScreen) setIsSmallScreen(isSmallScreenAuxiliar);
            console.log(window.innerWidth,  isSmallScreen);

            WindowStateContext = {
                isSmallScreen: isSmallScreen
            }
            
        }, false);
        
    }, [isSmallScreen]);

	return <WindowStateProviderContext.Provider value={WindowStateContext} {...props} />
}

export const useWindowState = () => {return React.useContext(WindowStateProviderContext)}
