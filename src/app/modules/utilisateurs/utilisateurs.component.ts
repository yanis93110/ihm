import { Component, OnInit } from '@angular/core';
import {UtilisateursService} from "./utilisateurs.service";

@Component({
  selector: 'app-utilisateurs',
  templateUrl: './utilisateurs.component.html',
  styleUrls: ['./utilisateurs.component.css']
})
export class UtilisateursComponent implements OnInit {
  Users: any =[];

  constructor(private _user : UtilisateursService) { }

  ngOnInit(){
    // @ts-ignore
    this._user.getUser().subscribe(data => (this.Users = data));
  }

}
