import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetailComponent } from './detail/detail.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  {
    path: 'detail', component: DetailComponent
  },
  {
    path: 'login', component: LoginComponent
  },
  {
    path: '**', component: LoginComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
