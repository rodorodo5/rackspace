import { Component, OnInit } from '@angular/core';
import { IEmail } from '../models/iemail';

@Component({
  selector: 'app-confirmation',
  templateUrl: './confirmation.component.html',
  styleUrls: ['./confirmation.component.scss']
})
export class ConfirmationComponent implements OnInit {
  finalArray:Array<IEmail> = [];
  information:any = {};
  grandTotal:number = 0;
  constructor() { 
    this.finalArray = JSON.parse(localStorage.getItem('finalArray') || '{}');
    this.information = JSON.parse(localStorage.getItem('information') || '{}');
    this.grandTotal = JSON.parse(localStorage.getItem('grandTotal') || '{}');
    console.log(this.information);
    localStorage.clear()
  }

  ngOnInit(): void {
  }

}
