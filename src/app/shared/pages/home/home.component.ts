import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { MessagesChatComponent } from '../../components/messages-chat/messages-chat.component';
import { Alerts } from 'src/app/core/utils/alerts';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  standalone: false,
})
export class HomeComponent  implements OnInit {

  constructor(
    private modalController: ModalController,
    private alertSer: Alerts
  ) { }

  ngOnInit() {}

  /**
   * Metodo para seleccionar un usuario y asi mostrar sus mensajes del chat
   * @param event 
   * @param row Objeto con los datos del usuario seleccionado
   */
  selectUser = async (row:any) => {
    const modal = await this.modalController.create(
      {
        component: MessagesChatComponent,
        componentProps: {
          
        }
      }
    );
    modal.present();
    modal.onDidDismiss().then(async (data) => {
      
    });
  }

  /**
   * Método para cerrar la sesión y salir del chat
   */
  logOut = () => {
    this.alertSer.generateConfirmationAlert(
      "Confirmación", 
      "¿Desea cerrar sesión?",
      async () => {
        
      }
    )
  }

}
