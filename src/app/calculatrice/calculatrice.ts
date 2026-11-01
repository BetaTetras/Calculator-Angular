import { Component,signal } from '@angular/core';

@Component({
  imports: [],
  selector: 'app-calculatrice',
  styleUrl: './calculatrice.css',
  templateUrl: './calculatrice.html',
})
export class Calculatrice {
  protected affichage = signal('0');

  protected ajouter(valeur : string){
    const old = this.affichage();
    this.affichage.set(old + valeur);
  }

}
