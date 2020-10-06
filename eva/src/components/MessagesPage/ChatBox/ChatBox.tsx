import React, { useState } from 'react'

import "components/MessagesPage/ChatBox/ChatBox.css";
import { ChatBoxProps } from "interfaces/ChatBoxProps";
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';

export default function ChatBox({ profile_image, profile_name, messages }: ChatBoxProps) {
    let seen = false;
    const [isOptionsShown, setIsOptionsShown] = useState(false);
    return (
        <div className="chat__box" onMouseEnter={() => setIsOptionsShown(true)} onMouseLeave={() => setIsOptionsShown(false)}>
            <div className="chat__box__profile__picture">
                <img className="chat__box__profile_picture__img" src="https://scontent.fpbc1-1.fna.fbcdn.net/v/t1.0-9/120801781_10218339207017802_7936581300890444311_o.jpg?_nc_cat=105&_nc_sid=84a396&_nc_eui2=AeH9V4kGYLuU4F-xIeaJcMoxEEW2NfE_-zkQRbY18T_7OYcsyEUd06B5JepUQGjt55I&_nc_ohc=Zso_hCbj9NMAX_Hk9dy&_nc_oc=AQlAK6sUN_rJxWXRylRh9910UsNQ6n4pI2lCbcu2t7UrPheLNJEgiaXekX5ehrkMFADRG8GRuye_z1dGi6Zjf5Xf&_nc_ht=scontent.fpbc1-1.fna&oh=28a02f1ee928b45f3686c7e45a9bfa5f&oe=5FA0054D" alt=""/>
            </div>
            <div className="chat__box__main__info">
                <div className="chat__box__profile__name">
                    Eduardo Luis Santos
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
                        seen && !isOptionsShown &&  <img className="chat__box__message__info__status__img" src="https://scontent.fpbc1-1.fna.fbcdn.net/v/t1.0-9/120801781_10218339207017802_7936581300890444311_o.jpg?_nc_cat=105&_nc_sid=84a396&_nc_eui2=AeH9V4kGYLuU4F-xIeaJcMoxEEW2NfE_-zkQRbY18T_7OYcsyEUd06B5JepUQGjt55I&_nc_ohc=Zso_hCbj9NMAX_Hk9dy&_nc_oc=AQlAK6sUN_rJxWXRylRh9910UsNQ6n4pI2lCbcu2t7UrPheLNJEgiaXekX5ehrkMFADRG8GRuye_z1dGi6Zjf5Xf&_nc_ht=scontent.fpbc1-1.fna&oh=28a02f1ee928b45f3686c7e45a9bfa5f&oe=5FA0054D" alt=""/>

                    }
                    {
                        isOptionsShown && <MoreHorizIcon className=""/>
                    }
                </div>
            </div>

        </div>
    )
}
