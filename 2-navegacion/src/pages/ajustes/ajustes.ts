import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,ModalController } from 'ionic-angular';
import {ModalPage} from "../index.pagina";
/**
 * Generated class for the AjustesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-ajustes',
  templateUrl: 'ajustes.html',
})
export class AjustesPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public modalCtrl: ModalController) {
  }

  activarprincipal(){
    this.navCtrl.parent.select(2);
  }

  mostrar_modal(){
  let modal=   this.modalCtrl.create(ModalPage,{nombre: "Fernadno", edad: 30});
  modal.present();

  modal.onDidDismiss(parametros => {
  if(parametros){
    console.log("DaTa del modal")
    console.log(parametros)
  }else console.log("Se cerro sin parametros");
  })
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AjustesPage');
  }

}
