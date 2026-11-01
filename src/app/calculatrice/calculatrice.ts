import { Component,signal } from '@angular/core';

@Component({
  imports: [],
  selector: 'app-calculatrice',
  styleUrl: './calculatrice.css',
  templateUrl: './calculatrice.html',
})
export class Calculatrice {
  protected affichage = signal('0');
  protected touches = ['1', '2', '3', '4','5', '6', '7', '8', '9','0','+','-','*','/'];

  protected ajouter(valeur : string){
    const old = this.affichage();
    this.affichage.set(old + valeur);
  }

}
