import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders }    from '@angular/common/http';

@Injectable()
export class APIServiceService {

  constructor(private http: HttpClient) { }
  private ChuckUrl = "http://localhost:8080/api/paises"; // URL to web api
  private ChuckUrlPais = "http://localhost:8080/api/pais";
  private searchCountrie:String = '';
  private response:Object='';

  setSearchCountry(search:string){
    this.searchCountrie = search;
  }
  getSearchCountry(){
    return this.searchCountrie;
  }
  getData() : Promise<any>{
    return this.http.get(this.ChuckUrl).
    toPromise();
  }
  getDataP() : Promise<any>{
    this.response = this.generateRequestBody();
     return this.http.post(this.ChuckUrlPais,this.response).
    toPromise();
  }
  generateRequestBody(){
    return {
      "id":"",
      "country": this.searchCountrie,
      "countryCode":"",
      "Province":"",
      "City":"",
      "CityCode":"",
      "Lat":"",
      "Lon":"",
      "Confirmed":0,
      "Deaths":0,
      "Recovered":0,
      "Active":0,
      "Date":""
   }
  }

}