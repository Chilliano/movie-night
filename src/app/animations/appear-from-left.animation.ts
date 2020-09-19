import {
  trigger,
  transition,
  animate,
  style,
  query,
  stagger,
  keyframes,
} from '@angular/animations';

export const appearFromLeftAnimation = trigger('cardAnimation', [
  transition('* => *', [
    query(':enter', style({ opacity: 0 }), { optional: true }),
    query(
      ':enter',
      stagger('25ms', [
        animate(
          '.2s cubic-bezier(.51,.92,.24,1.15)',
          keyframes([
            style({
              opacity: 0,
              transform: 'translateX(-500px)',
              offset: 0,
            }),
            style({
              opacity: 0.5,
              transform: 'translateX(-250px) scale(1.1)',
              offset: 0.3,
            }),
            style({ opacity: 1, transform: 'translateX(0)', offset: 1 }),
          ])
        ),
      ]),
      { optional: true }
    ),

    query(
      ':leave',
      animate(
        '.3s cubic-bezier(.51,.92,.24,1.15)',
        keyframes([
          style({ opacity: 1, transform: 'scale(1.1)', offset: 0 }),
          style({ opacity: 0.5, transform: 'scale(.5)', offset: 0.3 }),
          style({ opacity: 0, transform: 'scale(0)', offset: 1 }),
        ])
      ),
      { optional: true }
    ),
  ]),
]);
