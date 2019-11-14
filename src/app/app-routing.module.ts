import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { MenuComponent } from './menu/menu.component';
import { MenuMoviesGendersComponent } from './menu-movies-genders/menu-movies-genders.component';
import { MenuMoviesComponent } from './menu-movies/menu-movies.component';
import { MenuDiscussionsComponent } from './menu-discussions/menu-discussions.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'menu', component: MenuComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'menu-genders', component: MenuMoviesGendersComponent },
  { path: "menu-movies/:id", component: MenuMoviesComponent },
  { path: "menu-discussions", component: MenuDiscussionsComponent },
  { path: '**', component: HomeComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
