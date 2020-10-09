import React, { useState } from 'react'

import "components/MessagesPage/ChatBox/ChatBox.css";
import { ChatBoxProps } from "interfaces/ChatBoxProps";
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import { useHistory } from "react-router";

export default function ChatBox({ profile_image, profile_name, id }: ChatBoxProps) {
    let seen = true;
    const [isOptionsShown, setIsOptionsShown] = useState(false);
    const history = useHistory();

    const goToChat = () => {
        if (id) {
            history.push(`${id}`)
        }
    }

    return (
        <div className="chat__box" onMouseEnter={() => setIsOptionsShown(true)} onMouseLeave={() => setIsOptionsShown(false)} onClick={() => goToChat()}>
            <div className="chat__box__profile__picture">
                <img className="chat__box__profile_picture__img" src={profile_image} alt=""/>
            </div>
            <div className="chat__box__main__info">
                <div className="chat__box__profile__name">
                    {profile_name}
                </div>
                <div className="chat__box__last__message__info">
                    <div className="chat__box__last__message">
                        Eduardo: Hola  estas...
                    </div>
                    <div className="chat__box__message__info__time">
                        1:35
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
