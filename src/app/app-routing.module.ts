import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent} from './home/home.component';
import {LoginComponent} from './login/login.component';
import { SignupComponent} from './signup/signup.component';
import { PerfilComponent } from './perfil/perfil.component';
import {PageNotFoundComponent} from './page-not-found/page-not-found.component';
import {ColeccionComponent} from './coleccion/coleccion.component';
import { LayoutMainComponent } from './layout-main/layout-main.component';


const routes: Routes = [
  {
    path: '',
    component : LayoutMainComponent,
    children : [
      {path: '', redirectTo: '/home', pathMatch: 'full'},
      {path: 'home', component: HomeComponent},
      {path: 'login', component: LoginComponent},
      {path: 'signup', component : SignupComponent},
      {path: 'perfil', component : PerfilComponent},
      {path: 'coleccion', component: ColeccionComponent},

    ]
  },
  {path: '**', component : PageNotFoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
