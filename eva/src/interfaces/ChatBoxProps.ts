import { Message } from "interfaces/Message";

export interface ChatBoxProps {
    profile_image: string;
    profile_name: string;
    id: string;
    last_message: Message;
    last_connection: any
}