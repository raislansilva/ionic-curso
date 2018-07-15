import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Http } from '../../../node_modules/@angular/http';

/*
  Generated class for the MoovieProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class MoovieProvider {

 private baseApiPath ="https://api.themoviedb.org/3";	

  constructor(public http: Http) {
    console.log('Hello MoovieProvider Provider');
  }

  getLatesMovies(){
  	return this.http.get(this.baseApiPath +"/movie/popular?api_key="+this.getApiKey());
  }

  getApiKey():string{
    return "4a1642ad77487e15f3b0e1e39e443834";
  }

}
