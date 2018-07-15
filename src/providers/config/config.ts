
import { Injectable } from '@angular/core';

/*
  Generated class for the MoovieProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class configProvider {

  private config = {
    showSlide:false,
    nome:"",
    username:""
  }

  constructor() {
    
  }

  //Recupera os dados do local storage
  getConfigData():any{
    return localStorage.getItem("config");
  }

   //Grava os dados do local storage
  setConfigData(showSlide?:boolean,nome?:string, username?:string){
      let config={
        showSlide:false,
        nome:"",
        username:""
      };

      if(showSlide){
        config.showSlide = showSlide;
      }

      if(showSlide){
        config.nome = nome;
      }

      if(showSlide){
        config.username = username;
      } 

      localStorage.setItem("config", JSON.stringify(config));
  }

}
