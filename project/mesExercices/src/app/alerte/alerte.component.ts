import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-alerte',
  standalone: true,
  imports: [],
  templateUrl: './alerte.component.html',
  styleUrl: './alerte.component.css',
})
export class AlerteComponent {
  @Input()
  nature!: 'info' | 'warning' | 'valide';
  @Input()
  message!: string;
  @Input()
  id!: number;

  @Output()
  checkdes = new EventEmitter<number>();

  checkBtn() {
    // alert('check');
    console.log(this.id);
    this.checkdes.emit(this.id);
  }
}
