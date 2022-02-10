import { Component, OnInit } from '@angular/core';
import {UtilisateursService} from "./utilisateurs.service";
import {User} from "./utilisateurs";

@Component({
  selector: 'app-utilisateurs',
  templateUrl: './utilisateurs.component.html',
  styleUrls: ['./utilisateurs.component.css']
})
export class UtilisateursComponent implements OnInit {
  Users: any =[];
  selectedUser: User ={};

  constructor(private _user : UtilisateursService) { }

  ngOnInit(){
    this._user.getUser().subscribe(data => (this.Users = data));
  }

  displayUser(user: User): void{
    this.selectedUser = user;
    console.log(this.selectedUser.sexe)
  }

  printTest() {
    alert("test");
  }

}
