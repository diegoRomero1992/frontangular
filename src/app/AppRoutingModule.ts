import { NgModule,ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router'; // CLI imports router
import { HomeComponent } from './home/home.component';
import { PaisComponent } from './pais/pais.component';

export const routes: Routes = [  
  {path: '', redirectTo:'home', pathMatch:'full'},
  {path: 'home', component: HomeComponent},
  {path: 'pais', component: PaisComponent},
  {path: '**', component: PaisComponent}

];

export const AppRoutingProviders: any[]=[];
export const routing:ModuleWithProviders<any> = RouterModule.forRoot(routes);