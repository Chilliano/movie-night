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
    return this.router.url;
  }

  goToMoviesDetailsPage(id: number): void {
    if (id) {
      this.router.navigate(['/movies', `${id}`]);
    }
  }
}
