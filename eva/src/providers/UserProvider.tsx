import React from 'react';

export const UserProviderContext = React.createContext(null);

export function UserProvider(props: any) {
    const UserContext = null

	return <UserProviderContext.Provider value={UserContext} {...props} />
}

export const useUser = () => {return React.useContext(UserProviderContext)}
