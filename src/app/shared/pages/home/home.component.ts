import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { MessagesChatComponent } from '../../components/messages-chat/messages-chat.component';
import { Alerts } from 'src/app/core/utils/alerts';
import { Connection } from 'src/app/intranet/connection';
import { ActivatedRoute, Router } from '@angular/router';
import { Messages } from 'src/app/core/services/messages';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  standalone: false,
})
export class HomeComponent  implements OnInit {
  listUsers:any = [];

  constructor(
    private modalController: ModalController,
    public connectionSer: Connection,
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private alertSer: Alerts,
    private messagesSer: Messages
  ) { }

  ngOnInit() {
    this.generateUsers();

    // Event socket for new or existing user logging in
    this.connectionSer.socket.on('newUserResponse', (data) => {
      
      let list = JSON.parse((this.connectionSer.db.getItem("list_usersIonic") || "[]"));
      data.list.map((item:any) => {
        const exist:any = list.find((user:any) => user.socketID === item.userName);
        if(!exist){
          list.push({
            userName: item.userName, socketID: item.socketID, new_messages: 0, online: item.online, messages: []
          })
        } else {
          exist.online = item.online;
        }
      });
      const user = list.find((user:any) => user.socketID === data.user.userName);
      if(user){
        user.online = data.user.online
      }else{
        list.push({
          userName: data.user.userName, socketID: data.user.socketID, new_messages: 0, online: data.user.online, messages: []
        })
      }
      this.listUsers = [...list];
      this.connectionSer.db.setItem('list_usersIonic', JSON.stringify(list));  
     
    });

    // Socket event for receiving a new message
    this.connectionSer.socket.on(`messageResponse-${this.connectionSer.db.getItem("userNameIonic")}`, (data) => {
      let list = JSON.parse(this.connectionSer.db.getItem("list_usersIonic") || "[]");
      
      const user = list.find((user:any) => user.socketID === data.sender);

      if(this.messagesSer.userSelected === ""){
        user.new_messages += 1
      }

      user.messages.push({
        text: data.text,
        date: data.date,
        sender: data.sender,
        to: data.to
      });
      this.messagesSer.messages = [...user.messages]
      
      this.connectionSer.db.setItem('list_usersIonic', JSON.stringify(list));   
      this.listUsers = [...list];
    });
  }

  /**
   * Method for selecting a user and displaying their chat messages
   * @param event 
   * @param row Object with the selected user's data
   */
  selectUser = async (row:any) => {
    this.messagesSer.userSelected = row.socketID;

    row.new_messages = 0;
    
    let listUsers = JSON.parse(this.connectionSer.db.getItem("list_usersIonic") || "[]");

    listUsers.map((item:any) => {
      if(item.socketID == this.messagesSer.userSelected) {
        item.new_messages = 0;
        this.messagesSer.messages = [...item.messages]
      }
    })
  
    this.connectionSer.db.setItem('list_usersIonic', JSON.stringify(listUsers));   
    this.listUsers = [...listUsers];

    const modal = await this.modalController.create(
      {
        component: MessagesChatComponent,
        componentProps: {
          
        }
      }
    );
    modal.present();
    modal.onDidDismiss().then(async (data) => {    
      this.messagesSer.userSelected = '';  
      this.messagesSer.messages = [];
    });
  }

  /**
   * Method for loading the list of users saved in localStorage
   */
  generateUsers = () => {
    let listUsers = this.connectionSer.db.getItem("list_usersIonic") || "[]";
    listUsers = JSON.parse(listUsers);
    this.listUsers = [...listUsers]
  }

  /**
   * Method for logging out and exiting the chat
   */
  logOut = () => {
    this.alertSer.generateConfirmationAlert(
      "Confirmación", 
      "¿Desea cerrar sesión?",
      async () => {
        this.connectionSer.socket.emit('disconnectUser', { userName: this.connectionSer.db.getItem("userNameIonic"), socketID: this.connectionSer.db.getItem("userNameIonic") });
        this.connectionSer.db.removeItem('userNameIonic');
        this.router.navigate(['/login'], { relativeTo: this.activatedRoute });
      }
    )
  }
}
