import React, { useEffect, useMemo, useState } from 'react';

import io from "socket.io-client";

import { ChatOverview } from "interfaces/ChatOverview";

let socket;

export const ChatsContext = React.createContext({ chats: [] });

export function ChatsProvider(props: any) {
	const [ chats, setChats ] = useState<[any]>();
	const [loadingChats, setLoadingChats] = useState(true);
	const ENDPOINT = 'ws://localhost:9000/';

	useEffect(() => {
		(async () => {
			socket = io(ENDPOINT);

			socket.emit('chats', '1')
			
			socket.on('chats', (chats: [ChatOverview]) => {
				setChats(chats);
			})
			
			setLoadingChats(false);
			return {chats, loadingChats};
		})();
	}, [loadingChats]);
	const value = useMemo(() => {
		return ({
			chats,
			loadingChats
		})
	}, [ chats, loadingChats ])

	return <ChatsContext.Provider value={value} {...props} />
}

export function useChats() {
	const context = React.useContext(ChatsContext)

	if (!context) {
		throw new Error("useChats should be inside the ChatsContext provider");
		
	}
	return context
}



