import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {iCommandes} from "./commandes";


@Injectable({
  providedIn: 'root'
})
export class CommandesService {
  CommandesUrl = 'assets/data/commandes.json';

  constructor(private http: HttpClient) {}

  getCommandes(): Observable<iCommandes[]>{
    return this.http.get<iCommandes[]>(this.CommandesUrl);
  }
}


