import { Component, OnInit, QueryList, ViewChildren } from '@angular/core';
import { Connection } from './intranet/connection';
import { IonRouterOutlet, Platform } from '@ionic/angular';
import { Alerts } from './core/utils/alerts';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
  standalone: false,
})
export class AppComponent implements OnInit {
  @ViewChildren(IonRouterOutlet) routerOutlets?: QueryList<IonRouterOutlet>;

  constructor(
    private connectionSer: Connection,
    private platform: Platform,
    private alertSer: Alerts,
  ){
    this.initializeApp();
    this.backButtonEvent();
  }

  /**
   * Event to execute instructions when loading the component
   */
  async ngOnInit() {}

  initializeApp() {
    this.platform.ready().then(async () => {
      this.connectionSer.connectDB();
      this.connectionSer.connectSocketCliente();
    });
  }

  /**
   * Method for displaying a verification message when you want to close the application by pressing the Back button or closing modal pages and windows.
   */
  backButtonEvent() {
    this.platform.backButton.subscribeWithPriority(10, (processNextHandler) => {
      this.routerOutlets?.forEach((outlet: IonRouterOutlet) => {
        if (outlet && outlet.canGoBack()) {
          outlet.pop(); // Navigate back within the app
        } else {
          // Exit the app if at the root page and no more navigation history
          this.alertSer.generateConfirmationAlert(
            "Confirmation",
            "Do you want to exit the application?",
            '',
            async () => {
              (navigator as any).app.exitApp();
            },
            'No'
          );
          
        }
      });
    });
  }
}
