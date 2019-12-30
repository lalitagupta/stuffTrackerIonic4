import { Component, OnInit } from '@angular/core';
import { Storage } from '@ionic/storage';


@Component({
  selector: 'app-statistics',
  templateUrl: './statistics.page.html',
  styleUrls: ['./statistics.page.scss'],
})
export class StatisticsPage implements OnInit {
  stuffData: any;
  constructor(public storage: Storage) { }

  ngOnInit() {
    this.storage.get('Stuff Entry').then(data=>{
      console.log('stdata-- ',data);
      this.stuffData = data;
    });
  }  
  
}
