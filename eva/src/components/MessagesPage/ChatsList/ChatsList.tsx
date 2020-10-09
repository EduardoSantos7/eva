import React from 'react'

import "components/MessagesPage/ChatsList/ChatsList.css";
import ChatBox from "components/MessagesPage/ChatBox/ChatBox";

export default function ChatsList() {
    return (
        <div className="chats__list">
            <ChatBox profile_image="https://scontent.fpbc1-1.fna.fbcdn.net/v/t1.0-9/120801781_10218339207017802_7936581300890444311_o.jpg?_nc_cat=105&_nc_sid=84a396&_nc_eui2=AeH9V4kGYLuU4F-xIeaJcMoxEEW2NfE_-zkQRbY18T_7OYcsyEUd06B5JepUQGjt55I&_nc_ohc=Zso_hCbj9NMAX_Hk9dy&_nc_oc=AQlAK6sUN_rJxWXRylRh9910UsNQ6n4pI2lCbcu2t7UrPheLNJEgiaXekX5ehrkMFADRG8GRuye_z1dGi6Zjf5Xf&_nc_ht=scontent.fpbc1-1.fna&oh=28a02f1ee928b45f3686c7e45a9bfa5f&oe=5FA0054D" profile_name="Eduardo Luis Santos" id="1" />
            <ChatBox profile_image="https://scontent.fpbc1-1.fna.fbcdn.net/v/t1.0-9/12592504_10205937861392689_1840704728050943129_n.jpg?_nc_cat=100&_nc_sid=09cbfe&_nc_eui2=AeGJQ7hVT3jzzdil5RE9xmtOw8e2erRkHZ7Dx7Z6tGQdng4cKI2oSzTYbmnvpAbU9I0&_nc_ohc=ePoP6LSl2c4AX-4iwpT&_nc_oc=AQmlbKDzbMWGKmep9ZDmTmMMPw0WSL6EJ6hKb4OD1fzONj-W6d0wblaKlAq1MUznmTIGkKxHssP308p1v4nqdbCS&_nc_ht=scontent.fpbc1-1.fna&oh=4f33dcca64cad4f2bbf8e1c911b3d1e5&oe=5FA4F0BD" profile_name="Sariith Xilena" id="2" />
        </div>
    )
}
