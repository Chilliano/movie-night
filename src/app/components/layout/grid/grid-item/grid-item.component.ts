import { Component, Input, OnInit } from '@angular/core';
import { TrimStringExtensionFunction } from '@functions/trim-string-extension.function';

@Component({
  selector: 'app-grid-item',
  templateUrl: './grid-item.component.html',
  styleUrls: ['./grid-item.component.scss'],
})
export class GridItemComponent implements OnInit {
  @Input() item;

  constructor() {}

  ngOnInit() {}

  getAlt(s) {
    return TrimStringExtensionFunction(s);
  }
}
