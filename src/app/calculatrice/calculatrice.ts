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
    if(old === '0' || old === 'Erreur'){
      this.affichage.set(valeur);
    }else{
      this.affichage.set(old + valeur);
    }
  }

  protected effacer(){
    this.affichage.set('0');
  }

  protected suprimmer(){
    const old = this.affichage();
    if(old.length !== 1){
      const nouveau = old.slice(0,-1);
      this.affichage.set(nouveau);
    }else{
      this.affichage.set('0');
    }
  }

  protected calculer(){
    const s = this.affichage();
    const affichage_len = s.length;
    let indexOpe = -1;
    let i = 0;
    for (i = 0; i < affichage_len; i++) {
      if (s[i] === '+' || s[i] === '-'||
          s[i] === '*' || s[i] === '/') {
        indexOpe = i
        break;
      }
    }
    if(indexOpe === -1){
      return;
    }

    const gauche = s.slice(0,indexOpe);
    const ope = s[indexOpe];
    const droite = s.slice(indexOpe+1);
    let res = 0;

    if(gauche.length === 0 || droite.length === 0){
      return;
    }

    switch(ope){
      case '+':
        res = Number(gauche) + Number(droite);
      break;
      case '-':
        res = Number(gauche) - Number(droite);
      break;
      case '*':
        res = Number(gauche) * Number(droite);
      break;
      case '/':{
        if(Number(droite) === 0){
          this.affichage.set('Erreur');
          return;
        }
        res = Number(gauche) / Number(droite);
        break;
      }
    }
    this.affichage.set(String(res));
  }

}
