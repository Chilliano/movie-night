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
    console.log('clicked');
    this.routerService.goHome();
  }
}
