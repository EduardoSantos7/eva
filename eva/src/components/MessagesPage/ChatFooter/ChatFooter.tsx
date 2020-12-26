import React from 'react';

import ImageIcon from '@material-ui/icons/Image';
import MicIcon from '@material-ui/icons/Mic';
import DescriptionIcon from '@material-ui/icons/Description';
import CameraAltIcon from '@material-ui/icons/CameraAlt';
import EmojiEmotionsIcon from '@material-ui/icons/EmojiEmotions';
import SendIcon from '@material-ui/icons/Send';

import "components/MessagesPage/ChatFooter/ChatFooter.css"
import { useChatService } from "providers/ChatServiceProvider";

export default function ChatFooter(props: any) {
	const chat = useChatService();

	const sendMessage = (event: any) => {
		console.log("Sending message")
		chat.sendMessage(props.receptorID, "Hola");
	}

	const handleKeyDown = (event: React.KeyboardEvent<HTMLDivElement>) => {
		if (event.key === 'Enter') {
			sendMessage(event)
		}
	}
	return (
		<div className="chat__footer" onKeyDown={handleKeyDown}>
			<div className="chat__footer__multimedia__icons">
				<CameraAltIcon />
				<MicIcon />
				<DescriptionIcon />
				<ImageIcon />
			</div>
			<div className="chat__footer__textarea__container">
                <textarea className="chat__footer__textarea" placeholder="Type your message..."/>
				<EmojiEmotionsIcon />
			</div>
            <div className="chat__footer__send">
				<SendIcon onClick={(e) => {sendMessage(e)}}/>
            </div>
		</div>
	);
}
