import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { validateGuard } from 'src/app/core/guards/validate-guard';

const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent,
    canActivate: [validateGuard]
  },
  {
    path: 'home',
    component: HomeComponent,
    canActivate: [validateGuard]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
