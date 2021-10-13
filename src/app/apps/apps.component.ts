import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IEmail } from '../models/iemail';

@Component({
  selector: 'app-apps',
  templateUrl: './apps.component.html',
  styleUrls: ['./apps.component.scss']
})
export class AppsComponent implements OnInit {
  emailArray:Array<IEmail> = [
    {
      id:1,
      current_price: 0,
      current_quantity: 1,
      current_type: 0,
      selected:false,
      error: false,
      name: "Rackspace Email",
      types: [
        {
          id:1,
          name:"Rackspace Email",
          description:"​Rackspace Email is a business-class, POP/IMAP service that works with Outlook. It also includes a Webmail Application Suite featuring shared Calendars and a Global Address List.",
          price: 2,
          quantity: 1
        },
        {
          id:2,
          name:"Rackspace Email Plus",
          description:"Rackspace Email Plus includes everything in Rackspace Email as well as an integrated Cloud Drive for file storage with online editors for Documents and Spreadsheets, desktop synchronization of files and Mobile Sync for Calendars and Contacts.",
          price: 3.99,
          quantity: 1
        }
      ],
      max: 50
    },
    {
      id:2,
      current_price: 0,
      current_quantity: 1,
      current_type: 0,
      selected:false,
      error: false,
      name: "Microsoft Exchange",
      types: [
        {
          id: 1,
          name:"Microsoft Exchange",
          description: "Exchange allows your team to collaborate more efficiently on projects with shared calendars, tasks, and contacts. Also includes Microsoft Teams instant messaging, OWA access, 100 GB of storage, mobile options, and optional Outlook licenses.",
          price: 10.99,
          quantity: 1
        }
      ],
      max: 50
    }
  ];
  finalArray:Array<IEmail> = [];
  grandTotal:number= 0;
  nextDisabled:boolean = true;
  constructor(private router: Router) { 
    localStorage.clear();
  }

  ngOnInit(): void {
  }

  selectEmail(index:number){
    this.emailArray[index].selected = !this.emailArray[index].selected;
    this.setValues(index);
    this.finalResult();
  }

  setValues(index:number){
    this.emailArray[index].current_price = this.emailArray[index].types[0].price;
    this.nextDisabled = false;
  }

  selectChange(index:number,event){
    console.log(event.target.value);
    this.emailArray[index].current_price = this.emailArray[index].types[event.target.value].price;
    this.finalResult();
  }

  quantityChange(index:number,event){
    this.finalArray = [];
    this.grandTotal = 0 ;
    let qty = parseInt(event.target.value);     
    if(qty > 0 && qty < 50){
      console.log('Si', qty);
      this.emailArray[index].current_quantity = qty;
      this.emailArray[index].error =  false;
      this.nextDisabled = false;
    }
    else {
      console.log('no', qty);
      this.emailArray[index].current_quantity = 0;
      this.emailArray[index].error =  true;
      this.nextDisabled = true;
    }
    this.finalResult();
  }

  finalResult(){
    this.finalArray = [];
    this.grandTotal = 0 ;
    for (let i = 0; i < this.emailArray.length; i++) {
      if(this.emailArray[i].selected && this.emailArray[i].current_quantity > 0 && this.emailArray[i].current_quantity < 50 ){
        let subtotal = (this.emailArray[i].current_price * this.emailArray[i].current_quantity);
        this.grandTotal += subtotal;
        this.finalArray.push(this.emailArray[i]);
      }
    }
  }

  goNext(){
    localStorage.setItem('finalArray', JSON.stringify(this.finalArray));
    localStorage.setItem('grandTotal', JSON.stringify(this.grandTotal));
    this.router.navigateByUrl('checkout');
  }

}
