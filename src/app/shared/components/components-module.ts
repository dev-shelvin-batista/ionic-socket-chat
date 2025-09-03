import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MessagesChatComponent } from './messages-chat/messages-chat.component';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';



@NgModule({
  declarations: [MessagesChatComponent],
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
  ],
  exports: [MessagesChatComponent]
})
export class ComponentsModule { }
