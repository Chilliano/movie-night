import { Component, EventEmitter, Input, Output } from '@angular/core';
// model
import { ButtonConfigModel } from '@models/button.model';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
})
export class ButtonComponent {
  @Output() clicked: EventEmitter<boolean> = new EventEmitter();
  @Input() config: ButtonConfigModel;

  onClick(event: boolean) {
    this.clicked.emit(event);
  }
}
