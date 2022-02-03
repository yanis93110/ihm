import { Component, OnInit } from '@angular/core';
import {FormControl} from "@angular/forms";

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  email= new FormControl('')
  message = new FormControl('')
  constructor() { }

  ngOnInit(): void {
  }

  Send() {

    alert("Message de " + this.email.value + " : " + this.message.value);
  }
}
