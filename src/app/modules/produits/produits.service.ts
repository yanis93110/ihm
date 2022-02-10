import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {iProduits} from "./produits"

@Injectable({
  providedIn: 'root'
})
export class ProduitsService {
  UserUrl = 'assets/data/produits.json';

  constructor(private http: HttpClient) {}



  getUser(): Observable<iProduits[]>{

    return this.http.get<iProduits[]>(this.UserUrl);
  }

}
