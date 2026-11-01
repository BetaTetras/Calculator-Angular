import { Component ,output} from '@angular/core';

@Component({
  imports: [],
  selector: 'app-clavier',
  styleUrl: './clavier.css',
  templateUrl: './clavier.html',
})
export class Clavier {
  protected chiffres = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0'];
  // affichés de haut en bas : / * - +  (donc + - * / de bas en haut)
  protected operateurs = ['/', '*', '-', '+'];

  touche = output<string>();

}
