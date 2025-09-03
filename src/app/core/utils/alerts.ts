import { Injectable } from '@angular/core';
import { AlertController, LoadingController, ToastController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class Alerts {
  loading: any;

  constructor(
    private alertController: AlertController, 
    private loadingController: LoadingController,
    private toastController: ToastController
  ){}
  
   /**
   * Method for generating an alert with a message
   * 
   * @param {string} header         Title to display
   * @param {string} message    Description
   * @param {Function} fnt_ok  Method to be executed on the modal button click event before closing
   */
  generateSimpleAlert = async (header: string, message: string, fnt_ok: Function = () => {}) => {
    const alert = await this.alertController.create({
      header,
      message,
      mode: 'ios',
      buttons: [
        {
          text: 'Ok',
          handler: async () => {
            await fnt_ok();
          }
        }
      ]
    });
  
    await alert.present();
  }

  /**
   * Method for generating a confirmation alert
   * 
   * @param {string} header         Title to display
   * @param {string} message    Description
   * @param {Function} fnt_ok  Method to be executed when the accept button is clicked before the alert closes.
   * @param {Function} fnt_cancel Method to be executed when the cancel button is clicked before the alert closes
   */
  generateConfirmationAlert = async (header: string, message: string, fnt_ok: Function = () => {}, fnt_cancel: Function = () => {}) => {
    const alert = await this.alertController.create({
      header,
      message,
      mode: 'ios',
      buttons: [
        {
          text: 'Ok',
          handler: async () => {
            await fnt_ok()
          }
        },
        {
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'secondary',
          handler: async () => {
            await fnt_cancel()
          }
        }
      ]
    });
  
    await alert.present();
  }
  
  /**
   * Display a modal with a loading indicator and a message while an action is being performed
   * 
   * @param {string} message    Message to display
   */
  generateLoading = async (message: string = "Loading...") => {
    this.loading = await this.loadingController.create({
      message,
      spinner: 'bubbles',
      mode: 'ios',
    });
    await this.loading.present();    
  }

  /**
   * Close the loading modal
   */
  closeLoading = async () => {
    await this.loading.dismiss();
  }

  /**
   * Generate an on-screen notification with a message
   * 
   * @param message Message to display
   */
  generateNotification = async(message: string) => {
    const toast = await this.toastController.create({
      message,
      duration: 1500,
      color: 'success',
      mode: 'ios',
      position: 'top',
      icon: 'information-circle-outline',
      buttons: [
        {
          text: 'X',
          role: 'cancel',
          handler: () => {
            
          },
        },
      ]
    });
    toast.present();
  }
}
