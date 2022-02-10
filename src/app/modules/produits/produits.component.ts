import { Component, OnInit } from '@angular/core';
import {ProduitsService} from "./produits.service";
import {Product} from "./produits"

@Component({
  selector: 'app-produits',
  templateUrl: './produits.component.html',
  styleUrls: ['./produits.component.css']
})
export class ProduitsComponent implements OnInit {
  Produits: any = []
  selectedProduct: Product = {}

  constructor(private _produits : ProduitsService) { }

  ngOnInit(): void {
    this._produits.getUser().subscribe(data => (this.Produits = data));
  }

  displayProduct(produit: Product): void{
    this.selectedProduct = produit;
  }

  printTest() {
    alert("test");
  }

}
