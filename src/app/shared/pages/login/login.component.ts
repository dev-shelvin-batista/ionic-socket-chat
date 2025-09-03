import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Connection } from 'src/app/intranet/connection';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  standalone: false
})
export class LoginComponent  implements OnInit {
  userName = '';

  constructor(
    private connectionSer: Connection,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ){ }

  ngOnInit() {}

  login = () => {
    if((this.userName || '').trim() !== ""){
      this.connectionSer.db.setItem('userNameIonic', (this.userName || ''));
      
      this.connectionSer.socket.emit('newUserLogin', { userName: this.userName, socketID: this.userName, online: true}); 
      this.router.navigate(['/home'], { relativeTo: this.activatedRoute });
      this.userName = '';
    }
  }

}
