import io from "socket.io-client";


const ENDPOINT = 'ws://localhost:9000/';

export default class ChatService {
    private sockets: any = {};
    private general_socket: any = null;

    constructor(private emisor_id?: string) {
        if (emisor_id) {
            this.general_socket = this.newSocket();
        }
    }

    private newSocket = () => {
        return io(ENDPOINT);
    }

    public addNewSocket = (receptor_id: string) => {
        if (this.sockets.hasOwnProperty(receptor_id)) {
            console.warn("Socket for this receptor already exists");
            return;
        }
        this.sockets[receptor_id] = this.newSocket()
    }

    public getChats = () => {
        if (!this.general_socket) {
            console.warn("Id was not set so it's not possible to get chats");
            return
        }

        this.general_socket.emit('getChats', '1')
        
        return new Promise((resolve, _reject) => {
            this.general_socket.on('chatsResponse', (chats_list: string) => {
                let chats_parsed = JSON.parse(chats_list);
                resolve(chats_parsed);
            });
            
        })
        
    }

    public sendMessage = (receptor_id: string, message: string) => {
        if (!this.sockets.hasOwnProperty(receptor_id)) {
            console.warn("Receptor was not found in the current channels", this.sockets);
            return;
        }
        this.sockets[receptor_id].emit('postMessage', receptor_id, message)
    }
}