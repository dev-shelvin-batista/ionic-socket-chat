import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { Messages } from 'src/app/core/services/messages';
import { Connection } from 'src/app/intranet/connection';

@Component({
  selector: 'app-messages-chat',
  templateUrl: './messages-chat.component.html',
  styleUrls: ['./messages-chat.component.scss'],
  standalone: false,
})
export class MessagesChatComponent  implements OnInit {
  typingStatus = '';
  message = '';
  @ViewChild('scrollContainer') private myScrollContainer!: ElementRef;

  constructor(
    private modalController: ModalController,
    public connectionSer: Connection,
    public messagesSer: Messages,
  ) { }

  ngOnInit() {
    this.connectionSer.socket.on('typingResponse', (data) => {
      if(this.messagesSer.userSelected == data.user){
        this.typingStatus = data.text;
      }
      setTimeout(() => {
        this.typingStatus = '';
      }, 1000);
    });
  }

  ngAfterViewChecked() {
    this.scrollToBottom();
  }

  /**
   * Method for closing the component as modal
   */
  closeModal = () => {
    this.modalController.dismiss();
  }

  /**
   * Method for scrolling to the end
   */
  scrollToBottom(): void {
    try {
      this.myScrollContainer.nativeElement.scrollTop = this.myScrollContainer.nativeElement.scrollHeight;
    } catch(err) { }
  }

  /**
   * Method for notifying a new message
   * 
   * @param e Form event
   */
  sendMessage = () => {
    if((this.message || '').trim() != ""){
      let obj_message = {};
      const date = new Date();
      let day = date.getDate() < 10 ? `0${date.getDate()}` : date.getDate();
      let month = (date.getMonth() + 1) < 10 ? `0${(date.getMonth() + 1)}` : (date.getMonth() + 1);
      let year = date.getFullYear();
      let hour = date.getHours() < 10 ? `0${date.getHours()}` : date.getHours();
      let minute = date.getMinutes() < 10 ? `0${date.getMinutes()}` : date.getMinutes();
      let currentDate = `${year}-${month}-${day} ${hour}:${minute}`;

      let listUsers = JSON.parse(this.connectionSer.db.getItem("list_usersIonic") || "[]");
      const user = listUsers.find((user:any) => user.socketID === this.messagesSer.userSelected);

      obj_message = {
        text: this.message,
        date: currentDate,
        sender: this.connectionSer.db.getItem('userNameIonic'),
        to: this.messagesSer.userSelected
      }

      user.messages.push(obj_message)
      this.connectionSer.db.setItem('list_usersIonic', JSON.stringify(listUsers)); 

      
      this.messagesSer.messages.push(obj_message)

      this.connectionSer.socket.emit('message', obj_message);
      this.message = '';
    }
  }

}
