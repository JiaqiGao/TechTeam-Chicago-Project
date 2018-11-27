import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { NewpagePage } from '../newpage/newpage';
import { HTTP } from '@ionic-native/http';
import {DiseaseProvider} from '../../providers/disease/disease';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})

export class HomePage {
  newpagePage = NewpagePage;
  searchQuery: string = '';
  items: string[];
  allItems: string[];
  includeAltNames: any[];
  parser: any;

  constructor(private diseaseProvider:DiseaseProvider, public navCtrl: NavController, public http: HTTP) {
    this.parser = this.diseaseProvider.getData();
    this.allItems = this.diseaseProvider.getAllDiseaseNames();
    this.includeAltNames = this.diseaseProvider.getAltDiseaseNames();
    this.items = this.diseaseProvider.getAllDiseaseNames();
    //puts public health hazard on top
    this.items.splice(this.items.indexOf("Any Public Health Hazard"), 1);
    this.items.unshift("Any Public Health Hazard");

  }


  getItems(ev: any) {
    // Reset items back to all of the items
    this.items = this.allItems;

    // set val to the value of the searchbar
    let val = ev.target.value;

    // if the value is an empty string don't filter the items
    if (val && val.trim() != '') {
      this.items = this.items.filter((item) => {
        return (item.toLowerCase().indexOf(val.toLowerCase()) == 0);
      })
      this.items = this.items.sort();
    }
  }


  GotoNewPage(item) {
    this.navCtrl.push(NewpagePage, {
      disease: item,
      data: this.parser
    });
  }



}
