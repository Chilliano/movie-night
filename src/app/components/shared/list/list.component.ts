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
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ListComponent implements OnInit {
  @Input() config: ListConfigModel;
  @Output() clicked: EventEmitter<MovieModel> = new EventEmitter();
  listDisplayGenre$: Observable<boolean>;
  constructor(private store: Store) {}

  ngOnInit() {
    this.listDisplayGenre$ = this.store.select(
      (state) => state.app.listDisplayGenre
    );
  }
}
