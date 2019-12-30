import { Component } from '@angular/core';
import { Storage } from '@ionic/storage';
import { FormGroup } from '@angular/forms';
import { NavController } from '@ionic/angular';
// import { NavController, ToastController, Events } from 'ionic-angular';
import { StatisticsPage } from '../statistics/statistics.page';
// import { Calendar } from '@ionic-native/calendar/ngx';




@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  stuffData: any;
  signUpForm: FormGroup;
  constructor(
    public storage: Storage,
    public navCtrl: NavController,
    // private calendar: Calendar
    ) {
      // this.calendar.createCalendar('MyCalendar').then(
      //   (msg) => { console.log(msg); },
      //   (err) => { console.log(err); }
      // );
  }

  dailyStuffForm(form) {
    console.log(form.value);
    this.storage.set('Stuff Entry', form.value);
    // this.navCtrl.push(StatisticsPage);
    // this.navCtrl.navigateRoot('/statistics');
  }

  getStuff(type) {
    console.log('type*--',type);
    this.stuffData = type;
    this.storage.set('stuffType', this.stuffData);
    this.storage.get('stuffType').then(data=>{console.log('stdata ',data);})
  }

  
  // onStuff(type) {
  //   console.log('type*--',type);
  //   this.stuffData = type;
  //   this.storage.set('stuffType', this.stuffData);
  //   this.storage.get('stuffType').then(data=>{
  //     console.log('stdata ',data);
  //   });
  //   // this.navCtrl.push(StatisticsPage);

  // }
}