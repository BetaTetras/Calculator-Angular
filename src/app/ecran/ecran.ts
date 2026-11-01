import { Component, input } from '@angular/core';

@Component({
  imports: [],
  selector: 'app-ecran',
  styleUrl: './ecran.css',
  templateUrl: './ecran.html',
})
export class Ecran {
  valeur = input<string>('0');
}