import React from 'react';

import ImageIcon from '@material-ui/icons/Image';
import MicIcon from '@material-ui/icons/Mic';
import DescriptionIcon from '@material-ui/icons/Description';
import CameraAltIcon from '@material-ui/icons/CameraAlt';
import EmojiEmotionsIcon from '@material-ui/icons/EmojiEmotions';
import SendIcon from '@material-ui/icons/Send';

import "components/MessagesPage/ChatFooter/ChatFooter.css"

export default function ChatFooter() {
	return (
		<div className="chat__footer">
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
                <SendIcon/>
            </div>
		</div>
	);
}
