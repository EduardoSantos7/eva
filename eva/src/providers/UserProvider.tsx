import React from 'react';

export const UserProviderContext = React.createContext({});

export function UserProvider(props: any) {
    const UserContext = {}

	return <UserProviderContext.Provider value={UserContext} {...props} />
}

export const useUser = () => {return React.useContext(UserProviderContext)}
