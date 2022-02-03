import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import {UtilisateursComponent} from "./modules/utilisateurs/utilisateurs.component";
import {ProduitsComponent} from "./modules/produits/produits.component";
import {CommandesComponent} from "./modules/commandes/commandes.component";
import {ContactComponent} from "./modules/contact/contact.component";
import {HomeComponent} from "./modules/home/home.component";

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'contact', component: ContactComponent},
  {path: 'produits', component: ProduitsComponent},
  {path: 'commandes', component: CommandesComponent},
  {path: 'utilisateurs', component: UtilisateursComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  declarations: []
})
export class AppRoutingModule { }
