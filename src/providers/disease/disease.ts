import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {data} from '../../assets/data'
/*
  Generated class for the DiseaseProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()

export class DiseaseProvider {

  constructor() {
    //console.log('Hello DiseaseProvider Provider');
  }

  //Get Diseases JSON object
  getAllDiseaseNames(){
    var diseaseNames = Object.keys(data['data']['diseases']);
    return diseaseNames.sort();
  }

  //get all the alternative names
  getAltDiseaseNames(){
    var diseaseArr=data['data']['diseases'];
    var diseaseNames=Object.keys(diseaseArr);
    var len=diseaseNames.length;
    var altNames=[];
    for (var i=0; i<len; i++){   
        altNames.push(diseaseArr[diseaseNames[i]]["alt_names"]);
    }
    return altNames;
  }

  //get Phone Number based on number
  getPhoneNumber(num){
    var phoneArr=data['data']['phone_numbers'];
    return phoneArr[num];
  }

  //get Urgency Level Value based on number
  getUrgencyLevel(num){
    var urgencyArr=data['data']['urgency_levels'];
    return urgencyArr[num];
  }

  getData(){
    return data;
  }

}
