import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { ProduitsComponent } from './modules/produits/produits.component';
import { UtilisateursComponent } from './modules/utilisateurs/utilisateurs.component';
import { CommandesComponent } from './modules/commandes/commandes.component';
import { ContactComponent } from './modules/contact/contact.component';
import { HomeComponent } from './modules/home/home.component';
import {HttpClientModule} from "@angular/common/http";
import {UtilisateursService} from "./modules/utilisateurs/utilisateurs.service";
import {ProduitsService} from "./modules/produits/produits.service";

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    ProduitsComponent,
    UtilisateursComponent,
    CommandesComponent,
    ContactComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [
    UtilisateursService,
    ProduitsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
