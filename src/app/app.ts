import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Calculatrice } from './calculatrice/calculatrice';

@Component({
  imports: [RouterOutlet,Calculatrice],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {
  protected readonly title = signal('calculatrice');
}
