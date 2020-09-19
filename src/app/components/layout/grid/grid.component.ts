import { ChangeDetectorRef, Component, Input, OnInit } from '@angular/core';
import {
  BreakpointObserver,
  Breakpoints,
  BreakpointState,
} from '@angular/cdk/layout';
import { setColumns } from '@functions/set-columns.function';
import { appearFromLeftAnimation } from '@animations/appear-from-left.animation';
import { Observable } from 'rxjs';
import { map, tap } from 'rxjs/operators';

@Component({
  selector: 'app-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.scss'],
  animations: [appearFromLeftAnimation],
})
export class GridComponent implements OnInit {
  @Input() data;
  @Input() localSearchTermRef;
  breakpoint: number;

  isHandset$: Observable<boolean> = this.breakpointObserver
    .observe([Breakpoints.HandsetPortrait, Breakpoints.TabletPortrait])
    .pipe(
      map((result) => result.matches),
      tap(() => this.changeDetectorRef.detectChanges())
    );

  constructor(
    private breakpointObserver: BreakpointObserver,
    private changeDetectorRef: ChangeDetectorRef
  ) {}

  ngOnInit() {
    this.breakpoint = setColumns(window);
  }

  ngAfterContentInit() {}

  onResize(event) {
    this.breakpoint = setColumns(event.target);
  }
}
