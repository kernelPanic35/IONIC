import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import {ANIMALES} from "../../data/data.animales";
import {Animal} from "../../interfaces/animal.interface";
import {Refresher,Reorder,reorderArray} from "ionic-angular";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  animales: Animal[] = [];
   audio = new Audio();
   audiotiempo :any;
   ordenando : boolean = false;
  constructor(public navCtrl: NavController) {
    this.animales = ANIMALES.slice(0);// El splice crea una copia del objeto completamente nueva para no modificar el arreglo original

  }

  reproducir(animal: Animal){
    this.pausar_audio(animal);

    if(animal.reproduciendo){
      animal.reproduciendo = false;
      return;
    }
    console.log(animal);


    this.audio.src = animal.audio;
    this.audio.load();
    this.audio.play();
    animal.reproduciendo = true;
    this.audiotiempo = setTimeout(() => animal.reproduciendo = false, animal.duracion * 1000);
  }
private pausar_audio (animalset:Animal){
  clearTimeout(this.audiotiempo);
  this.audio.pause();
  this.audio.currentTime = 0;

  for( let animal of this.animales){

    if(animal.nombre != animalset.nombre){
      animal.reproduciendo = false;
    }
  }
}

borrar_animal( idx:number){
  console.log("metodo borrar animal");
  this.animales.splice(idx,1);
}

recargar_animales(refresh:Refresher){
  console.log("Refrescando");

  setTimeout(()=> {
    console.log("Termino el Refresh");
    this.animales = ANIMALES.slice(0);
    refresh.complete();
  },1500)
}

reordenar_animales(indices: any){
  console.log(indices);
  this.animales = reorderArray(this.animales, indices);
}

}
