import { NgModule,CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatSliderModule } from '@angular/material/slider';
import { MatTableModule } from '@angular/material/table'  
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import {  Router, RouterModule, Routes } from '@angular/router';
import { AppRoutingProviders,routing } from 'src/app/AppRoutingModule'; // CLI imports AppRoutingModule
import { APIServiceService } from './services/APIServiceService';
import { PaisComponent } from './pais/pais.component';
import { HomeComponent } from './home/home.component';
import { MatPaginatorModule } from '@angular/material/paginator';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatGridListModule} from '@angular/material/grid-list';
import { TransformPipe } from './transform.pipe';
import { MatSortModule } from '@angular/material/sort';
import {MatInputModule} from '@angular/material/input';

@NgModule({
  declarations: [
    AppComponent,
    PaisComponent,
    HomeComponent,
    TransformPipe
  ],
  imports: [
    CommonModule,
    RouterModule,
    BrowserModule,
    MatSliderModule,
    MatTableModule,
    HttpClientModule,
    MatPaginatorModule,
    BrowserAnimationsModule,
    MatGridListModule,
    MatSortModule,
    MatInputModule,
    routing
  ],
  exports:[MatTableModule,MatPaginatorModule,MatSortModule],
  providers: [APIServiceService, AppRoutingProviders],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],  
  bootstrap: [AppComponent]
})
export class AppModule {   
  
}
