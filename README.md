# Betsson

## Build Steps

- @ngrx/store
- @angular/material
- @ngrx/store-devtools
- @lazysizes (a fast (jank-free), SEO-friendly and self-initializing lazyloader for images ["Lazysizes" Github](https://github.com/afarkas/lazysizes))

** Decisions **

- Decided to remove the details on the coverpage to give more space to the image and when you click you will see details anyway.
- ** Missing **

- absolute style imports
- change movies per column during filter if it drops below 5
- extract the input filter from the movies component
- indicator that the list is currently being filtered
- indicate which area filter term was found - Description, title etc...
- reset search term on home nav?
- add check to see if search terms are different than already in state. if not, dont perform action
  ** Ideas **

- for favouriting specific movies, need snackbar to confirm add and remove. need to add to redux

```
<button
    mat-icon-button
    class="example-icon favorite-icon"
    aria-label="Example icon-button with heart icon"
  >
    <mat-icon>favorite</mat-icon>
  </button>
```

- for selecting multiple genres

```<mat-form-field appearance="fill">
  <mat-label>Toppings</mat-label>
  <mat-select [formControl]="toppings" multiple>
  <mat-select-trigger>
  {{toppings.value ? toppings.value[0] : ''}}
  <span *ngIf="toppings.value?.length > 1" class="example-additional-selection">
  (+{{toppings.value.length - 1}} {{toppings.value?.length === 2 ? 'other' : 'others'}})
  </span>
  </mat-select-trigger>
  <mat-option *ngFor="let topping of toppingList" [value]="topping">{{topping}}</mat-option>
  </mat-select>
  </mat-form-field>
```
