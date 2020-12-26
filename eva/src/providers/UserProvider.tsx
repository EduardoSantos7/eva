import React from 'react';
import { User } from "interfaces/User";

export const UserProviderContext = React.createContext({
        profile_image: 'https://scontent-qro1-1.xx.fbcdn.net/v/t1.0-9/73322867_10215714562683334_4657912815858745344_o.jpg?_nc_cat=108&ccb=2&_nc_sid=09cbfe&_nc_eui2=AeHlxT3E8FApkux4yetzlwRrbQeVi3TQBYNtB5WLdNAFg53UAFOdVwQjG2356MkW-zA&_nc_ohc=-RjLdWQgHSUAX8puhth&_nc_ht=scontent-qro1-1.xx&oh=c3f2193cf56e3cd62e8c056bd6ad0c34&oe=5FCD753F',
        profile_name: 'Eduardo Luis',
        id: '1',   
    });

export function UserProvider(props: any) {
     const UserContext: User = {
         profile_image: 'https://scontent-qro1-1.xx.fbcdn.net/v/t1.0-9/73322867_10215714562683334_4657912815858745344_o.jpg?_nc_cat=108&ccb=2&_nc_sid=09cbfe&_nc_eui2=AeHlxT3E8FApkux4yetzlwRrbQeVi3TQBYNtB5WLdNAFg53UAFOdVwQjG2356MkW-zA&_nc_ohc=-RjLdWQgHSUAX8puhth&_nc_ht=scontent-qro1-1.xx&oh=c3f2193cf56e3cd62e8c056bd6ad0c34&oe=5FCD753F',
         profile_name: 'Eduardo Luis',
         id: '1'
        }

	return <UserProviderContext.Provider value={UserContext} {...props} />
}

export const useUser = () => {return React.useContext(UserProviderContext)}
