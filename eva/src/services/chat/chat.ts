import io from "socket.io-client";


const ENDPOINT = 'ws://localhost:9000/';

export default class ChatService {
    private socket: any;

    constructor(private receptor: string) {
        this.socket = io(ENDPOINT);
    }

    public getChats = () => {
        this.socket.emit('getChats', '1')
        
        return new Promise((resolve, _reject) => {
            this.socket.on('chatsResponse', (chats_list: string) => {
                console.log(JSON.parse(chats_list));
                let chats_parsed = JSON.parse(chats_list);
                console.log(chats_parsed);
                this.sendMessage("gooool")
                resolve(chats_parsed);
            });
            
        })
        
    }

    public sendMessage = (message: string) => {
        console.log("viendo " + message)
        this.socket.emit('postMessage', message)
    }
}