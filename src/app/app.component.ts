import { Component, ViewChild } from '@angular/core';
import {APIServiceService } from 'src/app/services/APIServiceService';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private service : APIServiceService){

  }
  ngOnInit(){
  }
}
