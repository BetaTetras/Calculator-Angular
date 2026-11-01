import { Component ,output} from '@angular/core';

@Component({
  imports: [],
  selector: 'app-clavier',
  styleUrl: './clavier.css',
  templateUrl: './clavier.html',
})
export class Clavier {
  protected touches = ['1', '2', '3', '4','5', '6', '7', '8', '9','0','+','-','*','/'];

  touche = output<string>();
  
}
