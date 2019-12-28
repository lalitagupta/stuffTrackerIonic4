import { Component } from '@angular/core';
import { Storage } from '@ionic/storage';
import { FormGroup } from '@angular/forms';



@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  stuffData: any;
  signUpForm: FormGroup;
  constructor(public storage: Storage) {
    this.signUpForm = new FormGroup({

     });   
  }

  getStuff(type) {
    console.log('type*--',type);
    this.stuffData = type;
    this.storage.set('stuffType', this.stuffData);
    this.storage.get('stuffType').then(data=>{console.log('stdata ',data);})
  }

  
  onStuff(form: NgForm) {
    console.log('honstuff() called');
    console.log('hhhhhhh ',form);
  }
}