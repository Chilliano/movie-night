import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class RouterService {
  constructor(private router: Router) {}

  goHome(): void {
    this.router.navigate(['/movies']);
  }

  getRouter(): string {
    console.log(
      'RouterService -> getRouter -> this.router.url',
      this.router.url
    );
    return this.router.url;
  }

  goToMoviesDetailsPage(id): void {
    this.router.navigate(['/movies', `${id}`]);
  }
}
