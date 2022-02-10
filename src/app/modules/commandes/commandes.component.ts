import { Component, OnInit } from '@angular/core';
import {Commande} from "./commandes";
import {CommandesService} from "./commandes.service";

@Component({
  selector: 'app-commandes',
  templateUrl: './commandes.component.html',
  styleUrls: ['./commandes.component.css']
})
export class CommandesComponent implements OnInit {
  Commandes: any = []
  selectedCommande: Commande = {}

  constructor(private _commandes : CommandesService) {}

  ngOnInit(): void {
    this._commandes.getCommandes().subscribe(data=>(this.Commandes = data))
  }

  displayCommandes(commande: Commande){
    this.selectedCommande = commande;
  }
}
