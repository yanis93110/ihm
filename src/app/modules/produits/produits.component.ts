import { Component, OnInit } from '@angular/core';
import {ProduitsService} from "./produits.service";

@Component({
  selector: 'app-produits',
  templateUrl: './produits.component.html',
  styleUrls: ['./produits.component.css']
})
export class ProduitsComponent implements OnInit {
  Produits: any = []

  constructor(private _produits : ProduitsService) { }

  ngOnInit(): void {
    this._produits.getUser().subscribe(data => (this.Produits = data));
  }

}
