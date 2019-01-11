import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams , MenuController} from 'ionic-angular';
import {Pagina2Page} from "../index.pagina";
/**
 * Generated class for the PrincipalPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-principal',
  templateUrl: 'principal.html',
})
export class PrincipalPage {

pagina2:any = Pagina2Page;
  constructor(public navCtrl: NavController, public navParams: NavParams, private menuCtrl: MenuController) {

  }

  navegarpagina(){
    console.log("llama a navbar");
        this.navCtrl.push(Pagina2Page);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PrincipalPage');
  }

  mostarMenu(){
     this.menuCtrl.toggle(); 
  }

}
