import { HttpClient } from '@angular/common/http';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { ActivatedRoute, Router } from '@angular/router';
import {APIServiceService } from 'src/app/services/APIServiceService';
import { Countries } from '../models/Countries';

@Component({
  selector: 'app-pais',
  templateUrl: './pais.component.html',
  styleUrls: ['./pais.component.css']
})
export class PaisComponent implements OnInit {
    dataSource=new MatTableDataSource<Countries>();

    @ViewChild(MatPaginator) paginator: MatPaginator;
    @ViewChild(MatSort, {static: true}) sort!: MatSort;

    public isValid:boolean=false;
    displayedColumns: string[] = ['Country',
    'Active',
    'Confirmed',
    'Deaths',
    'Recovered',
    'Active',
    'Date'];
  
  constructor(private route: ActivatedRoute,
    private router: Router,
    private http: HttpClient,
    private service : APIServiceService) { 

    }
  ngOnInit(): void {
    this.serachCountrie();
  }

  // Init Get Info especific Country
  serachCountrie(){
    if (this.service.getSearchCountry() ==''){
      this.router.navigate(['home']);
    }else{
      this.service.getDataP().then(data => {  
        this.dataSource = new MatTableDataSource(data);        
        this.isValid = true;
        this.dataSource.paginator = this.paginator;
        var keys = Object.keys(this.dataSource);
        var len = keys.length;
        this.dataSource.paginator.length = len;        
        this.dataSource.sort = this.sort;
      });    
    }
  }

  //FILTER TABLE
  applyFilter(event:any) {
    var filterValue = event.target.value;
    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // Datasource defaults to lowercase matches
    this.dataSource.filter = filterValue;
  }

}
