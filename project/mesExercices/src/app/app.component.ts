import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AlerteComponent } from './alerte/alerte.component';
import { Alerte } from './models/alerte';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, AlerteComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  data: Alerte[] = [
    { message: 'info', nature: 'info', id: 0 },
    { message: 'warning', nature: 'warning', id: 1 },
    { message: 'valide', nature: 'valide', id: 2 },
  ];

  checkPar(id: number) {
    alert('test par' + id);
  }
}
