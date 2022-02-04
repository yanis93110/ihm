import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {iUsers} from "./utilisateurs";

@Injectable({
  providedIn: 'root'
})
export class UtilisateursService {
  UserUrl = 'assets/data/user.json';

  constructor(private http: HttpClient) {}



  getUser(): Observable<iUsers[]>{

    return this.http.get<iUsers[]>(this.UserUrl);
  }
}
