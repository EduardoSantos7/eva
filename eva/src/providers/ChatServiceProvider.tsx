import React from 'react';
import ChatService from "services/chat/chat";

const chatService = new ChatService();

export const ChatServiceProviderContext = React.createContext(chatService);

export function ChatServiceProvider(props: any) {
    const chatService = new ChatService(props.id);
    console.log("soy props: ", props)
	return <ChatServiceProviderContext.Provider value={chatService} {...props} />
}

export const useChatService = () => {return React.useContext(ChatServiceProviderContext)}
