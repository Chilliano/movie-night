import { ButtonConfigModel } from '@models/button.model';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
})
export class ButtonComponent implements OnInit {
  @Output() clicked: EventEmitter<boolean> = new EventEmitter();
  @Input() config: ButtonConfigModel;

  constructor() {}

  ngOnInit() {}
  onClick(event: boolean) {
    this.clicked.emit(event);
  }
}
