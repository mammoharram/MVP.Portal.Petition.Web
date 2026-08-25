import { Component, inject } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { LayoutService } from '../layout.service';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';

@Component({
  imports: [RouterLink, MatButtonModule, MatIconModule, MatMenuModule],
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  private readonly router = inject(Router);
  // Inject services using modern inject token pattern
  protected layoutService = inject(LayoutService);

  // Example structural application details
  protected appName = 'High Quartile MVP';
  protected userProfile = {
    name: 'Mohammad',
    avatar: '/azure-users.svg'
  };

  protected logout(): void {
    this.router.navigate(['/login']);
  }
}

