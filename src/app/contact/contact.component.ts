import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  User={fname:'',lname:'',username:'',
  message:''}
  constructor() { }

  ngOnInit(): void {
  }
  userVerify()
{
  alert("Thank you for contacting me!");
}

}
