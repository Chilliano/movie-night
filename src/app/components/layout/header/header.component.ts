import { Color } from '@assets/styles/_color';
import { Component } from '@angular/core';
import { RouterService } from '@services/router/router.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  color = new Color();

  constructor(private routerService: RouterService) {}

  goHome(): void {
    this.routerService.goHome();
  }

  getRouteUrl(): string {
    console.log(
      'HeaderComponent -> getRouteUrl -> this.routerService.getRouter();',
      this.routerService.getRouter()
    );
    return this.routerService.getRouter();
  }
}
