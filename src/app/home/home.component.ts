import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import {APIServiceService } from 'src/app/services/APIServiceService';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {  

  dataSource:any[]=[];


  constructor( private route: ActivatedRoute,    
    private router: Router, 
    private http: HttpClient,
    private service : APIServiceService){
        
  }
  @Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
  })
  title = 'Home';
  ngOnInit(): void {
    this.service.getData().then(data => {
      this.dataSource = data.Countries;
    });  
  }
  
  public getFrase() {
    return this.service.getData();
  }
  public getRecord(nombre:any){
    this.service.setSearchCountry(nombre);
    this.router.navigate(['pais']);
  }
}
