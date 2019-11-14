import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RegisterService } from './services/register.service';
import { LoginService } from './services/login.service';
import { MovieService } from './services/movie.service';
import { MenuComponent } from './menu/menu.component';
import { HttpClientModule } from "@angular/common/http";
import { HeaderMenuComponent } from './header-menu/header-menu.component';
import { FooterComponent } from './footer/footer.component';
import { MenuMoviesComponent } from './menu-movies/menu-movies.component';
import { ConfigurationComponent } from './configuration/configuration.component';
import { MenuDiscussionsComponent } from './menu-discussions/menu-discussions.component';
import { MenuMoviesGendersComponent } from './menu-movies-genders/menu-movies-genders.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    RegisterComponent,
    LoginComponent,
    MenuComponent,
    HeaderMenuComponent,
    FooterComponent,
    MenuMoviesComponent,
    ConfigurationComponent,
    MenuDiscussionsComponent,
    MenuMoviesGendersComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule
  ],
  providers: [RegisterService, LoginService, MovieService],
  bootstrap: [AppComponent]
})
export class AppModule { }
