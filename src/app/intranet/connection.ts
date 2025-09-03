import { Injectable } from '@angular/core';
import { io, Socket } from 'socket.io-client';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class Connection {
  db: Storage = null as unknown as Storage;  
  socket: Socket = null as unknown as Socket;

  constructor() { }

  /**
   * Method for connecting to local storage. In addition, values are initialized if they have not been created, and initial values for states are created.
   * @returns Promise with local storage data
   */
  connectDB = async(): Promise<any> => {
    return new Promise(async (resolve) => {
      try {
        this.db = localStorage;

        // Check if the values exist in the browser's local storage to initialize them. This happens when the app is opened for the first time.
        if(this.db.getItem("userNameIonic") === '[]' || this.db.getItem("userNameIonic") === null){
          this.db.setItem("userNameIonic", "");
        }
        if(this.db.getItem("list_usersIonic") === '[]' || this.db.getItem("list_usersIonic") === null){
          this.db.setItem("list_usersIonic", JSON.stringify([]));
        }
        resolve(this.db);     
      } catch (e) {
        resolve(null)
      }
    });
  }

  /**
   * Method for initiating connection to the socket server
   */
  connectSocketCliente = () => {
    this.socket = io(environment.SOCKET, {transports: ['websocket'],});
  }
}
