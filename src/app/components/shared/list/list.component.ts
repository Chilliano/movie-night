import { ListConfigModel } from '@models/list.model';
import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
} from '@angular/core';
import { MovieModel } from '@models/movie.model';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ListComponent implements OnInit {
  @Input() config: ListConfigModel;
  @Output() clicked: EventEmitter<MovieModel> = new EventEmitter();
  constructor() {}

  ngOnInit() {}
}
