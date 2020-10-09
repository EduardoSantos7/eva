import React, { useEffect, useState } from 'react'

import "components/MessagesPage/ChatBox/ChatBox.css";
import { ChatBoxProps } from "interfaces/ChatBoxProps";
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import { useHistory } from "react-router";

export default function ChatBox({ profile_image, profile_name, id, last_message, last_connection }: ChatBoxProps) {
    const [seen, setSeen] = useState(true)
    const [isOptionsShown, setIsOptionsShown] = useState(false);
    const history = useHistory();
    const myId = "1"

    const goToChat = () => {
        if (id) {
            history.push(`${id}`)
        }
    }

    const isMessageSeen = () => {
        if (!last_message) return;
        // select the id of the receiver
        let idToCheck = (last_message.author === id) ? myId : id
        console.log("id->", idToCheck, last_connection[idToCheck], last_message.creation_date, last_connection[idToCheck] >= last_message.creation_date);
        
        let val = last_connection[idToCheck] >= last_message.creation_date ? true : false
        setSeen(val)

    }

    const formatDateMessage = (raw_date: string) => {
        let now = new Date()
        let date = new Date(raw_date)
        const _MS_PER_DAY = 1000 * 60 * 60 * 24;
        // Discard the time and time-zone information.
        const utc1 = Date.UTC(now.getFullYear(), now.getMonth(), now.getDate());
        const utc2 = Date.UTC(date.getFullYear(), date.getMonth(), date.getDate());
        let difference = Math.floor((utc2 - utc1) / _MS_PER_DAY);


        if (difference < 1) {
            return `${date.getHours()}:${date.getMinutes() < 10 ? '0':''}${date.getMinutes()}`
        }
        else if (difference < 7) {
            return `${date.getDay()}`
        }
        else {
            return `${date.getDate()} - ${date.getMonth()}`
        }
    }

    useEffect(() => {
        isMessageSeen()
    }, [last_message]);

    return (
        <div className="chat__box" onMouseEnter={() => setIsOptionsShown(true)} onMouseLeave={() => setIsOptionsShown(false)} onClick={() => goToChat()}>
            <div className="chat__box__profile__picture">
                <img className="chat__box__profile_picture__img" src={profile_image} alt=""/>
            </div>
            <div className="chat__box__main__info">
                <div className={!seen ? "chat__box__profile__name bold_text" : "chat__box__profile__name"}>
                    {profile_name}
                </div>
                <div className="chat__box__last__message__info">
                    <div className={!seen ? "chat__box__last__message bold_text" : 'chat__box__last__message'}>
                        {last_message.content.length > 26 ? `${last_message.content.substring(0, 26)}...`: last_message.content}
                    </div>
                    <div className="chat__box__message__info__time">
                        {formatDateMessage(last_message.creation_date)}
                    </div>
                </div>
            </div>
            <div className="chat__box__message__info">
                <div className="chat__box__message__info__status">
                    {
                        !seen && !isOptionsShown && <FiberManualRecordIcon className="chat__box__message__info__status__button"/>
                    }
                    {
                        seen && !isOptionsShown &&  <img className="chat__box__message__info__status__img" src={profile_image} alt=""/>

                    }
                    {
                        isOptionsShown && <MoreHorizIcon className=""/>
                    }
                </div>
            </div>

        </div>
    )
}
