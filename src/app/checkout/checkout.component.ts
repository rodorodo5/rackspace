import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { IEmail } from '../models/iemail';
import { RequestService } from '../_shared/api/request.service';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.scss']
})

export class CheckoutComponent implements OnInit {
  finalArray:Array<IEmail> = [];
  grandTotal:number = 0;
  postError = false;
  formResult
  form: FormGroup;
  submitted = false;
  
  constructor(private formBuilder: FormBuilder,private API: RequestService,private router: Router) { 
    this.finalArray = JSON.parse(localStorage.getItem('finalArray') || '{}');
    this.grandTotal = JSON.parse(localStorage.getItem('grandTotal') || '{}');
    this.checkoutForm();
  }

  ngOnInit(): void {
   this.checkoutForm();
  }

  submit(){
    this.submitted = true;
    if(this.form.invalid){
      return;
    }
    this.postRequest()
  }

  postRequest(){
    this.router.navigateByUrl('confirmation');
    localStorage.setItem('information', JSON.stringify(this.form.value));
    // this.API.postRequest(this.form.value).subscribe(result => {
    //   if(result.data){
    //     this.router.navigateByUrl('confirmation');
    //   }
    //   else{
    //     this.postError = true;
    //   }
    // }, error => {
    //   this.postError = true;
    //   console.log('here',error);
    // });
  }

  checkoutForm(){
    this.form = this.formBuilder.group({
      firstname: ['', Validators.required],
      lastname: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      creditcard: ['', Validators.required],
      expiration: ['', Validators.required],
      cvv: ['', [Validators.required, Validators.maxLength(4)]],
      billing: ['', Validators.required],
      city: ['', Validators.required],
      state: ['', Validators.required],
      zip: ['', Validators.required]
    });
  }

  expirationValidation(event){
      var code = event.keyCode;
      var allowedKeys = [8];
      if (allowedKeys.indexOf(code) !== -1) {
        return;
      }
    
      event.target.value = event.target.value.replace(
        /^([1-9]\/|[2-9])$/g, '0$1/'
      ).replace(
        /^(0[1-9]|1[0-2])$/g, '$1/'
      ).replace(
        /^([0-1])([3-9])$/g, '0$1/$2'
      ).replace(
        /^(0?[1-9]|1[0-2])([0-9]{2})$/g, '$1/$2'
      ).replace(
        /^([0]+)\/|[0]+$/g, '0'
      ).replace(
        /[^\d\/]|^[\/]*$/g, ''
      ).replace(
        /\/\//g, '/'
      );
    
  }




  get f() { return this.form.controls; }
}
